const http = require('http');
const handleRequest = require('./handleRequest');

const startServer = async () => {
  const server = http.createServer(handleRequest);

  await new Promise((resolve, reject) => {
    server.listen(3000, (err) => {
      if (err) {
        reject(err);
      }
      console.log('server is listening on 3000');
      resolve();
    });
  });
};

module.exports = startServer;