const submitButton = document.getElementById("submitButton");
let multiplicationTableList = document.getElementById("multiplicationTable");


function whenSubmitButtonIsClicked(){
    submitButton.addEventListener("click", verifyTheNumberWrittenByUser);
}

function whenEnterIsClicked(){
    document.addEventListener("keydown", (keyClicked) =>{
        if(keyClicked.key == "Enter"){
            verifyTheNumberWrittenByUser();
        }
    })
}

function verifyTheNumberWrittenByUser(){
    let numberWrittenByUser = parseInt(document.getElementById("userInput").value);
    if(isNaN(numberWrittenByUser)){
        alert("Write a number");
        return;
    }else{
        generateMultiplicationTable(numberWrittenByUser);
        let input = document.querySelector("input");
        input.value = "";
    }
}

function generateMultiplicationTable(number){
    multiplicationTableList.innerHTML = "";

    for(let numberToMultiplicate = 0; numberToMultiplicate < 11; numberToMultiplicate++){
        let multiplication= number * numberToMultiplicate;
        let li = document.createElement("li");
        li.innerHTML = `
            <span class="equalSpan">${number}</span> <span style = "color: #ffffff"> X </span>
            <span class="equalSpan">${numberToMultiplicate}</span> <span style = "color: #ffffff"> = </span>
            <span class="equalSpan">${multiplication}</span>
        `;

        multiplicationTableList.appendChild(li);
        multiplicationTableList.style.backgroundColor = "#622c8b";
        multiplicationTableList.style.display = "flex";
        multiplicationTableList.style.flexDirection = "column";
        multiplicationTableList.style.justifyContent = "center";
        multiplicationTableList.style.alignItems = "center";
        multiplicationTableList.style.padding = "1rem";
        multiplicationTableList.style.width = "90%";
        li.style.marginBottom = "2rem";
    }
    return;
}

whenSubmitButtonIsClicked();
whenEnterIsClicked();