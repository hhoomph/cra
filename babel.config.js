{
    "presets": [
      [
        "@babel/preset-react",
        {
          "pragma": "dom", // default pragma is React.createElement
          "pragmaFrag": "DomFrag", // default is React.Fragment
          "throwIfNamespace": false // defaults to true
        }
      ]
    ]
  }