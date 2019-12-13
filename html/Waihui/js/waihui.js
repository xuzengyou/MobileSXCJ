$(function(){
    //搜索栏显示隐藏
    $(".sous").click(function (e){
        // console.log("单击事件")
        console.log($("div.search").hasClass("yinc"))
    if($("div.search").hasClass("yinc")){
    $("div.search").removeClass("yinc")
    }else{
    $("div.search").addClass("yinc")
    }
        
    });
    // 导航栏显示隐藏
    $(".daoh").click(function (e){
    if($("div.Tnav").hasClass("yinc")){
    $("div.Tnav").removeClass("yinc")
    }else{
    $("div.Tnav").addClass("yinc")
    }

    });
    $(".Navigation").click(function (e){
    if($("div.Snav").hasClass("yinc")){
    $("div.Snav").removeClass("yinc")
    }else{
    $("div.Snav").addClass("yinc")
    }

    });



})
