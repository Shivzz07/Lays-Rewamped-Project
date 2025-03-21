
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

var elemC = document.querySelector("#elem-container");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter" ,function()
{
    fixed.style.display="block";
})
elemC.addEventListener("mouseleave" ,function()
{
    fixed.style.display="none";
})

var e1 = document.querySelector("#e1");
e1.addEventListener("mouseenter",function(){
    var img1 = e1.getAttribute("data-img")
    fixed.style.backgroundImage =  `url(${img1})`;
})
var e2 = document.querySelector("#e2");
e2.addEventListener("mouseenter",function(){
    var img2 = e2.getAttribute("data-img")
    fixed.style.backgroundImage =  `url(${img2})`;
})
var e3 = document.querySelector("#e3");
e3.addEventListener("mouseenter",function(){
    var img3 = e3.getAttribute("data-img")
    fixed.style.backgroundImage =  `url(${img3})`;
})
var e4 = document.querySelector("#e-4");
e4.addEventListener("mouseenter",function(){
    var img4 = e4.getAttribute("data-img")
    fixed.style.backgroundImage =  `url(${img4})`;
})

var loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top = "-100%";
},9000)
