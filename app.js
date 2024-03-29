const allBtns=document.querySelector(".allBtns")
const buttonsToCopy=document.querySelectorAll("#buttonToCopy")
const overlay=document.querySelector(".overlay")
const shareForm=document.querySelector(".shareForm")
const shareButton=document.querySelector(".btn-4")
const doneBtn=document.querySelector("#doneBtn")
const input=document.querySelector("#input")
const copyContent=document.querySelector("#copyContent")
console.log(copyContent);
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
shareButton.addEventListener("click",function(){
  shareForm.style.display="block"
  overlay.style.display="block"
})
doneBtn.addEventListener("click",function(){
  shareForm.style.display="none"
  overlay.style.display="none"
})
input.textContent="https://93-css-scan-clone.vercel.app/"
const contentToCopy=input.textContent
copyContent.addEventListener("click",function(){
  if(navigator.clipboard.writeText(contentToCopy)){
    copyContent.textContent="copied"
    setTimeout(()=>{
      copyContent.textContent="copy"
    },2000)
  }
})