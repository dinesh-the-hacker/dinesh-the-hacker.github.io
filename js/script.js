// Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal
var modalImg = document.getElementById("modalImage");
var images = document.querySelectorAll(".grid-image");

images.forEach((image) => {
    image.addEventListener("click", function () {
        modal.style.display = "flex";  // Show modal
        modalImg.src = this.src;
        modal.classList.add("show");
        setTimeout(() => {
            modalImg.classList.add("zoom");
        }, 10);  // Add zoom class for zoom effect
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalImg.classList.remove("zoom");
    modal.classList.remove("show");
    setTimeout(() => modal.style.display = "none", 500);  // Hide modal after zoom-out animation
};
