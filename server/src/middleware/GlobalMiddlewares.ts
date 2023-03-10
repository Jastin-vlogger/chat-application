//append_imports_start

import * as cors from 'cors'; //_splitter_
import * as expressSession from 'express-session'; //_splitter_
import { TypeormStore } from '../utils/ndefault-session/Session/SessionStore'; //_splitter_
import { getConnection } from 'typeorm'; //_splitter_
//append_imports_end
export let Middlewares = {
  cors: () => {
    let corsOptions = {
      origin: [
        process.env.usingIP,
        process.env.backendUrl,
        'https://superb-haupia-561901.netlify.app',
      ],

      credentials: true,
      maxAge: 2592000000,
      preflightContinue: false,
      optionsSuccessStatus: 200,
    };
    return cors(corsOptions);
  },
  sd_7EmxxOk703exD5hF: () => {
    let sess: expressSession.SessionOptions = {
      cookie: { secure: true, httpOnly: true, sameSite: 'none' },

      proxy: true,

      resave: false,

      rolling: false,

      saveUninitialized: false,

      secret: 'qPXoLFLDtk',

      unset: 'keep',
    };
    return expressSession(sess);
  },
  //appendnew_flow
};
