$(document).ready(function () {
  const words = [
    "code",
    "IoT",
    "cybersecurity",
    "cloud",
    "linux",
    "open source",
  ];
  let currentIndex = 0;

  // Calculate and set initial width
  function updateWidth() {
    const wordElement = $("#animatedWord");
    const container = $(".animated-word-container");

    // Get the width of the current word
    const width = wordElement.outerWidth();
    container.css("width", width + "px");
  }

  // Set initial width
  updateWidth();

  setInterval(function () {
    currentIndex = (currentIndex + 1) % words.length;
    $("#animatedWord").removeClass("fade-in");

    // Small delay to allow animation to restart
    setTimeout(function () {
      $("#animatedWord").text(words[currentIndex]).addClass("fade-in");

      // Update width with smooth transition
      updateWidth();
    }, 50);
  }, 2000);
});
