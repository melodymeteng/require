/**
 * Created by 腾 on 2017/12/10.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
require(['jquery','dialog1'],function ($,dialog) {
    $('#btn').on('click',function () {
        dialog.open({
            width:800,
            height:400,
            title:'fghjkl',
            content:'content.html'
        });
    });
    $('body').on('click','#cancle',function () {
        dialog.close();
    });



    
});