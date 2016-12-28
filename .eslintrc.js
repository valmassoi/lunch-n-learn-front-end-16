module.exports = {
  "extends": "airbnb",
  "parserOptions":{
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules" : {
    "semi": [2, "never"],
    "react/no-unknown-property": [2, {"ignore": ["class", "for"]}],
    "curly": ["error", "multi", "consistent"],
  },
}
