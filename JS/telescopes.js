
const hubbleImages = [
  "../Resources/Hubble/_111493221_s125e012033_1.jpg",
  "../Resources/Hubble/heic0601a.jpg",
  "../Resources/Hubble/hubble-30th-veil-nebula.jpg",
  "../Resources/Hubble/maxresdefault.jpg"
];

var hubbleImageIndex = 0;

/*********************************************************************************/


const jamesWebbImages = [
    "../Resources/JamesWebb/jwst_poster02.jpg",
    "../Resources/JamesWebb/1325386.jpeg",
    "../Resources/JamesWebb/Carina-Nebula.webp",
    "../Resources/JamesWebb/weic2208a.jpg",
    "../Resources/JamesWebb/weic2212a.jpg"
];

var jamesWebbImageIndex = 0;

/*********************************************************************************/

const spitzerImages = [
    "../Resources/Spitzer/hd_spitzer_side_visible.webp",
    "../Resources/Spitzer/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__09__messier-81-galaxy-nasa-01-385c488b075f427ab3f930c2cbbf5dfd.jpg",
    "../Resources/Spitzer/Crab_Nebula.jpeg",
    "../Resources/Spitzer/p01fqxxx.jpg"
];

var spitzerImageIndex = 0;

/*********************************************************************************/

const chandraImages = [
    "../Resources/ChandraX-ray/Wanjek_Winter22_02_2019Athena_MO.jpg.webp",
    "../Resources/ChandraX-ray/intro-import.jpg",
    "../Resources/ChandraX-ray/jergmqqrnn8fmnwef2w8.webp",
    "../Resources/ChandraX-ray/XFV8msbEKcKTCACcMzUVMd.jpg"
];

var chandraImageIndex = 0;

/*********************************************************************************/

const keplerImages = [
    "../Resources/Kepler/Kepler_K2_640x480.jpg",
    "../Resources/Kepler/kepler-supernova-500px.jpg",
    "../Resources/Kepler/oFJzShZ98q95dEJNFy8HdW.jpg"
];

var keplerImageIndex = 0;

/*********************************************************************************/

// Functions for Hubble telescope image switching

function updateHubbleBackground() {
    const imageUrl = hubbleImages[hubbleImageIndex];
    document.getElementById('HubbleDiv').style.backgroundImage = `url(${imageUrl})`;
}

updateHubbleBackground();

const HubblePrevButton = document.getElementById('HubblePrevButton');
HubblePrevButton.addEventListener('click', () => {
    hubbleImageIndex = (hubbleImageIndex - 1 + hubbleImages.length) % hubbleImages.length;
    updateHubbleBackground();
});

const HubbleNextButton = document.getElementById('HubbleNextButton');
HubbleNextButton.addEventListener('click', () => {
    hubbleImageIndex = (hubbleImageIndex + 1) % hubbleImages.length;
    updateHubbleBackground();
});


/*********************************************************************************/

// Functions for James Webb telescope image switching


function updateJamesWebbBackground() {
    const imageUrl = jamesWebbImages[jamesWebbImageIndex];
    document.getElementById('JamesDiv').style.backgroundImage = `url(${imageUrl})`;
}

updateJamesWebbBackground();

const JamesPrevButton = document.getElementById('JamesPrevButton');
JamesPrevButton.addEventListener('click', () => {
    jamesWebbImageIndex = (jamesWebbImageIndex - 1 + jamesWebbImages.length) % jamesWebbImages.length;
    updateJamesWebbBackground();
});

const JamesNextButton = document.getElementById('JamesNextButton');
JamesNextButton.addEventListener('click', () => {
    jamesWebbImageIndex = (jamesWebbImageIndex + 1) % jamesWebbImages.length;
    updateJamesWebbBackground();
});

/*********************************************************************************/

// Functions for Spitzer telescope image switching

// function updateSpitzerBackground() {
//     const imageUrl = spitzerImages[spitzerImageIndex];
//     document.getElementById('SpitzerDiv').style.backgroundImage = `url(${imageUrl})`;
// }

// updateSpitzerBackground();

// const SpitzerPrevButton = document.getElementById('SpitzerPrevButton');
// SpitzerPrevButton.addEventListener('click', () => {
//     spitzerImageIndex = (spitzerImageIndex - 1 + spitzerImages.length) % spitzerImages.length;
//     updateSpitzerBackground();
// });

// const SpitzerNextButton = document.getElementById('SpitzerNextButton');
// SpitzerNextButton.addEventListener('click', () => {
//     spitzerImageIndex = (spitzerImageIndex + 1) % spitzerImages.length;
//     updateSpitzerBackground();
// });

/*********************************************************************************/

// Functions for Chandra X-ray telescope image switching


// function updateChandraBackground() {
//     const imageUrl = chandraImages[chandraImageIndex];
//     document.getElementById('ChandraDiv').style.backgroundImage = `url(${imageUrl})`;
// }

// updateChandraBackground();

// const ChandraPrevButton = document.getElementById('ChandraPrevButton');
// ChandraPrevButton.addEventListener('click', () => {
//     chandraImageIndex = (chandraImageIndex - 1 + chandraImages.length) % chandraImages.length;
//     updateChandraBackground();
// });

// const ChandraNextButton = document.getElementById('ChandraNextButton');
// ChandraNextButton.addEventListener('click', () => {
//     chandraImageIndex = (chandraImageIndex + 1) % chandraImages.length;
//     updateChandraBackground();
// });

/*********************************************************************************/

// Functions for Kepler telescope image switching

// function updateKeplerBackground() {
//     const imageUrl = keplerImages[keplerImageIndex];
//     document.getElementById('KeplerDiv').style.backgroundImage = `url(${imageUrl})`;
// }

// updateKeplerBackground();

// const KeplerPrevButton = document.getElementById('KeplerPrevButton');
// KeplerPrevButton.addEventListener('click', () => {
//     keplerImageIndex = (keplerImageIndex - 1 + keplerImages.length) % keplerImages.length;
//     updateKeplerBackground();
// });

// const KeplerNextButton = document.getElementById('KeplerNextButton');
// KeplerNextButton.addEventListener('click', () => {
//     keplerImageIndex = (keplerImageIndex + 1) % keplerImages.length;
//     updateKeplerBackground();
// });

/*********************************************************************************/


