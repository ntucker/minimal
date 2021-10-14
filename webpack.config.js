const { makeConfig } = require('@anansi/webpack-config');

const options = {
  basePath: 'src',
  buildDir: 'dist/',
  htmlOptions: {
    title: 'minimal',
    scriptLoading: 'defer',
    template: 'index.ejs',
  },
  globalStyleDir: 'style',

  sassResources: [`${__dirname}/src/style/export.scss`],
};

const generateConfig = makeConfig(options);

module.exports = (env, argv) => {
  const config = generateConfig(env, argv);
  return config;
};

module.exports.options = options;
