'use strict';
(function () {
    //侧边栏高度

    function asideHeight() {
        var $aside = $('#aside');
        var headerH = $('#header').outerHeight(),
            footerH = $('#footer').height();

        if ($(document).find('#aside').length > 0) {
            var asideH =$aside.get(0).scrollHeight;
            if (asideH >= $(window).height() - headerH - footerH) {
                $aside.css('height', $(window).height() - headerH - footerH);
            } else {
                $aside.css('height', '');
            }
        }
    }

    //分页添加外边距
    function navPad() {
        var $nav=$('.pagination').closest('nav');
        if(!$nav.hasClass('pad-bottom-20')){
            $nav.addClass('pad-bottom-20');
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
        //分页添加外边距
        // navPad();
    }

    return {
        start: start
    }
}()).start();
'use strict';
(function () {
    //初使化表单验证
    // function validateInit() {
    //     $('#myform').validate(function () {
    //         rules:{},
    //
    //     });
    // }

    //curSelectedNode
    function curSelectedNode() {
        $('.ztree').on('click', '.node_name', function () {
            $('.ztree').find('a').removeClass('curSelectedNode');
            $(this).closest('a').addClass('curSelectedNode');
        })
    }

    //关闭Modal
    function closeModal() {
        var btnClose = $('.btn-modal-close');
        btnClose.on('click', function () {
            var modalId = $(this).closest('.modal').attr('id');
            var selectTitle = $('.curSelectedNode').attr('title');
            if (modalId === 'modal-company') {
                $('#inputCompany').val(selectTitle);
            } else if (modalId === 'modal-office') {
                $('#inputOffice').val(selectTitle);
            }
            $('.modal').modal('hide');
        });
    }

    //归属选择输入框当前状态
    function searchFocus() {
        var modalSelect = $('#modal-company,#modal-office');
        modalSelect.on('shown.bs.modal', function () {
            modalSelect.find('input').focus();
        })
    }

    function start() {
        //初使化表单验证
        //validateInit();
        //curSelectedNode
        curSelectedNode();
        //关闭Modal
        closeModal();
        //归属选择输入框当前状态
        searchFocus();
    }

    return {
        start: start
    }
}()).start();