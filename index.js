document.addEventListener("DOMContentLoaded", function () {
    // Get the body element
    var body = document.body;

    // Set the background image
    body.style.backgroundImage = "url('https://github.com/jamesd5V5/JamesStreett.github.io/blob/main/MammothMountainCustomTopoArt.png')";
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";
    body.style.backgroundRepeat = "no-repeat";

    // Create a container for the content
    var container = document.createElement("div");
    container.style.textAlign = "center";
    container.style.position = "absolute";
    container.style.top = "50%";
    container.style.left = "50%";
    container.style.transform = "translate(-50%, -50%)";

    // Create a title element
    var title = document.createElement("h1");
    title.textContent = "Centered Title Text";
    title.style.color = "#fff"; // Set text color to white

    // Create a button element
    var button = document.createElement("button");
    button.textContent = "Say Hiiiiii";
    button.addEventListener("click", function () {
        alert("Hi");
    });

    // Append title and button to the container
    container.appendChild(title);
    container.appendChild(button);

    // Append the container to the body
    body.appendChild(container);
});
