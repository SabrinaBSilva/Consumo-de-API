function buscarGatinhoBebe() {
    var texto = document.getElementById('texto');
    var localDaImagem = document.getElementById('imagem_aqui');

    texto.innerHTML = "Procurando um gatin...";

    fetch('https://api.thecatapi.com/v1/images/search?mime_types=jpg,png')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            var urlGato = data[0].url;
            
            texto.innerHTML = "<b>OLHA QUE FOFO!</b>";
            localDaImagem.innerHTML = "<img src='" + urlGato + "'>";
        })
        .catch(function(err) {
            texto.innerHTML = "O gatinho fugiu! Tente de novo.";
        });
}
