(function () {
  try {
    if (localStorage.getItem("elna3om-theme") === "dark") {
      document.documentElement.classList.add("dark-theme");
    }
  } catch (error) {
    // The site defaults to light mode when browser storage is unavailable.
  }
})();
