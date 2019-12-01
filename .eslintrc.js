module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "strict": [1, "global"],
      "semi": ["error", "always"],
      "indent": [2, "tab"],
      "quotes": ["off", "single"],
      "no-irregular-whitespace": 2,
      "linebreak-style": [0, "unix"],
      "no-multiple-empty-lines": [0, {"max": 2}],
      "quotes": [0, "double"]
    }
};
