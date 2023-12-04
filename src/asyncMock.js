const products =[
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: '',
        stock: 25,
        descripcion: 'Descripcion Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung s21',
        price: 880,
        category: 'celular',
        img: '',
        stock: 18,
        descripcion: 'Descripcion Samsung s21'
    },
    {
        id: '3',
        name: 'Ipad 8va Generacion',
        price: 1100,
        category: 'Tablet',
        img: '',
        stock: 10,
        descripcion: 'Descripcion Ipad'
    }

]

export const getProducts = ()=> {
    return new Promise((resolve) => {
        setTimeout (()=>{
            resolve(products)
        },1000)
    })
}