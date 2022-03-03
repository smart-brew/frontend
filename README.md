# SmartBrew frontend

## Startup

```bash
docker compose up --build --detach
```

## Production

*Needs to have already pre-built project using `yarn build` in order to work in production

```bash
docker compose -f docker-compose.prod.yml up --build --detach
```

## Commands

### `yarn`

Install dependencies.

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`

Builds the app for production to the `build` folder.

## Installed extensions which need to be added to IDE

ESlint, Prettier, Editorconfig - Tested on VSCode
