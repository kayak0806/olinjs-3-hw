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
		$.post("/orders/create", $('#newOrder').serialize()+'&orderIng='+$(checkedIng).serializeArray());

		var checkedIng =[];
		$('div.ingList > input').each(function(){
			if ($(this).is(':checked')){
				checkedIng.push($(this).attr('id'));
			};
			$(this).attr('checked',false);
		});

		$('#orderName').val('');

		return false;

	});

})
