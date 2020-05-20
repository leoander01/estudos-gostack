const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), //caminho que contém os arquivos públicos da aplicação (bundle.js, script.js)
    },
    module: {
        rules: [
            {
                test: /\.js$/, //todos os arquivosque terminam com a extensão .js (expressão regular)
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
};

/*
entry = arquivo de entrada da aplicação
output = qual arquivo vai ser geradodepois de convertido (normalmente é o bundle.js)
module = adição de regras
*/ 