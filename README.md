# Introduction
A universal workstation for building react app.

Features
- Webpack 1
- ESLint
- SASSLint
- flow.js
- Jest
- mock API server
- development server
- custom template `index.html`
- best practice bundle optimization (all `dependencies` in `package.json` will be output as `vendor`)

# Feature Variation
For basic React support, check `basic` branch.

For basic React & Redux support, check `redux` branch.

For React & Redux Saga support, check `redux-saga` branch.

# Scripts
- `yarn start`- start development server. Default on `your_ip_address:8080`.
- `yarn api` - start mock API server. Default on `your_ip_address:8081`.
- `yarn build` - start production build. Output to `dist` folder.
- `yarn test` - start running tests with Jest.

# Known Issues
#### Why is `react-router` not the latest version?
There is an [issue](https://github.com/reactjs/react-router-redux/issues/197) when using `hashHistory`, so I downgrade to `2.8.0` instead.

# For Developer
#### Todos
- Support Webpack 2

#### Branches
- `master` - the main branch.
- `basic` - branch out from master, almost sync with `master`.
- `redux` - branch out from `basic`.
- `redux-saga` - branch out from `redux`.

Other branches are legacy/experiments, please ignore them.
