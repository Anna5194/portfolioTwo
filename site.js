window.addEventListener('scroll', function() {
	if (window.pageYOffset>3) {
		document.getElementById('header').classList.add("backColor");
	}if(window.pageYOffset<=3){
		document.getElementById('header').classList.remove("backColor");
	}
});