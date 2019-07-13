


// // get element that was clicked
// document.addEventListener('click', function(e) {
//     e = e || window.event;
//     var target = e.target || e.srcElement,
//         text = target.textContent || target.innerText;   
// }, false);



// // prepending an element
// var parent = document.createElement("div");
// var p = document.createElement("p");
// var span = document.createElement("span");
// parent.append(p);
// parent.prepend(span);

// console.log(parent.childNodes);


// // animation for mousedown event
// var imgObj = null;
// var animate ;

// function init() {
//    imgObj = document.getElementById('myImage');
//    imgObj.style.position= 'relative'; 
//    imgObj.style.left = '0px'; 
// }
// function moveRight() {
//    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
//    animate = setTimeout(moveRight,20);    // call moveRight in 20msec
// }
// function stop() {
//    clearTimeout(animate);
//    imgObj.style.left = '0px'; 
// }

// window.onload = init;



// my code

let redBlock=document.querySelector('.block block--red');
redBlock.addEventListener('click',()=>{
    redBlock.prepend();
});

console.log(redBlock+' im working to grab the red block');


let blueBlock=document.querySelector('.block block--blue');

console.log(blueBlock+' im working to grab the blue block');


let greenBlock=document.querySelector('.block block--green');

console.log(greenBlock+ ' im working to grab the green block');


let pinkBlock=document.querySelector('.block block--pink');

console.log(pinkBlock+ ' im working to grab the pink block');

let grayBlock=document.querySelector('.block block--gray');

console.log(grayBlock+ ' im working to grab the gray block');