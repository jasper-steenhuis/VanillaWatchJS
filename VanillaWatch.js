
function start() {
    let clicked = false;
    var time = document.getElementById("time");
    var area = document.getElementById("area");
    var stopArea = document.getElementById("stopArea");
    var singleHours = 0;
    var doubleHours = 0;
    var singleMinutes = 0;
    var doubleMinutes = 0;
    var seconds = 0;

    var interval;


    area.onclick = function() {
        var start = Date.now();

        

    if(!clicked){
        interval = setInterval(function(){
            var elapsed =  Date.now() - start;
            seconds = (elapsed / 1000).toFixed(2);
            time.innerHTML = doubleHours + singleHours +":" +  doubleMinutes + singleMinutes +":" + seconds;
            
            if(seconds >= 60) {
                start = Date.now();

                if(singleMinutes <9){
                    singleMinutes++;
                } else {
                    singleMinutes = 0;
                    doubleMinutes++;
                }
            if(doubleMinutes > 5) {
                doubleMinutes = 0;
                singleHours++;
            }
                
                
            }
            
        },100);
    
    } if(clicked){
        clearInterval(interval);
        
    }
    
    clicked = true;
    
}
stopArea.onclick = function() {
    clicked = false;
    clearInterval(interval);
    time.innerHTML = "0:00:00";
}
console.log(clicked);

    
}
start();