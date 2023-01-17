// https://api.adviceslip.com/advice
let idAdvice = document.getElementById("id-advice"),
  advice = document.getElementById("advice"),
  generator = document.getElementById("generator");

async function GetAdvice() {
  try {
    let myData = await fetch("https://api.adviceslip.com/advice");
    let data = await myData.json();
    idAdvice.innerText = data.slip.id;
    advice.innerText = data.slip.advice;
  } catch (reason) {
    console.error(`Reason: ${reason}`);
  }
}
GetAdvice();

generator.addEventListener("click", GetAdvice);
