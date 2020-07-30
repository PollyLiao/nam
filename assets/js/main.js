$(document).ready(function() {
	
	/////////////////////////////
	//       首頁輪播           //
	////////////////////////////

	 $('.bannerIND').slick({
		
	});
	
	/////////////////////////////////////////////
	//   背景        小裝置小圖  大裝置大圖        //
	/////////////////////////////////////////////            
	  xsBGLoad();
	  $(window).resize(xsBGLoad);
  
	  function xsBGLoad() {
		  var winWidth = $(window).width();
		  if (winWidth < 641) {
			  $('.xsBGshow').each(function() {
				  var smallsrc = $(this).data('small');
				  $(this).css('background-image', 'url("' + smallsrc + '")');
			  });
		  } else {
			  $('.xsBGshow').each(function() {
				  var largesrc = $(this).data('large');
				  $(this).css('background-image', 'url("' + largesrc + '")');
			  });
		  }
	  }

	////////////////////////////////////
    //        Smooth Scrolling        //
    ////////////////////////////////////	

	  $('a[href*=#]:not([href=#])').click(function() {
		  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
	  
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			  if (target.length) {
				  $('html,body').animate({
					  scrollTop: target.offset().top
				  }, 500);
				  return false;
			  }
		  }
	  }); 
	  
 	////////////////////////////////////
    //          商品小圖變大圖          //
    //////////////////////////////////// 

  	$('.productBig').slick({
	  autoplay:true,
	  autoplaySpeed:3600,
	  speed: 500,
	  
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  
	  fade: true,
	  asNavFor: '.productSmall',
	  //autoplay:true,
	  pauseOnHover: false,
	  dots: false,
	  arrows: true,
	  appendArrows: $('Arrow02'),     
	  prevArrow: $('.slick-prev'),
	  nextArrow: $('.slick-next'),
	});
	$('.productSmall').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  asNavFor: '.productBig',
	  dots: false,
	  arrows: false,
	  //centerMode: true,
	  focusOnSelect: true,
	  vertical: true,
	  infinite: false,
	  //autoplay: true,
	  pauseOnHover: false,
	});
	
	
	////////////////////////////////////
    //        lightBox手風琴選單        //
    ////////////////////////////////////
		 
	$(function(){
		// 幫 div.sele_title 加上 hover 及 click 事件
		// 同時把兄弟元素 div.sele_content 隱藏起來
		$('.seleContent ul.accordionPart li div.sele_title').hover(function(){
			$(this).addClass('sele_title_on');
		}, function(){
			$(this).removeClass('sele_title_on');
		}).click(function(){
			// 當點到標題時，若答案是隱藏時則顯示它；反之則隱藏
			$(this).next('div.sele_content').slideToggle();
		}).siblings('div.sele_content').hide();

		$('#seleContent ul.accordionPart li div.sele_content:first').show();
	});
	
	////////////////////////////////////
    //        點開lightBox 選單       //
    ////////////////////////////////////	
	
	$(".aahotBtn, .aaselectCollec, .aaselectCollec01").click(function(){
    $(".selectSide").fadeIn(300); 
	 $("body").css("overflow","hidden")   
  });
	$(".aacloseX").click(function(){
		$(".selectSide").fadeOut(300);
		 $("body").css("overflow","auto")   
	})
	
	
	$(".aacarBox01").click(function(){
    $(".aacarSide").fadeIn(300); 

  });
	$(".aacloseX").click(function(){
		$(".aacarSide").fadeOut(300)
 
	})

	////////////////////////////////////
    //           小小動畫區      	       //
    ////////////////////////////////////
  
  	//產品列表動畫
	$('.productList li').addClass('hide');
    	$('.productList li').each(function(index, element) {
        $(element).waypoint(function() {
        $(element).addClass('animated-slow fadeIn');
		 $(element).removeClass('hide');
     		}, {
         offset: '80%'
     	});
    });
	
	 //最新消息動畫
	 
	$('.newsLine li').addClass('hide');
    	$('.newsLine li').each(function(index, element) {
        $(element).waypoint(function() {
        $(element).addClass('animated-slow fadeIn');
		 $(element).removeClass('hide');
     		}, {
         offset: '80%'
     	});
    });
	////////////////////////////////////
    //           小小動畫區      	       //
    ////////////////////////////////////
		
	$(".aaGoTop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('.aaGoTop').fadeIn(300);
        } else {
            $('.aaGoTop').stop().fadeOut(300);
        }
    });
	
	
	//colletion Detail頁 購買商品按鈕
	
	$(".aacarBox").click(function(){
		//$(".aacarBox").fadeOut();
        //$(".aacarBoxShow").css({'right':'27px',})
		$(".aacarBoxShow").addClass('openPro');
		$(".aacarBox").addClass('hideSpan');
	});	
	 
	$(".aacarBoxShow").click(function(){
		//$(".aacarBoxShow").css({'right':'-267px','z-index':'-1'})
		//$(".aacarBox").fadeIn(100);
		$(".aacarBoxShow").removeClass('openPro');
		$(".aacarBox").removeClass('hideSpan');
		
	});
	
	
	
	$("#menuBtn").click(function(){
		$(".menu").fadeIn(300); 
	});
	

	$("#menuBtn-s").click(function(){
		$(".menu-phone").fadeIn(300); 
	});
	$(".closeX-s").click(function(){
		$(".menu-phone").fadeOut(300); 
	})
	
	

 

	
});
  


	
 
	
	
	
	

 

	
	


