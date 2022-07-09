export async function getProducts(){
    try {
        const res = await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js",{
            method: 'GET',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(res)
        if (res.status !== 200) throw new Error(res.statusText)
        const data = res.text()
        return data
        
    } catch (error) {
        console.log(error)
    }
}