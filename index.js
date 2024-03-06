let askSection = document.getElementById('askSection')
let mainInputArea = document.getElementById('mainInputArea')
let mainContainer = document.getElementById('mainContainer')
const inputData = [];
let showBazi = document.getElementById('showBazi')


// To display the main ask page-----------
function addToDo() {
    askSection.style.display = "flex";
}


// To add container to the main page-------
function addHeading() {
    if (mainInputArea.value != "") {
        inputData.push({ heading: mainInputArea.value, todoData: [] })
        mainContainer.innerHTML = "";
        updateMainContainer();
        askSection.style.display = "none"
    }
    else {
        alert("Please fill the heading to continue.......")
    }


}


//TO delete container from the main page--------
function deleteContainer(item) {
    let indexRemove = inputData.indexOf(item)
    inputData.splice(indexRemove, 1);
    mainContainer.innerHTML = "";
    updateMainContainer();
}


//To create container-------
function updateMainContainer() {

    inputData.forEach(item => {
        let container = document.createElement('div');
        container.classList.add('container');
        container.style.display = "block";

        let displayArea = document.createElement('div')
        displayArea.classList.add('displayArea');

        let h2 = document.createElement('h2')
        h2.innerText = item.heading;

        let content = document.createElement('div');
        content.classList.add('content');


        content.innerHTML = "";

        if (item.todoData != []) {
            item.todoData.forEach(values => {
                let g = `<div class="innerTodospace"><div class="todoinnerText">${values}</div><div class="markButton">Mark as done</div></</div>`;

                content.innerHTML += g;
            })

        }


        let deleteAddArea = document.createElement('div')
        deleteAddArea.classList.add('deleteAddArea')

        let deleteSymbol = document.createElement('div')
        deleteSymbol.classList.add('material-symbols-outlined');
        deleteSymbol.innerText = "delete";
        deleteSymbol.addEventListener('click', () => {
            deleteContainer(item);
        })


        let insideAddButton = document.createElement('div')
        insideAddButton.classList.add('insideAddButton');
        insideAddButton.innerText = "+";
        insideAddButton.addEventListener('click', () => {


            let askSectionInside = document.createElement('div');
            askSectionInside.id = "askSectionInside";
            askSectionInside.style.display = "flex";

            let h2Inside = document.createElement('h2')
            h2Inside.innerText = "Add New Item In The TODO"

            let inputInside = document.createElement('input');
            inputInside.id = "insideInputArea";

            let divInside = document.createElement('div')

            let addButton = document.createElement('button')
            addButton.innerText = "Add";

            //Function to add todo's inside the content box----
            addButton.addEventListener('click', () => {

                if (inputInside.value != "") {
                    content.innerHTML = "";

                    item.todoData.push(inputInside.value)

                    item.todoData.forEach(values => {
                        let g = `<div class="innerTodospace"><div class="todoinnerText">${values}</div><div class="markButton">Mark as done</div></div>`;

                        content.innerHTML += g;
                    })

                    askSectionInside.style.display = "none";
                    showBazi.style.display = "none"
                }
                else {
                    alert("Please add some valid input....")
                }


            })


            let closeButton = document.createElement('button')
            closeButton.innerText = "Close";
            closeButton.addEventListener('click', () => {
                askSectionInside.style.display = "none";
                showBazi.style.display = "none"
            })

            divInside.append(addButton, closeButton);

            askSectionInside.append(h2Inside, inputInside, divInside);

            showBazi.append(askSectionInside)
            showBazi.style.display = "flex"
        })



        displayArea.append(h2, content)

        deleteAddArea.append(deleteSymbol, insideAddButton);

        container.append(displayArea, deleteAddArea);

        mainContainer.append(container);
    })


}


//To close the main askSection-------
function closeMainAskSection() {
    askSection.style.display = "none"

}

//Function for markbutton when done-----
// function taskCompleted(item) {
//     let indexRemove = inputData.indexOf(item)
//     console.log(indexRemove);
// }