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
    // 分页
    $('.M-box11').pagination({mode: 'fixed'});
    function loadData(page) {
        var keyWord=decodeURI(window.location.search.split("?")[1].split("=")[1]);
        // console.log(decodeURI(keyWord))
        $.ajax({
            type: "post",
            url: "http://www.10xunc.com/WSHD/es/select1",
            dataType: "JSON",
            data: {
                keyWord:keyWord,
                page:0,
                num:10
            },
            success: function (res) {
                // console.log(res.data)
                var html="";
                for(var i in res.data){
                    var url="../ZZYM/ZZYM.html",
                    id=res.data[i].aid,
                    tb=res.data[i].tableName,
                    href=url+'?id='+id+'&tb='+tb;
                    html+="<div class=cont>";
                        html+="<a href="+href+"><img src="+res.data[i].thumb+" alt=图片加载失败></a>";
                        html+="<ul>";
                            html+="<li><a href="+href+">"+res.data[i].title+"</a></li>";
                            html+="<li><a href="+href+">"+res.data[i].intro+"</a></li>";
                            html+="<li><span>财经</span></li>";
                        html+="</ul>"
                    html+="</div>";

                }
                $("div.contain").html(html);

                $('.M-box11').pagination({
                    totalData: res.count,
                    showData: res.data.length,
                    current:page,
                    pageCount: 2,
                    callback:function (res){
                        $.ajax({
                            type: "post",
                            url: "http://www.10xunc.com/WSHD/es/select1",
                            data: {
                                keyWord:keyWord,
                                page:0,
                                num:10
                            },
                            dataType: "JSON",
                            success: function (res) {
                                var html="";
                                for(var i in res.data){
                                    var url="../ZZYM/ZZYM.html",
                                    id=res.data[i].aid,
                                    tb=res.data[i].tableName,
                                    href=url+'?id='+id+'&tb='+tb;
                                    html+="<div class=cont>";
                                        html+="<a href="+href+"><img src="+res.data[i].thumb+" alt=图片加载失败></a>";
                                        html+="<ul>";
                                            html+="<li><a href="+href+">"+res.data[i].title+"</a></li>";
                                            html+="<li><a href="+href+">"+res.data[i].intro+"</a></li>";
                                            html+="<li><span>财经</span></li>";
                                        html+="</ul>"
                                    html+="</div>";

                                }
                                $("div.contain").html(html);
                                
                            }
                        });
                    }
                })

            }
        });
    }
    loadData(1);


})
