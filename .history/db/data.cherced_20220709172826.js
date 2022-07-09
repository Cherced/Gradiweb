export async function getProducts() {
    try {
        const res = await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js", {
            method: 'GET',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (res.status !== 200) throw new Error(res.statusText)
        const data = await res.json()
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
}


export async function getShoes() {
    try {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories/4/products')
        if (res.status !== 200) throw new Error(res.statusText)
        const data = await res.json()
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
}