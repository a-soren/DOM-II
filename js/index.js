// Your code goes here
const button= document.querySelector('.btn');

console.log(button);

button.addEventListener('click',()=>{
    button.style.backgroundColor='red';
});


const logoHeading =document.querySelector('.logo-heading');

logoHeading.addEventListener('mouseenter',()=>{
    logoHeading.textContent= 'The most fun you will ever have on a bus!';
});

const letsGo=document.querySelector('.content-section .text-content h2');

letsGo.addEventListener('mouseover',()=>{
    letsGo.style.backgroundColor='teal';
});

const places=document.querySelector('.content-pick .destination');
places.addEventListener('mouseover',()=>{
    places.style.fontSize='3rem';
    places.style.Color='orchid';
});

const imgFlip=document.querySelector('.content-destination img');
imgFlip.addEventListener('click',()=>{
    imgFlip.style.transform='rotate(180deg)';
});

const imgNeg=document.querySelector('.intro img');
imgNeg.addEventListener('mouseover',()=>{
    imgNeg.style.filter='invert(100%)';
});

const textNeg=document.querySelector('.content-destination h2');
textNeg.addEventListener('dblclick',()=>{
    textNeg.style.backgroundColor='black';
    textNeg.style.color='white';
});

const footerStyle=document.querySelector('.footer p');
footerStyle.addEventListener('mouseover',()=>{
    footerStyle.style.fontSize='3rem';
    footerStyle.style.color='orchid';
    footerStyle.style.backgroundColor='yellow';
})

const imgRotateLeft=document.querySelector('.img-content img');
imgRotateLeft.addEventListener('mouseover',()=>{
    imgRotateLeft.style.transform='rotate(90deg)';
    imgRotateLeft.style.filter='invert(100%)';
})



const navColor=document.querySelector('.main-navigation .nav');
navColor.addEventListener('mouseover',()=>{
    navColor.style.backgroundColor='black';
    navColor.style.color='cornflowerblue';
})

