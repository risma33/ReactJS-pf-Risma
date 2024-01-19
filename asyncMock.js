const products = [
    { id: 1, category: "tablet", description: "donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi", title: "Samsung Galaxy Tab S6", price: 629.41, stock: 408, img: "https://images.samsung.com/is/image/samsung/p6pim/br/sm-p619nzazzto/gallery/br-galaxy-tab-s6-lite-p615-sm-p619nzazzto-537510148?$650_519_PNG$", discountPercentage:2 },
    { id: 2, category: "laptops", description: "in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis", title: "Acer Predator Helios 300", price: 833.57, stock: 844, img: 'https://th.bing.com/th/id/R.a337f6f71ac6da5919d19381afc3a0df?rik=EvJ2dTMKVATl1Q&pid=ImgRaw&r=0', discountPercentage:6 },
    { id: 3, category: "laptops", description: "aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero", title: "Lenovo ThinkPad X1 Carbon", price: 916.76, stock: 651, img: 'https://www.lenovo.com/medias/lenovo-laptops-thinkpad-x1-carbon-gen-9-14-subseries-gallery-6.1.png?context=bWFzdGVyfC9lbWVhL2ltYWdlcy98MjQ2OTUzfGltYWdlL3BuZ3wvZW1lYS9pbWFnZXMvaGVmL2g3Ni8xMTQ0OTg4OTIyNjc4Mi5wbmd8ODk1MTNlNjZmNTc4N2IwZWVlNjk2NzA3NWU0Mjg1ZjBiM2EyMWRhZGRmOTJlYjk2MjYyYTM3NThlNDM0NDYwMA', discountPercentage:35 },
    { id: 4, category: "laptops", description: "ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a", title: "Alienware Area-51m", price: 3907.25, stock: 356, img: 'https://th.bing.com/th/id/R.428c0dae810fd38f0fa5efc372db288b?rik=YQMszvA6%2fsP53A&pid=ImgRaw&r=0', discountPercentage:8 },
    { id: 5, category: "laptops", description: "viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra", title: "Dell XPS 13", price: 2882.16, stock: 8, img: 'https://laptoping.com/specs/wp-content/uploads/2020/11/Dell-XPS-13-9310-Laptop-Standard-2.jpg', discountPercentage:10 },
    { id: 6, category: "smartphones", description: "nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi", title: "Motorola Moto G7", price: 1223.87, stock: 992, img: 'https://th.bing.com/th/id/R.07ec5d1675bad7080e28e5aee40daa32?rik=dOkrmOSRB2S7AQ&pid=ImgRaw&r=0', discountPercentage:11 },
    { id: 7, category: "laptops", description: "tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus", title: "Asus ZenBook", price: 3551.42, stock: 707, img: 'https://th.bing.com/th/id/R.2bf959f5fbb19646ca8bd550ed8531c1?rik=TctDSpvQbApU1g&pid=ImgRaw&r=0', discountPercentage:9 },
    { id: 8, category: "laptops", description: "tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae", title: "LG Gram", price: 3907.98, stock: 539, img: 'https://th.bing.com/th/id/OIP.q7wfugOfX03eE_rMKlTupwHaFf?rs=1&pid=ImgDetMain', discountPercentage:7 },
    { id: 9, category: "tablet", description: "pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat", title: "Apple iPad Mini", price: 1141.91, stock: 736, img: 'https://th.bing.com/th/id/R.4c23e16f449fbb851c48ebe552ff30aa?rik=L%2bn1eHgWalB9gA&pid=ImgRaw&r=0', discountPercentage:13 },
    { id: 10, category: "laptops", description: "aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean", title: "MacBook Air", price: 2125.99, stock: 928, img: 'https://th.bing.com/th/id/R.17446735a485c507304024c66c9aed3d?rik=YsJPDqoJOX7uyw&pid=ImgRaw&r=0', discountPercentage:6 },
    { id: 11, category: "smartphones", description: "interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere", title: "iPhone X", price: 421.72, stock: 964, img: 'https://th.bing.com/th/id/R.b62ef40c8f47296d6c0c1d824f5455f7?rik=EnQ8egjnbcvqxQ&pid=ImgRaw&r=0', discountPercentage:25 },
    { id: 12, category: "smartphones", description: "leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non", title: "Sony Xperia 1", price: 4112.95, stock: 988, img: 'https://th.bing.com/th/id/OIP.ZItB9o1mdeiXKlnJ9yfIvQHaHa?rs=1&pid=ImgDetMain', discountPercentage:8 },
   
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
