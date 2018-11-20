window.onscroll = function() {myFunction()};

function myFunction() {
var header = document.getElementById("menu");
var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

function ShowContent(x) {
	var sub = x.parentElement.getElementsByClassName("Soccer-content")[0];
	sub.style = "display:block;";
}

var onSub = 1;

function CheckMenu() {
	onSub--;
	var d = document.querySelectorAll( ":hover" );
	if(d.length > 0)
	{
		for(var i=0; i < d.length; i++)
		{
			if(d[i].className == "Soccer-content")
			{
				onSub = 1;
			}
		}
	}
	if(onSub < 0)
	{
		var subs = document.getElementsByClassName("Soccer-content");
		for(var i=0; i<subs.length; i++)
		{
			subs[i].style = "display:none";
		}
		return;
	}
	
	setTimeout(CheckMenu, 1000);
}



function HideContent(x) {
	onSub = 3;
	setTimeout(CheckMenu, 1000);
	
}
