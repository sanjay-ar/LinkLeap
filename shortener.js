const inputBox = document.querySelector("#input");
const submitButton = document.querySelector(".shorten");
const outputButton = document.querySelector("#output");
submitButton.addEventListener('click', submitUrl);

function submitUrl(e) {
    let link = inputBox.value;
    fetchData(link);
}

function fetchData(link) {
    fetch('https://api-ssl.bitly.com/v4/shorten', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer e518510dfa4a9c16ebb1c164322e8183fa2f88fe',
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({ "long_url": link, "domain": "bit.ly" } )
    }).then(res => res.json())
    .then(result => setOutputValue(result.link))
}

function setOutputValue(value) {
    outputButton.value = value;
}