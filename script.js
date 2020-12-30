$('.sortbtn').on('click', function(){
	$(this).parent().find(".activesortbtn").removeClass("activesortbtn")
	$(this).addClass("activesortbtn")

	var clsname = $(this).attr("attachedTo")
	var divname = $(this).parent().attr("attachedTo")
	var divs = $("."+divname);
    var OrderedDivs = divs.sort(function(a,b){

    	i = parseInt($(a).find("."+clsname).text().replace(/[^\d.]/g, ''))
    	j = parseInt($(b).find("."+clsname).text().replace(/[^\d.]/g, ''))

        return ( i - j );
    });

    $("#"+divname+"-holder").html(OrderedDivs);

});
	  

$(".activesortbtn").trigger('click');