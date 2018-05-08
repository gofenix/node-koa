const PROTO_PATH = __dirname + '../proto/test.proto';

const grpc = require('grpc');

const shareProto = grpc.load(PROTO_PATH).helloworld;

// todo grpc
