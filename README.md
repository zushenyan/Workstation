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
#### Don' use `hashHistory` at this moment.
- https://github.com/reactjs/react-router-redux/issues/481

#### Why is your `Provider` in this structure?
- https://github.com/reactjs/react-router-redux/issues/179
- https://alejandronapoles.com/2016/09/19/fixing-hot-reloading-with-react-router/

#### Why is your `image-webpack-loader` not the latest?
- https://github.com/tcoopman/image-webpack-loader/issues/51

# For Developer
#### Todos
- Support Webpack 2
- Support Progressive Web Application.

#### Branches
Other branches are legacy/experiments, please ignore them.
