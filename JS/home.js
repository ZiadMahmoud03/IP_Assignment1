const telescopeImages = [
    "../Resources/Hubble/_111493221_s125e012033_1.jpg",
    "../Resources/JamesWebb/jwst_poster02.jpg",
    "../Resources/ChandraX-ray/Wanjek_Winter22_02_2019Athena_MO.jpg.webp",
    "../Resources/Spitzer/hd_spitzer_side_visible.webp",
    "../Resources/Kepler/Kepler_K2_640x480.jpg"
];

var telescopeImageIndex = 0;

/*********************************************************************************/

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