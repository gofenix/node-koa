
const grpc = require('grpc');

const client = grpc.koa.share.showCase;

const result=yield client.echo({code: 200});
console.log(result);