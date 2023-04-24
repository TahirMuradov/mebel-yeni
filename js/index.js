$('.sec1-boxes').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  $('.icons-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

//   window.onscroll=function () {
//     if(window.scrollY>100){
//         header.classList.add("header-active")
//         logo.classList.add("logo-active")
//     }else 
//     { header.classList.remove("header-active");logo.classList.remove("logo-active")}

// }
const products=document.querySelector(".products")
let API_URL="https://fakestoreapi.com/"
fetch(`${API_URL}products`)
.then(res=>res.json())
.then(json=>{
  for (const item of json) {
const products_boxs=document.createElement("div")
const titel=document.createElement("h1")
const price =document.createElement("p")
const img=document.createElement("img")
products_boxs.classList.add("products_boxs")
titel.classList.add("titel_h1")
price.classList.add("price")
img.classList.add("img")
products.appendChild(products_boxs)
products_boxs.appendChild(titel)
products_boxs.appendChild(price)
products_boxs.appendChild(img)
titel.innerHTML=item.title
price.innerHTML=item.price+"$"
img.src=item.image

  }
//               json.map(item=>{
//                 // console.log(item);
                               
//                 if (item.id=3) {
// console.log(item);   
// }
                
//               })
            })
  
