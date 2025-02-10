const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const placeOrder = async () => {
    const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    
    body: JSON.stringify(transientState)
}
const response = await fetch("http://localhost:8088/purchases", postOptions)  
    const customEvent = new CustomEvent("rerenderPage")
    document.dispatchEvent(customEvent)
}

export const chooseEntreeItem = (chosenEntree) => {
    transientState.entreeId = parseInt(chosenEntree)
    console.log(transientState)
}
export const chooseVegetableItem = (chosenVeg) => {
    transientState.vegetableId = parseInt(chosenVeg)
    console.log(transientState)
}
export const chooseSideDishItem = (chosenDish) => {
    transientState.sideId = parseInt(chosenDish)
    console.log(transientState)
}

