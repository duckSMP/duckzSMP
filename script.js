
// ===============================
// PARTICELLE SFONDO
// ===============================


const particles = document.getElementById("particles");


for(let i = 0; i < 70; i++){

    const particle = document.createElement("div");


    particle.style.position = "absolute";

    particle.style.width = Math.random() * 5 + "px";

    particle.style.height = particle.style.width;

    particle.style.background = "#FFD93D";

    particle.style.borderRadius = "50%";

    particle.style.left =
    Math.random() * 100 + "%";


    particle.style.top =
    Math.random() * 100 + "%";


    particle.style.opacity =
    Math.random();


    particle.style.animation =
    `floating ${5 + Math.random()*10}s infinite ease-in-out`;


    particles.appendChild(particle);

}





// crea animazione particelle

const particleStyle =
document.createElement("style");


particleStyle.innerHTML = `

@keyframes floating{

0%{

transform:translateY(0px);

}


50%{

transform:translateY(-80px);

}


100%{

transform:translateY(0px);

}


}

`;

document.head.appendChild(particleStyle);





// ===============================
// SCROLL ANIMATION
// ===============================


const revealElements =
document.querySelectorAll(
".info-card,.rank-card,.staff-card,.news-box,.rules-box"
);



revealElements.forEach(element=>{

element.style.opacity="0";

element.style.transform=
"translateY(50px)";

element.style.transition=
"0.8s ease";

});




function reveal(){


revealElements.forEach(element=>{


const position =
element.getBoundingClientRect().top;


if(position <
window.innerHeight - 100){


element.style.opacity="1";

element.style.transform=
"translateY(0)";


}



});


}



window.addEventListener(
"scroll",
reveal
);


reveal();





// ===============================
// HOVER RANK EFFECT
// ===============================


const ranks =
document.querySelectorAll(".rank-card");


ranks.forEach(rank=>{


rank.addEventListener(
"mousemove",
(e)=>{


const rect =
rank.getBoundingClientRect();


const x =
e.clientX - rect.left;


const y =
e.clientY - rect.top;


const rotateX =
(y - rect.height/2) / 15;


const rotateY =
(rect.width/2 - x) / 15;



rank.style.transform =
`
perspective(800px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.03)
`;



});




rank.addEventListener(
"mouseleave",
()=>{


rank.style.transform="";


});



});





// ===============================
// CONSOLE
// ===============================


console.log(
"🦆 Duckz SMP Website Loaded!"
);
