const allBtns=document.querySelector(".allBtns")
const buttonsToCopy=document.querySelectorAll("#buttonToCopy")
// console.log(buttonToCopy);
buttonsToCopy.forEach((buttonToCopy) => {
    buttonToCopy.addEventListener("click", function () {
      if (navigator.clipboard.writeText(buttonToCopy.dataset.shadow)) {
    const previousContent=buttonToCopy.textContent
        buttonToCopy.textContent = "Copied";
        setTimeout(() => {
          buttonToCopy.textContent = previousContent;
        }, 2000);
      }
    });
  });