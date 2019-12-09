
$(".sous").click(function (e){
            console.log("单击事件")
            console.log($("div.search").hasClass("yinc"))
    if($("div.search").hasClass("yinc")){
        $("div.search").removeClass("yinc")
    }else{
        $("div.search").addClass("yinc")
    }
            
})