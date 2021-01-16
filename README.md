# mailroom-management

Server app for sending email notification when you get a package in your apartment

Project bootstrapped using [typescript-express-starte](https://github.com/ljlm0402/typescript-express-starte)

## Development

- Set up database locally

    ```bash
    createdb mailroom_management
    ```

    Make sure to create "root" role if you don't have it already.

    ```sql
    CREATE ROLE "root" WITH LOGIN PASSWORD 'password';
    ```

- `npm run dev` starts the server using nodemon and will watch for file changes in `src/`.
