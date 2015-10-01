$(document).ready(function() {
	var description = $('.about-description');
	var pokemon = $('#1');
	var person = $('#2');
	var number = $('#3');
	var coffee = $('#4');

	pokemon.on('click', function() {
		description.html('PIKA PIKA CHU!!');	

	person.on('click', function() {
		description.html('MY MOM :D');	

	number.on('click', function() {
		description.html('22');	


	coffee.on('click', function() {
		description.html('Robusta');	
		});
		});
		});
		});
});
