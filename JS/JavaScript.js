$(document).ready(function(){
	$("ul.nav li a").on("click", function(){
		$("ul.nav li.active").removeClass("active");
		$(this).parent().addClass("active");
		
		var category = $(this).text().toLowerCase().replace(" ", "-");
		
		if(category === "all"){
			$("#main .container .row div").fadeIn("slow").removeClass("hidden");
			$("#about").addClass("hidden");
			$("#other-work").addClass("hidden");
			$("#main").removeClass("hidden");
            $("#retouching").addClass("hidden");
		}
		else if(category === "about"){
			$("#about").removeClass("hidden");
			$("#other-work").addClass("hidden");
			$("#main").addClass("hidden");
            $("#retouching").addClass("hidden");
			$("#about .container .row .content-wrapper h2").addClass("animated fadeInDown");
		}
		else if(category === "websites"){
			$("#about").addClass("hidden");
			$("#main").addClass("hidden");
            $("#retouching").addClass("hidden");
			$("#other-work").removeClass("hidden");
			$("#other-work .container h2").addClass("animated fadeInDown");
		}
        else if(category === "retouching"){
			$("#about").addClass("hidden");
			$("#main").addClass("hidden");
            $("#other-work").addClass("hidden");
			$("#retouching").removeClass("hidden");
            $(window).trigger("resize");
		}
		else{
			$("#main .container .row div").each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass("hidden");
					$("#main").removeClass("hidden");
					$("#about").addClass("hidden");
                    $("#retouching").addClass("hidden");
					$("#other-work").addClass("hidden");
				}else{
					$(this).fadeIn("slow").removeClass("hidden");	
				}
			});
		}
		return false;
	});
	
	$(".navbar-toggle").on("click", function(){
		$(this).toggleClass("open");
	});
	
	$('#carousel-cover').carousel({
			interval: 6000
    });

	$('#carousel-cover .item:first').addClass('active');
    
    $(window).on('load', function(){
      $('.twentytwenty-container').eq(0).twentytwenty({ default_offset_pct: 0.0 });
      $('.twentytwenty-container').eq(1).twentytwenty();
    });
    
});
