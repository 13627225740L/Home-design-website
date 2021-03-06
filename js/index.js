$(function(){
    $(".start-slide").click(function(){
        $("#myCarousel").carousel('cycle');
    });
    $(".pause-slide").click(function(){
        $("#myCarousel").carousel('pause');
    });
    $(".prev-slide").click(function(){
        $("#myCarousel").carousel('prev');
    });
    $(".next-slide").click(function(){
        $("#myCarousel").carousel('next');
    });
    $(".slide-one").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".slide-two").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".slide-three").click(function(){
        $("#myCarousel").carousel(2);
    });
});

// 点击搜索
window.onload = function(){
    var tosearch = document.getElementById('tosearch');
    tosearch.onclick = function(){
        var rt = confirm("确定要搜索文件吗？");
        if(rt){
            var is = prompt("!请重新输入")
            if(is!==null){
                alert("您输入的文件有误！")
            }
        }
    }
}