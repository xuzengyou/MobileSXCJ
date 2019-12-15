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
        //财经轮播图片一开始
        $.ajax({
            type:"post",
            url:"http://www.10xunc.com/WSHD/jiekou7/getHDImage",
            dataType:"JSON",
            data:{
                style:1,
                id:1
            },
            success:function(res){
                console.log(res);
                var url=res.data.articleUrl,id=res.data.articleId,tb=res.data.tablename,href=url+'?id='+id+'&tb='+tb;
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
                style:1,
                id:2
            },
            success:function(res){
                console.log(res);
                var url=res.data.articleUrl,id=res.data.articleId,tb=res.data.tablename,href=url+'?id='+id+'&tb='+tb;
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
                style:1,
                id:3
            },
            success:function(res){
                console.log(res);
                var url=res.data.articleUrl,id=res.data.articleId,tb=res.data.tablename,href=url+'?id='+id+'&tb='+tb;
                var html="";
                html+="<a href="+href+">";
                    html+="<img src="+res.data.imageUrl+" alt=>";
                html+="</a>";
                html+="<a href="+href+">"+res.data.articleTitle+"</a>";
                $(".slideThree").html(html);

            }
        });
        //财经轮播图片一结束


















})


