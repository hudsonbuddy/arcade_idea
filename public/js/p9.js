
var slyelement = {
      obj: {},
        el: '.frame',
          options: {
                  horizontal: 1,
                      itemNav: 'forceCentered',
                          smart: 1,
                              activateMiddle: 1,
                                  activateOn: 'click',
                                      mouseDragging: 1,
                                          touchDragging: 1,
                                              releaseSwing: 1,
                                                  startAt: 0,
                                                      scrollBy: 1,
                                                          speed: 300,
                                                              elasticBounds: 1,
                                                                  easing: 'swing', // easeInOutElastic, easeOutBounce
                                                                      scrollBar: $('.scrollbar')
                                                                        }
};


$(function(){
      slyelement.obj = new Sly($(slyelement.el), slyelement.options);
        
          slyelement.obj.init();
});

$(window).resize(function(e) {
      slyelement.obj.reload();
});
document.onkeydown= function (event) {


    if (event.which == 37 || event.keyCode == 37) {
            console.log("left"); 
            window.location.href = "/p8";
            return false;
        }
    if (event.which == 39 || event.keyCode == 39) {
            console.log("right"); 
            window.location.href = "/test";
            return false;
        }
        else
            console.log(event.which);
       
    return true;

};

