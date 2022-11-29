const products = [
    {
        id: 1,
        name: 'Tortas forradas',
        productType: 'Tortas a medida',
        price: 200,
        image: require('./images/tortaForrada.jpg'),
        description: 'Nuestras TORTAS FORRADAS tienen todos los detalles. Podes elegir entre bizcocho de chocolate o vainilla; trabajamos con 2 rellenos.'
    },
    {
        id: 2,
        name: 'Number Cake',
        productType: 'Tortas de numeros o letras',
        price: 2000,
        image: require('./images/numberCake.jpg'),
        description: 'La irresistible y aclamada torta número lleva 2 capas de masa sable que se desarma, rellena de crema de chocotorta y dulce de leche. Decorada con merengue italiano y muchos detallitos dulces.'
    },
    {
        id: 4,
        name: 'Tartas',
        productType: 'Tartas variadas',
        price: 1800,
        image: require('./images/tartas.jpg'),
        description: 'Conocé nuestras variedades de tartas: Frutillas y crema. Lemmon Pie. Mouse de Limón. Mouse de chocolate blanco. Y mucho más.'
    },
    {
        id: 5,
        name: 'Alfajores',
        productType: 'Alfajores',
        price: 500,
        image: require('./images/alfajores.jpg'),
        description: 'Conocé nuestras variedades: Alfajores de Mani, dulce de leche, mousse de chocolate y mucho más.'
    },
    {
        id: 6,
        name: 'Box dulce',
        productType: 'Caja de dulces variados',
        price: 700,
        image: require('./images/boxSorpresa.jpg'),
        description: 'Caja de dulces variados: Alfajores, mini tartas, porción de torta, cake pop.'
    },
    {
        id: 7,
        name: 'Budines',
        productType: 'Budines variados',
        price: 700,
        image: require('./images/budines.jpg'),
        description: 'Budines: Limón, Carrot, Naranja, y muchas variedades más.'
    },
]

export default products;