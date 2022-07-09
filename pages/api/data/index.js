import DataBase from './db'

const allProducts = async (req, res) => {
    try {
        const db = new DataBase()
        const products = await db.getAll()
        const status = res.statusCode;
        if (status === 200) {
            res.json(products)
        } else {
            res.json({
                status: status,
                message: 'something went wrong'
            })
        }

    } catch (error) {
        res.json({
            status: 500,
            message: 'something went wrong'
        })
    }

}

export default allProducts;