console.log('\'Hey man! \'Whats New?!');

$(document).ready(function(){
	$('.fadein img:gt(0)').hide();

		setInterval(function () {
    		$('.fadein :first-child').fadeOut()
                             		.next('img')
                             		.fadeIn()
                             		.end()
                             		.appendTo('.fadein');
			}, 4000); // 4 seconds
});