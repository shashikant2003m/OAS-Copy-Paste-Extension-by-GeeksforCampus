document.addEventListener("click", (event) => {
    if (event.target.classList.contains("badge") && event.target.classList.contains("badgeClassSelected")) {
        const question = document.querySelector(".col-md-9.col-sm-9.col-xs-12");
        const mcq = document.querySelector("#optionCol");
        
        if (question && mcq) {
            const questionText = question.innerText.trim();
            const optionsArray = mcq.innerText.trim().split("\n");
            const optionsWithSerialNumbers = optionsArray.map((option, index) => {
                const serialNumber = (index + 1) + ". "; 
                return serialNumber + option;
            });
            const formattedOptions = optionsWithSerialNumbers.join("\n");
            navigator.clipboard.writeText(
                questionText + "\n\n" + formattedOptions + "\n\nPlease provide the correct options No need Explaination."
            ).then(() => {
                console.log("Developed by GeeksforCampus , Follow me on telegram https://t.me/shashyiii ");
            }).catch((error) => {
                console.error("Could not copy to clipboard:", error);
            });
        } else {
            console.error("Question or options not found.");
        }
    }
});
console.log("Developed By GeeksforCampus , Follow me on telegram https://t.me/shashyiii");

