module.exports = {
    "env": {
        "jest": true,
        "es6": true
    },
    "parser": "babel-eslint",
    "extends": "universe/native",
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-undef": "off",
        "prefer-destructuring": "warn",
        "react/no-unused-state": "warn",
        "react/prop-types": "warn",
        "react/destructuring-assignment": "warn",
        "global-require": "warn",
        "max-len": "warn",
        "import/no-unresolved": "warn",
        "class-methods-use-this": "warn",
        "consistent-return": "warn",
        "no-unused-vars": "warn",
        "global-require": "warn",
        "react/prop-types": "off",
        "no-plusplus": "warn",
        "no-useless-escape": "warn",
        "react/no-unescaped-entities": "warn",
        "no-nested-ternary": "warn",
        "no-alert": "off",
        "global-require": "off",
        "no-param-reassign": "warn",
        "no-shadow": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "array-callback-return": "warn",
    }
};
