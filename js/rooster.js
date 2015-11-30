$("summary").on("click", function(e){
	$(this).toggleAria({aria: "expanded"});
	$(this).next().toggleAria({aria: "hidden"});
});