$(document).ready(() => {
});
/*
* Si analizan la data, se darán cuenta que en la variable data podemos encontrar
* 4 objetos, estos son: gossip, breakingbad, howtoget, stranger.
* Cada objeto en su interior, tiene el objeto characters, que a su vez está compuesto
* por un arreglo de objetos donde se almacen los datos de cada uno de los personajes
* Pueden visualizar esto haciendo los siguientes console.log
* console.log(data);
* console.log(data.gossip.characters);
* console.log(data.breakingbad.characters);
* console.log(data.howtoget.characters);
* console.log(data.stranger.characters);
*/

/*
* Genero las variables donde guardaré el acceso a characters de cada uno de los objetos (series)
* ¿por qué hago esto? para que cuando lo utilice en el for no me maree tanto texto :)
* Es visualmente más ordenado y entendible
*/
var gossip = data.gossip.characters;
var breaking = data.breakingbad.characters;
var howtoget = data.howtoget.characters;
var stranger = data.stranger.characters;
var all = data;

/*
* Ahora comenzamos con el contenido. Cuando se le haga click al botón de Gossip girl, mostraremos
* sus personajes desde jquery y la data proporcionada.
* Para eso creamos el evento de click en el botón que queremos y le decimos que una vez ejecutado
* este evento recorra el largo del arreglo donde están almacenados los datos de los personajes de
* gossip girl (data.gossip.characters) el que ya tenemos guardado en la variable gossip.
*/
$('.btn-gossip').click(function() {
  for (var i = 0; i < gossip.length; i++) {
    /*
    * Lo que hacemos acá es que como se repite lo mismo en cada botón por cada serie (los otros eventos
    * que están más abajo) le pedimos que borre todo el contenido generado en los otros div y solo
    * queden insertados los del evento ejecutado.
    * Si presiono primero breaking bad, se cargan sus personajes, pero luego presiono gossip girl
    * se borra inmediatamente todo el contenido de breaking bad y se genera el de gossip girl
    * cada uno en su div correspondiente
    */
    $('.breaking, .how, .stranger').children().remove(); //a los divs con esas clases les remueve todos sus hijos
    /*
    * Le indicamos que en cada iteración, es decir cuando pase por cada personaje, genera la
    * siguiente estructura por cada uno, sacando así el dato de nombre, colegio, ciudad y foto,
    * haciendo el respectivo append a su div contenedor que está vacío en el html (<div class="gossip"></div>)
    */
    $('.gossip').append('<div class="row character">' +
                          '<div class= "col-md-6 text-center">'+
                            '<img src="assets/' + gossip[i].picture + '">' +
                          '</div>' +
                          '<div class= "col-md-6">'+
                            '<h3>' + gossip[i].name + '</h3>' +
                            '<p>School: ' + gossip[i].school + '</p>' +
                            '<p>City: ' + gossip[i].city + '</p>' +
                            '</div>' +
                          '</div>')
  }
})

/*
* Si se dan cuenta en los siguientes eventos repetimos exactamente lo mismo
* Si al hacer click en cada botón inspeccionan el html, se darán cuenta que el contenido
* se borra y agrega desde jquery, nunca ha estado en el html, evitando así recargarlo
* de contenido y simular que no está visible utilizando hide() y show()
*/

$('.btn-breaking').click(function() {
  for (var i = 0; i < breaking.length; i++) {
    $('.gossip, .how, .stranger').children().remove();
    $('.breaking').append('<div class="row character">' +
                          '<div class= "col-md-6 text-center">'+
                            '<img src="assets/' + breaking[i].picture + '">' +
                          '</div>' +
                          '<div class= "col-md-6">'+
                            '<h3>' + breaking[i].name + '</h3>' +
                            '<p>City: ' + breaking[i].city + '</p>' +
                            '</div>' +
                          '</div>')
  }
})

$('.btn-how').click(function() {
  for (var i = 0; i < howtoget.length; i++) {
    $('.gossip, .breaking, .stranger').children().remove();
    $('.how').append('<div class="row character">' +
                          '<div class= "col-md-6 text-center">'+
                            '<img src="assets/' + howtoget[i].picture + '">' +
                          '</div>' +
                          '<div class= "col-md-6">'+
                            '<h3>' + howtoget[i].name + '</h3>' +
                            '<p>City: ' + howtoget[i].city + '</p>' +
                            '</div>' +
                          '</div>')
  }
})

$('.btn-stranger').click(function(){
  for (var i = 0; i < stranger.length; i++) {
    $('.gossip, .breaking, .how').children().remove();
    $('.stranger').append('<div class="row character">' +
                          '<div class= "col-md-6 text-center">'+
                            '<img src="assets/' + stranger[i].picture + '">' +
                          '</div>' +
                          '<div class= "col-md-6">'+
                            '<h3>' + stranger[i].name + '</h3>' +
                            '<p>City: ' + stranger[i].city + '</p>' +
                            '</div>' +
                          '</div>')
  }
})

$('.btn-all').click(function() {
  $('.gossip, .breaking, .how, .stranger').children().remove();
  for (var i = 0; i < gossip.length; i++) {
    $('.all').append('<div class="row characters">' +
                        '<div class= "col-md-6 text-center">'+
                          '<img src="assets/' + gossip[i].picture + '">' +
                        '</div>' +
                        '<div class= "col-md-6">'+
                          '<h3>' + gossip[i].name + '</h3>' +
                          '<p>School: ' + gossip[i].school + '</p>' +
                          '<p>City: ' + gossip[i].city + '</p>' +
                        '</div>' +
                      '</div>')
  }
  for (var i = 0; i < breaking.length; i++) {
    $('.all').append('<div class="row characters">' +
                        '<div class= "col-md-6 text-center">'+
                          '<img src="assets/' + breaking[i].picture + '">' +
                        '</div>' +
                        '<div class= "col-md-6">'+
                          '<h3>' + breaking[i].name + '</h3>' +
                          '<p>City: ' + breaking[i].city + '</p>' +
                        '</div>' +
                      '</div>')
  }
  for (var i = 0; i < howtoget.length; i++) {
    $('.all').append('<div class="row characters">' +
                        '<div class= "col-md-6 text-center">'+
                          '<img src="assets/' + howtoget[i].picture + '">' +
                        '</div>' +
                        '<div class= "col-md-6">'+
                          '<h3>' + howtoget[i].name + '</h3>' +
                          '<p>City: ' + howtoget[i].city + '</p>' +
                        '</div>' +
                      '</div>')
  }
  for (var i = 0; i < stranger.length; i++) {
    $('.all').append('<div class="row characters">' +
                        '<div class= "col-md-6 text-center">'+
                          '<img src="assets/' + stranger[i].picture + '">' +
                        '</div>' +
                        '<div class= "col-md-6">'+
                          '<h3>' + stranger[i].name + '</h3>' +
                          '<p>City: ' + stranger[i].city + '</p>' +
                        '</div>' +
                      '</div>')
  }    
})