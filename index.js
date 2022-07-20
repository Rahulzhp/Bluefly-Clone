let imagesLink=[
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpQ4KZ2UP31NFmNyVm6hBaC-A2LR4-N_jPQ&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA7N9rfxo1YFoOhYjeCCVexA048ufzY2uMgw&usqp=CAU","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTavwhMxYMC6d-cfuH3DAwxB39NHsXG5aWtmQ&usqp=CAU"
]
let leftBtn=document.getElementById("left-btn");
let rightBtn=document.getElementById("right-btn");
let crauser=document.getElementById("crauser");

let imageState=0;
rightBtn.addEventListener("click",function(){
    imageState++;
    if(imageState===imagesLink.length){
        imageState=0;
    }
    crauser.src=imagesLink[imageState];
})

leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imagesLink-1;
    }
    crauser.src=imagesLink[imageState];
})