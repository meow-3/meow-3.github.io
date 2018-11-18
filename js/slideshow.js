var countOfSlideShows = 0;
var slideIndex = [1, 1, 1];
var slideId = [];

function generateSlideShow(id, name, folder, images, alt)
{
	slideIndex[countOfSlideShows] = 1;
	countOfSlideShows++;
	var mySlides = "mySlides"+countOfSlideShows;
	for(var j=0; j < countOfSlideShows; j++)
	{
		slideId[j] = "mySlides"+(j+1);
	}
	var obj = document.getElementById(id);
	var str = '<h2 style="text-align:center">'+name+'</h2><div class="container"><div class="numbertext" id="numbertext'+countOfSlideShows+'">1 / '+images.length+'</div>';
	for(var j = 0; j<images.length; j++)
	{
		str+='<div class="mySlides '+mySlides+'"><img class="slide_img slide_img'+countOfSlideShows+'" src="'+folder+'\\'+images[j]+'" alt="'+alt+'"></div>';
	}
	str+='<a class="prev" onclick="plusSlides(-1, '+(countOfSlideShows-1)+')">&lt;</a>';
	str+='<a class="next" onclick="plusSlides(1, '+(countOfSlideShows-1)+')">&gt;</a></div><div class="caption-container"><p id="caption'+countOfSlideShows+'"></p></div>';
	
	obj.innerHTML = str;
	showSlides(1, countOfSlideShows-1);
}

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  var dots = document.getElementsByClassName("slide_img"+(no+1));
  var captionText = document.getElementById("caption"+(no+1));
  var numberText = document.getElementById("numbertext"+(no+1));
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
	x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
  captionText.innerHTML = dots[slideIndex[no]-1].alt;
  
  numberText.innerHTML = slideIndex[no] + " / " + x.length;
}