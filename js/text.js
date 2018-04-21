window.onload = function(){
var e = document.querySelector(".Explore");
var p = document.querySelector('.pro-text');
p.onmouseover = function(){
	e.style.display = 'block';
	}
p.onmouseout = function(){
	e.style.display = 'none';
	}
e.onmouseover = function(){
	e.style.display = 'block';
	}
e.onmouseout = function(){
	e.style.display = 'none';
	}
}

