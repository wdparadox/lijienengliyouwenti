function turn(){
    request("http://kaohe.zeroling.com/kaohe/state",function(e){
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
window.onload = fresh();

function request(url, callback) {
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
    xmlhttp.send(null);
}