const asyncComponentLoader = (componentName) => {
  return (location, cb) => {
    return import(`containers/${componentName}`)
      .then(module => cb(null, module.default))
      .catch(err => console.error(err));
  };
};

export default asyncComponentLoader;
