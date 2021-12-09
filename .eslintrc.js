module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true,
        "jquery": true,
    },
    "extends": "eslint:recommended",
    
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "quotes": 0,
        "no-trailing-space": 0,
        "eol-last": 0,
        "no-unused-vars":0,
        "no-underscore-dangle":0,
        "no-alert": 0,
        "no-lone-blocks": 0
      },
    "globals": {
        jQuery: true,
        $ : true
      }
};
