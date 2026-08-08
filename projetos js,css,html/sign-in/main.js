//camp of primary variables
const campName = document.getElementById("Nme")
const campEmail = document.getElementById("Email2")
const campPassword = document.getElementById("password1")
const campconfirmPr = document.getElementById("password2")
const buttonConfirm = document.getElementById("btn")
const errorTexts = document.querySelectorAll(".errorText")
const errorText1 = document.getElementById("errorName")
const errorText2 = document.getElementById("errorEmail")
const errorText3 = document.getElementById("errorPassword")
const errorText4 = document.getElementById("errorConfirm")

//arrays of date
let campInputs = [campName, campEmail, campPassword, campconfirmPr]
let errorsIndex = [errorText1, errorText2, errorText3, errorText4]

buttonConfirm.addEventListener("click",
    function(){
            //Validation:

            //campos vazios? se sim:
        campInputs.forEach((camp, index) => {
            if (camp.value === ""){
                errorsIndex[index].textContent = "Preencha este campo."
                errorsIndex[index].style.display = "block";
                errorsIndex[index].style.color = "red";

                console.log(index, camp.value)
            }
            //não?
            else{
                errorsIndex[index].style.display = "none";
                console.log(index, camp.value)
            }
        })
        ///senhas conhecidem? se não:
        if (    campPassword.value !== "" &&
                campconfirmPr.value !== "" &&
                campPassword.value !== campconfirmPr.value){
            //texto erro N 3
          errorText3.style.display = "block";
          errorText3.textContent = "As senhas não coinhecidem.";
          errorText3.style.color = "yellow";

          //texto error N 4
          errorText4.style.display = "block";
          errorText4.textContent = "As senhas não coinhecidem..";
          errorText4.style.color = "yellow";
        }
        else if (campPassword.value !== "" && 
                campconfirmPr.value !== "" &&
                campPassword.value === campconfirmPr.value){

            errorText3.style.display = "block";
            errorText4.style.display = "block";

            errorText3.textContent = "Coinhecidem.";
            errorText4.textContent = "Coinhecidem";

            errorText3.style.color = "green";
            errorText4.style.color = "green";
        }
    }
);