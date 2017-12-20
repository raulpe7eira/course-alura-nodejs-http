var fs = require('fs');

module.exports = function (app) {
    app.post('/uploads/imagem', function (req, res) {

        var arquivo = req.headers.filename;
        console.log('arquivo recebido: ' + arquivo);

        req.pipe(fs.createWriteStream('files/' + 'novo-' + arquivo))
            .on('finish', function () {
                console.log('arquivo escrito.');
                res.status(201).send('ok');
            });
    });
};
