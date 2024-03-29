var trabajos = [{
    figure: "media/RPC19.jpg", 
    alt: "Herramienta manual cosechadora de papas.",
    title: "RCP19",
    about: "Herramienta manual cosechadora de papas.",
    url: "https://www.instagram.com/p/B1kDL6bFA1J/",
}, {
    figure: "media/Tostador Ilko.jpg",
    alt: "Campaña para los 50 años del Tostador Ilko.",
    title: "Tostador Ilko",
    about: "Campaña para los 50 años del Tostador Ilko.",
    url: "https://www.instagram.com/p/B1kEdIXF_Ob/",
}, {
    figure: "media/Plataforma Integra.jpg",
    alt: "Facilita a las personas con discapacidad la entrada al mundo laboral",
    title: "Plataforma web de Inclusión",
    about: "Facilita a las personas con discapacidad la entrada al mundo laboral ",
    url: "https://www.instagram.com/p/B1kD4RIlKIu/",
}, {
    figure: "media/trabajo-04-lamparadeparafina.jpeg",
    alt: "Luminaria de parafina color azul frío",
    title: "Lámpara de parafina sólida",
    about: "Luminaria de parafina sólida color azul frío",
    url: "https://www.instagram.com/p/B1kD0ZrF8y4/",
}, {
    figure: "media/trabajo-05-agrocinta.jpeg",
    alt: "Sistema sembrador de semillas controladamente espaciadas",
    title: "Agrocinta",
    about: "Sistema sembrador de semillas controladamente espaciadas",
    url: "https://www.instagram.com/p/B1j3A7IFqPx/",
}, {
   figure: "media/Helbert-3.gif",
    alt: "Kit de juego que promueve el desarrollo de habilidades de investigación",
    title: "El laboratorio de Helbert",
    about: "Kit de juego que promueve el desarrollo de habilidades de investigación",
    url:"https://www.instagram.com/p/B1kDlRWlegh/",
}, {
    figure: "media/Organismos - 4.gif",
    alt: "Figuras creadas para describir su formas con los ojos vendados",
    title: "Organismos 3D",
    about: "Figuras creadas para describir su formas con los ojos vendados",
    url:"https://www.instagram.com/p/B1kDpFRl5vy/",
}, {
    figure: "media/Esplat - 5.gif",
    alt: "Bowl de comida hecho con ilko que logra moler alimentos en el mismo",
    title: "Esplat",
    about: "Bowl de comida hecho con ilko que logra moler alimentos en el mismo",
    url:"https://www.instagram.com/p/B1kDUxolmvT/",
}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p><a href="' + trabajos[i].url + '">Más</a></p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro +'</div>')
});
