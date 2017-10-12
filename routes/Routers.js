var express = require('express');
var router = express.Router();

router.use('/',  require('./index'));
router.use('/', require('./users'));
//个人信息
router.use('/', require('./personal/r_userinfo'));
router.use('/', require('./personal/r_changepwd'));
//机构用户
router.use('/', require('./company/r_area'));
router.use('/', require('./company/r_company'));
router.use('/', require('./company/r_user'));
router.use('/', require('./company/r_adduser'));
//系统设置
router.use('/', require('./system/r_dictionry'));
router.use('/', require('./system/r_group'));
router.use('/', require('./system/r_menu'));
router.use('/', require('./system/r_role'));
//日志查询
router.use('/', require('./log/r_logquery'));
router.use('/', require('./log/r_poolmonitor'));
//运营管理
router.use('/', require('./operate/r_article'));
router.use('/', require('./operate/r_message'));
module.exports = router;
