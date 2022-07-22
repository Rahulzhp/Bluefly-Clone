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

let items=[
    {
        image_url:
          "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
        name: "WOMEN'S REEBOK PRINT LEGGINGS ",
        price: 1549,
        strikedoffprice: 1799,
      },
      {
        image_url:
          "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
        name: "WOMEN'S REEBOK POLYTIGHT",
        price: 1249,
        strikedoffprice: 1749,
      },
      {
        image_url:
          "https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",
        name: "WOMEN'S REEBOK SLEEVE TEE",
        price: 699,
        strikedoffprice: 1245,
      },
      {
        image_url:
          "https://content.shop4reebok.com/static/Product-GD8567/MEN_TRAINING_PANTS_GD8567_1.jpg.plp ",
        name: " MEN'S TRAINING WORKOUT READY ELITAGE PANTS ",
        price: 1999,
        strikedoffprice: 3199,
      },
      {
        image_url:
          "https://content.shop4reebok.com/static/Product-GQ8758/reebok_GQ8758_1.jpg.plp ",
        name: "MEN'S REEBOK TRAINING  POLO T-SHIRTS TEE  ",
        price: 769,
        strikedoffprice: 1099,
      },
      {
        image_url:
          "https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",
        name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",
        price: 949,
        strikedoffprice: 1899,
      },
      {
        image_url:
          "https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",
        name: "WOMEN'S REEBOK PRINT LEGGINGS ",
        price: 1549,
        strikedoffprice: 1799,
      },
      {
        image_url:
          "https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",
        name: "WOMEN'S REEBOK POLYTIGHT",
        price: 1249,
        strikedoffprice: 1749,
      },
      
]

let container=document.getElementById("container");
  let cartLS=JSON.parse(localStorage.getItem("cart-page")) || [];
  function Display(womensData){
    container.innerHTML=null;
    items.forEach(function (product) {
    let div = document.createElement("div");
    let image_url = document.createElement("img");
    image_url.setAttribute("src", product.image_url);

    let btn = document.createElement("button");
    btn.innerText = "Add to cart";
    btn.addEventListener("click",function(){
      addToCart(product);

    })
    let proName = document.createElement("p");
    proName.innerText = product.name;
    let dataPrice = document.createElement("p");
    dataPrice.innerText = product.price;

    div.append(image_url, proName, dataPrice, btn);

    document.querySelector("#container").append(div);
  });
}
  function addToCart(product){
    let flag=false;
    for(let i=0;i<cartLS.length;i++){
      if(cartLS[i].name===product.name){
        alert("product already in cart");
        flag=true;
        return;
      }
    }
    if(flag==false){
    cartLS.push(product);
    alert("product added to cart");
    //console.log(cartLS)
    localStorage.setItem("cart-page",JSON.stringify(cartLS));
    }
  }
  Display(items)
