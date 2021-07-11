module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    'babel-plugin-styled-components',
    'inline-dotenv',
    [
      'module-resolver',
      {
        cwd: ['packagejson'],
        root: ['.'],
        extensions: ['.js', '.json', 'jsx', '.ios.js', '.android.js'],
        alias: {
          '@': './src/',
        },
      },
    ],
  ],
};
