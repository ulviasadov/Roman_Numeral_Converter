const input = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.querySelector("#output");

const arabicNums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const romanNums = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];


convertBtn.addEventListener("click", ()=>{
  if(input.value == "" || input.value == null){
    output.textContent = "Please enter a valid number"
  } else if(input.value < 1){
    output.textContent = "Please enter a number greater than or equal to 1"
  } else if(input.value > 3999){
    output.textContent = "Please enter a number less than or equal to 3999"
  } else {
    const roman = intToRoman(parseInt(input.value));
    output.textContent = roman
  }
})

function intToRoman(num){
    let romanNum = "";
    for(let i = arabicNums.length; i >= 0; i--){
        while(num >= arabicNums[i]){
            romanNum += romanNums[i];
            num -= arabicNums[i];
        }
    }
    return romanNum;
}