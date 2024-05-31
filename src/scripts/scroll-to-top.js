  /** Scrolls the document to the top when
   * the "Back to Top" button is clicked. */
  function backToTop() {
    document.querySelector("#back-to-top")?.addEventListener("click", () => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
  }
  backToTop();