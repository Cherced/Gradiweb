/* export async function getProducts() {
    try {
        const res = await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js", {
            method: 'GET',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const data = await res.json()
        if (res.status !== 200) throw new Error(data.status_message + " " + data.status_code)
        
        return data

    } catch (error) {
        console.log(error)
    }
}
 */

export async function getProducts() {
    try {
        const res = await fetch('https://fakestoreapi.com/products',{
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            }
        });        
        const data = await res.json()
        if (res.status !== 200) throw new Error(data.status_message + " " + data.status_code)

        return data

    } catch (error) {
        console.log(error)
    }
}