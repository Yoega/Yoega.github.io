
document.addEventListener("DOMContentLoaded", function () {

    // // Get elements
    // const commentIcon = document.getElementById("comment-icon");
    // const commentSection = document.getElementById("comment-section");
    // const commentBox = document.getElementById("comment-box");
    // const submitComment = document.getElementById("submit-comment");
    // const commentList = document.getElementById("comment-list");

    // // Show/Hide Comment Section
    // commentIcon.addEventListener("click", function (event) {
    //     event.preventDefault();
    //     commentSection.style.display = commentSection.style.display === "none" || commentSection.style.display === "" ? "block" : "none";
    // });

    // // Load existing comments from local storage
    // let comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    // function displayComments() {
    //     commentList.innerHTML = ""; // Clear existing list
    //     comments.forEach((comment, index) => {
    //         let li = document.createElement("li");
    //         li.textContent = comment;
    //         commentList.appendChild(li);
    //     });
    // }
    // displayComments(); // Display comments on page load

    // // Handle comment submission
    // submitComment.addEventListener("click", function () {
    //     let newComment = commentBox.value.trim();
    //     if (newComment) {
    //         comments.push(newComment);
    //         localStorage.setItem("comments", JSON.stringify(comments)); // Save to local storage
    //         commentBox.value = ""; // Clear input field
    //         displayComments(); // Update UI
    //     }
    // });

    // Get elements
    const commentIcon = document.getElementById("comment-icon");
    const commentSection = document.getElementById("comment-section");
    const commentBox = document.getElementById("comment-box");
    const submitComment = document.getElementById("submit-comment");
    const commentList = document.getElementById("comment-list");
    const closeCommentBtn = document.getElementById("close-comment"); // New close button

    // Toggle comment section when clicking "Leave a Comment"
    commentIcon.addEventListener("click", function (event) {
        event.preventDefault();
        commentSection.classList.toggle("active");
    });

    // Close comment section when clicking "X"
    closeCommentBtn.addEventListener("click", function () {
        commentSection.classList.remove("active");
    });

    // Load existing comments from local storage
    let comments = JSON.parse(localStorage.getItem("comments")) || [];

    function displayComments() {
        commentList.innerHTML = ""; // Clear existing list
        comments.forEach((comment, index) => {
            let li = document.createElement("li");
            li.textContent = comment;
            commentList.appendChild(li);
        });
    }
    displayComments(); // Display comments on page load

    // Handle comment submission
    submitComment.addEventListener("click", function () {
        let newComment = commentBox.value.trim();
        if (newComment) {
            comments.push(newComment);
            localStorage.setItem("comments", JSON.stringify(comments)); // Save to local storage
            commentBox.value = ""; // Clear input field
            displayComments(); // Update UI
        }
    });



    // Heart count functionality
    const heartIcon = document.getElementById("heart-icon");
    const heartCount = document.getElementById("heart-count");

    // Load saved heart count from local storage
    let count = localStorage.getItem("heartCount") ? parseInt(localStorage.getItem("heartCount")) : 0;
    heartCount.innerText = count; // Set the initial value

    heartIcon.addEventListener("click", function (event) {
        event.preventDefault();
        count++;
        heartCount.innerText = count;
        localStorage.setItem("heartCount", count); // Save to local storage
    });


    var swiper = new Swiper(".swiper-container", {
        loop: true, // Infinite scrolling
        slidesPerView: 1, // Ensure only one slide is visible at a time
        centeredSlides: true, // Center the active slide
        spaceBetween: 500, // No extra spacing between slides
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        effect: "slide",
    });

});
