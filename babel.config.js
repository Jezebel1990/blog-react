module.exports = {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            node: '16.20.2', 
          },
        },
      ],
      '@babel/preset-react',
    ],
  };
  