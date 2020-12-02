function init(){
    $('#footerWrapper').load('/layout/footer');
};

$(document).ready(function(){
    init();   
});

// Animations init
new WOW().init();


  $(document).ready(() => {
    // SideNav Button Initialization
    $(".button-collapse").sideNav();
      // SideNav Scrollbar Initialization
      var sideNavScrollbar = document.querySelector('.custom-scrollbar');
      var ps = new PerfectScrollbar(sideNavScrollbar);

// new WOW().init();
});