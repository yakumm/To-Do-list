// vanilla js code for the below toggling
// $("li").click(function(){
// 	if($(this).css("color") === "rgb(128, 128, 128)"){
// 		$(this).css("color","black");
// 		$(this).css("text-decoration","none");
// 	}else{
// 		$(this).css("color","grey");
// 		$(this).css("text-decoration","line-through");
// 	}
// });

 
// when we are using class and using jQuery to toggle it
$("ul").on("click", "li", function(){
	$(this).toggleClass("case");
});

// click event to delete todo
$("ul").on("click","span",function(event){
	// fadeOut only makes its display none but remove removes it totally
	$(this).parent().fadeOut(500, function(){//.parent() gives the parent of the span
		$(this).remove();
	});
	event.stopPropagation();//to stop the click getting out of the span
});

$("input[type='text'").keypress(function(key){
	if(key.which ===13){
	var temp = $(this).val();//to add in todo list
	$(this).val("");
	$("ul").append("<li><span><i class = 'fa fa-trash'></i> </span> " + temp+ "</li>");
	}

});

$("input[type='text'").fadeOut(0);

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle();
});
