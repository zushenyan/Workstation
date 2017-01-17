# Introduction
A universal workstation for building react app.

Features
- Webpack 1
- ESLint
- SASSLint
- flow.js
- Jest
- Redux eco-system
- mock API server
- development server
- custom template `index.html`
- bundle optimization

# Scripts
- `yarn start`- start development server. Default on `your_ip_address:8080`.
- `yarn api` - start mock API server. Default on `your_ip_address:8081`.
- `yarn watch` - start development build. Output to `dist` folder. Also `watch` files change.
- `yarn build` - start production build. Output to `dist` folder.
- `yarn test` - start running tests with Jest.

# Known Issues
#### Why is `react-router` not the latest version?
There is an [issue](https://github.com/reactjs/react-router-redux/issues/197) when using `hashHistory`, so I downgrade to `2.8.0` instead.

# For Developer
#### Todos
- Support Webpack 2
- Support Progressive Web Application.

#### Branches
Other branches are legacy/experiments, please ignore them.
