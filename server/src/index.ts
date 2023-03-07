import * as dotenv from 'dotenv';
import * as path from 'path';
const envFileName = process.env.NEUTRINOS_APP_ENV ? `${process.env.NEUTRINOS_APP_ENV}.env` : 'dev.env';
const envFilePath = `${process.cwd()}${path.sep}environments${path.sep}${envFileName}`;
dotenv.config({ path: envFilePath });
import * as express from 'express';
import helmet from 'helmet';
import 'reflect-metadata';
import * as swaggerUi from 'swagger-ui-express';
import * as url from 'url';
const swStats = require('swagger-stats');
import config from './config/config';
import { APIResponse } from './middleware/APIResponse';
// create connection with database
// note that it's not active database connection
// TypeORM creates connection pools and uses them for your requests
import { Middlewares } from './middleware/GlobalMiddlewares';
import { UserRoutes } from './routes';
import { StartScripts } from './ServerStartScripts';
import log from './utils/Logger';
import { SchemaBuilder } from './utils/schema-builder';
import { Server } from 'socket.io';

log.debug(`NEUTRINOS_APP_ENV :: ${process.env.NEUTRINOS_APP_ENV}`);
log.debug(`loading env file :: ${envFilePath}`);

//////////////////////////////////////////////////////////
console.log('process.env.NODE_APP_INSTANCE', process.env.NODE_APP_INSTANCE);
console.log('process.env.pm_id', process.env.pm_id);

(async () => {
    const defaultContextPath = '/api';
    const defaultPort = 8081;
    const apiDocsPath = process.env.API_DOCS_PATH || '/api-docs';
    const contextPath = process.env.SSD_BASE_PATH || defaultContextPath;
    const port = process.env.SSD_DEFAULT_PORT || defaultPort;
    const globalTimers = [];
    const generatedMiddlewares: any = {};
    const schemaBuilder = SchemaBuilder.instance;
    await schemaBuilder.buildAPIDocs(contextPath);
    try {
        const loadMiddlewares = function (preOrPost: string, generatedMiddlewares, app) {
            if (config['middlewares']) {
                config['middlewares'][preOrPost].map((mw) => {
                    const key: string = Object.entries(mw)[0][0];
                    const value: string = '' + Object.entries(mw)[0][1];
                    if (generatedMiddlewares[key] && generatedMiddlewares[key][value]) {
                        app.use(generatedMiddlewares[key][value].functionDef);
                    } else if (key === '__ssdGlobalMiddlewares__' && Middlewares[value]) {
                        app.use(Middlewares[value]());
                    }
                });
            }
        };

        // create express app
        const app = express();
        const baseApp = express();

        // Call midlewares
        app.use(helmet());

        app.use(express.json());
        // load global pre middlewares here
        app.set('base', contextPath);
        /****************************
         * Load server start scripts
         ****************************/
        for (const startscript of StartScripts) {
            await startscript();
        }

        // initialize all middlewares
        UserRoutes.forEach((service) => {
            service.getInstance(app, generatedMiddlewares, false, true, globalTimers);
        });

        // load global pre routes
        loadMiddlewares('pre', generatedMiddlewares, app);

        // load all routes
        UserRoutes.forEach((service) => {
            service.getInstance(app, generatedMiddlewares, true, false, globalTimers);
        });

        // load global pre routes
        loadMiddlewares('post', generatedMiddlewares, app);
        baseApp.use(apiDocsPath, swaggerUi.serve, swaggerUi.setup(schemaBuilder.swaggerDocument));
        app.get('*', express.static(path.join(__dirname, 'angular-app')), (req, res) => {
            const ssdAppPath = process.env.webAppMountpoint || 'web';
            if (ssdAppPath === '/') {
                res.sendFile(path.join(__dirname, 'angular-app/index.html'));
            } else {
                const originalUrl = req.originalUrl;
                const firstPath = new url.URL(
                    originalUrl,
                    `${req.protocol}://${req.headers.host}/`
                )
                    .pathname
                    .split('/')
                    .filter((v) => v)[0];
                if (firstPath === ssdAppPath) {
                    res.sendFile(path.join(__dirname, 'angular-app/index.html'));
                } else {
                    res.status(404).send('Invalid API endpoint');
                }
            }
        });
        baseApp.use(swStats.getMiddleware({
            metricsPrefix: 'sw_stats_',
            swaggerSpec: schemaBuilder.swaggerDocument,
            timelineBucketDuration: 60000
        }));
        // generic responses
        app.use(APIResponse);
        baseApp.use(app);
        // run app
        const server = baseApp.listen(port);
        const io = new Server(server, {
            cors: {
                origin: "http://localhost:4200",
                methods: "*",
                credentials: true,
            },
        });
        global.onlineUsers = new Map();

        io.on("connection", (socket) => {
            log.info("connected socket");
            socket.emit('connection', 'ni poda')
            // adding user
            global.chatSocket = socket;
            socket.on("add-user", (userId) => {
                if (userId)
                    log.info("userid", userId);
                    console.log("userid", userId);
                global.onlineUsers.set(userId, socket.id);
            });
            socket.on("send-msg", (data) => {
                console.log("in send mesg", data);
                const sendUserSocket = global.onlineUsers.get(data.to);

                console.log(global.onlineUsers)
                console.log(sendUserSocket)
                if (sendUserSocket) {
                    socket.to(sendUserSocket).emit("msg-recieve", data.message);
                }
            });
        });



        log.info(`Server context path: ${contextPath}`);
        log.info(`Server API docs path: ${apiDocsPath}`);
        log.info(`Server is up and running on port: ${port}`);
    } catch (error) {
        log.error(error);
    }
})();
