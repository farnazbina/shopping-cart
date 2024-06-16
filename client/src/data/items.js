const productList = [
    {
        id: '1',
        title: 'AirPod',
        price: 1999,
        image: '/images/airpod.png'
    },
    {
        id: '2',
        title: 'HeadPhone',
        price: 1444,
        image: '/images/headphone.png'
    },
    {
        id: '3',
        title: 'IPad',
        price: 2100,
        image: '/images/ipad.png'
    },
    {
        id: '4',
        title: 'Iphone',
        price: 4000,
        image: '/images/iphone.png'
    },
    {
        id: '5',
        title: 'MacBook',
        price: 7000,
        image: '/images/macbook.png'
    },
    {
        id: '6',
        title: 'Microphone',
        price: 1200,
        image: '/images/microphone.png'
    },
    {
        id: '7',
        title: 'Mouse',
        price: 700,
        image: '/images/mouse.png'
    },
    {
        id: '8',
        title: 'AppleWatch',
        price: 3200,
        image: '/images/watch.png'
    }
]

function getProductData(id) {
    let productData = productList.find((item) => item.id === id)

    return productData
}

export { productList, getProductData }