export async function getProducts(){
    try {
        const res = await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js",{
            method: 'GET',
            mode: "no-cors",
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
        if (res.status !== 200) throw new Error(res.statusText)
        const data = res.json()
        return res
        
    } catch (error) {
        console.log(error)
    }
}