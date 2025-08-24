//document.getElementById("nag").addEventListener("click", myFunction);
function myFunction() {
	document.getElementById("load").style.display = "block";
	window.top.location="active.html";
}

document.getElementById("home").addEventListener("click", function() {
	document.getElementById("load").style.display = "block";
	window.top.location="./";
w
});

document.getElementById("ast36").addEventListener("click", function() {
	document.getElementById("load").style.display = "block";
	window.top.location="ast36.html";
});

document.getElementById("abt").addEventListener("click", function() {
	document.getElementById("load").style.display = "block";
	//window.top.location="about.html"
});

document.getElementById("git").addEventListener("click", function() {
	document.getElementById("load").style.display = "block";
	window.top.location="https://github.com/cubesided";
});

document.getElementById("laptop").addEventListener("click", function() {
        document.getElementById("load").style.display = "block";
        window.top.location="ast36.html";
});

document.getElementById("contact").addEventListener("click", function() {
	document.getElementById("load").style.display = "block";
	window.top.location="contact.html";
});

window.addEventListener('pageshow', () => {
	document.getElementById('load').style.display = 'none';
});

// testing

const curqu = document.querySelectorAll('#nag');

curqu.forEach(element => {
  element.addEventListener('click', function() {
    // Your event handling logic here
	document.getElementById("load").style.display = "block";
	window.top.location="active.html";
  });
});


function showTime() {
	var d = new Date();
	d.toLocaleString('en', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
	document.getElementById('currentTime').innerHTML = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());

}

showTime();

setInterval(function () {

	showTime();

}, 1000);

function hasTouchScreen() {
    return navigator.maxTouchPoints > 0;
}
function isMobileByMediaQuery() {
    return window.matchMedia("(max-width: 768px)").matches;
}

function isMobileByScreenSize() {
	return window.innerWidth <= 768; // Common breakpoint for mobile portrait
}

