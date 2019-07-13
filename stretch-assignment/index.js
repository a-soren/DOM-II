


// get element that was clicked
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;   
}, false);



// prepending an element
var parent = document.createElement("div");
var p = document.createElement("p");
var span = document.createElement("span");
parent.append(p);
parent.prepend(span);

console.log(parent.childNodes);


// animation for mousedown event
var imgObj = null;
var animate ;

function init() {
   imgObj = document.getElementById('myImage');
   imgObj.style.position= 'relative'; 
   imgObj.style.left = '0px'; 
}
function moveRight() {
   imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
   animate = setTimeout(moveRight,20);    // call moveRight in 20msec
}
function stop() {
   clearTimeout(animate);
   imgObj.style.left = '0px'; 
}

window.onload = init;