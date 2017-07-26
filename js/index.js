/*
* @Author: Marte
* @Date:   2017-07-26 21:49:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-07-26 22:39:28
*/
/*获取所有的a，循环遍历所有a，为每一个a添加点击事件
    当点击某个a标签的时候，获取到当前a标签对应的target属性值
    并显示在面板中，让上一个a标签的样式清除，并在面板中清除*/
(function(index){
    var allA=document.querySelectorAll("a");
    for(var i=0 ;i<allA.length; i++){
        if(i===index){
            allA[i].classList.add("active");
            var firstTarget=allA[i].dataset["target"];
            document.querySelector("#"+firstTarget).style.display="block";
        }
        allA[i].addEventListener("click",function(){
            var lastA=document.querySelector(".active");
            lastA.classList.remove("active");
            var lastTarget=lastA.dataset["target"];
            document.querySelector("#"+lastTarget).style.display="none";
            this.classList.add("active");
            var target=this.dataset["target"];
            document.querySelector("#"+target).style.display="block";
        });
    }
})(3);