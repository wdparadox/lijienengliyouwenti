(function(){
    var  start= -3;
         len = 0,
         count = 0;
    function add(){
        start+=3;
        len+=3;
        count++;
        request("start=" + start + "" ,"http://kaohe.zeroling.com/kaohe/list",function(e){
            var listarr = e.data; 
            for(var i = start ;i < len;i++ ){      
                var ofather = document.querySelectorAll(".main"),
                    ochild = ofather[0].cloneNode(true),
                    lenf = ofather.length;
                if(lenf < len){
                    document.body.appendChild(ochild);
                }
            }
            for(var i = start-(count-1)*3,j = 0; i < start-(count-1)*3+3;i++ ,j++){
                (function(){
                    var otitle = document.querySelectorAll(".title"),
                        ostore = document.querySelectorAll(".store"),
                        obigstar  = document.querySelectorAll(".mid"),
                        ogood  = document.querySelectorAll(".good"),
                        ofriend = document.querySelectorAll(".fri"),
                        opeople = document.querySelectorAll(".peo"),
                        otop    = document.querySelectorAll(".top"),
                        oaverage = document.querySelectorAll(".ave"),
                        odiscount = document.querySelectorAll(".count"),
                        // oflag   = document.querySelectorAll(".flag"),
                        odistance = document.querySelectorAll(".distance"),
                        obottom = document.querySelectorAll(".bottom");
                        otitle[i].innerHTML = listarr[j].title;
                        ostore[i].src = listarr[j].imgUrl;
                        oaverage[i].innerHTML = listarr[j].average;
                        odistance[i].innerHTML = listarr[j].distance;
                        odiscount[i].innerHTML = listarr[j].discount;
                        if(listarr[j].good > 0){    
                            ofriend[i].innerHTML = listarr[j].good;
                        }else{
                            obottom[i].removeChild(obottom[i].children[0]);
                            opeople[i].removeChild(opeople[i].children[0]);
                            opeople[i].innerHTML = listarr[j].people +"人已享";
                        }
                        function flag(target1,target2){
                            var a = target1.split("|");
                            if(a[0] !== ""){
                                for(var i = 0 ,lent = a.length; i < lent;i++){
                                    var oimg = document.createElement("img");
                                    if(target2.children.length  < lent + 1){
                                        target2.appendChild(oimg);
                                        target2.children[i+1].src = "img/" + a[i] + ".png";
                                    }
                                }
                            }
                        }
                        flag(listarr[j].flag,otop[i]);
                        function star(target1,target2){
                            var ostar = target2.querySelectorAll(".iconfont");
                                if(target1 === "0"){
                                    ostar[0].innerHTML= "&#xe779;"
                                    ostar[1].innerHTML= "&#xe779;"
                                    ostar[2].innerHTML= "&#xe779;"
                                    ostar[3].innerHTML= "&#xe779;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(208, 208, 209)";
                                    ostar[1].style.color= "rgb(208, 208, 209)";
                                    ostar[2].style.color= "rgb(208, 208, 209)";
                                    ostar[3].style.color= "rgb(208, 208, 209)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="0.5"){
                                    ostar[0].innerHTML= "&#xe61a;"
                                    ostar[1].innerHTML= "&#xe779;"
                                    ostar[2].innerHTML= "&#xe779;"
                                    ostar[3].innerHTML= "&#xe779;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(208, 208, 209)";
                                    ostar[2].style.color= "rgb(208, 208, 209)";
                                    ostar[3].style.color= "rgb(208, 208, 209)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="1"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe779;"
                                    ostar[2].innerHTML= "&#xe779;"
                                    ostar[3].innerHTML= "&#xe779;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(208, 208, 209)";
                                    ostar[2].style.color= "rgb(208, 208, 209)";
                                    ostar[3].style.color= "rgb(208, 208, 209)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="1.5"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe61a;"
                                    ostar[2].innerHTML= "&#xe779;"
                                    ostar[3].innerHTML= "&#xe779;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(255, 198, 0)";
                                    ostar[2].style.color= "rgb(208, 208, 209)";
                                    ostar[3].style.color= "rgb(208, 208, 209)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="2"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe61b;"
                                    ostar[2].innerHTML= "&#xe779;"
                                    ostar[3].innerHTML= "&#xe779;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(255, 198, 0)";
                                    ostar[2].style.color= "rgb(208, 208, 209)";
                                    ostar[3].style.color= "rgb(208, 208, 209)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="2.5"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe61b;"
                                    ostar[2].innerHTML= "&#xe61a;"
                                    ostar[3].innerHTML= "&#xe779;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(255, 198, 0)";
                                    ostar[2].style.color= "rgb(255, 198, 0))";
                                    ostar[3].style.color= "rgb(208, 208, 209)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="3"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe61b;"
                                    ostar[2].innerHTML= "&#xe61b;"
                                    ostar[3].innerHTML= "&#xe779;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(255, 198, 0)";
                                    ostar[2].style.color= "rgb(255, 198, 0))";
                                    ostar[3].style.color= "rgb(208, 208, 209)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="3.5"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe61b;"
                                    ostar[2].innerHTML= "&#xe61b;"
                                    ostar[3].innerHTML= "&#xe61a;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(255, 198, 0)";
                                    ostar[2].style.color= "rgb(255, 198, 0)";
                                    ostar[3].style.color= "rgb(255, 198, 0)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="4"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe61b;"
                                    ostar[2].innerHTML= "&#xe61b;"
                                    ostar[3].innerHTML= "&#xe61b;"
                                    ostar[4].innerHTML= "&#xe779;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(255, 198, 0)";
                                    ostar[2].style.color= "rgb(255, 198, 0)";
                                    ostar[3].style.color= "rgb(255, 198, 0)";
                                    ostar[4].style.color= "rgb(208, 208, 209)";
                                }else if (target1 ==="4.5"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe61b;"
                                    ostar[2].innerHTML= "&#xe61b;"
                                    ostar[3].innerHTML= "&#xe61b;"
                                    ostar[4].innerHTML= "&#xe61a;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(255, 198, 0)";
                                    ostar[2].style.color= "rgb(255, 198, 0)";
                                    ostar[3].style.color= "rgb(255, 198, 0)";
                                    ostar[4].style.color= "rgb(255, 198, 0)";
                                }else if (target1 ==="5"){
                                    ostar[0].innerHTML= "&#xe61b;"
                                    ostar[1].innerHTML= "&#xe61b;"
                                    ostar[2].innerHTML= "&#xe61b;"
                                    ostar[3].innerHTML= "&#xe61b;"
                                    ostar[4].innerHTML= "&#xe61b;"
                                    ostar[0].style.color= "rgb(255, 198, 0)";
                                    ostar[1].style.color= "rgb(255, 198, 0)";
                                    ostar[2].style.color= "rgb(255, 198, 0)";
                                    ostar[3].style.color= "rgb(255, 198, 0)";
                                    ostar[4].style.color= "rgb(255, 198, 0)";
                                }
                        }
                        star(listarr[j].stars,obigstar[i]);
                })(i);
            }
        })
    };
    var btn = document.querySelector("#choose");
        btn.addEventListener("click",function(){
            add();
        },false)
    add();
    add();
    function dir(target){
        var startX,
            startY,
            endX,
            endY;
            target.addEventListener("touchstart",function(e){
                startX = e.targetTouches[0].pageX;
                startY = e.targetTouches[0].pageY;
            },false)
            target.addEventListener("touchmove",function(e){
                endX = e.targetTouches[0].pageX;
                endY = e.targetTouches[0].pageY;
            },false)
            target.addEventListener("touchend",function(e){
                var changeX = startX - endX,
                    changeY = startY - endY;
                    if(Math.abs(changeX) > Math.abs(changeY) && changeX > 0){
                        direction = "left";
                    }else if( Math.abs(changeX) > Math.abs(changeY) && changeX < 0){
                        direction = "right";
                    }else if (Math.abs(changeX) < Math.abs(changeY) && changeY < 0){
                        direction = "top";
                    }else if (Math.abs(changeX) < Math.abs(changeY) && changeY > 0){
                        direction = "bottom";
                    }
            },false)    
    }
    var obody = document.body;
    dir(obody)
    obody.addEventListener("touchend",function(e){
        dir(obody);
        if(direction =="top"){
            add();
        }
    })
})();    
function request(req,url, callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function ( ) {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
                callback(data);
        }
    };
    xmlhttp.open("POST", url,true);  
    xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlhttp.send(req);
}
function turn(){
    request(null,"http://kaohe.zeroling.com/kaohe/state",function(e){
        var href = window.location.href,
            num = e.state;
            console.log(num)
            hrefarr = href.split("/"),
            hrefarr[hrefarr.length-1] = "page" + num +".html";
            newhref = hrefarr.join("/");
            window.location.href = newhref;  
    }); 
}
function fresh(){ 
    if(window.name == ""){
        window.name = 0;
    }
    else{
        window.name++;
    }
    if(window.name == 2 ){
        turn();
        window.name = "";
    }
}