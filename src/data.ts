type Product = {
    id: number
    title: string
    desc?: string
    img?: string
    price: number
    options?: { title: string; additionalPrice: number }[] 
}

type Products = Product[]

export const featuredProducts: Products = [
    {
        id: 1,
        title: 'Bella Napoli',
        desc: "A classic Italian pizza",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 2,
        title: 'Bella Napoli',
        desc: "A classic Italian pizza",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 3,
        title: 'Bella Napoli',
        desc: "A classic Italian pizza",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 4,
        title: 'Bella Napoli',
        desc: "A classic Italian pizza",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 5,
        title: 'Bella Napoli',
        desc: "A classic Italian pizza",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 6,
        title: 'Bella Napoli',
        desc: "A classic Italian pizza",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 7,
        title: 'Bella Napoli',
        desc: "A classic Italian pizza",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
    {
        id: 8,
        title: 'Bella Napoli',
        desc: "A classic Italian pizza",
        img: "/temporary/p3.png",
        price: 24.9,
        options: [
            {
                title: 'Small',
                additionalPrice: 0,
            },
            {
                title: 'Medium',
                additionalPrice: 4,
            },
            {
                title: 'Large',
                additionalPrice: 6,
            },
        ],
    },
]