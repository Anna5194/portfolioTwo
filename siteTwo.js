

let a = window.outerHeight;
var w = window.innerHeight;
let b = document.documentElement.scrollHeight; // высота сайта
let fourSection = document.getElementById('fourSection').offsetHeight;
let threeSection = document.getElementById('threeSection').offsetHeight;
let twoSection = document.getElementById('twoSection').offsetHeight;
let oneSection = document.getElementById('oneSection').offsetHeight;
let allHeight = oneSection + twoSection + threeSection

console.log(a);
console.log(allHeight);
console.log(b);
// console.log(oneSection);
// console.log(twoSection);
// console.log(threeSection);
// console.log(fourSection);


// window.addEventListener('scroll', function() {
// 	if (window.pageYOffset>allHeight) {
// 		document.getElementById('fourSection').style.cssText = "visibility: visible";
// 	}if(window.pageYOffset<allHeight){
// 		document.getElementById('fourSection').style.cssText = "visibility: hidden";
// 	}
// });

window.addEventListener('scroll', function() {
	if (window.pageYOffset>allHeight) {
		document.getElementById('fourSection').style.cssText = "visibility: visible";
	}if(window.pageYOffset<allHeight){
		document.getElementById('fourSection').style.cssText = "visibility: hidden";
	}
});


// var animation = document.getElementById("element").animate([
//   {height: "0"},
//   {height: "100%"}
// ], {
//   duration: 3000,
//   iteration: 2,
//   delay: 1000
// });
// attributeName="stroke-dashoffset" from="0" to="565" dur="2s" repeatCount="1" fill="freeze"
 
// document.getElementById("animation_start").addEventListener("click", function() {
//   animation.play();
// }, false);
 
// document.getElementById("animation_pause").addEventListener("click", function() {
//   animation.pause();
// }, false);

// animation.addEventListener("finish", function() {
//   alert("The animation has ended.");
// }, false);

