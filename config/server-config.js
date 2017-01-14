const ip = require("ip");

// ip address for development server.
const devServerIP = ip.address();

// ip address for API server.
const apiServerIP = devServerIP;

// port for development server.
const devServerPort = 8080;

// port for API server.
const apiServerPort = 8081;

module.exports = {
  devServerIP,
  apiServerIP,
  devServerPort,
  apiServerPort,
  devServerAddress: `http://${devServerIP}:${devServerPort}`,
  apiServerAddress: `http://${apiServerIP}:${apiServerPort}`,
};
