$(document).ready(function(){
	$('#sl-01').slick({
        autoplay:true,
        autoplaySpeed:3000,
		arrows:true,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows:true,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:true,
				}
			}
		]
	});
});

