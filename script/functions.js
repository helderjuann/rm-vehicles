$( function() {

    var currentValue = 0;
    var nowPrice = 0;
    var maxPrice = 70000;
    var isDrag = false;

    $('.pointer-bar').mousedown(function() {
        isDrag = true;
    })

    $(document).mouseup(function() {
        isDrag = false;
        enableTextS();
    })

    $('.price-bar').mousemove(function(e) {
        if (isDrag == true) {
            disableTextS();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if (mouseX < 0)
                mouseX = 0;
            if (mouseX > elBase.width())
                mouseX = el.Base.width();
            
            $('.pointer-bar').css('left',(mouseX-13)+'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.price-bar-fill').css('width',currentValue+'%');

            nowPrice = currentValue / 100 * maxPrice;
            $('.search-price').html('R$'+nowPrice);
        }
    })

    function disableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }

    function enableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }




})