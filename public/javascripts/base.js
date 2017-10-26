'use strict';
(function () {
    //侧边栏高度
    function asideHeight() {
        var $aside = $('#aside');
        var headerH = $('#header').outerHeight(),
            footerH = $('#footer').height(),
            asideH = $aside.outerHeight(true);
        if ($(document).find('#aside').length > 0) {
            if (asideH >= $(window).height() - headerH - footerH) {
                $aside.css('height', $(window).height() - headerH - footerH);
            } else {
                $aside.css('height', '');
            }
        }
    }

    //window resize
    function winSizeAside() {
        $(window).resize(function () {
            asideHeight();
        });
        $('.panel-heading h4').on('click', function () {
            setTimeout(asideHeight, 400)
        })
    }

    //侧边栏切换内容页面
    function curContent() {
        var $iframe = $('#iframe');
        $('.panel-body a,.noBody').click(function () {
            $('#aside .active').removeClass('active');
            if ($(this).hasClass('noBody')) {
                $(this).closest('dt').addClass('active');
            } else {
                $(this).addClass('active');
            }
            $iframe.attr('src', $(this).attr('data-href'));
        });
    }

    function start() {
        //侧边栏高度
        asideHeight();
        //window resize
        winSizeAside();
        //侧边栏切换内容页面
        curContent();
    }

    return {
        start: start
    }
}()).start();