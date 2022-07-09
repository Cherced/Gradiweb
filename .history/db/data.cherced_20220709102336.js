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
        const data = res.json()
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
}


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0e0a5a5c39mshc6de94e22b46be3p11f8f8jsn79d12c5e06e5',
        'X-RapidAPI-Host': 'shoes-collections.p.rapidapi.com'
    }
};

export async function getShoes() {
    try {
        const res = await fetch('https://api.escuelajs.co/api/v1/categories/4', options)
        if (res.status !== 200) throw new Error(res.statusText)
        const data = res.json()
        console.log(data)
        return data

    } catch (error) {
        console.log(error)
    }
}