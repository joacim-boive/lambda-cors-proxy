'use strict';

import { get as getRequest } from 'request';

export const get = (event, context, callback) => {
  console.log('Starting Proxy!');

  const qs = event.queryStringParameters;
  const url = qs.url; //url is defined as a required parameter in API Gateway, so we know it exists.
  const isDebug = qs ? qs.debug : false;

  getRequest(url, (error, response, body) => {
    let reply = {};

    if (error) {
      console.log('ERROR!');
      reply.statusCode = 502;
      reply.body = {};
      reply.body.code = error.stack;

      console.error('error:', error); // Print the error if one occurred

      callback(null, reply); //This is an async function so it won't return the error to the client otherwise.
    } else {
      const contentType = response.headers['content-type'] ? response.headers['content-type'] : 'text';

      reply.statusCode = (response && response.statusCode) || 200;
      reply.headers = { 'content-type': contentType };
      reply.body = body;

      if (isDebug) {
        console.log(reply);
      }

      callback(null, reply);
    }
  });
};
