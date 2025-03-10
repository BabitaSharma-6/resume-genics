function openStreamlitApp() {
    let iframe = document.getElementById("streamlit-container");
    let closeButton = document.getElementById("close-button");
    let loadingText = document.getElementById("loading-text");

    // Show loading message
    loadingText.style.display = "block";

    // Set iframe source and wait for it to load
    iframe.src = "http://localhost:8501";

    iframe.onload = function () {
        // Hide loading message and show iframe when it's fully loaded
        loadingText.style.display = "none";
        iframe.style.display = "block";
        closeButton.style.display = "block";
    };
}

function closeStreamlitApp() {
    let iframe = document.getElementById("streamlit-container");
    let closeButton = document.getElementById("close-button");
    let loadingText = document.getElementById("loading-text");

    // Hide everything when closing
    iframe.style.display = "none";
    closeButton.style.display = "none";
    loadingText.style.display = "none";
}
