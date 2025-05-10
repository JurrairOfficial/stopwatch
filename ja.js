let display     =  document.querySelector(".display");
let stopbtn     =  document.querySelector(".box1");
let startbtn    =  document.querySelector(".box2");
let resetbtn    =  document.querySelector(".box3");

let msec        =  0;
let sec         =  0;
let min         =  0;

let timerid     =  null;


startbtn.addEventListener('click', ()=>{
    if(timerid !== null){
        console.log(clearInterval(timerid));
    }
    console.log(timerid = setInterval(startertime, 10));
});


stopbtn.addEventListener('click', ()=>{
    console.log(clearInterval(timerid));

});



resetbtn.addEventListener('click', ()=>{
    console.log(clearInterval(timerid));
    console.log(display.innerText = '00: 00: 00');
    msec = sec = min = 0;
});




function startertime(){
    msec = msec + 1;
    if(msec == 100){
        msec = 0;
        sec = sec + 1;
        if(sec == 60){
            sec = 0;
            min = min + 1;
        }
    }
    let msecstring;
if(msec < 10){
   console.log(msecstring = '0' + msec);

}
else{
    console.log(msecstring = msec);
}

let secstring;
if(sec < 10){
    console.log(secstring = '0' + sec);

}
else{
    console.log(secstring = sec);
}
let minstring;
if(min < 10){
    console.log(minstring = '0'+ min);

}
else{
    console.log(minstring = min);
}

display.innerText = minstring + ':' + secstring + ':' + msecstring;

}




























