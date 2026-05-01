var numbDrums = document.querySelectorAll(".drum").length;

for ( var i = 0; i < numbDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked!");
    });
}