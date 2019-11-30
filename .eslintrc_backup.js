module.exports = {

  //Setting defaults
  "root": true,
  "extends": "eslint:recommended",
  "parser": "babel-eslint",
  "plugins": ["react"],
  "parserOptions": {"sourceType": "module"},

  //Settting env options
  "env": {
      "node": true
  },

  //Setting rules
  "rules": {
      "strict": [2, "global"],
      "semi": ["error", "always"],
      "indent": [2, "tab"],
      "quotes": ["off", "single"]
  }

}
