function init(){
    $('#footerWrapper').load('/layout/footer');
};

$(document).ready(function(){
    init();   
});

// Animations init
// new WOW().init();


  $(document).ready(() => {
    // SideNav Button Initialization
    // $(".button-collapse").sideNav();
    //   // SideNav Scrollbar Initialization
    //   var sideNavScrollbar = document.querySelector('.custom-scrollbar');
    //   var ps = new PerfectScrollbar(sideNavScrollbar);

    if(window.width < 1440){
      $('body').append('<div class="drag-sidenav" style="left: 0px; width: 10px;"></div>');
      $('.drag-sidenav').on('click',function(){

      });
      console.log('sidenav')
      

    }

// new WOW().init();
});









$('#openSideNav').on('click', function(){
    $('#slide-out-nav').css('transform','translate(0)');
});

$('.collapsible-header').on('click',function(){
  $(this).hasClass('active')?($('.active').removeClass('active'), $('.collapsible-body').slideUp('fast')):($('.active').removeClass('active'),$(this.parentNode).toggleClass('active'),
  $(this).toggleClass('active'), $('.collapsible-body').slideUp('fast'), $($(this.parentNode).find('.collapsible-body')).slideDown('fast'));
  // $($(this.parentNode).find('.collapsible-body')).slideToggle("slow");

  
  
})