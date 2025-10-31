var contentDownloadSites = ['Modrinth', 'Smithed', 'PlanetMinecraft', 'Curseforge']
var donationSites = ['Patreon', 'Ko-Fi', 'Paypal']

function changeText(id, text, timeout) {
    setTimeout(() => {
        document.getElementById(`${id}`).textContent = text
    }, timeout)
}
