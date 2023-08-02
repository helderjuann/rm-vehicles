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
                mouseX = elBase.width();
            
            $('.pointer-bar').css('left',(mouseX-13)+'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.price-bar-fill').css('width',currentValue+'%');

            nowPrice = currentValue / 100 * maxPrice;
            nowPrice = formatPrice(nowPrice);
            $('.search-price').html('R$'+nowPrice);
        }
    })

    function formatPrice(nowPrice) {
        nowPrice = nowPrice.toFixed(2);
        priceArr = nowPrice.split('.');

        var newPrice = formatTotal(priceArr);

        return newPrice;
    }

    function formatTotal(priceArr) {
        if (priceArr[0] < 1000) {
            return priceArr[0]+','+priceArr[1];
        } else if (priceArr[0] < 10000) {
            return priceArr[0][0]+'.'+priceArr[0].substr(1,priceArr[0].length)+
            ','+priceArr[1];
        } else {
            return priceArr[0][0]+priceArr[0][1]+'.'+priceArr[0].substr(2,priceArr[0].length)+
            ','+priceArr[1];
        }
    }

    function disableTextS() {
        $('body').css('-webkit-user-select','none');
        $('body').css('-moz-user-select','none');
        $('body').css('-ms-user-select','none');
        $('body').css('-o-user-select','none');
        $('body').css('user-select','none');
    }

    function enableTextS() {
        $('body').css('-webkit-user-select','auto');
        $('body').css('-moz-user-select','auto');
        $('body').css('-ms-user-select','auto');
        $('body').css('-o-user-select','auto');
        $('body').css('user-select','auto');
    }

    desktopScroll();

    function desktopScroll() {
        $('#contact').click(function() {
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1000);
            return false;
        });
    }

    var amtStatement = $('.statement-single p').length;
    var curIndex = 0;

    startStatements();
    browseStatements();

    function startStatements() {
        $('.statement-single p').hide();
        $('.statement-single p').eq(0).show();
    }

    function browseStatements() {
        $('[next]').click(function() {
            curIndex++;
            if (curIndex >= amtStatement)
                curIndex = 0;
            $('.statement-single p').hide();
            $('statement-single p').eq(0).show();
        })

        $('[prev]').click(function() {
            curIndex--;
            if (curIndex < 0)
                curIndex = amtStatement-1;
                $('.statement-single p').hide();
                $('statement-single p').eq(curIndex).show();
        })
    }

})