import { chooseEntreeItem } from './transientState.js'

export const entrees = async () => {
    const entreeItems = await fetch("http://localhost:8088/entrees")
    const items = await entreeItems.json()
    document.addEventListener("change", chooseEntree)

    let entreesHTML = "<div>"
    const entrees = items.map(item => {
        return `<section><input type="radio" name="entrees" value="${item.id}">${item.name}</section>`
    }).join("")
       const menuItems = entreesHTML + entrees + "</div>"
    return menuItems
} 

const chooseEntree = (eventItem) => {
    if (eventItem.target.name === "entrees") {
        chooseEntreeItem(eventItem.target.value)
      console.log(eventItem.target.value)  
    }
}
