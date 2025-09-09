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

const laptop = document.querySelectorAll('#laptop');

laptop.forEach(element => {
  element.addEventListener('click', function() {
    // Your event handling logic here
	document.getElementById("load").style.display = "block";
        window.top.location="ast36.html";
  });
});

const pwrcrgit = document.querySelectorAll('#pwrcrgit');

pwrcrgit.forEach(element => {
  element.addEventListener('click', function() {
    // Your event handling logic here
	document.getElementById("load").style.display = "block";
	window.top.location="https://github.com/cubesided/powercore/releases/latest";
  });
});

const pwrcrdocs = document.querySelectorAll('#pwrcrdocs');

pwrcrdocs.forEach(element => {
  element.addEventListener('click', function() {
    // Your event handling logic here
	document.getElementById("load").style.display = "block";
	window.top.location="https://docs.google.com/document/d/1fLfnpURw6OwIzgkamP-H_jBhe2azFiwp5vNNWoNPKjE/edit?usp=sharing";
  });
});


const browser = document.querySelectorAll('#powercore');

browser.forEach(element => {
  element.addEventListener('click', function() {
    // Your event handling logic here
	document.getElementById("load").style.display = "block";
	window.top.location="powercore.html";
  });
});

function showTime() {
	var d = new Date();
	d.toLocaleString('en', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone })
	document.getElementById('currentTime').innerHTML = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(new Date());

}

showTime();

setInterval(function () {

	//showTime();

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

function isMobileByUserAgent() {
	const userAgent = navigator.userAgent || navigator.vendor || window.opera;
	return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|webOS|Windows Phone/i.test(userAgent);
}

function detectDeviceType() {
    const isMobileUA = isMobileByUserAgent();
    const isMobileScreen = isMobileByScreenSize();
    const isTouch = hasTouchScreen();

    if (isMobileUA || isMobileScreen || isTouch) {
        return "mobile";
    } else {
        return "desktop";
    }
}

const deviceType = detectDeviceType();
console.log(`User is on a: ${deviceType} device.`);

if (deviceType == "mobile") {
	    const newHTMLContent = `
      <h1>This site is made for desktops.</h1>
	  <p>It is not currently optimised for mobile/touch usage.</p>
    `;
	document.body.innerHTML = newHTMLContent;
}

fetch('https://api.github.com/repos/cubesided/web/commits?per_page=1')
      .then(response => response.json())
      .then(data => {
        document.getElementById('currentTime').textContent = data[0].sha.substring(0, 7);
      });
