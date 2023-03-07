const EventEmitter = require('events');
import {
    trace,
    context,
    SpanKind,
    SpanStatusCode,
    ROOT_CONTEXT,
} from '@opentelemetry/api';
const stringify = require('json-stringify-safe')
export class TracerEventEmitter extends EventEmitter { }
export class TracerService {
    tracer = trace.getTracer(process.env.NEU_APP_NAME, process.env.NEU_APP_VERSION || '1.0.0');
    traceEmitter;
    constructor() {
        this.traceEmitter = new TracerEventEmitter();
        this.traceEventSubscriber();
    }

    createSpan(spanName, parentCtx?) {
        if (process.env.TRACING == 'false') {
            return;
        }
        let span;
        if (!parentCtx) {
            span = this.tracer.startSpan(spanName, {
                kind: SpanKind.CLIENT,
            });
        } else {
            const ctx = trace.setSpan(context.active(), parentCtx);
            span = this.tracer.startSpan(
                spanName,
                {
                    kind: SpanKind.CLIENT,
                },
                ctx
            );
        }
        return span;
    }

    sendData(spanIns, bh, isError?) {
        if (process.env.TRACING == 'false') {
            return;
        }
        this.traceEmitter.emit('send_data', spanIns, bh, isError);
    }

    traceEventSubscriber() {

        this.traceEmitter.on('send_data', (spanIns, bh, isError?) => {
            spanIns.setAttribute('bh', stringify(bh));
            spanIns.setStatus({
                code: isError ? SpanStatusCode.ERROR : SpanStatusCode.OK,
            });
            spanIns.end();
        });
    }
}
