var slides=document.querySelectorAll(".slide");
var btns=document.querySelectorAll(".btn");
let currentSlide=1;

var manualNav=function(manual){

    slides.forEach((slide)=>{
        slide.classList.remove('active1');
        btns.forEach((btn)=>{
            btn.classList.remove('active1');
        });
    });
    slides[manual].classList.add('active1');
    btns[manual].classList.add('active1');
}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
        manualNav(i);
        currentSlide=i;
    });
});

var repeat=function(activeClass){
    let active=document.getElementsByClassName('active1');
    let i=1;
    
    var repeater=()=>{

        setTimeout(function(){
            [...active].forEach((activeSlide)=>{
                activeSlide.classList.remove('active1');
            });

            slides[i].classList.add('active1');
            btns[i].classList.add('active1');
            i++;

            if(slides.length==i){
                i=0;
            }
            if(i>=slides.length){
                return;
            }
            repeater();},10000);
    }
    repeater();
}
repeat();