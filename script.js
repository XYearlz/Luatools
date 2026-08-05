// ======================================================
// LuaTools Website
// Created by XYearlZ
// ======================================================

// =======================
// AOS
// =======================

AOS.init({
    duration: 900,
    once: true,
    easing: "ease-out-cubic"
});

// =======================
// Cursor Glow
// =======================

const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX - 9 + "px";
    cursor.style.top = e.clientY - 9 + "px";

});

// =======================
// Navbar Scroll
// =======================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 40){

        nav.classList.add("scrolled");

    }else{

        nav.classList.remove("scrolled");

    }

});

// =======================
// Counter Animation
// =======================

const counter = document.getElementById("downloads");

let value = 0;

const target = 12500;

const speed = 15;

function animateCounter(){

    const timer = setInterval(()=>{

        value += 125;

        if(value >= target){

            value = target;

            clearInterval(timer);

        }

        counter.innerHTML = value.toLocaleString()+"+";

    },speed);

}

animateCounter();

// =======================
// FAQ
// =======================

document.querySelectorAll(".question").forEach(item=>{

    const button=item.querySelector("button");

    const answer=item.querySelector("div");

    button.onclick=()=>{

        if(answer.style.display==="block"){

            answer.style.display="none";

        }else{

            document.querySelectorAll(".question div").forEach(el=>{

                el.style.display="none";

            });

            answer.style.display="block";

        }

    }

});

// =======================
// tsParticles
// =======================

tsParticles.load("particles",{

    background:{
        color:"transparent"
    },

    fpsLimit:60,

    particles:{

        number:{
            value:80
        },

        color:{
            value:"#9F67FF"
        },

        opacity:{
            value:0.4
        },

        size:{
            value:{
                min:1,
                max:4
            }
        },

        links:{
            enable:true,
            color:"#8B5CF6",
            opacity:0.18,
            distance:150
        },

        move:{
            enable:true,
            speed:1
        }

    }

});

// =======================
// Hero Tilt
// =======================

const heroImage=document.querySelector(".hero-image img");

document.addEventListener("mousemove",(e)=>{

    const x=(window.innerWidth/2-e.clientX)/35;

    const y=(window.innerHeight/2-e.clientY)/35;

    heroImage.style.transform=
        `rotateY(${x}deg) rotateX(${-y}deg)`;

});

// =======================
// Gallery Hover
// =======================

document.querySelectorAll(".gallery img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

const rect=img.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

img.style.transform=

`perspective(900px)
rotateY(${(x-rect.width/2)/18}deg)
rotateX(${-(y-rect.height/2)/18}deg)
scale(1.05)`;

});

img.addEventListener("mouseleave",()=>{

img.style.transform="rotateX(0) rotateY(0) scale(1)";

});

});

// =======================
// Back To Top
// =======================

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.id="topButton";

document.body.appendChild(topBtn);

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.opacity="1";

topBtn.style.pointerEvents="all";

}else{

topBtn.style.opacity="0";

topBtn.style.pointerEvents="none";

}

});

// =======================
// Top Button Style
// =======================

const style=document.createElement("style");

style.innerHTML=`

#topButton{

position:fixed;

bottom:30px;

right:30px;

width:55px;

height:55px;

border:none;

border-radius:50%;

font-size:22px;

background:#8B5CF6;

color:white;

cursor:pointer;

box-shadow:0 0 30px rgba(139,92,246,.5);

transition:.35s;

opacity:0;

pointer-events:none;

z-index:9999;

}

#topButton:hover{

transform:translateY(-5px);

background:#A855F7;

}

`;

document.head.appendChild(style);
