![](https://github.com/abayo-luc/hello-books/workflows/HelloBook/badge.svg)

# hello-books-vue

## Code style & Conventions

The style-guide is `airbnb`, and it uses prettier for frommating code. To enable `VS Code + ESLint + prettier` follow the steps below:

- Text editor [VSCode](https://code.visualstudio.com)
- In VS Code, `Ctrl + Shift + X`
- Search and install _ESLint_
- Search and install _Prettier Code Formatter_
- Search and install Vue tooling for VS code: _Vetur_
- Restart VS Code.

## Getting Started

### Clone the latest version of the repository

`https://github.com/abayo-luc/hello-book.git` or `git@github.com:abayo-luc/hello-books.git`

### Change directory

`cd into the project directory`

### Update the environment variables in sample.env file and rename it to '.env'

`cp sample.env ./.env`

### Install the project's dependencies with

`npm install`

### Testing CI/CD

- Unit test: `npm run test:unit`
- End to End testing: `npm run test:e2e`

### Start the application

`npm run start`

### Credentials

```source-json
    {
        "email":"admin@hellobook.com",
        "password":"password"
    }
```

### Links

[Frontend](https://hellobook.netlify.com/login)
[Backend API](https://hello-book-dev.herokuapp.com/api/v1)
