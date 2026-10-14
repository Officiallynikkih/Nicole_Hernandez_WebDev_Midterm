const readMoreBtn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("moreText")

if (readMoreBtn && moreText) {
    readMoreBtn.addEventListener("click", function() {
        if (moreText.hidden === true) {
            moreText.hidden = false;
            readMoreBtn.textContext = "Read Less";
        }else {
            moreText.hidden = true;
            button.textContent = "Read More";
        }
    });
}