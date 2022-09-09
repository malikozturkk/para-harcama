import products from "../products.json"
import { useState, useEffect } from "react"
import Product from "../components/Product"
import Basket from "../components/Basket"
import "../scss/Money.scss"

const Money = () => {
    const [money, setMoney] = useState(100000000)
    const [basket, setBasket] = useState([])
    const [total, setTotal] = useState(0)

    const resetBasket = () => {
        setBasket([])
    }

    useEffect(() => {
        setTotal(
            basket.reduce((acc, item) => {
            return acc + (item.amount * (products.find(product => product.id === item.id).price))
            }, 0)
        )
    }, [basket])

    return (
        <div>
            {total > 0 && money - total !== 0 && (
                <div>Harcayacak {money - total} $ paranız kaldı</div>
            )}

            {total === 0 && (
                <div>Harcamak için {money} $ paranız var</div>
            )}
            {money - total === 0 && (
                <div>Paran bitti.</div>
            )}
            <div className="productItem">
                {products.map(product => (
                    <Product key={product.id} total={total} money={money} basket={basket} setBasket={setBasket} product={product} />
                ))}
            </div>
            { total > 0 && (
                <Basket resetBasket={resetBasket} products={products} total={total} basket={basket} />
            )}
            
        </div>
    )
}

export default Money