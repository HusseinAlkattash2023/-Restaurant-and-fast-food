const menu=document.querySelector("#menu-bars");
const navbar=document.querySelector(".navbar");
const btn=document.querySelector('#btn')

menu.onclick=()=>{
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}
 let section=document.querySelectorAll("section")
 let navlinks=document.querySelectorAll("header .navbar a")

window.onscroll=()=>{
    menu.classList.remove('active');
    navbar.classList.remove('active');

      
        if(scrollY>=400){
            btn.style.display="block";
        }else{
            btn.style.display="none";
        }
        
        btn.onclick=()=>{
          scroll({
            left:0,
            top:0,
            behavior:"smooth"
        });
        }

    section.forEach(sec=>{
      let top=window.scrollY;
      let height=sec.offsetHeight;
      let offset=sec.offsetTop-150;
      let id=sec.getAttribute('id');

      if(top=>offset && top<offset+height){
        navlinks.forEach(links=>{
          links.classList.remove('active');  
          let name= document.querySelector("header .navbar a[href*=`+id+`]");
          name.classList.add('active')
        });
      };
    });
  }

const searchIcon=document.querySelector("#search-icon");
const searchForm=document.querySelector("#search-form");
const close=document.querySelector("#close");

searchIcon.onclick=()=>{
    searchForm.classList.add('active')
}
close.onclick=()=>{
    searchForm.classList.remove('active')
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     loop:true
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
     loop:true,
     breakpoints:{
         0:{
             slidesPerView:1
         },
         640:{
            slidesPerView:2
        },
        768:{
            slidesPerView:2
        },
       1024 :{
            slidesPerView:3
        }
    }
  });