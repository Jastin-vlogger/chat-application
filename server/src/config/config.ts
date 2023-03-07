export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'X_GiHccxnckeT_bF3ai08',
    client_secret:
      'hC2cP6OjfAoM2O5CCegcFY41Z2koN7NR4-R5Nc3ihJgayvqdRYxR-jJVu0gWaZVES6EOl2EWRmgFplHNHiqs1Q',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};
