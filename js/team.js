$(function(){
    //获取文本的行高，并获取文本的高度，假设我们规定的行数是五行，那么对超过行数的部分进行限制高度，并加上省略号
      $('p').each(function(i, obj){
           var lineHeight = parseInt($(this).css("line-height"));
           var height = parseInt($(this).height());
           if((height / lineHeight) >11 ){
               $(this).addClass("p-after")
               $(this).css("height","320px");
           }else{
               $(this).removeClass("p-after");
           }
       });
   })