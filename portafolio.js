var trabajos = [{
    figure: "media/trabajo-01-desfile.jpg",
    alt: "Descripción de la imagen",
    title: "Título de primer trabajo",
    about: "Texto simulado de descripción de primer trabajo"
}, {
    figure: "media/trabajo-02-app.jpg",
    alt: "Descripción de la imagen",
    title: "Título de segundo trabajo",
    about: "Texto simulado de descripción de segundo trabajo"
}, {
    figure: "media/trabajo-03-homy.jpg",
    alt: "Descripción de la imagen",
    title: "Título de tercer trabajo",
    about: "Texto simulado de descripción de tercer trabajo"
}, {
    figure: "media/trabajo-04-lamparadeparafina.jpeg",
    alt: "Luminaria de parafina color azul frío",
    title: "Lámpara de parafina",
    about: "Texto simulado de descripción de cuarto trabajo"
}, {
    figure: "media/trabajo-05-agrocinta.jpeg",
    alt: "Sistema sembrador de semillas controladamente espaciadas",
    title: "Agrocinta",
    about: "Texto simulado de descripción de quinto trabajo"
}, {
    figure: "media/trabajo-06-Bancarlos.gif",
    alt: "Banca para 3 personas creado por una plancha de 0.3 mm",
    title: "Bancarlos Sfeir",
    about: "Texto simulado de descripción de sexto trabajo"
}, {
    figure: "media/trabajo-07-materiales.jpg",
    alt: "Descripción de la imagen",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo"
}, {
    figure: "media/Bancarlos - 3.gif",
    alt: "Banca para 3 personas creado por una plancha de 0.3 mm",
    title: "Título de séptimo trabajo",
    about: "Texto simulado de descripción de séptimo trabajo"
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
