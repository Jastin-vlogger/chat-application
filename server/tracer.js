const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { SimpleSpanProcessor, ConsoleSpanExporter } = require("@opentelemetry/tracing");
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { CollectorTraceExporter } =  require('@opentelemetry/exporter-collector-grpc');
const { Resource } = require('@opentelemetry/resources');
const { SemanticResourceAttributes } = require('@opentelemetry/semantic-conventions');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');
const { MongoDBInstrumentation } = require('@opentelemetry/instrumentation-mongodb');

const path = require("path")
const dotenv = require("dotenv")
const envFileName = process.env.NEUTRINOS_APP_ENV ? `${process.env.NEUTRINOS_APP_ENV}.env` : 'dev.env';
const envFilePath = `${process.cwd()}${path.sep}environments${path.sep}${envFileName}`;
console.log("env-file-path", envFilePath)
dotenv.config({ path: envFilePath });

const provider = new NodeTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: process.env.NEU_APP_NAME,
  }),
});

const exporter = new ConsoleSpanExporter();
const processor = new SimpleSpanProcessor(exporter);
provider.addSpanProcessor(processor);


const collectorTraceExporter = new CollectorTraceExporter({
  url: process.env.TRACE_COLLECTOR_URL,
})
const collectorProvider = new SimpleSpanProcessor(collectorTraceExporter)
provider.addSpanProcessor(collectorProvider);
provider.register();

registerInstrumentations({
  instrumentations: [
    getNodeAutoInstrumentations(),
    new ExpressInstrumentation(),
    new MongoDBInstrumentation({
      enhancedDatabaseReporting: true,
    }),
  ]
});

