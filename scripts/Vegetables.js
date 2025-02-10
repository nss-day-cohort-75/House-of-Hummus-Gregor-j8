import { chooseVegetableItem } from './transientState.js'


export const veggies = async () => {
    const vegetables = await fetch("http://localhost:8088/vegetables")
    const vegetable = await vegetables.json()
    document.addEventListener("change", chooseVegetable)


    let vegetableHTML = '<div>'
    const vegetableItems = vegetable.map(veggies => {
        return `<section></section><input type="radio" name="vegetable" value="${veggies.id}">${veggies.type}</section>`
    }).join("")
       const menuItems = vegetableHTML + vegetableItems + "</div>"
    return  menuItems
} 

const chooseVegetable = (eventItem) => {
    if (eventItem.target.name === "vegetable") {
      chooseVegetableItem(eventItem.target.value)
      console.log(eventItem.target.value)  
    }
}