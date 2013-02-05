$(function() {
	$('body').css('background', 'grey')

	$('#newIngredient').on('submit', function(){
		$.post("/ingredient/create", $('#newIngredient').serialize()); //, $('#newIngredient').serialize()

		$(console.log( $('#ingName').val() ));
		$(console.log( $('#ingPrice').val() ));

		$('#ingName').val('');
		$('#ingPrice').val('');
		return false;
	});

	$('#newOrder').on('submit', function(){
		$.post("/orders/create", $('#newOrder').serialize());

		$('div.ingList > input').each(function(){
			$(this).attr('checked',false);
		});

		$('#orderName').val('');

		return false;

	});

	$('form.ingredients').on('submit', function(){
		console.log($(this).attr('name'));
		$.post('/orders/delete',$(this).serialize());

		return false;

	});

});
