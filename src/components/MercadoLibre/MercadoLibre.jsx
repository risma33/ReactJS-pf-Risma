import { useEffect, useState } from "react";
import { getProducts } from "../../asyncMock";

const MercadoLibre = () => {
    const [loading, setLoading] = useState ([])
    const [products, setProducts] = useState([])
    const [value, setValue]=useState ('autos')

    const getProducts = () => {
        setLoading (true)
        fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${value}`)
            .then(response => {
                return response.json()
            })
            .then(json => {
                setProducts(json.results)
            })
            .catch (error => {
                console.error(error);
            })
            .finally (()=> {
                setLoading(false)
            })
    }

    useEffect (()=> {
        getProducts()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        getProducts()
    }

    if (loading) {
        return <h1>Cargando product</h1>
    }
    return (
        <div>
            <h1>Mercado Libre</h1>
            <form onSubmit={handleSubmit}>
                <input value={value} onChange={(e)=>setValue(e.target.value)}/>
                <button>Search</button>
            </form>
            {
                products.map(prod => {
                    return (
                        <div key={prod.id} >
                            <img src={prod.thumbnail} />
                            <h3>{prod.title}</h3>
                            <h4>{prod.price}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}


export default MercadoLibre