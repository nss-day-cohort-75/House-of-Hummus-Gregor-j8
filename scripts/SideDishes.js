import { chooseSideDishItem } from './transientState.js'


export const sideDishes = async () => {
    const sideDishes = await fetch("http://localhost:8088/sides")
    const sides = await sideDishes.json()
    document.addEventListener("change", chooseSideDish)


    let sidesHTML = '<div>'
    const sideDishItems = sides.map(side => {
        return `<section></section><input type="radio" name="sideDishes" value="${side.id}">${side.title}</section>`
    }).join("")
       const menuItems = sidesHTML + sideDishItems + "</div>"
    return  menuItems
} 

const chooseSideDish = (eventItem) => {
    if (eventItem.target.name === "sideDishes") {
      chooseSideDishItem(eventItem.target.value)
      console.log(eventItem.target.value)  
    }
}