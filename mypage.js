
$(document).ready(function(){
	$('h5').click(function(event){
	var content = $(this).siblings();
	if(content.is(':hidden'))	
		{	
			$(this).children().css('transform', 'rotate(-90deg)');
			content.show(100);
		}
		else
		{			
			$(this).children().css('transform', 'rotate(0deg)');
			content.hide(100);
		}
	})
})