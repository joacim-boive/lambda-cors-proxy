# lambda-cors-proxy
A simple CORS enabled proxy ready to deploy to AWS

You need to setup your AWS credentials first - use aws config

npm i
sls deploy

Boom!

Check the console for your proxy endpoint.
call it like: https://<arn-id>.execute-api.<region-you-deployed-to>.amazonaws.com/production/get?url=<the-url-to-get>

ES6/ES7 support using Webpack with sourcemaps
Prettier enabled.
