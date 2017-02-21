# Introduction
A client-side rendering workstation for building react app.

Features
- Webpack 2
- ESLint
- SASSLint
- CssNext support
- flow.js
- Jest
- Redux eco-system
- mock API server
- normal watch development server
- hot development server
- custom template `index.html`
- bundle optimization
- offline first
- webpack bundle analyze

# Scripts
- `yarn dev`- start development server. Default on `your_ip_address:8080`.
- `yarn api` - start mock API server. Default on `your_ip_address:8081`.
- `yarn watch` - start development build. Output to `dist` folder. Also `watch` files change.
- `yarn build` - start production build. Output to `dist` folder and generate a `stats.html` under root directory for visualized bundle size report.
- `yarn test` - start running tests with Jest.

# Known Issues
#### Why is your `react-router` not the latest?
- https://github.com/reactjs/react-router-redux/issues/481

#### Why is your `Provider` in this structure?
- https://github.com/reactjs/react-router-redux/issues/179
- https://alejandronapoles.com/2016/09/19/fixing-hot-reloading-with-react-router/

#### Why is your `image-webpack-loader` not the latest?
- https://github.com/tcoopman/image-webpack-loader/issues/51

# For Developer
- Support local/session storage
- Support Web App Manifest

#### Branches
Other branches are legacy/experiments, please ignore them.
