'use strict';
(function () {
    //初使化表单验证
    function validateInit() {
        $("#myform").validate();
    }
    //关闭Modal
    function closeModal() {
        var btnClose=$('.btn-modal-close');
        btnClose.on('click',function () {
            var modalId=$(this).closest('.modal').attr('id');
            var selectTitle= $('.curSelectedNode').attr('title');
            if(modalId==='modal-company'){
                $('#inputCompany').val(selectTitle);
            }else if(modalId==='modal-office'){
                $('#inputOffice').val(selectTitle);
            }
            $('.modal').modal('hide');

        });
    }
    //归属选择输入框当前状态
    function searchFocus() {
        var modalSelect=$('#modal-company,#modal-office')
        modalSelect.on('shown.bs.modal', function () {
            modalSelect.find('input').focus()
        })

    }
    function start() {
        //初使化表单验证
         validateInit();
        //关闭Modal
         closeModal();
        //归属选择输入框当前状态
         searchFocus();
    }
    return {
        start:start
    }
}()).start();