const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "REST API music playlists",
            version: "1.0.0",
            description: "REST API for managing music playlists made with Node JS and MariaDB"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Local server"
            }
        ],
        tags: [
            {
                name: "Account",
                description: "Signup and login path."
            },
            {
                name: "myPlaylists",
                description: "Managing the users' playlist path."
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                }
            }
        },
        security: [

        ]
    },
    apis: ["./src/routes/*.js", "./components.yaml"]
};

module.exports = swaggerOptions;