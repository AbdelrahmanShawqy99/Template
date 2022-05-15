var imgs= Array.from(document.getElementsByClassName("img-item")) ;
var lightboxcontainer=document.getElementById("lightboxcontainer");
var lightboxitem=document.getElementById("lightboxitem");
var close =document.getElementById("close")
var prev =document.getElementById("prev")
var next =document.getElementById("next")
var currentslideindex=0;
for(i=0;i<imgs.length;i++){
  
imgs[i].addEventListener("click" ,openlihtbox)

}
function openlihtbox(e){
    currentslideindex=imgs.indexOf(e.target);
    lightboxcontainer.style.display="flex"    
    var newsrc=e.target.src;  // معلومات ال صورة اللي دوسنا عليها 
    lightboxitem.style.backgroundImage=`url(${newsrc})`
    console.log(currentslideindex)
    

}
close.addEventListener("click",closelightbox);
function closelightbox(){

    lightboxcontainer.style.display="none"  

}

next.addEventListener("click",nexticon)
function nexticon(){
    currentslideindex++;
    if (currentslideindex==imgs.length) {

        currentslideindex=0;

         
    }
    lightboxitem.style.backgroundImage=`url(${imgs[currentslideindex].src})`
    console.log(currentslideindex)
}
prev.addEventListener("click",previcon)
function previcon(){
    
    currentslideindex--;
    if (currentslideindex==-1) {

        currentslideindex=5;

         
    }
    lightboxitem.style.backgroundImage=`url(${imgs[currentslideindex].src})`
    console.log(currentslideindex)
}

document.addEventListener("keydown",function(eventinfo){

    if(eventinfo.keycode==39){}
    nexticon()
})


document.addEventListener("keydown",function(eventinfo){

    if(eventinfo.keycode==39){}
    icon()
})


 

 