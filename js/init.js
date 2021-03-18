//JavaScript code should be executed in "strict mode"
"use strict";

/*--------------------------
    Materialize js customization
----------------------------*/

	$(document).ready(function(){
		$('.sidenav').sidenav();
	    $('.modal').modal();
		$(".dropdown-trigger").dropdown();
		$('.collapsible').collapsible();
		$('select').formSelect();
		$('input#input_text, textarea#textarea2').characterCounter();
		 $('.tooltipped').tooltip({delay: 50});
		
		
	  });
	
	