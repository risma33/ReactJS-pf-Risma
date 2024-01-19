# REACTJS-PF-RISMA

> Ecommerce for final proyect.



## Running Locally

```bash
$ git clone https://github.com/risma33/ReactJS-pf-Risma.git
$ cd reactjs-pf-risma
$ npm install
$ npm run dev
```

## Route path:

1- ItemListConteiner con todos los productos cargados en firebase en sus ItemCard. 
Utilizando las botones (tablet, laptop, celular) se puede filtar la busqueda.
2- Haciendo click en el ItemCard, se accede al ItemDetail, donde apareceran todos los datos del Item seleccionado.
3- En itemDetail, aparecera el itemCount, donde se puede sellecionar el numero de elementos a agregar al carrito. 
4- Una vez agregado al carrito, se puede seguir comprando o ir al carrito (al mismo tambien se puede acceder apretando sobre su imagen)
5-En el carrito se veran los elementos agregados, pudiendo eliminar elementos, o si se desea se puede generar la orden de compra.
6- Al finalizar compra, se despliega un formulario, donde se llenaran los datos de envio. Una vez compeltado se genera la orden con un ID especifico, se carga la orden en firebase y se actualizan los stock.

## details:
1- en el componente HeaderConteiner quedo comentado el componente creado para agregar el mock de productos al firebase (aun no logro resolver lo de autentificaciones para poder agregar usuarios que peudan agregar producos)
