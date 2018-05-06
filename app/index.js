require('dotenv').config();
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const server = require('./server');

const port = process.env.PORT || 3000;

if (cluster.isMaster) {
  console.log(`master ${process.pid} is running`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  server.listen(port, () => console.log(`API server started on ${port}`));
  console.log(`worker ${process.pid} started`);
}
