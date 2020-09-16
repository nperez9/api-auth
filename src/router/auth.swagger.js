const Login = {
  tags: ['Auth'],
  description: 'Verify the user and the password and returns a JWT',
  operationId: 'Login',
  parameters: [],
  requestBody: {
    content: {
      'application/json': {
        schema: {
					type: 'object',
					properties: {
						email: {
							type: 'string',
							example: 'exampleMail@example.com',
							description: 'Email of the user',
						},
						password: {
							type: 'string',
							example: 'asdasdsad12312d',
							description: 'The password of the user',
						}
					}
				},
      },
		},
		require: true,
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  responses: {
    200: {
      description: 'Login of the function',
      content: {
        "application/json": {
          schema: {
            type: 'object',
            properties: {
              token: {
								type: 'string',
								example: 'ACsdkk1230$#0051!', 
                description: 'JWT to acces the application',
              },
              message: {
                type: 'string',
                example: 'Successfull login',
                description: 'message',
              },
            },
          },
        },
      },
    },
		400: {
			description: 'Invalid parameters',
		},
		500: {
			description: 'Error on the server',
		}
  },
};

module.exports = {
  Login,
};
