import http from 'http';
import config, { express } from './config';

const { host, port } = config;

async function init() {
  try {
    const server = http.createServer(express);
    await server.listen(port, host, () => {
      console.info(`Start listening at ${host}:${port}`);
    })
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
init(); 