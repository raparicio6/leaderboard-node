export const getOsEnv = (key: string): string => {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return process.env[key] as string;
};

export const normalizePort = (port: string): number | string | boolean => {
  const parsedPort = parseInt(port, 10);
  if (Number.isNaN(parsedPort)) {
    // named pipe
    return port;
  }

  if (parsedPort >= 0) {
    // port number
    return parsedPort;
  }

  return false;
};
