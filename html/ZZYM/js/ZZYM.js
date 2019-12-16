$(function(){
    //搜索栏显示隐藏
    $(".sous").click(function (e){
        // console.log("单击事件")
        // console.log($("div.search").hasClass("yinc"))
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
    window.location.search;
    console.log(window.location.search.split("?")[1].split("&"));
    var id=window.location.search.split("?")[1].split("&")[0].split("=")[1];
    var tb=window.location.search.split("?")[1].split("&")[1].split("=")[1];
    // 终端页面请求
    $.ajax({
        type: "get",
        url: "http://www.10xunc.com/WSHD/newsContent/content",
        data: {
            id:id,
            tb:tb
        },
        dataType: "JSON",
        success: function (res){
                // console.log(res);
                $("div.title span").html(res.data.title);
                $("div.time span:last-child").html(res.data.add_time);
                $("div.content").html(res.data.content);
                // $("div.lj span").html(res.data.copyfrom);
        }//success
    });
    //搜索功能
    $(".tabSearch").click(function(){
        var val=$("#search").val().trim();
        if(val){
            window.location.href="../search/search.html?keyWord="+val;
        }


    })
    //延伸阅读
    $.ajax({
        type:"get",
        url:"http://www.10xunc.com/WSHD/jiekou5/selectEnd-botton?page=0&num=10",
        data:{},
        dataType:"JSON",
        success:function(res){
            // console.log(res.rementuijian)
            var html="";
            for(var i in res.rementuijian){
                var url="./ZZYM.html",id=res.rementuijian[i].articleId,tb=res.rementuijian[i].tablename,href=url+'?id='+id+'&tb='+tb;
                html+="<div class=list>";
                    html+="<a href="+href+"><img src="+res.rementuijian[i].thumb+" alt=加载出错></a>";
                    html+="<ul>"
                        html+="<li><a href="+href+">"+res.rementuijian[i].title+"</a></li>";
                        html+="<li><a href="+href+">"+res.rementuijian[i].intro+"</a></li>";
                        // html+="<li><span>财经</span></li>";
                    html+="</ul>";
                html+="</div>"

            }
            $("div.lists").html(html)

        }
    });




})
