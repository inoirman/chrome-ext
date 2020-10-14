const div = document.querySelector('.work-data');
let url = '';
const button = document.querySelector('button');
button.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        const activeTab = tabs[0];
        url = activeTab.url; //.replace(/(^\w+:|^)\/\//, '');
        // const auditLine = "https://ace.accessibe.com/?website=" + url + "#content";
        const workLink = "https://acsbace.com/apps/ace/#audit/" + url;

        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', workLink);
        div.appendChild(iframe);
        div.classList.remove('hide');
        document.querySelector('.wrapper').classList.add('full-screen');
    });
})