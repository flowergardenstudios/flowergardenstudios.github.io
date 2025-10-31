var contentDownloadSites = ['Modrinth', 'Smithed', 'PlanetMinecraft', 'Curseforge']
var donationSites = ['Patreon', 'Ko-Fi', 'Paypal']

function changeText(id, text) {
    document.getElementById(`${id}`).textContent = text
}

cDSIndex = 0
dSIndex = 0

setInterval(() => {
    changeText('contentDownloadSites', contentDownloadSites[cDSIndex]);
    console.log(contentDownloadSites[cDSIndex]);
    if (cDSIndex < contentDownloadSites.length-1){
        cDSIndex += 1;
    } else {
        cDSIndex = 0;
    }
}, 2000)

setInterval(() => {
    changeText('donationSites', donationSites[dSIndex]);
    console.log(donationSites[dSIndex]);
    if (dSIndex < donationSites.length-1){
        dSIndex += 1;
    } else {
        dSIndex = 0;
    }
}, 3000)

function showAboutUs() {
    window.scrollTo({
        top: document.getElementById('aboutUs').getBoundingClientRect().top-400, 
        left: 0,
        behavior: "smooth"
    });
}

function showProjectSection() {
    window.scrollTo({
        top: document.getElementById('projectsSection').getBoundingClientRect().top-400, 
        left: 0,
        behavior: "smooth"
    });
}

function showLinkSection() {
    window.scrollTo({
        top: document.getElementById('linksSection').getBoundingClientRect().top-400, 
        left: 0,
        behavior: "smooth"
    });
}
function showContactSection() {
    window.scrollTo({
        top: document.getElementById('contactSection').getBoundingClientRect().top-400, 
        left: 0,
        behavior: "smooth"
    });
}

console.log(client)