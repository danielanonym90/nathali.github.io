let maxItem = 0

function addTask () {


if (maxItem < 15) {

    if (document.getElementById("taskinput").value === "") {
    const returntxt = document.getElementById("taskList");
    
    const newP = document.createElement('p');
    newP.className = "return";            // Aplica a classe ao <p>, não ao taskList
    newP.textContent = "erro";            // Coloca o texto no <p>
    
    returntxt.appendChild(newP);
    maxItem++

    
    } else {
        const resultElement = document.getElementById("taskList")
        const newDiv = document.createElement('div')
        newDiv.className="resultList"

        const newP = document.createElement('p')
        const textResult = document.getElementById("taskinput").value
        newP.innerHTML=textResult
        newP.className="resultTxt"

        const newInput = document.createElement('input')
        newInput.type="checkbox"
        newInput.addEventListener("click", markList);
        newInput.className="checkInput"

        const rmvImg = document.createElement("img")
        rmvImg.src="rmv.png"
        rmvImg.addEventListener("click", removeList);
        rmvImg.className="removeimage"


        newDiv.appendChild(newInput);
        newDiv.appendChild(newP);
        newDiv.appendChild(rmvImg);


        resultElement.appendChild(newDiv);
        maxItem++
        

} } else {
    const returntxt = document.getElementById("taskList");
    const newP = document.createElement('p');
    newP.className = "return";            // Aplica a classe ao <p>, não ao taskList
    newP.textContent = "Número de items excedidos";
    returntxt.appendChild(newP);    

    
} } 

function markList () {
    const parentDiv = this.parentElement;
    const taskText = parentDiv.querySelector(".resultTxt");
    taskText.classList.toggle("completed");

}
function removeList () {
    const removeElement = this.parentElement;
    removeElement.remove()
    maxItem--
}