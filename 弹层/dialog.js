/**
 * Created by 腾 on 2017/12/10.
 */
requirejs.config({
    paths:{
        jquery:'jquery-1.12.4'
    }
});
define(['jquery'],function ($) {
    return {
        open:function (arg) {
            this.defaultValue={ //默认样式
              width:300,
              height:200
            };
            var html=   '<div class="mask">'
                            +'<div class="container">'
                                +'<div class="title">'
                                    +'<h2>aaa</h2>'
                                    +'<span class="close">×</span>'
                                +'</div>' 
                                +'<div class="content">weaeawe</div>'
                            +'</div>'
                        +'</div>';
            $('body').append(html);
            var value=$.extend(this.defaultValue,arg);//extend合并对象 用后一个覆盖前一个（相同属性）并且用第一个显示
            $('.container').css({
               width:value.width,
               height:value.height,
               marginLeft:-value.width/2,
               marginTop:-value.height/2
            });
            $('.title h2').html(arg.title);
            $('.content').html(arg.content);
        },
        close:function () {
            
        }
    }
});