  //JavaScript code should be executed in "strict mode"
          "use strict";
		  
   /*--------------------------
        slider Range Plugin
  ----------------------------*/
  
   $( function() {
           $( "#slider-range,#slider-range-1,#slider-range-2,#slider-range-3" ).slider({
             range: true,
             min: 0,
             max: 500,
             values: [ 75, 300 ],
             slide: function( event, ui ) {
               $( "#amount,#amount-1,#amount-2,#amount-3" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
             }
           });
           $( "#amount,#amount-1,#amount-2,#amount-3" ).val( "$" + $( "#slider-range,#slider-range-1,#slider-range-2,#slider-range-3" ).slider( "values", 0 ) +
             " - $" + $( "#slider-range,#slider-range-1,#slider-range-2,#slider-range-3" ).slider( "values", 1 ) );
         } );
   
   
      /*--------------------------
        // This is Function for Filter Side bar Icon Button
       ----------------------------*/
         (jQuery, this); 
		 
          $("#show-filter").on("click", function() {
         if ($("#sidebar").css("display") === "none")
         { $("#sidebar").slideToggle(1000); return false; }
          else { $("#sidebar").slideToggle(1000); return false; } });
		  
		   
	   /*--------------------------
        // This is Function for side-bar Toggle
       ----------------------------*/
		   
			 $("#sb-1").on("click", function() {
              if ($("ul.categories li.collection-item, #scroll").css("display") === "none") {
         	$("ul.categories li.collection-item, #scroll").slideToggle(800);
         	
          return false;
              } else {
         $("ul.categories li.collection-item, #scroll").slideToggle(800);
         
         
         return false;
              }
         });
           $("#sb-2").on("click", function() {
              if ($("ul.range li.collection-item").css("display") === "none") {
         	$("ul.range li.collection-item").slideToggle(800);
          return false;
              } else {
         $("ul.range li.collection-item").slideToggle(800);
         
         return false;
              }
         });
         $("#sb-3").on("click", function() {
              if ($("ul.size li.collection-item").css("display") === "none") {
         	$("ul.size li.collection-item").slideToggle(800);
          return false;
              } else {
         $("ul.size li.collection-item").slideToggle(800);
         
         return false;
              }
         });
         $("#sb-4").on("click", function() {
              if ($("ul.color li.collection-item").css("display") === "none") {
         	$("ul.color li.collection-item").slideToggle(800);
          return false;
              } else {
         $("ul.color li.collection-item").slideToggle(800);
         
         return false;
              }
         });
         $("#sb-5").on("click", function() {
              if ($("ul.sleeves li.collection-item").css("display") === "none") {
         	$("ul.sleeves li.collection-item").slideToggle(800);
         	
          return false;
              } else {
         $("ul.sleeves li.collection-item").slideToggle(800);
         
         return false;
              }
         });
         $("#sb-6").on("click", function() {
              if ($("ul.brand li.collection-item").css("display") === "none") {
         	$("ul.brand li.collection-item").slideToggle(800);
          return false;
              } else {
         $("ul.brand li.collection-item").slideToggle(800);
         
         return false;
              }
         });
         $("#sb-7").on("click", function() {
              if ($("ul.discount li.collection-item").css("display") === "none") {
         	$("ul.discount li.collection-item").slideToggle(800);
          return false;
              } else {
         $("ul.discount li.collection-item").slideToggle(800);
         
         return false;
              }
         });
         $("#sb-8").on("click", function() {
              if ($("ul.rating li.collection-item").css("display") === "none") {
         	$("ul.rating li.collection-item").slideToggle(800);
          return false;
              } else {
         $("ul.rating li.collection-item").slideToggle(800);
         
         return false;
              }
         });

		  
   /*--------------------------
        This is tooltips Plugins
  ----------------------------*/
  
		   $(function () {
           $('[data-toggle="tooltip"]').tooltip()
         })
		   
		   
	    /*--------------------------
          Product store
         ----------------------------*/
         // select all thumbnails
         const galleryThumbnail = document.querySelectorAll(".thumbnails-list li");
         // select featured
         const galleryFeatured = document.querySelector(".product-gallery-featured img");
         
         // loop all items
         galleryThumbnail.forEach((item) => {
         item.addEventListener("mouseover", function () {
           let image = item.children[0].src;
           galleryFeatured.src = image;
         });
         });
		 
		 /*--------------------------
          Toggle for read more and read less
         ----------------------------*/
		 
         $(document).ready(function() {
           $("#toggle").on("click",function() {
             var elem = $("#toggle").text();
             if (elem == "Read More") {
               //Stuff to do when btn is in the read more state
               $("#toggle").text("Read Less");
               $("#text").slideDown();
             } else {
               //Stuff to do when btn is in the read less state
               $("#toggle").text("Read More");
               $("#text").slideUp();
             }
           });
         });
