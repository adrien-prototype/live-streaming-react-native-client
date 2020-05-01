const createExpoWebpackConfigAsync = require('@expo/webpack-config')
const webpack = require('webpack')

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)
  // Customize the config before returning it.  
  config.plugins.push(
    // janus.js does not use 'import' to access to the functionality of webrtc-adapter,
    // instead it expects a global object called 'adapter' for that.
    // Let's make that object available.
    new webpack.ProvidePlugin({ adapter: 'webrtc-adapter' })
  )
  
  config.module.rules.push(
    // janus.js does not use 'export' to provide its functionality to others, instead
    // it creates a global variable called 'Janus' and expects consumers to use it.
    // Let's use 'exports-loader' to simulate it uses 'export'.
    {
      test: require.resolve('janus-gateway'),
      use: 'exports-loader?Janus=Janus'
    }
  )
  return config;
}
