function buscarGatinhoBebe() {
    var texto = document.getElementById('texto');
    var localDaImagem = document.getElementById('imagem_aqui');

    texto.innerHTML = "Procurando um gatin...";

    // Adicionamos 'category_ids=1' que na API de gatos geralmente foca em chapéus ou espaços pequenos, 
    // mas o melhor truque é usar a busca por 'small' ou 'kittens' quando disponível.
    // Aqui usamos a rota padrão que já traz muita variedade fofa:
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