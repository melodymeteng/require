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
            var _this=this;
            this.defaultValue={ //默认样式
                width:300,
                height:200
            };
            var value=$.extend(this.defaultValue,arg);//extend合并对象 用后一个覆盖前一个（相同属性）并且用第一个显示
            this.$mask=$('<div class="container"></div>');
            this.$container=$(+'<div class="container"></div>');
            this. $title=$(+'<div class="title"></div>');
            this. $h2=$('<h2></h2>').html(value.title);
            this. $close=$('<span class="close"></span>')
                .on('click',function () {
                    _this.close();
                });
            this. $content=$('<div class="content"></div>');
            this.$container.appendTo(this.$mask).append(this.$title).append(this.$content)
                .css({
                width:value.width,
                height:value.height,
                marginLeft:-value.width/2,
                marginTop:-value.height/2
            });
            this.$title.append(this.$h2).append(this.$close);
            this.$content.load(value.content);
            $('body').append(this.$mask);
        },
        close:function () {
            this.$mask.remove();
        }
    }
});