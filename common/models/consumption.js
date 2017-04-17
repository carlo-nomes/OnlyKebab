'use strict';

module.exports = function(Consumption) {
  Consumption.beforeRemote('create', function(context, user, next) {
    context.args.data.timestamp = Date.now();
    context.args.data.consumerId = context.req.accessToken.userId;
    next();
  })
};
