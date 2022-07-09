export async function getProducts(){
    try {
        const res = await fetch("https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js",{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        
    } catch (error) {
        
    }
}