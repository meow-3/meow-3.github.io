window.onscroll = function() {FixMenu()};

function FixMenu() {
var header = document.getElementById("menu");
var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


window.onclick = function(event) {
	var all_sub = document.getElementsByClassName("Soccer-content");
	for(var i = 0; i < all_sub.length; i++)
	{
		if (all_sub[i].classList.contains('show')) {
			all_sub[i].classList.remove('show');
		}
	}
	if (event.target.matches('.dropbtn')) {
		var sub = event.target.parentElement.getElementsByClassName("Soccer-content")[0];
		sub.classList.toggle("show");
	}
}