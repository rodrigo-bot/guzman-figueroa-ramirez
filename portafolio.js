var trabajos = [{
    figure: "media/RPC19.jpg", 
    alt: "Herramienta manual cosechadora de papas.",
    title: "RCP19",
    about: "Herramienta manual cosechadora de papas.",
    url: "https://www.instagram.com/p/Bz-opy-Drgt/"
}, {
    figure: "media/Tostador Ilko.jpg",
    alt: "Campaña para los 50 años del Tostador Ilko.",
    title: "Tostador Ilko",
    about: "Campaña para los 50 años del Tostador Ilko.",
    url: "http://ilkococina.com/producto?cod=1621001&nombre=tostador-estaado"
}, {
    figure: "media/Plataforma Integra.jpg",
    alt: "Descripción de la imagen",
    title: "Plataforma web de Inclusión",
    about: "Facilita a las personas con discapacidad la entrada al mundo laboral "
}, {
    figure: "media/trabajo-04-lamparadeparafina.jpeg",
    alt: "Luminaria de parafina color azul frío",
    title: "Lámpara de parafina",
    about: "Luminaria de parafina color azul frío"
}, {
    figure: "media/trabajo-05-agrocinta.jpeg",
    alt: "Sistema sembrador de semillas controladamente espaciadas",
    title: "Agrocinta",
    about: "Sistema sembrador de semillas controladamente espaciadas"
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
    var cuatro = '<p><a href="' + trabajos[i].url + '">Más información</a></p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro +'</div>')
});
