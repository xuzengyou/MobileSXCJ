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

    //外汇轮播图片一开始
    $.ajax({
        type:"post",
        url:"http://www.10xunc.com/WSHD/jiekou7/getHDImage",
        dataType:"JSON",
        data:{
            style:4,
            id:1
        },
        success:function(res){
            // console.log(res);
            var url="../ZZYM/ZZYM.html",id=res.data.articleId,tb=res.data.tablename,href=url+'?id='+id+'&tb='+tb;
            var html="";
            html+="<a href="+href+">";
                html+="<img src="+res.data.imageUrl+" alt=>";
            html+="</a>";
            html+="<a href="+href+">"+res.data.articleTitle+"</a>";
            $(".slideOne").html(html);

        }
    });
    $.ajax({
        type:"post",
        url:"http://www.10xunc.com/WSHD/jiekou7/getHDImage",
        dataType:"JSON",
        data:{
            style:4,
            id:2
        },
        success:function(res){
            // console.log(res);
            var url="../ZZYM/ZZYM.html",id=res.data.articleId,tb=res.data.tablename,href=url+'?id='+id+'&tb='+tb;
            var html="";
            html+="<a href="+href+">";
                html+="<img src="+res.data.imageUrl+" alt=>";
            html+="</a>";
            html+="<a href="+href+">"+res.data.articleTitle+"</a>";
            $(".slideTwo").html(html);

        }
    });
    $.ajax({
        type:"post",
        url:"http://www.10xunc.com/WSHD/jiekou7/getHDImage",
        dataType:"JSON",
        data:{
            style:4,
            id:3
        },
        success:function(res){
            // console.log(res);
            var url="../ZZYM/ZZYM.html",id=res.data.articleId,tb=res.data.tablename,href=url+'?id='+id+'&tb='+tb;
            var html="";
            html+="<a href="+href+">";
                html+="<img src="+res.data.imageUrl+" alt=>";
            html+="</a>";
            html+="<a href="+href+">"+res.data.articleTitle+"</a>";
            $(".slideThree").html(html);

        }
    });
    //股票轮播图片一结束

    //图文结合部分
    $.ajax({
        type:"post",
        url:"http://www.10xunc.com/WSHD/news/Foreignexchange_news_list",
        data:{
            page:1,
            limit:9
        },
        dataType:"JSON",
        success:function(res){
            // console.log(res)
            var html="";
            for(var i in res.data){
                var url="../ZZYM/ZZYM.html",id=res.data[i].id,tb=res.data[i].table_name,href=url+'?id='+id+'&tb='+tb;
                html+="<div class=cont>";
                    html+="<a href="+href+"><img src="+res.data[i].news_img+" alt=加载出错></a>";
                    html+="<ul>"
                        html+="<li><a href="+href+">"+res.data[i].news_title+"</a></li>";
                        html+="<li><a href="+href+">"+res.data[i].news_introduction+"</a></li>";
                        html+="<li><span>外汇</span></li>";
                    html+="</ul>";
                html+="</div>"

            }
            $("div.contain").html(html)

        }
    });
    //搜索功能
    $(".tabSearch").click(function(){
        var val=$("#search").val().trim();
        if(val){
            window.location.href="../search/search.html?keyWord="+val;
        }


    })




})
