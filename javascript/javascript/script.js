var images = ['1.png', '2.png', '3.png', '4.png', '5.png','6.png'];
var i = 0;

function next(){
	if(i >= images.length-1) i = -1;
	i++;
	return img();			 
}

function previous(){
	if(i <= 0) i = images.length;	
	i--;
	return img();			 
}

function img(){
	return document.querySelector('.img').setAttribute('src', "images/"+images[i]);
}