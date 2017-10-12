'use strict';
var setting = {
    data: {
        simpleData: {
            enable: true,
            idKey: "id",
            pIdKey: "pId",
            rootPId: 0
        }
    }
};
var zNodes=[
        {id:1, pId:0, name: "父节点1"},
        {id:11, pId:1, name: "子节有点1"},
        {id:12, pId:1, name: "子节点2"}
    ];
/*var zNodes = [
    {
        name: "父节点1 - 展开", open: true,
        children: [
            {
                name: "父节点11 - 折叠",
                children: [
                    {name: "叶子节点111"},
                    {name: "叶子节点112"},
                    {name: "叶子节点113"},
                    {name: "叶子节点114"}
                ]
            },
            {
                name: "父节点12 - 折叠",
                children: [
                    {name: "叶子节点121"},
                    {name: "叶子节点122"},
                    {name: "叶子节点123"},
                    {name: "叶子节点124"}
                ]
            },
            {name: "父节点13 - 没有子节点", isParent: true}
        ]
    },
    {
        name: "父节点2 - 折叠",
        children: [
            {
                name: "父节点21 - 展开", open: true,
                children: [
                    {name: "叶子节点211"},
                    {name: "叶子节点212"},
                    {name: "叶子节点213"},
                    {name: "叶子节点214"}
                ]
            },
            {
                name: "父节点22 - 折叠",
                children: [
                    {name: "叶子节点221"},
                    {name: "叶子节点222"},
                    {name: "叶子节点223"},
                    {name: "叶子节点224"}
                ]
            }
        ]
    },
    {name: "父节点3 - 没有子节点", isParent: true}

];*/
$(function () {
    $.fn.zTree.init($(".ztree"), setting, zNodes);
});