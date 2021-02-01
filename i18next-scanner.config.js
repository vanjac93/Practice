/* eslint-disable */
var fs = require('fs');
var chalk = require('chalk');

module.exports = {
    input: [
        'src/**/*.{js,jsx}',
        // Use ! to filter out files or directories
        //'!app/**/*.spec.{js,jsx}',
        '!src/i18n/**',
        //'!**/node_modules/**',
    ],
    output: './',
    options: {
        debug: true,
        func: {
            list: ['i18next.t', 'i18n.t', 'this.props.t', 't'],
            extensions: ['.js', '.jsx']
        },
        trans: {
            component: 'Trans',
            extensions: [],
            // component: 'Trans',
            // i18nKey: 'i18nKey',
            // defaultsKey: 'defaults',
            // extensions: ['.js', '.jsx'],
            // fallbackKey: function(ns, value) {
            //     return value;
            // },
            // acorn: {
            //     ecmaVersion: 10, // defaults to 10
            //     sourceType: 'module', // defaults to 'module'
            //     // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
            // }
        },
        lngs: ['ar', 'sr'],
        ns: ['resource'],
        defaultLng: 'en',
        defaultNs: 'resource',
        defaultValue: function(lng, ns, key) {
            return key;
        },
        resource: {
            loadPath: 'public/locales/{{lng}}/resource.json',
            savePath: 'public/locales/{{lng}}/resource.json',
            jsonIndent: 2,
            lineEnding: '\n'
        },
        nsSeparator: false, // namespace separator
        keySeparator: false, // key separator
        interpolation: {
            prefix: '{{',
            suffix: '}}'
        }
    },
    transform: function customTransform(file, enc, done) {
        "use strict";
        const parser = this.parser;

        const options = {
            presets: ['@babel/preset-flow'],
            plugins: ['@babel/plugin-syntax-jsx', ["@babel/plugin-proposal-decorators", { "legacy": true }], '@babel/plugin-proposal-class-properties' ]
        };
        const content = fs.readFileSync(file.path, enc);

        const code = require('@babel/core').transform(content, options);
        parser.parseTransFromString(code.code);
        done();
    }
};
