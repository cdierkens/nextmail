const { buildWatch } = require('../lib/build');
const startServer = require('../server/startServer');

async function nextmailDev() {
  await buildWatch();
  startServer();
}

module.exports = nextmailDev;
