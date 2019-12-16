
// rem布局
var fun = function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth; 
            if (!clientWidth) return;
            //这里是假设在750px宽度设计稿的情况下，1rem = 100px；
            //可以根据实际需要修改
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
fun(document, window)
// 字体大小自适应
// console.log(window.devicePixelRatio);
var iScale = 1;
iScale = iScale/window.devicePixelRatio;
document.write('<meta name="viewport" content="width=device-width,initial-scale=' + iScale + ',minimum-scale=' + iScale + ',maximum-scale=' + iScale + '"/>');
// var iWidth = document.documentElement.clientWidth/16;
// document.getElementsByTagName('html')[0].style.fontSize = iWidth + 'px';
