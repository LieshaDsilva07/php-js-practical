// Change text using innerHTML
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementsByClassName("description")[0].innerHTML = "Text has been changed!";
});

// Change color and position using CSS properties
document.getElementById("moveBoxBtn").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.style.backgroundColor = "green";
    box.style.position = "relative";
    box.style.left = "50px";
});

// Change image source on button click
document.getElementById("changeImageBtn").addEventListener("click", function() {
    let img = document.getElementById("image");
    img.src = "img2.jpg"; // Change to another image URL
});

// Add a text node to a parent node
document.getElementById("addTextBtn").addEventListener("click", function() {
    let newText = document.createTextNode("This is dynamically added text.");
    let parent = document.getElementById("textContainer");
    parent.appendChild(newText);
});

// Delete a node
document.getElementById("deleteTextBtn").addEventListener("click", function() {
    let parent = document.getElementById("textContainer");
    if (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
});

// jQuery Operations
$(document).ready(function() {
    // Change button text using jQuery
    $("#jqueryButton").click(function() {
        $(this).text("Text Changed with jQuery!");
    });

    // Set background image using jQuery
    $("body").css("background-image", "url('background.jpg')");

    // Access form data using jQuery
    $("#userForm").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        alert("Hello, " + name + "!");
    });

    // Add an attribute using jQuery
    $("#image").attr("alt", "Updated Image Description");
});
