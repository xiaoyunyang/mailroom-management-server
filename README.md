# mailroom-management

> Server app for managing mailroom packages for apartments.

## Development

- Project bootstrapped using [typescript-express-starter](https://github.com/ljlm0402/typescript-express-starter)
- Set up database locally

    ```bash
    createdb mailroom_management
    ```

    Make sure to create "root" role if you don't have it already.

    ```sql
    CREATE ROLE "root" WITH LOGIN PASSWORD 'password';
    ```

- `npm run dev` starts the server using nodemon and will watch for file changes in `src/`.

## Hackathon Project

- [Presentation](https://docs.google.com/presentation/d/1_ar_jEO88tG6dETIEmP70kEh1Gz9vE18MTv7rNJgl5I/edit?fbclid=IwAR0MrUbj8qiVgRDhztdoMdFXeTEo0oRuqdwrwPx2Ta4sWFxeJRgm9fB0c4A)

## Database Design

- [Design](https://docs.google.com/spreadsheets/d/1E2PyCmbndTBpCrilgouZCPuyTIWZsnbl1QEmAvUGr3g/edit?usp=sharing)
