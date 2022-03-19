
const DateConvert = document.querySelector("#convert");
const inputText = document.querySelector("#input");
const outputText = document.querySelector("#output");

const convertToHumanDate = () => {
    let date = new Date(inputText.value * 1000);
    outputText.value = date.toLocaleString();
}

DateConvert.addEventListener("click", convertToHumanDate);

const epochButton = document.querySelector("#convert_epoch");
const human_date = document.querySelector("#inputdate");
const epoch = document.querySelector("#outputdate");

epochButton.addEventListener("click", () => {
    let date = new Date(human_date.value);
    let timestamp = date.getTime()/1000.0;
    epoch.value = timestamp;
})