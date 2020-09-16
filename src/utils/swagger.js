const { Login } = require('../router/auth.swagger');

const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'API Auth',
    description: 'Example of Api Auth use of endpoint',
    termsOfService: '',
    contact: {
      name: 'Nicolas Agustin Perez',
      email: 'nicolasperez95.a@gmail.com',
      url: '',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  tags: [
    {
      name: 'Auth',
    },
  ],
  servers: [
    {
      url: 'http://localhost:3000/api',
			description: 'Local server',
    },
    {
      url: 'https://{env}.gigantic-server.com:{port}/{basePath}',
      description: 'The production API server',
      variables: {
        env: {
          default: 'app-dev',
          description: 'DEV Environment',
        },
        port: {
          enum: ['8443', '3000', '443'],
          default: '8443',
        },
        basePath: {
          default: 'v1',
        },
      },
    },
	],
	paths: {
		"/login": {
			post: Login
		}
	}
};

module.exports = swaggerDocument;
