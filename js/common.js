        (function (window){  //传入window，提高变量的查找效率
                function myQuery(selector){  //这个函数就是对外提供的接口。
                    //调用这个函数的原型对象上的_init方法，并返回
                    return myQuery.prototype._init(selector);
                }
                myQuery.prototype = {
                    /*初始化方法，获取当前query对象的方法*/
                    _init: function (selector){
                        if (typeof selector == "string"){
                            //把查找到的元素存入到这个原型对象上。
                            this.ele = window.document.querySelector(selector);
                            //返回值其实就是原型对象。
                            return this;
                        }
                    },
                    /*单击事件：
                    * 为了规避click的300ms的延迟，自定义一个单击事件
                    * 触发时间：
                    *   当抬起手指的时候触发
                    *   需要判断手指落下和手指抬起的事件间隔，如果小于500ms表示单击时间。
                    *   如果是大于等于500ms，算是长按时间
                    * */
                    tap: function (handler){
                        this.ele.addEventListener("touchstart", touchFn);
                        this.ele.addEventListener("touchend", touchFn);

                        var startTime,
                            endTime;

                        function touchFn(e){
                            e.preventDefault()
                            switch (e.type){
                                case "touchstart":
                                    startTime = new Date().getTime();
                                    break;
                                case "touchend":
                                    endTime = new Date().getTime();
                                    if (endTime - startTime < 500){
                                        handler.call(this, e);
                                    }
                                    break;
                            }
                        }
                    },
                    /**
                     * 长按
                     * @param handler
                     */
                    longTag: function (handler){
                        this.ele.addEventListener("touchstart", touchFn);
                        this.ele.addEventListener("touchmove", touchFn);
                        this.ele.addEventListener("touchend", touchFn);
                        var timerId;

                        function touchFn(e){
                            switch (e.type){
                                case "touchstart" :  //500ms之后执行
                                    timerId = setTimeout(function (){
                                        handler.call(this, e);
                                    }, 500)
                                    break;
                                case "touchmove" :
                                    //如果中间有移动也清除定时器
                                    clearTimeout(timerId)
                                    break;
                                case "touchend" :
                                    //如果在500ms之内抬起了手指，则需要定时器
                                    clearTimeout(timerId);
                                    break;
                            }
                        }
                    },
                    /**
                     * 左侧滑动。
                     * 记录手指按下的左边，在离开的时候计算 deltaX是否满足左滑的条件         
                     */
                    slideLeft: function (handler){
                        this.ele.addEventListener("touchstart", touchFn);
                        this.ele.addEventListener("touchend", touchFn);
                        var startX, startY, endX, endY;

                        function touchFn(e){
                            e.preventDefault();
                            var firstTouch = e.changedTouches[0];
                            switch (e.type){
                                case "touchstart":
                                    startX = firstTouch.pageX;
                                    startY = firstTouch.pageY;
                                    break;
                                case "touchend":
                                    endX = firstTouch.pageX;
                                    endY = firstTouch.pageY;
                                    //x方向移动大于y方向的移动，并且x方向的移动大于25个像素，表示在向左侧滑动
                                    if (Math.abs(endX - startX) >= Math.abs(endY - startY) && startX - endX >= 25){
                                        handler.call(this, e);
                                    }
                                    break;
                            }
                        }
                    },
                    /* 右侧滑动 */
                    rightLeft: function (e){
                        //TODO:
                    }
                }
                window.$ = window.myQuery = myQuery;
            })(window);

            // ========================
            // 使用：
            // $("div").tap(function (e){
            //     console.log("单击事件")
            // })
            // $("div").longTag(function (e){
            //     console.log("长按事件");
            // })
            // $("div").slideLeft(function (e){
            //     console.log(this);
            //     this.innerHTML = "左侧滑动了....."
            // })

            // //自适应rem布局
            // var fun = function (doc, win) {
            //     var docEl = doc.documentElement,
            //         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            //         recalc = function () {
            //             var clientWidth = docEl.clientWidth; 
            //             if (!clientWidth) return;
            //             //这里是假设在750px宽度设计稿的情况下，1rem = 100px；
            //             //可以根据实际需要修改
            //             docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            //         };
            //     if (!doc.addEventListener) return;
            //     win.addEventListener(resizeEvt, recalc, false);
            //     doc.addEventListener('DOMContentLoaded', recalc, false);
            // }
            // fun(document, window);

            window.onload = function(){
                /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
                  为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
                getRem(750,100)
            };
            window.onresize = function(){
                getRem(750,100)
            };
            function getRem(pwidth,prem){
                var html = document.getElementsByTagName("html")[0];
                var oWidth = document.body.clientWidth || document.documentElement.clientWidth;
                html.style.fontSize = oWidth/pwidth*prem + "px";
            }