function init(){
    $('#footerWrapper').load('/layout/footer');
};

$(document).ready(function(){
    init();   
});

// Animations init
// new WOW().init();


$(window).bind("load", function() { 
  // insert your code here 
  if(window.innerWidth < 1440){
    $('main').append('<div class="drag-sidenav" style="position: fixed;left: 0;top:0; width:10px;height: 90vh;"></div>');
    $('<div class="mask nav-mask"></div>').insertBefore('footer');
      $('.drag-sidenav').on('click',function(){
        $('#openSideNav').trigger('click');
      });
      $('.nav-mask').on('click', function(){
        $('#openSideNav').trigger('click');
      });
  }
});



$('#openSideNav').on('click', function(){
      $('#slide-out-nav').hasClass('nav-expanded')? 
      ($('#slide-out-nav').css('transform', 'translateX(-241px)').toggleClass('nav-expanded'),$('.nav-mask').removeClass('nav-mask-active')):  
      ($('#slide-out-nav').css('transform','translateX(0px)').toggleClass('nav-expanded'),$('.nav-mask').addClass('nav-mask-active'))
});

$('.collapsible-header').on('click',function(){
  $(this).hasClass('active')?($('.active').removeClass('active'), $('.collapsible-body').slideUp('fast')):($('.active').removeClass('active'),$(this.parentNode).toggleClass('active'),
  $(this).toggleClass('active'), $('.collapsible-body').slideUp('fast'), $($(this.parentNode).find('.collapsible-body')).slideDown('fast'));
  // $($(this.parentNode).find('.collapsible-body')).slideToggle("slow");
});

function register(){
  $('#myTab a[href="#register"]').trigger('click');
}
function login(){
  $('#myTab a[href="#signIn"]').trigger('click');
}