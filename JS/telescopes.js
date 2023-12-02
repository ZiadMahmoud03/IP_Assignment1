/*********************************************************************************/
const telescopeImages = [
    "../Resources/Hubble/_111493221_s125e012033_1.jpg",
    "../Resources/JamesWebb/jwst_poster02.jpg",
    "../Resources/ChandraX-ray/Wanjek_Winter22_02_2019Athena_MO.jpg.webp",
    "../Resources/Spitzer/hd_spitzer_side_visible.webp",
    "../Resources/Kepler/Kepler_K2_640x480.jpg"
];

var telescopeImageIndex = 0;

/*********************************************************************************/
//  1

if(window.location.href.indexOf("home.html") > -1) {
    // Functions for Telescope image switching

    function updateTelescopeBackground() {
        const imageUrl = telescopeImages[telescopeImageIndex];
        document.getElementById('TelescopesDiv').style.backgroundImage = `url(${imageUrl})`;
    }

    updateTelescopeBackground();

    const TelescopePrevButton = document.getElementById('TelescopesPrevButton');
    TelescopePrevButton.addEventListener('click', () => {
        telescopeImageIndex = (telescopeImageIndex - 1 + telescopeImages.length) % telescopeImages.length;
        updateTelescopeBackground();
    });

    const TelescopeNextButton = document.getElementById('TelescopesNextButton');
    TelescopeNextButton.addEventListener('click', () => {
        telescopeImageIndex = (telescopeImageIndex + 1) % telescopeImages.length;
        updateTelescopeBackground();
    });
}


/*********************************************************************************/

// Functions for Hubble telescope image switching  2 & 3

function changeHubbleBackground() {
    document.getElementById('HubbleDiv').style.backgroundImage = `url("../Resources/Hubble/hubble-30th-veil-nebula.jpg")`; // Replace "new-image.jpg" with the path to your new image
}

function restoreHubbleBackground() {
    document.getElementById('HubbleDiv').style.backgroundImage = `url("../Resources/Hubble/_111493221_s125e012033_1.jpg")`; // Replace "original-image.jpg" with the path to your original image
}


/*********************************************************************************/

// Functions for James Webb telescope image switching

function changeWebbBackground() {
    document.getElementById('JamesDiv').style.backgroundImage = `url("../Resources/JamesWebb/UCFedHhDd4r29qjKmvNE3X.jpg")`; // Replace "new-image.jpg" with the path to your new image
}

function restoreWebbBackground() {
    document.getElementById('JamesDiv').style.backgroundImage = `url("../Resources/JamesWebb/jwst_poster02.jpg")`; // Replace "original-image.jpg" with the path to your original image
}


/*********************************************************************************/

// Functions for login

function validateEmail(email) {
    // Regular expression for basic email validation
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(email);
  }
  
  // Update the onclick event to call the loginAndRedirect function
//   document.getElementById("btnLogin").onclick = function () {
//     loginAndRedirect();
// };

  // Functions for login
function loginAndRedirect() {
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;
  
    // Check if username and password are not empty
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter both username and password.");
      return;
    }
  
    // Simulating a login process
    alert("Logging in... Please wait.");
  
    // Setting a timeout for 2 seconds (2000 milliseconds)
    setTimeout(function () {
      // Redirecting to the home page after the timeout
      window.location.href = "home.html";
      // Change the button text to 'Logout'
    //   document.getElementById("btnLogin").innerText = "Logout";
    }, 1000);
};
  
// Function to handle registration and redirect after a timeout
function registerAndRedirect() {
    var regUsername = document.getElementById("regUsername").value;
    var regEmail = document.getElementById("regEmail").value;
    var regPassword = document.getElementById("regPassword").value;
  
    // Check if registration fields are not empty
    if (
      regUsername.trim() === "" ||
      regEmail.trim() === "" ||
      regPassword.trim() === ""
    ) {
      alert("Please fill in all registration fields.");
      return;
    }
  
    // Check if the email is valid
    if (!validateEmail(regEmail)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Simulating a registration process
    alert("Registering... Please wait.");
  
    // Setting a timeout for 2 seconds (2000 milliseconds)
    setTimeout(function () {
      // Redirecting to the home page after the timeout
      window.location.href = "home.html";
      // Change the button text to 'Logout'
    //   document.getElementById("btnLogin").innerText = "Logout";
    }, 1000);
};


/*********************************************************************************/

//4

var fontSize = 34;
function makeTextBig() {
    fontSize += 2
    document.getElementById("fontBig").style.fontSize = fontSize + "px";
};


/*********************************************************************************/

//5

if(window.location.href.indexOf("hubble.html") > -1) {
    //Function for hubble page backgound colour change

    function changeHubbleColour() {
        document.getElementsByClassName('hubblePage')[0].style.backgroundColor = "rgb(186, 48, 48)";
    }
}


/*********************************************************************************/

//6

if(window.location.href.indexOf("james.html") > -1) {

    function changefontColour() {
        document.getElementById('colourChange').style.color = "rgb(186, 48, 48)";
    }

}


/*********************************************************************************/

//7

if(window.location.href.indexOf("facts.html") > -1) {

    function changeContent() {
        var newContent = "Cool Space Facts";
        document.getElementById('contentChange').innerHTML = newContent;
    }

}


/*********************************************************************************/

//8

if(window.location.href.indexOf("media.html") > -1) {

    function showAlert() {
        alert("Don't click me!");
    }

}


/*********************************************************************************/

//9 & 10

if(window.location.href.indexOf("videos.html") > -1) {

    var elementToToggle = document.getElementById('hide');

    function hideElement() {
        elementToToggle.style.display = 'none';
    }

    function showElement() {
        elementToToggle.style.display = 'block'; 
    }

}