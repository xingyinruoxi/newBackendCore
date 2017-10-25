'use strict';
(function () {
    //初使化表单验证
    // function validateInit() {
    //     $('#myform').validate(function () {
    //         rules:{},
    //
    //     });
    // }

    $("#myform").validate({
        rules: {
            aa: {
                required: true,
                minlength: 56
            },
            age: {
                required: true,
                digits:true
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            aa: {
                required: "请输入用fghu户名",
                minlength: "用户名必需adfsaf由两个字母组成"
            },
            age: {
                required: "请输入年龄",
                digits: "必须输入整数"
            },
            email: "请输入一个正确的邮箱"
        }
    });
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
        validateInit();
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