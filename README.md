# lambda-cors-proxy
## A simple CORS enabled proxy ready to deploy to AWS

You need to setup your AWS credentials first - use [aws config](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

    npm i
    sls deploy

Boom!

Check the console for your proxy endpoint.

Call it like: https://<arn-id>.execute-api.<region-you-deployed-to>.amazonaws.com/production/get?url=<the-url-to-get>

- ES6/ES7 support using Webpack with sourcemaps
- Prettier enabled.
