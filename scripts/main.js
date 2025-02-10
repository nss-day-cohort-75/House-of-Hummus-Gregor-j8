import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")
const renderAllHTML = async() => {
    let foodHTML = await FoodTruck()
    mainContainer.innerHTML = `
        ${foodHTML}
    `
}

renderAllHTML()


document.addEventListener("rerenderPage", () => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})


