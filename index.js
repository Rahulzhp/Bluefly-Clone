let imagesLink=[
    "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Valentino_1512x.jpg?v=1630420054","https://cdn.shopify.com/s/files/1/0248/3473/6191/files/saint_laurent_3_1512x.jpg?v=1630508580","https://cdn.shopify.com/s/files/1/0248/3473/6191/files/sunglasses1_1512x.jpg?v=1615211259","https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Designer_Shoes_1512x.jpg?v=1630420978"
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