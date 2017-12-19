/**
 * Como usar:
 * $ node io-buffers.js <nome_do_arquivo>
 */
var fs = require('fs');
var arquivo = process.argv[2];

fs.readFile(arquivo, function (err, buffer) {

    console.log('lendo um arquivo');

    fs.writeFile('novo-' + arquivo, buffer, function (err) {
        console.log('arquivo escrito.');
    });

});
