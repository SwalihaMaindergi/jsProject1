function clock () {

    var hours = document.getElementById('hours');
    var minute = document.getElementById('min');
    var second = document.getElementById('sec');
    var txt = document.getElementById('am');


    var time = new Date();

    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var text = "AM";


    if(hrs==0)
    {
        hrs=12;
    }
    if(hrs>12)
    {
        hrs=hrs-12;
        text="PM"
    }
    if(hrs<10)
    {
        hrs="0"+hrs;
    }
    if(mins<10)
    {
        mins="0"+mins;
    }

    if(secs<10)
    {
        secs="0"+secs;
    }

    hours.innerHTML=hrs + "<br>Hours";
    minute.innerHTML=mins + "<br>Mins";
    second.innerHTML=secs + "<br>Secs";
    am.innerText=text;

}
setInterval(clock, 1000);



function TimeDetails() {
    var detail = document.getElementById("mrg")
    var detail1 = detail.value
    document.getElementById("WT").innerHTML=detail1

    var detail2 = document.getElementById("afternoon").value
    document.getElementById("LT").innerHTML=detail2

    var detail3 = document.getElementById("evening").value
    document.getElementById("NT").innerHTML=detail3

    var detail4 = document.getElementById("ngt").value
    document.getElementById("NTT").innerHTML=detail4
}    


function SetTimes() {

    var w = document.getElementById("mrg").value;
    var x = document.getElementById("afternoon").value;
    var y = document.getElementById("evening").value;
    var z = document.getElementById("ngt").value;

    var hour = new Date().getHours();
    
    if(w == hour) {
        document.getElementById("img").style.backgroundImage="url(./Images/window_girl.svg)";
        document.getElementById("txt1").innerHTML="GOOD MORNING!! WAKE UP!!";
        document.getElementById("txt2").innerHTML="GRAB SOME HEALTHY BREAKFAST..!!!";
    }    

    if(x == hour) {
        document.getElementById("img").style.backgroundImage="url(./Images/lunch.svg)";
        document.getElementById("txt1").innerHTML="GOOD AFTERNOON!!!";
        document.getElementById("txt2").innerHTML="LET'S HAVE SOME LUNCH..!!!";
    }    

    if(y == hour) {
        document.getElementById("img").style.backgroundImage="url(./Images/lunch.svg)";
        document.getElementById("txt1").innerHTML="GOOD EVENING!! GET SOME TEA!!";
        document.getElementById("txt2").innerHTML="STOP YAWNING.., IT'S JUST EVENING..!!!";
    }    

    if(z == hour) {
        document.getElementById("img").style.backgroundImage="url(./Images/night.svg)";
        document.getElementById("txt1").innerHTML="GOOD NIGHT!! SWEET DREAMS!!";
        document.getElementById("txt2").innerHTML="CLOSE YOUR EYES AND GO TO SLEEP..!!!";
    }    
    TimeDetails();
}   
