export const Sales = async () => {
    let totalSales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await totalSales.json()

    
const receipts = sales.map(sale => { 
    sale.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    let salesReceipt = sale.entree.price + sale.vegetable.price + sale.side.price

       return `<section>RECEIPT #${sale.id} = $${salesReceipt}</section>`
    }).join("")

    return receipts
}