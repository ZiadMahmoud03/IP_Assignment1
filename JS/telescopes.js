
/*********************************************************************************/

const mediaImages =[
    "../Resources/Hubble/STScI-01EVSTMRKJVY7Y4Y2QXNCH2TFH.png",
    "../Resources/Hubble/heic0601a.jpg",
    "../Resources/JamesWebb/1325386.jpeg",
    "../Resources/JamesWebb/Carina-Nebula.webp",
    "../Resources/JamesWebb/UCFedHhDd4r29qjKmvNE3X.jpg",
    "../Resources/JamesWebb/weic2208a.jpg",
    "../Resources/JamesWebb/weic2212a.jpg",
    "../Resources/Kepler/kepler-supernova-500px.jpg",
    "../Resources/Kepler/oFJzShZ98q95dEJNFy8HdW.jpg",
    "../Resources/Spitzer/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__09__messier-81-galaxy-nasa-01-385c488b075f427ab3f930c2cbbf5dfd.jpg",
    "../Resources/Spitzer/Crab_Nebula.jpeg",
    "../Resources/ChandraX-ray/intro-import.jpg",
    "../Resources/ChandraX-ray/jergmqqrnn8fmnwef2w8.webp"
];



/*********************************************************************************/

// Functions for Hubble telescope image switching

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

// Functions for Media image switching




