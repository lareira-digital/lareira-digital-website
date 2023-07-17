document.querySelectorAll(".eat_that_cookie").forEach((closeButton) => {
    closeButton.addEventListener("click", () =>
        closeButton.closest(".banner").remove()
    );
});