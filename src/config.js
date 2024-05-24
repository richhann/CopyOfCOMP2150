
// set to true to use local dev server, otherwise use the deployed server
const dev = false;

// base url of the backend server used for login, blog and advertising
export const BASE_URL = dev ? 'http://localhost:8102/' 
                        : 'https://comp2110-portal-server.fly.dev/';
