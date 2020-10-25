$(document).ready(function(){
 //Satrt the  wow  animation 
 var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
    
  
    
//end of  the wow animatio 
    
    
  
$(".heart").click(function(){

$(".serch-page").fadeIn();

}); 
    
$(".closee img").click(function(){
$(".serch-page").fadeOut();


});
        

    
 //model1   
$(" .models .model1 .image1 img").mouseenter(function(){
    $(this).css({opacity:"0"});
    
$(".models .model1 .image2 img").css({opacity:"1"}) ;
    
   
});
    
$(" .models .model1 .image1 img").mouseleave(function(){
    $(this).css({opacity:"1"});
$(" .models .model1 .image2 img").css({opacity:"0"}) ;
    
});
//model2
$(" .models .model2 .image1 img").mouseenter(function(){
    $(this).css({opacity:"0"});
    
$(".models .model2 .image2 img").css({opacity:"1"}) ;
    
   
});
    
$(" .models .model2 .image1 img").mouseleave(function(){
    $(this).css({opacity:"1"});
$(" .models .model2 .image2 img").css({opacity:"0"}) ;
    
});
    
    
//model3
$(" .models .model3 .image1 img").mouseenter(function(){
    $(this).css({opacity:"0"});
    
$(".models .model3 .image2 img").css({opacity:"1"}) ;
    
   
});
    
$(" .models .model3 .image1 img").mouseleave(function(){
    $(this).css({opacity:"1"});
$(" .models .model3 .image2 img").css({opacity:"0"}) ;
    
}); 
//model4
$(" .models .model4 .image1 img").mouseenter(function(){
    $(this).css({opacity:"0"});
    
$(".models .model4 .image2 img").css({opacity:"1"}) ;
    
   
});
    
$(" .models .model4 .image1 img").mouseleave(function(){
    $(this).css({opacity:"1"});
$(" .models .model4 .image2 img").css({opacity:"0"}) ;
    
}); 
//model5
$(" .models .model5 .image1 img").mouseenter(function(){
    $(this).css({opacity:"0"});
    
$(".models .model5 .image2 img").css({opacity:"1"}) ;
    
   
});
    
$(" .models .model5 .image1 img").mouseleave(function(){
    $(this).css({opacity:"1"});
$(" .models .model5 .image2 img").css({opacity:"0"}) ;
    
});     
    
    
    
$('.bxslider').bxSlider({
 slideWidth: 300,
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 10 ,
    auto:true  ,
    responsive:true
});
    
    
    
    $('.bx-slider').bxSlider({
 slideWidth: 300,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 1,
    slideMargin: 10 ,
    auto:true  ,
    responsive:true
});
    
    
    
  $('.slider1').bxSlider({
    slideWidth: 200,
    minSlides: 1,
    maxSlides: 1,
    slideMargin: 10,
    mode:'fade',
    
 
      
  });
    
$(window).scroll(function(){
    
var $navheight = $('.nav').height()  ; 
    
var $scrolltop = $(window).scrollTop() ; 


    
    if($scrolltop > $navheight )
    {
    $('header .nav').addClass('scrolled') ;    
     
    }
    else if ($scrolltop == 0 )
    {
    
     $('header .nav').removeClass('scrolled') ;
        
    }



}) ; 
    
    
  
$("head").height($(window).height()) ;
    
    


    
      
 $(".main-menue").click(function(){
 
$(".main-menue ul").toggle() ; 
     
 });

    
    
    
$(".side-bar span .fa").click(function(){
 
 $(".side-bar").css("width" , "0");
 $("h1").css("margin-left", "0 ");
 
 });
    
    
/*Start side bar */
    
    

  
    $('.sidebar-menu').mouseenter(function(){
      $(this).children('.expand').addClass('turn');
    });
  
    $('.sidebar-menu').mouseleave(function(){
      if ($(this).hasClass('open')) {
      } else {
        $(this).children('.expand').removeClass('turn');
      }
    });
    
    $('.sidebar-menu').click(function () {
      var $this = $(this);
      if ($this.hasClass('open')) {
        $('.sidebar-menu').removeClass('open');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');        
        $this.removeClass('open');
        $this.children('.expand').removeClass('turn');
        $this.next().stop(true).slideUp("fast");
      }    
      else {
        $('.sidebar-menu').removeClass('open');
        $('.sub-menu').stop(true).slideUp("fast");
        $('.expand').removeClass('turn');
        
        $this.addClass('open');
        $this.children('.expand').addClass('turn');
        $this.next().stop(true).slideDown("fast");
        }
    });
//start new sidebar

  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });  
    
    
  /*Start the style of page2*/
    
    

    
  
  var $slider = $(".slider"),
      $slideBGs = $(".slide__bg"),
      diff = 0,
      curSlide = 0,
      numOfSlides = $(".slide").length-1,
      animating = false,
      animTime = 500,
      autoSlideTimeout,
      autoSlideDelay = 6000,
      $pagination = $(".slider-pagi");
  
  function createBullets() {
    for (var i = 0; i < numOfSlides+1; i++) {
      var $li = $("<li class='slider-pagi__elem'></li>");
      $li.addClass("slider-pagi__elem-"+i).data("page", i);
      if (!i) $li.addClass("active");
      $pagination.append($li);
    }
  };
  
  createBullets();
  
  function manageControls() {
    $(".slider-control").removeClass("inactive");
    if (!curSlide) $(".slider-control.left").addClass("inactive");
    if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
  };
  
  function autoSlide() {
    autoSlideTimeout = setTimeout(function() {
      curSlide++;
      if (curSlide > numOfSlides) curSlide = 0;
      changeSlides();
    }, autoSlideDelay);
  };
  
  autoSlide();
  
  function changeSlides(instant) {
    if (!instant) {
      animating = true;
      manageControls();
      $slider.addClass("animating");
      $slider.css("top");
      $(".slide").removeClass("active");
      $(".slide-"+curSlide).addClass("active");
      setTimeout(function() {
        $slider.removeClass("animating");
        animating = false;
      }, animTime);
    }
    window.clearTimeout(autoSlideTimeout);
    $(".slider-pagi__elem").removeClass("active");
    $(".slider-pagi__elem-"+curSlide).addClass("active");
    $slider.css("transform", "translate3d("+ -curSlide*100 +"%,0,0)");
    $slideBGs.css("transform", "translate3d("+ curSlide*50 +"%,0,0)");
    diff = 0;
    autoSlide();
  }

  function navigateLeft() {
    if (animating) return;
    if (curSlide > 0) curSlide--;
    changeSlides();
  }

  function navigateRight() {
    if (animating) return;
    if (curSlide < numOfSlides) curSlide++;
    changeSlides();
  }

  $(document).on("mousedown touchstart", ".slider", function(e) {
    if (animating) return;
    window.clearTimeout(autoSlideTimeout);
    var startX = e.pageX || e.originalEvent.touches[0].pageX,
        winW = $(window).width();
    diff = 0;
    
    $(document).on("mousemove touchmove", function(e) {
      var x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = (startX - x) / winW * 70;
      if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
      $slider.css("transform", "translate3d("+ (-curSlide*100 - diff) +"%,0,0)");
      $slideBGs.css("transform", "translate3d("+ (curSlide*50 + diff/2) +"%,0,0)");
    });
  });
  
  $(document).on("mouseup touchend", function(e) {
    $(document).off("mousemove touchmove");
    if (animating) return;
    if (!diff) {
      changeSlides(true);
      return;
    }
    if (diff > -8 && diff < 8) {
      changeSlides();
      return;
    }
    if (diff <= -8) {
      navigateLeft();
    }
    if (diff >= 8) {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-control", function() {
    if ($(this).hasClass("left")) {
      navigateLeft();
    } else {
      navigateRight();
    }
  });
  
  $(document).on("click", ".slider-pagi__elem", function() {
    curSlide = $(this).data("page");
    changeSlides();
  });
  
 //end of style page2
/*Satrt the page3 */
/*Start the slider*/
    //Function to animate slider captions 
    function doAnimations( elems ) {
		//Cache the animationend event in a variable
		var animEndEv = 'webkitAnimationEnd animationend';
		
		elems.each(function () {
			var $this = $(this),
				$animationType = $this.data('animation');
			$this.addClass($animationType).one(animEndEv, function () {
				$this.removeClass($animationType);
			});
		});
	}
	
	//Variables on page load 
	var $myCarousel = $('#carousel-example-generic'),
		$firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");
		
	//Initialize carousel 
	$myCarousel.carousel();
	
	//Animate captions in first slide on page load 
	doAnimations($firstAnimatingElems);
	
	//Pause carousel  
	$myCarousel.carousel('pause');
	
	
	//Other slides to be animated on carousel slide event 
	$myCarousel.on('slide.bs.carousel', function (e) {
		var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
		doAnimations($animatingElems);
	});  
    $('#carousel-example-generic').carousel({
        interval:3000,
        pause: "false"
    });
	
/*end the slider*/
$("#slider").slider({
     range: "min",
      value: 37,
      min: 1,
      max: 700,
	      slide: function( event, ui ) {
             $( "#amount" ).val( "$" + ui.value );
				
			},
        change: function( event, ui ) {

                if( ui.value > 100 && ui.value< 150){
                
               $(".product1").addClass('test'); 
               $(".product1").siblings().removeClass("test") ;
             
                     
                }
            
               else if( ui.value >150 && ui.value < 200){
                
              
                $(".products .product2").addClass('test'); 
                 $(".products .product2").siblings().removeClass("test") ;      
                }
            
               else if( ui.value >200 && ui.value < 700){
                
              
                $(".products .product3").addClass('test'); 
                 $(".products .product3").siblings().removeClass("test") ;      
                }
               
                
               
        	}
          
});

$( "#amount" ).val( "$" + $( "#slider" ).slider( "value" ) );
  
    
});
        
    
    
