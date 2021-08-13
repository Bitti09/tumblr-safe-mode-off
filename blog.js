// automatically click "View this Tumblr"
const observer = new MutationObserver((_, self) => {
	console.log("test1");
    const showMeButton = document.querySelector('button[aria-label="View this Tumblr" i]'); // fragile - class names are all generated
    if (showMeButton) {
	console.log("test2");
        document.querySelector('._3otBh').classList.add('blog-fullscreen'); // only show blog fullscreen if safe-view
        document.querySelector('._15MuE').style ="max-width: none !important";// only show blog fullscreen if safe-view
        document.querySelector('._1cR6l').style.width = "100%"; // only show blog fullscreen if safe-view
        showMeButton.click();
        self.disconnect();
    }
});
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
