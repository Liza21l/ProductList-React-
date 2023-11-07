import s from './productsList.module.scss'
import ProductItem from './ProductsItem'
const ProductsList = () => {
    const store = [
        {
            name:"IPhone 13",
            price:"1600$"
        },
        {
            name:"TV",
            price:"3500$"
        },
        {
            name:"Samsung A32",
            price:"1000$"
        },
        {
            name:"PC",
            price:"2000$"
        }
    ]
    const ProductCollection = store.map((el, index) => {
        return (
            <ProductItem
                key={index}
                name={el.name}
                price={el.price}
            />
        )
    })
    return (
        <ul className={s.list}>{ProductCollection}</ul>
    )
}

export default ProductsList