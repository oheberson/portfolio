document.getElementById('changeMessageButton').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    if (messageElement.innerText === "Hello, World!") {
        messageElement.innerText = "You clicked the button!";
    } else {
        messageElement.innerText = "Hello, World!";
    }
});