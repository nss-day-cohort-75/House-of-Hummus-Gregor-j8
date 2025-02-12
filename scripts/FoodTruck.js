import { Sales } from "./Sales.js"
import { entrees } from "./Entrees.js"
import { sideDishes } from "./SideDishes.js"
import { veggies } from "./Vegetables.js"
import { placeOrder } from "./transientState.js"


export const FoodTruck = async () => {
       
        const entreeItems = await entrees()
        const sideDishesItems = await sideDishes()
        const vegetableItems = await veggies() 
        const salesHTML =  await Sales()
        document.addEventListener("click", submitBtn)

    const html = `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <section>
        <h2>Entrees</h2>
            ${entreeItems}
        </section>
        <section>
        <h2>Side Dishes</h2>
            ${sideDishesItems}
            </section>
            <section>
            <h2>Vegetable</h2>
            ${vegetableItems}
            </section>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>


        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `

    return html
}

     
const submitBtn = (clickEvent) => {
   if (clickEvent.target.id === "purchase") {
    console.log("clickedEventListener")
       placeOrder()
       
   }
}
