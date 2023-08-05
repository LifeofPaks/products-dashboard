
import User from '../Assets/Images/icons8-user-50.png'
import Users from '../Assets/Images/icons8-users-60.png'
import Home from '../Assets/Images/icons8-home-50.png'
import Products from '../Assets/Images/icons8-products-50.png'
import Posts from '../Assets/Images/icons8-comment-50.png'
import Orders from '../Assets/Images/icons8-delivery-box-64.png'
import Elements from '../Assets/Images/icons8-thumbnail-50.png'
import Notes from '../Assets/Images/icons8-note-80.png'
import Forms from '../Assets/Images/icons8-form-50.png'
import Calenders from '../Assets/Images/icons8-calender-64.png'
import Settings from '../Assets/Images/icons8-settings-50.png'
import Backups from '../Assets/Images/icons8-backup-80.png'
import Charts from '../Assets/Images/icons8-bar-chart-50.png'
import Logs from '../Assets/Images/icons8-log-48.png'
import John from '../../src/Assets/Images/man1.webp'
import Clay from '../../src/Assets/Images/man2.avif'
import Layla from '../../src/Assets/Images/woman1.avif'
import Pete from '../../src/Assets/Images/man3.jpeg'
import Jenny from '../../src/Assets/Images/woman2.avif'
import Nelly from '../../src/Assets/Images/woman4.jpeg'
import Sky from '../../src/Assets/Images/woman3.jpeg'
import Chart1 from '../Assets/Images/chart1.png'
import Chart2 from '../Assets/Images/chart2.png'
import Chart3 from '../Assets/Images/chart3.png'
import Chart4 from '../Assets/Images/chart4.png'
import Avatar from "../Assets/Images/IMG_1534 2.jpg";





export const menu = [
    {
        id: 1,
        title: 'main',
        listItems: [
            {
                id: 1,
                title: 'Homepage',
                url: '/',
                icon: Home
            },

            {
                id: 2,
                title: 'Profile',
                url: '/users/1',
                icon: User
            },
        ]   

    },

    {
        id: 2,
        title: 'lists',
        listItems: [
            {
                id: 1,
                title: 'Users',
                url: '/users',
                icon: Users
            },

            {
                id: 2,
                title: 'Products',
                url: '/products',
                icon: Products
            },

            {
                id: 3,
                title: 'Orders',
                url: '/orders',
                icon: Orders
            },

            {
                id: 4,
                title: 'Posts',
                url: '/posts',
                icon: Posts
            },
        ]   

    },

    {
        id: 3,
        title: 'general',
        listItems: [
            {
                id: 1,
                title: 'Elements',
                url: '/',
                icon: Elements
            },

            {
                id: 2,
                title: 'Notes',
                url: '/',
                icon: Notes
            },

            {
                id: 3,
                title: 'Forms',
                url: '/',
                icon: Forms
            },


            {
                id: 4,
                title: 'Calenders',
                url: '/',
                icon: Calenders
            },

        ]   

    },

    {
        id: 4,
        title: 'maintainance',
        listItems: [
            {
                id: 1,
                title: 'Settings',
                url: '/',
                icon: Settings
            },

            {
                id: 2,
                title: 'Backups',
                url: '/',
                icon: Backups
            },
        ]   
    },

    {
        id: 5,
        title: 'analytics',
        listItems: [
            {
                id: 1,
                title: 'Charts',
                url: '/',
                icon: Charts
            },

            {
                id: 2,
                title: 'Logs',
                url: '/',
                icon: Logs
            },

        ]   

    },
]

export const topDealUsers = [
    {
        id: 1,
        image: John,
        username: 'John Miller',
        email: 'john@gmail.com',
        amount : '3,467'
    },

    {
        id: 2,
        image: Clay,
        username: 'Clay Anderson',
        email: 'clay@gmail.com',
        amount : '5,357'
    },

    {
        id: 3,
        image: Layla,
        username: 'Layla Williams',
        email: 'layla@gmail.com',
        amount : '2,242'
    },

    {
        id: 4,
        image: Pete,
        username: 'Pete Edwards',
        email: 'pete@gmail.com',
        amount : '2,940'
    },

    {
        id: 5,
        image: Jenny,
        username: 'Jenny haris',
        email: 'jenny@gmail.com',
        amount : '4,017'
    },

    {
        id: 6,
        image: Nelly,
        username: 'Nelly Jones',
        email: 'nelly@gmail.com',
        amount : '3,420'
    },

    {
        id: 7,
        image: Sky,
        username: 'Sky Lewis',
        email: 'sky@gmail.com',
        amount : '3,090'
    }
]

export const chartBoxUser = {
    color: '#CC5DE8',
    icon: Chart1,
    title: 'Total Users',
    number: '23.123',
    dataKey: 'users',
    percentage: 67,
    chartData: [
        {name: 'Sun', users: 400},
        {name: 'Mon', users: 300},
        {name: 'Tue', users: 700},
        {name: 'Wed', users: 290},
        {name: 'Thu', users: 400},
        {name: 'Fri', users: 600},
        {name: 'Sat', users: 350},

    ]
}

export const chartBoxProduct = {
    color: '#116DC9',
    icon: Chart2,
    title: 'Total Products',
    number: '456',
    dataKey: 'products',
    percentage: 34,
    chartData: [
        {name: 'Sun', products: 400},
        {name: 'Mon', products: 300},
        {name: 'Tue', products: 700},
        {name: 'Wed', products: 290},
        {name: 'Thu', products: 400},
        {name: 'Fri', products: 600},
        {name: 'Sat', products: 350},

    ]
}

export const chartBoxRevenue = {
    color: '#18BEED',
    icon: Chart3,
    title: 'Total Revenue',
    number: '$123.123',
    dataKey: 'revenue',
    percentage: -18,
    chartData: [
        {name: 'Sun', revenue: 400},
        {name: 'Mon', revenue: 300},
        {name: 'Tue', revenue: 700},
        {name: 'Wed', revenue: 290},
        {name: 'Thu', revenue: 400},
        {name: 'Fri', revenue: 600},
        {name: 'Sat', revenue: 350},

    ]
}

export const chartBoxConversion = {
    color: '#FCC419',
    icon: Chart4,
    title: 'Total Ratio',
    number: '9.3',
    dataKey: 'ratio',
    percentage: 24,
    chartData: [
        {name: 'Sun', ratio: 400},
        {name: 'Mon', ratio: 300},
        {name: 'Tue', ratio: 700},
        {name: 'Wed', ratio: 290},
        {name: 'Thu', ratio: 400},
        {name: 'Fri', ratio: 600},
        {name: 'Sat', ratio: 350},

    ]
}

export const barChartBoxRevenue = {
    color: '#fdb44b',
    title: 'Profit Earned',
    dataKey: 'profit',
    chartData: [
        {name: 'Sun', profit: 4000},
        {name: 'Mon', profit: 3000},
        {name: 'Tue', profit: 7000},
        {name: 'Wed', profit: 2900},
        {name: 'Thu', profit: 4000},
        {name: 'Fri', profit: 6000},
        {name: 'Sat', profit: 3500},

    ]
}

export const barChartBoxVisit = {
    color: '#0092ca',
    title: 'Total Visit',
    dataKey: 'visit',
    chartData: [
        {name: 'Sun', visit: 4000},
        {name: 'Mon', visit: 3000},
        {name: 'Tue', visit: 7000},
        {name: 'Wed', visit: 2900},
        {name: 'Thu', visit: 4000},
        {name: 'Fri', visit: 6000},
        {name: 'Sat', visit: 3500},

    ]
}


export const UserRows = [
    { 
        id: 1,
        img: 'https://images.generated.photos/rl3plR-TRh-2GtqPWVspiNWaNO8i480cfpydSpecd5E/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODY4NTczLmpwZw.jpg',
        lastName: 'Barber', 
        firstName: 'Eliot', 
        email: 'eliot@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: 'verified'
    },

    { 
        id: 2,
        img: 'https://thedashingman.com/wp-content/uploads/2021/09/Photoshoot-poses-for-men-The-Dashing-Man-14.jpg',
        lastName: 'Carney', 
        firstName: 'Theo', 
        email: 'theo@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: ''
    },

    { 
        id: 3,
        img: 'https://images.unsplash.com/photo-1620232224149-25be08bdec08?fit=crop&w=&h=',
        lastName: 'Odom', 
        firstName: 'Effie', 
        email: 'effie@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: 'verified'
    },

    { 
        id: 4,
        img: 'https://i0.wp.com/live.staticflickr.com/65535/48862036621_ec65e1cfc6_b.jpg?resize=1024%2C688&ssl=1',
        lastName: 'Hoffman', 
        firstName: 'Tyrone', 
        email: 'tyrone@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: 'verified'
    },

    { 
        id: 5,
        img: 'https://i.pinimg.com/236x/04/18/d6/0418d605e797b5c1e7d68c752af9460c--kelly-smith-girl-face.jpg',
        lastName: 'Sawyer', 
        firstName: 'Nellie', 
        email: 'nells@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: 'verified'
    },

    { 
        id: 6,
        img: 'https://i.pinimg.com/736x/98/fc/07/98fc078b069ada806c38d94ad2d7c1ab.jpg',
        lastName: 'Osborne', 
        firstName: 'Ashley', 
        email: 'ashley@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: 'verified'
    },

    { 
        id: 7,
        img: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Male-Poses-Sitting-Knee-Up.jpg',
        lastName: 'Parsons', 
        firstName: 'Aaron', 
        email: 'aaron@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: 'verified'
    },

    { 
        id: 8,
        img: 'https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/Hold_The_Girl_press_shot_-_credit-_Thurstan_Redding_wgaga7/rina-sawayama-the-fader-interview-hold-the-girl.jpg',
        lastName: 'Hood', 
        firstName: 'Zaina', 
        email: 'zaina@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: ''
    },

    { 
        id: 9,
        img: 'https://expertphotography.b-cdn.net/wp-content/uploads/2022/03/Male-Poses-Jawline.jpg',
        lastName: 'Shepherd', 
        firstName: 'Ian', 
        email: 'ian@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: 'verified'
    },

    { 
        id: 10,
        img: 'https://dvyvvujm9h0uq.cloudfront.net/com/articles/1597824043-483084-depositphotos-201323822-xl-2015jpg.jpg',
        lastName: 'Robles', 
        firstName: 'Bruno', 
        email: 'bruno@gmail.com',
        phone: '123 456 789',
        createdAt: '01. 08. 2023',
        verified: 'verified'
    },
  ];


  export const productRows = [

    { 
        id: 1,
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG_3aHxbxd8Q1oo1eWCko0A_2SLrMuKcE41g&usqp=CAU',
        title: 'iPhone 14 ProMax', 
        color: 'Gold', 
        price: '$1,019.99',
        producer: 'Apple',
        createdAt: '01. 08. 2021',
        inStock: true
    },

    { 
        id: 2,
        img: 'https://www.reliancedigital.in/medias/Sony-CFI-1008A01R-Gaming-Consoles-491936180-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMTI4NzN8aW1hZ2UvanBlZ3xpbWFnZXMvaDdiL2hiYi85NDU1NzczOTc0NTU4LmpwZ3wyNzc1NzEyNTU5ZDVjZjVhMmM1NTBhYzViYWVjNzIxMGQ0MzE3MTg1ZmM3ZmZhM2UxODM3NmM5YWNjMTg4NmY1',
        title: 'Play Station 5', 
        color: 'White', 
        price: '$899.99',
        producer: 'Sony',
        createdAt: '01. 08. 2021',
        inStock: true
    },

    { 
        id: 3,
        img: 'https://cdn.mos.cms.futurecdn.net/oyX9iadRXdAhnRDyrHsQWK.jpg',
        title: 'Macbook Pro 2022', 
        color: 'Gray', 
        price: '$2,099.99',
        producer: 'Apple',
        createdAt: '01. 08. 2021',
        inStock: true
    },

    { 
        id: 4,
        img: 'https://i.pcmag.com/imagery/reviews/07bWxhYyWgyyFuMk70BmF9D-2..v1615330249.jpg',
        title: 'ONYX Studio 7', 
        color: 'Black', 
        price: '$399.99',
        producer: 'Harman Kardon',
        createdAt: '01. 08. 2021',
        inStock: true
    },

    { 
        id: 5,
        img: 'https://i.pcmag.com/imagery/roundups/01gmhniWocIfT5VCFblGDtb-1..v1586754704.jpg',
        title: '55" Curved Monitor', 
        color: 'Black', 
        price: '$445.00',
        producer: 'Alienware',
        createdAt: '01. 08. 2021',
        inStock: true
    },

    { 
        id: 6,
        img: 'https://i.pcmag.com/imagery/reviews/04QSGMRR0ddVFZCJ8lEU9gq-1..v1569469984.jpg',
        title: 'G502 Wireless Mouse', 
        color: 'Black', 
        price: '$249.99',
        producer: 'LogiTech',
        createdAt: '01. 08. 2021',
        inStock: true
    },

    { 
        id: 7,
        img: 'https://gamerbraves.sgp1.cdn.digitaloceanspaces.com/2023/01/3D-Pulse-Headset.jpg',
        title: 'Ps5 Pulse 3D Headset', 
        color: 'Black', 
        price: '$175.00',
        producer: 'Sony',
        createdAt: '01. 08. 2021',
        inStock: false
    },

    { 
        id: 8,
        img: 'https://westobserver.com/wp-content/uploads/2022/08/a8135230-2314-11ed-b37b-3044df9a5134.jpeg',
        title: 'Dual sense Edge', 
        color: 'White', 
        price: '$149.99',
        producer: 'Sony',
        createdAt: '01. 08. 2021',
        inStock: true
    },

    { 
        id: 9,
        img: 'https://s.hdnux.com/photos/01/07/24/27/18695664/4/1200x0.jpg',
        title: 'Airpods Pro', 
        color: 'White', 
        price: '$149.99',
        producer: 'Apple',
        createdAt: '01. 08. 2021',
        inStock: true
    },

    { 
        id: 10,
        img: 'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Untitled1191.jpg',
        title: 'Apple Watch Ultra', 
        color: 'Gray', 
        price: '$1,099.99',
        producer: 'Apple',
        createdAt: '01. 08. 2021',
        inStock: false
    },
  ]


export const singleUser = {
    id: 1,
    title: "Paks Promise",
    img: Avatar, 
    info: {
      username: "Paks",
      fullname: "Paks Promise",
      email: "paks@gmail.com",
      phone: "123 456 789",
      status: "verified",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "clicks", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          clicks: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          clicks: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          clicks: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          clicks: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          clicks: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          clicks: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          clicks: 4300,
        },
      ],
    },
    activities: [
      {
        text: "Paks Promise purchased Playstation 5 Digital Edition",
        time: "3 day ago",
        id: 1
      },
      {
        text: "Paks Promise added 3 items into their wishlist",
        time: "1 week ago",
        id: 2
      },
      {
        text: "Paks Promise purchased Sony Bravia KD-32w800",
        time: "2 weeks ago",
        id: 3
      },
      {
        text: "Paks Promise reviewed a product",
        time: "1 month ago",
        id: 4
      },
      {
        text: "Paks Promise added 1 items into their wishlist",
        time: "1 month ago",
        id: 5
      },
      {
        text: "Paks Promise reviewed a product",
        time: "2 months ago",
        id: 6
      },
    ],
  };

  export const singleProduct = {
    id: 1,
    title: "Playstation 5 Digital Edition",
    img: "https://cdn.mos.cms.futurecdn.net/HkdMToxijoHfz4JwUgfh3G-1200-80.jpg",
    info: {
      productId: "Ps348RD8788TN",
      color: "White",
      price: '$899.99',
      producer: "Sony",
      export: "Korea",
    },
    chart: {
      dataKeys: [
        { name: "visits", color: "#82ca9d" },
        { name: "orders", color: "#8884d8" },
      ],
      data: [
        {
          name: "Sun",
          visits: 4000,
          orders: 2400,
        },
        {
          name: "Mon",
          visits: 3000,
          orders: 1398,
        },
        {
          name: "Tue",
          visits: 2000,
          orders: 3800,
        },
        {
          name: "Wed",
          visits: 2780,
          orders: 3908,
        },
        {
          name: "Thu",
          visits: 1890,
          orders: 4800,
        },
        {
          name: "Fri",
          visits: 2390,
          orders: 3800,
        },
        {
          name: "Sat",
          visits: 3490,
          orders: 4300,
        },
      ],
    },

    activities: [
      {
        text: "Paks Promise purchased Playstation 5 Digital Edition",
        time: "3 days ago",
        id: 1
      },
      {
        text: "April Schwartz added Playstation 5 Digital Edition into their wishlist",
        time: "1 week ago",
        id: 2
      },
      {
        text: "Davis Hardin purchased Playstation 5 Digital Edition",
        time: "2 weeks ago",
        id: 3
      },
      {
        text: "Tessa Nunez reviewed the product",
        time: "1 month ago",
        id: 4
      },
      {
        text: "Travis Bennett added Playstation 5 Digital Edition into their wishlist",
        time: "1 month ago",
        id: 5
      },
      {
        text: "Anita Hammond reviewed the product",
        time: "2 months ago",
        id: 6
      },
    ],
  };