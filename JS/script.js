
const hubbleImages = [
  "Resources/Hubble/_111493221_s125e012033_1.jpg",
  "Resources/Hubble/heic0601a.jpg",
  "Resources/Hubble/hubble-30th-veil-nebula.jpg",
  "Resources/Hubble/maxresdefault.jpg",
];

var hubbleImageIndex = 0;

/*********************************************************************************/


const jamesWebbImages = [
    "Resources/James Webb/19sci-webb-pillars-01-videoSixteenByNineJumbo1600.jpg",
    "Resources/James Webb/1325386.jpeg",
    "Resources/James Webb/Carina-Nebula-Through-James-Webb-Telescope-AI-Generated-4K-Desktop-Wallpaper-jpg.webp",
    "Resources/James Webb/nasa-universe-james-webb-space-telescope-hd-wallpaper-preview.jpg",
    "Resources/James Webb/jwst-spacecraftpotentialtargetsmontageflip-1200px-4-jpg.webp",
    "Resources/James Webb/weic2212a.jpg"
];

var jamesWebbImageIndex = 0;

/*********************************************************************************/

const spitzerImages = [
    "Resources/Spitzer/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2019__09__messier-81-galaxy-nasa-01-385c488b075f427ab3f930c2cbbf5dfd.jpg",
    "Resources/Spitzer/Crab_Nebula.jpeg",
    "Resources/Spitzer/hd_spitzer_side_visible.webp",
    "Resources/Spitzer/p01fqxxx.jpg"
];

var spitzerImageIndex = 0;

/*********************************************************************************/

const chandraImages = [
    "Resources/Chandra X-ray/intro-import.jpg",
    "Resources/Chandra X-ray/jergmqqrnn8fmnwef2w8.webp",
    "Resources/Chandra X-ray/Wanjek_Winter22_02_2019Athena_MO.jpg.webp",
    "Resources/Chandra X-ray/XFV8msbEKcKTCACcMzUVMd.jpg"
];

var chandraImageIndex = 0;

/*********************************************************************************/

const keplerImages = [
    "Resources/Kepler/Kepler_K2_640x480.jpg",
    "Resources/Kepler/kepler-supernova-500px.jpg",
    "Resources/Kepler/oFJzShZ98q95dEJNFy8HdW.jpg"
];

var keplerImageIndex = 0;

/*********************************************************************************/

// Functions for Hubble telescope image switching

function updateBackground() {
    const imageUrl = images[hubbleImageIndex];
    document.getElementById('HubbleDiv').style.backgroundImage = `url(${imageUrl})`;
}

updateBackground();

const HubblePrevButton = document.getElementById('HubblePrevButton');
HubblePrevButton.addEventListener('click', () => {
    hubbleImageIndex = (hubbleImageIndex - 1 + hubbleImages.length) % hubbleImages.length;
    updateBackground();
});

const HubbleNextButton = document.getElementById('HubbleNextButton');
HubbleNextButton.addEventListener('click', () => {
    hubbleImageIndex = (hubbleImageIndex + 1) % hubbleImages.length;
    updateBackground();
});


/*********************************************************************************/

// Functions for James Webb telescope image switching


function updateBackground() {
    const imageUrl = images[jamesWebbImageIndex];
    document.getElementById('JamesDiv').style.backgroundImage = `url(${imageUrl})`;
}

updateBackground();

const JamesPrevButton = document.getElementById('JamesPrevButton');
JamesPrevButton.addEventListener('click', () => {
    jamesWebbImageIndex = (jamesWebbImageIndex - 1 + jamesWebbImages.length) % jamesWebbImages.length;
    updateBackground();
});

const JamesNextButton = document.getElementById('JamesNextButton');
JamesNextButton.addEventListener('click', () => {
    jamesWebbImageIndex = (jamesWebbImageIndex + 1) % jamesWebbImages.length;
    updateBackground();
});

/*********************************************************************************/

// Functions for Spitzer telescope image switching

function updateBackground() {
    const imageUrl = images[spitzerImageIndex];
    document.getElementById('SpitzerDiv').style.backgroundImage = `url(${imageUrl})`;
}

updateBackground();

const SpitzerPrevButton = document.getElementById('SpitzerPrevButton');
SpitzerPrevButton.addEventListener('click', () => {
    spitzerImageIndex = (spitzerImageIndex - 1 + spitzerImages.length) % spitzerImages.length;
    updateBackground();
});

const SpitzerNextButton = document.getElementById('SpitzerNextButton');
SpitzerNextButton.addEventListener('click', () => {
    spitzerImageIndex = (spitzerImageIndex + 1) % spitzerImages.length;
    updateBackground();
});

/*********************************************************************************/

// Functions for Chandra X-ray telescope image switching


function updateBackground() {
    const imageUrl = images[chandraImageIndex];
    document.getElementById('ChandraDiv').style.backgroundImage = `url(${imageUrl})`;
}

updateBackground();

const ChandraPrevButton = document.getElementById('ChandraPrevButton');
ChandraPrevButton.addEventListener('click', () => {
    chandraImageIndex = (chandraImageIndex - 1 + chandraImages.length) % chandraImages.length;
    updateBackground();
});

const ChandraNextButton = document.getElementById('ChandraNextButton');
ChandraNextButton.addEventListener('click', () => {
    chandraImageIndex = (chandraImageIndex + 1) % chandraImages.length;
    updateBackground();
});

/*********************************************************************************/

// Functions for Kepler telescope image switching

function updateBackground() {
    const imageUrl = images[keplerImageIndex];
    document.getElementById('KeplerDiv').style.backgroundImage = `url(${imageUrl})`;
}

updateBackground();

const KeplerPrevButton = document.getElementById('KeplerPrevButton');
KeplerPrevButton.addEventListener('click', () => {
    keplerImageIndex = (keplerImageIndex - 1 + keplerImages.length) % keplerImages.length;
    updateBackground();
});

const KeplerNextButton = document.getElementById('KeplerNextButton');
KeplerNextButton.addEventListener('click', () => {
    keplerImageIndex = (keplerImageIndex + 1) % keplerImages.length;
    updateBackground();
});

/*********************************************************************************/

