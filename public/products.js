// eslint-disable-next-line no-unused-vars
const products = [
    {
        id: 1,
        availableOffer: true,
        coupon: true,
        name: "Tomato",
        farmer: "Abdul Karim",
        price: 20,
        quantity: 50,
        unit: "kg",
        location: "Dhaka",
        image: "",
        gallery: ["tomato1.jpg", "tomato2.jpg", "tomato.mp4"],
        description: "Fresh and organic tomatoes.",
        rating: 4.5,
        reviews: 12,
        comments: [
          { user: "Rahim", userEmail: "rahim@gmail.com", text: "Very fresh and tasty!", date: "2024-11-01" },
        ],
        discount: 10,
        expiryDate: "2024-11-20",
        category: "Vegetables",
        tags: ["Fresh", "Organic"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 3 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 30,
        addedDate: "2024-10-15",
        lastUpdated: "2024-11-01",
        relatedProducts: [2, 3, 4],
        personalizedSuggestions: [5, 6],
        supportContact: "+8801234567890",
        isVerified: true,
        farmerContact: "+8801234567890",
        farmDetails: {
          farmName: "Green Valley Farms",
          area: "5 acres",
          methods: ["Organic", "Hydroponics"],
        },
        averageResponseTime: "1 hour",
      },
      {
        id: 2,
        availableOffer: false,
        coupon: true,
        name: "Potato",
        farmer: "Hasan Ali",
        price: 15,
        quantity: 80,
        unit: "kg",
        location: "Sylhet",
        image: "",
        gallery: ["potato1.jpg", "potato2.jpg", "potato.mp4"],
        description: "Fresh and high-quality potatoes.",
        rating: 4.7,
        reviews: 8,
        comments: [
          { user: "Karim", userEmail: "karim@gmail.com", text: "Perfect for cooking.", date: "2024-11-05" },
        ],
        discount: 5,
        expiryDate: "2024-11-25",
        category: "Vegetables",
        tags: ["Fresh", "Starchy"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "2-3 days",
        returnPolicy: "No returns on this item",
        isRefundable: false,
        stockStatus: "In Stock",
        sold: 20,
        addedDate: "2024-10-12",
        lastUpdated: "2024-11-02",
        relatedProducts: [1, 3, 5],
        personalizedSuggestions: [7, 8],
        supportContact: "+8801234567891",
        isVerified: true,
        farmerContact: "+8801234567891",
        farmDetails: {
          farmName: "Golden Field Farms",
          area: "3 acres",
          methods: ["Conventional"],
        },
        averageResponseTime: "2 hours",
      },
      {
        id: 3,
        availableOffer: true,
        coupon: false,
        name: "Carrot",
        farmer: "Shahinur Rahman",
        price: 18,
        quantity: 40,
        unit: "kg",
        location: "Rajshahi",
        image: "",
        gallery: ["carrot1.jpg", "carrot2.jpg", "carrot.mp4"],
        description: "Fresh and crunchy carrots.",
        rating: 4.3,
        reviews: 15,
        comments: [
          { user: "Liza", userEmail: "liza@gmail.com", text: "Tastes amazing!", date: "2024-11-02" },
        ],
        discount: 8,
        expiryDate: "2024-11-30",
        category: "Vegetables",
        tags: ["Fresh", "Organic"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "2-3 days",
        returnPolicy: "Return within 3 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 25,
        addedDate: "2024-10-10",
        lastUpdated: "2024-11-02",
        relatedProducts: [1, 2, 4],
        personalizedSuggestions: [6, 7],
        supportContact: "+8801234567892",
        isVerified: true,
        farmerContact: "+8801234567892",
        farmDetails: {
          farmName: "Fresh Roots Farm",
          area: "4 acres",
          methods: ["Organic"],
        },
        averageResponseTime: "30 minutes",
      },
      {
        id: 4,
        availableOffer: false,
        coupon: false,
        name: "Cucumber",
        farmer: "Shahina Begum",
        price: 12,
        quantity: 100,
        unit: "kg",
        location: "Khulna",
        image: "",
        gallery: ["cucumber1.jpg", "cucumber2.jpg", "cucumber.mp4"],
        description: "Fresh and juicy cucumbers.",
        rating: 4.8,
        reviews: 20,
        comments: [
          { user: "Fahim", userEmail: "fahim@gmail.com", text: "Crisp and fresh!", date: "2024-11-03" },
        ],
        discount: 0,
        expiryDate: "2024-11-20",
        category: "Vegetables",
        tags: ["Fresh", "Crisp"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "3-4 days",
        returnPolicy: "Return within 5 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 50,
        addedDate: "2024-10-18",
        lastUpdated: "2024-11-03",
        relatedProducts: [1, 2, 5],
        personalizedSuggestions: [8, 9],
        supportContact: "+8801234567893",
        isVerified: true,
        farmerContact: "+8801234567893",
        farmDetails: {
          farmName: "Healthy Veggies",
          area: "6 acres",
          methods: ["Organic"],
        },
        averageResponseTime: "2 hours",
      },
      {
        id: 5,
        availableOffer: true,
        coupon: false,
        name: "Spinach",
        farmer: "Sohail Ahmed",
        price: 10,
        quantity: 200,
        unit: "kg",
        location: "Barishal",
        image: "",
        gallery: ["spinach1.jpg", "spinach2.jpg", "spinach.mp4"],
        description: "Fresh and organic spinach.",
        rating: 4.6,
        reviews: 25,
        comments: [
          { user: "Ahsan", userEmail: "ahsan@gmail.com", text: "Very healthy and fresh!", date: "2024-11-06" },
        ],
        discount: 15,
        expiryDate: "2024-12-15",
        category: "Vegetables",
        tags: ["Organic", "Healthy"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 7 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 60,
        addedDate: "2024-10-20",
        lastUpdated: "2024-11-06",
        relatedProducts: [2, 3, 6],
        personalizedSuggestions: [7, 10],
        supportContact: "+8801234567894",
        isVerified: true,
        farmerContact: "+8801234567894",
        farmDetails: {
          farmName: "Green Leaf Farms",
          area: "8 acres",
          methods: ["Hydroponics"],
        },
        averageResponseTime: "1 hour",
      },
      {
        id: 6,
        availableOffer: true,
        coupon: true,
        name: "Onion",
        farmer: "Mizanur Rahman",
        price: 25,
        quantity: 50,
        unit: "kg",
        location: "Rajshahi",
        image: "",
        gallery: ["onion1.jpg", "onion2.jpg", "onion.mp4"],
        description: "Fresh and spicy onions.",
        rating: 4.4,
        reviews: 18,
        comments: [
          { user: "Monir", userEmail: "monir@gmail.com", text: "Good quality onions.", date: "2024-11-07" },
        ],
        discount: 12,
        expiryDate: "2024-11-22",
        category: "Vegetables",
        tags: ["Fresh", "Spicy"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "2-3 days",
        returnPolicy: "Return within 5 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 40,
        addedDate: "2024-10-22",
        lastUpdated: "2024-11-07",
        relatedProducts: [1, 3, 4],
        personalizedSuggestions: [8, 10],
        supportContact: "+8801234567896",
        isVerified: true,
        farmerContact: "+8801234567896",
        farmDetails: {
          farmName: "Pure Soil Farms",
          area: "3 acres",
          methods: ["Organic"],
        },
        averageResponseTime: "1 hour",
      },
    
    {
      id: 7,
      availableOffer: true,
      coupon: false,
      name: "Pumpkin",
      farmer: "Jahanara Begum",
      price: 30,
      quantity: 60,
      unit: "kg",
      location: "Chittagong",
      image: "",
      gallery: ["pumpkin1.jpg", "pumpkin2.jpg", "pumpkin.mp4"],
      description: "Fresh and sweet pumpkins.",
      rating: 4.7,
      reviews: 10,
      comments: [
        { user: "Amin", userEmail: "amin@gmail.com", text: "Great for soups!", date: "2024-11-08" },
      ],
      discount: 5,
      expiryDate: "2024-12-01",
      category: "Vegetables",
      tags: ["Fresh", "Sweet"],
      deliveryOptions: ["Home Delivery", "Pick-up"],
      deliveryTime: "2-3 days",
      returnPolicy: "Return within 5 days if not satisfied",
      isRefundable: true,
      stockStatus: "In Stock",
      sold: 35,
      addedDate: "2024-10-25",
      lastUpdated: "2024-11-08",
      relatedProducts: [2, 3, 8],
      personalizedSuggestions: [11, 12],
      supportContact: "+8801234567897",
      isVerified: true,
      farmerContact: "+8801234567897",
      farmDetails: {
        farmName: "Golden Harvest Farms",
        area: "7 acres",
        methods: ["Organic"],
      },
      averageResponseTime: "1.5 hours",
    },
    {
      id: 8,
      availableOffer: false,
      coupon: true,
      name: "Lettuce",
      farmer: "Rafiqul Islam",
      price: 8,
      quantity: 150,
      unit: "kg",
      location: "Gazipur",
      image: "",
      gallery: ["lettuce1.jpg", "lettuce2.jpg", "lettuce.mp4"],
      description: "Fresh and crispy lettuce.",
      rating: 4.8,
      reviews: 22,
      comments: [
        { user: "Nayeem", userEmail: "nayeem@gmail.com", text: "Perfect for salads.", date: "2024-11-09" },
      ],
      discount: 10,
      expiryDate: "2024-11-25",
      category: "Vegetables",
      tags: ["Fresh", "Crispy"],
      deliveryOptions: ["Home Delivery", "Pick-up"],
      deliveryTime: "1-2 days",
      returnPolicy: "Return within 3 days if not satisfied",
      isRefundable: true,
      stockStatus: "In Stock",
      sold: 70,
      addedDate: "2024-10-28",
      lastUpdated: "2024-11-09",
      relatedProducts: [1, 7, 9],
      personalizedSuggestions: [13, 14],
      supportContact: "+8801234567898",
      isVerified: true,
      farmerContact: "+8801234567898",
      farmDetails: {
        farmName: "Healthy Greens",
        area: "5 acres",
        methods: ["Hydroponics"],
      },
      averageResponseTime: "45 minutes",
    },
    {
      id: 9,
      availableOffer: true,
      coupon: false,
      name: "Capsicum",
      farmer: "Nazrul Islam",
      price: 40,
      quantity: 30,
      unit: "kg",
      location: "Bogura",
      image: "",
      gallery: ["capsicum1.jpg", "capsicum2.jpg", "capsicum.mp4"],
      description: "Fresh and colorful capsicum.",
      rating: 4.5,
      reviews: 18,
      comments: [
        { user: "Mila", userEmail: "mila@gmail.com", text: "Adds color to my dishes!", date: "2024-11-10" },
      ],
      discount: 15,
      expiryDate: "2024-11-30",
      category: "Vegetables",
      tags: ["Fresh", "Colorful"],
      deliveryOptions: ["Home Delivery", "Pick-up"],
      deliveryTime: "2-3 days",
      returnPolicy: "Return within 5 days if not satisfied",
      isRefundable: true,
      stockStatus: "In Stock",
      sold: 20,
      addedDate: "2024-10-30",
      lastUpdated: "2024-11-10",
      relatedProducts: [6, 7, 10],
      personalizedSuggestions: [15, 16],
      supportContact: "+8801234567899",
      isVerified: true,
      farmerContact: "+8801234567899",
      farmDetails: {
        farmName: "Colorful Veggies Farm",
        area: "2 acres",
        methods: ["Conventional"],
      },
      averageResponseTime: "1 hour",
    },
    {
        id: 10,
        availableOffer: true,
        coupon: true,
        name: "Broccoli",
        farmer: "Kamrul Hasan",
        price: 25,
        quantity: 60,
        unit: "kg",
        location: "Chittagong",
        image: "",
        gallery: ["broccoli1.jpg", "broccoli2.jpg", "broccoli.mp4"],
        description: "Fresh and healthy broccoli.",
        rating: 4.5,
        reviews: 20,
        comments: [
          { user: "Mina", userEmail: "mina@gmail.com", text: "Very fresh and green!", date: "2024-11-01" }
        ],
        discount: 12,
        expiryDate: "2024-12-10",
        category: "Vegetables",
        tags: ["Fresh", "Healthy"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "2-3 days",
        returnPolicy: "Return within 7 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 35,
        addedDate: "2024-10-25",
        lastUpdated: "2024-11-01",
        relatedProducts: [11, 12, 13],
        personalizedSuggestions: [14, 15],
        supportContact: "+8801234567893",
        isVerified: true,
        farmerContact: "+8801234567893",
        farmDetails: {
          farmName: "Healthy Green Farms",
          area: "6 acres",
          methods: ["Organic"]
        },
        averageResponseTime: "1.5 hours"
      },
      {
        id: 11,
        availableOffer: true,
        coupon: true,
        name: "Cabbage",
        farmer: "Jahangir Alam",
        price: 18,
        quantity: 80,
        unit: "kg",
        location: "Mymensingh",
        image: "",
        gallery: ["cabbage1.jpg", "cabbage2.jpg", "cabbage.mp4"],
        description: "Fresh and crisp cabbage.",
        rating: 4.3,
        reviews: 15,
        comments: [
          { user: "Rahim", userEmail: "rahim@gmail.com", text: "Good quality cabbage!", date: "2024-11-05" }
        ],
        discount: 8,
        expiryDate: "2024-12-15",
        category: "Vegetables",
        tags: ["Fresh", "Crisp"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "3-4 days",
        returnPolicy: "No returns on this item",
        isRefundable: false,
        stockStatus: "In Stock",
        sold: 40,
        addedDate: "2024-10-18",
        lastUpdated: "2024-11-02",
        relatedProducts: [10, 12, 14],
        personalizedSuggestions: [16, 17],
        supportContact: "+8801234567894",
        isVerified: true,
        farmerContact: "+8801234567894",
        farmDetails: {
          farmName: "Fresh Greens Farm",
          area: "5 acres",
          methods: ["Hydroponics"]
        },
        averageResponseTime: "2 hours"
      },
      {
        id: 12,
        availableOffer: false,
        coupon: false,
        name: "Spinach",
        farmer: "Shahinur Rahman",
        price: 22,
        quantity: 50,
        unit: "kg",
        location: "Rajshahi",
        image: "",
        gallery: ["spinach1.jpg", "spinach2.jpg", "spinach.mp4"],
        description: "Fresh and nutrient-rich spinach.",
        rating: 4.8,
        reviews: 30,
        comments: [
          { user: "Liza", userEmail: "liza@gmail.com", text: "Very healthy and fresh!", date: "2024-11-02" }
        ],
        discount: 10,
        expiryDate: "2024-12-20",
        category: "Vegetables",
        tags: ["Organic", "Healthy"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 7 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 45,
        addedDate: "2024-10-22",
        lastUpdated: "2024-11-03",
        relatedProducts: [10, 11, 13],
        personalizedSuggestions: [18, 19],
        supportContact: "+8801234567895",
        isVerified: true,
        farmerContact: "+8801234567895",
        farmDetails: {
          farmName: "Green Harvest Farms",
          area: "4 acres",
          methods: ["Organic"]
        },
        averageResponseTime: "1 hour"
      },
      {
        id: 13,
        availableOffer: true,
        coupon: true,
        name: "Cauliflower",
        farmer: "Moshiur Rahman",
        price: 28,
        quantity: 70,
        unit: "kg",
        location: "Dhaka",
        image: "",
        gallery: ["cauliflower1.jpg", "cauliflower2.jpg", "cauliflower.mp4"],
        description: "Fresh and high-quality cauliflower.",
        rating: 4.2,
        reviews: 18,
        comments: [
          { user: "Fahim", userEmail: "fahim@gmail.com", text: "Best cauliflower I've had!", date: "2024-11-03" }
        ],
        discount: 15,
        expiryDate: "2024-12-30",
        category: "Vegetables",
        tags: ["Fresh", "Organic"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "2-3 days",
        returnPolicy: "Return within 5 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 38,
        addedDate: "2024-10-28",
        lastUpdated: "2024-11-02",
        relatedProducts: [10, 12, 14],
        personalizedSuggestions: [20, 21],
        supportContact: "+8801234567896",
        isVerified: true,
        farmerContact: "+8801234567896",
        farmDetails: {
          farmName: "Golden Veg Farms",
          area: "7 acres",
          methods: ["Hydroponics"]
        },
        averageResponseTime: "1.5 hours"
      },
     
      {
        id: 14,
        availableOffer: true,
        coupon: true,
        name: "Green Beans",
        farmer: "Shamim Hossain",
        price: 20,
        quantity: 90,
        unit: "kg",
        location: "Sylhet",
        image: "",
        gallery: ["greenbeans1.jpg", "greenbeans2.jpg", "greenbeans.mp4"],
        description: "Fresh and crunchy green beans.",
        rating: 4.4,
        reviews: 12,
        comments: [
          { user: "Rahim", userEmail: "rahim@gmail.com", text: "Great for stir-fries.", date: "2024-11-05" }
        ],
        discount: 10,
        expiryDate: "2024-12-05",
        category: "Vegetables",
        tags: ["Fresh", "Crunchy"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 7 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 50,
        addedDate: "2024-10-15",
        lastUpdated: "2024-11-02",
        relatedProducts: [10, 11, 12],
        personalizedSuggestions: [22, 23],
        supportContact: "+8801234567897",
        isVerified: true,
        farmerContact: "+8801234567897",
        farmDetails: {
          farmName: "Healthy Veg Farms",
          area: "6 acres",
          methods: ["Organic"]
        },
        averageResponseTime: "1 hour"
      },
      {
        id: 15,
        availableOffer: true,
        coupon: false,
        name: "Sweet Corn",
        farmer: "Shafiq Ahmed",
        price: 15,
        quantity: 70,
        unit: "kg",
        location: "Rangpur",
        image: "",
        gallery: ["corn1.jpg", "corn2.jpg", "corn.mp4"],
        description: "Sweet and fresh corn.",
        rating: 4.7,
        reviews: 12,
        comments: [
          { user: "Tania", userEmail: "tania@gmail.com", text: "Amazing taste!", date: "2024-11-05" }
        ],
        discount: 5,
        expiryDate: "2024-12-01",
        category: "Vegetables",
        tags: ["Sweet", "Fresh"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "2-3 days",
        returnPolicy: "Return within 5 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 25,
        addedDate: "2024-10-28",
        lastUpdated: "2024-11-05",
        relatedProducts: [1, 2, 3],
        personalizedSuggestions: [17, 18],
        supportContact: "+8801234567890",
        isVerified: true,
        farmerContact: "+8801234567890",
        farmDetails: {
          farmName: "Golden Corn Farms",
          area: "4 acres",
          methods: ["Organic"],
        },
        averageResponseTime: "1 hour",
      },
      {
        id: 16,
        availableOffer: false,
        coupon: true,
        name: "Mushrooms",
        farmer: "Hasina Begum",
        price: 50,
        quantity: 30,
        unit: "kg",
        location: "Dhaka",
        image: "",
        gallery: ["mushroom1.jpg", "mushroom2.jpg", "mushroom.mp4"],
        description: "Organic and fresh mushrooms.",
        rating: 4.9,
        reviews: 10,
        comments: [
          { user: "Rafi", userEmail: "rafi@gmail.com", text: "Great for cooking!", date: "2024-11-08" }
        ],
        discount: 8,
        expiryDate: "2024-12-15",
        category: "Vegetables",
        tags: ["Organic", "Nutritious"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 7 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 20,
        addedDate: "2024-10-30",
        lastUpdated: "2024-11-06",
        relatedProducts: [4, 5, 6],
        personalizedSuggestions: [19, 20],
        supportContact: "+8801234567891",
        isVerified: true,
        farmerContact: "+8801234567891",
        farmDetails: {
          farmName: "Mushroom Valley",
          area: "3 acres",
          methods: ["Organic"],
        },
        averageResponseTime: "45 minutes",
      },
      {
        id: 17,
        availableOffer: false,
        coupon: false,
        name: "Onion",
        farmer: "Hossain Ahmed",
        price: 10,
        quantity: 200,
        unit: "kg",
        location: "Rajshahi",
        image: "",
        gallery: ["onion1.jpg", "onion2.jpg", "onion.mp4"],
        description: "Fresh and aromatic onions.",
        rating: 4.2,
        reviews: 35,
        comments: [
          { user: "Arif", userEmail: "arif@gmail.com", text: "Good quality, perfect for cooking!", date: "2024-11-03" }
        ],
        discount: 3,
        expiryDate: "2024-11-25",
        category: "Vegetables",
        tags: ["Fresh", "Aromatic"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "3-4 days",
        returnPolicy: "No returns allowed",
        isRefundable: false,
        stockStatus: "In Stock",
        sold: 150,
        addedDate: "2024-10-18",
        lastUpdated: "2024-11-01",
        relatedProducts: [15, 16, 18],
        personalizedSuggestions: [19, 20],
        supportContact: "+8801234567900",
        isVerified: true,
        farmerContact: "+8801234567900",
        farmDetails: {
          farmName: "Fresh Onion Farm",
          area: "15 acres",
          methods: ["Organic"]
        },
        averageResponseTime: "2 hours"
      },
      {
        id: 18,
        availableOffer: true,
        coupon: true,
        name: "Garlic",
        farmer: "Zahirul Islam",
        price: 25,
        quantity: 75,
        unit: "kg",
        location: "Chattogram",
        image: "",
        gallery: ["garlic1.jpg", "garlic2.jpg", "garlic.mp4"],
        description: "Fresh, organic garlic for all your cooking needs.",
        rating: 4.4,
        reviews: 40,
        comments: [
          { user: "Rina", userEmail: "rina@gmail.com", text: "Highly recommend for all kinds of dishes!", date: "2024-11-06" }
        ],
        discount: 10,
        expiryDate: "2024-12-05",
        category: "Vegetables",
        tags: ["Fresh", "Organic"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 7 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 55,
        addedDate: "2024-10-20",
        lastUpdated: "2024-11-01",
        relatedProducts: [15, 16, 17],
        personalizedSuggestions: [21, 22],
        supportContact: "+8801234567901",
        isVerified: true,
        farmerContact: "+8801234567901",
        farmDetails: {
          farmName: "Garlic Farm Bangladesh",
          area: "12 acres",
          methods: ["Organic"]
        },
        averageResponseTime: "2 hours"
      },
      {
        id: 19,
        availableOffer: true,
        coupon: true,
        name: "Potato",
        farmer: "Tariq Hossain",
        price: 8,
        quantity: 300,
        unit: "kg",
        location: "Narayanganj",
        image: "",
        gallery: ["potato1.jpg", "potato2.jpg", "potato.mp4"],
        description: "Fresh, organic potatoes for your kitchen.",
        rating: 4.3,
        reviews: 60,
        comments: [
          { user: "Kader", userEmail: "kader@gmail.com", text: "Great for making fries!", date: "2024-11-05" }
        ],
        discount: 5,
        expiryDate: "2024-12-10",
        category: "Vegetables",
        tags: ["Fresh", "Organic"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "3-4 days",
        returnPolicy: "No returns",
        isRefundable: false,
        stockStatus: "In Stock",
        sold: 200,
        addedDate: "2024-10-05",
        lastUpdated: "2024-11-03",
        relatedProducts: [15, 17, 18],
        personalizedSuggestions: [23, 24],
        supportContact: "+8801234567902",
        isVerified: true,
        farmerContact: "+8801234567902",
        farmDetails: {
          farmName: "Golden Potato Farm",
          area: "20 acres",
          methods: ["Organic"]
        },
        averageResponseTime: "3 hours"
      },
      {
        id: 20,
        availableOffer: false,
        coupon: false,
        name: "Bell Pepper",
        farmer: "Jahidul Islam",
        price: 18,
        quantity: 95,
        unit: "kg",
        location: "Moulvibazar",
        image: "",
        gallery: ["bellpepper1.jpg", "bellpepper2.jpg", "bellpepper.mp4"],
        description: "Bright and colorful bell peppers.",
        rating: 4.5,
        reviews: 25,
        comments: [
          { user: "Masum", userEmail: "masum@gmail.com", text: "Very fresh, great taste.", date: "2024-11-04" }
        ],
        discount: 6,
        expiryDate: "2024-12-18",
        category: "Vegetables",
        tags: ["Fresh", "Colorful"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "2-3 days",
        returnPolicy: "No returns",
        isRefundable: false,
        stockStatus: "In Stock",
        sold: 40,
        addedDate: "2024-10-22",
        lastUpdated: "2024-11-04",
        relatedProducts: [15, 16, 19],
        personalizedSuggestions: [23, 24],
        supportContact: "+8801234567903",
        isVerified: true,
        farmerContact: "+8801234567903",
        farmDetails: {
          farmName: "Pepper Paradise",
          area: "5 acres",
          methods: ["Hydroponics"]
        },
        averageResponseTime: "2.5 hours"
      },
      {
        id: 21,
        availableOffer: true,
        coupon: true,
        name: "Cucumber",
        farmer: "Aminul Islam",
        price: 12,
        quantity: 150,
        unit: "kg",
        location: "Sylhet",
        image: "",
        gallery: ["cucumber1.jpg", "cucumber2.jpg", "cucumber.mp4"],
        description: "Fresh cucumbers for a cool crunch.",
        rating: 4.6,
        reviews: 30,
        comments: [
          { user: "Shah Alam", userEmail: "shahalam@gmail.com", text: "Perfect for salads and sandwiches.", date: "2024-11-01" }
        ],
        discount: 10,
        expiryDate: "2024-12-02",
        category: "Vegetables",
        tags: ["Fresh", "Crunchy"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 5 days if not satisfied",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 110,
        addedDate: "2024-10-25",
        lastUpdated: "2024-11-02",
        relatedProducts: [18, 19, 20],
        personalizedSuggestions: [23, 24],
        supportContact: "+8801234567904",
        isVerified: true,
        farmerContact: "+8801234567904",
        farmDetails: {
          farmName: "Cucumber Farm",
          area: "6 acres",
          methods: ["Organic"]
        },
        averageResponseTime: "1 hour"
      },
      {
        id: 22,
        availableOffer: true,
        coupon: false,
        name: "Spinach",
        farmer: "Rafiq Mia",
        price: 20,
        quantity: 50,
        unit: "kg",
        location: "Sylhet",
        image: "",
        gallery: ["spinach1.jpg", "spinach2.jpg"],
        description: "Fresh organic spinach.",
        rating: 4.5,
        reviews: 18,
        comments: [
          { user: "Sami", userEmail: "sami@gmail.com", text: "Very fresh and green!", date: "2024-11-01" }
        ],
        discount: 10,
        expiryDate: "2024-11-30",
        category: "Vegetables",
        tags: ["Green", "Organic"],
        deliveryOptions: ["Home Delivery"],
        deliveryTime: "2 days",
        returnPolicy: "Return within 3 days if not fresh",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 30,
        addedDate: "2024-10-20",
        lastUpdated: "2024-11-10",
        relatedProducts: [15, 16],
        personalizedSuggestions: [23, 24],
        supportContact: "+8801234567892",
        isVerified: true,
        farmerContact: "+8801234567892",
        farmDetails: {
          farmName: "Green Valley Farms",
          area: "3.5 acres",
          methods: ["Organic"],
        },
        averageResponseTime: "1 hour",
      },
      {
        id: 23,
        availableOffer: false,
        coupon: true,
        name: "Cabbage",
        farmer: "Hasan Uddin",
        price: 12,
        quantity: 100,
        unit: "kg",
        location: "Chittagong",
        image: "",
        gallery: ["cabbage1.jpg", "cabbage2.jpg"],
        description: "Fresh and crispy cabbages.",
        rating: 4.3,
        reviews: 15,
        comments: [
          { user: "Maya", userEmail: "maya@gmail.com", text: "Good quality!", date: "2024-11-02" }
        ],
        discount: 5,
        expiryDate: "2024-12-05",
        category: "Vegetables",
        tags: ["Crispy", "Fresh"],
        deliveryOptions: ["Pick-up"],
        deliveryTime: "1 day",
        returnPolicy: "Return within 4 days",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 45,
        addedDate: "2024-10-18",
        lastUpdated: "2024-11-08",
        relatedProducts: [18, 19],
        personalizedSuggestions: [24, 25],
        supportContact: "+8801234567893",
        isVerified: true,
        farmerContact: "+8801234567893",
        farmDetails: {
          farmName: "Fresh Produce Co.",
          area: "5 acres",
          methods: ["Hybrid"],
        },
        averageResponseTime: "30 minutes",
      },
      {
        id: 24,
        availableOffer: true,
        coupon: false,
        name: "Carrots",
        farmer: "Fatema Khatun",
        price: 25,
        quantity: 80,
        unit: "kg",
        location: "Barisal",
        image: "",
        gallery: ["carrot1.jpg", "carrot2.jpg"],
        description: "Bright and crunchy carrots.",
        rating: 4.6,
        reviews: 22,
        comments: [
          { user: "Tariq", userEmail: "tariq@gmail.com", text: "Perfect for salads!", date: "2024-11-03" }
        ],
        discount: 7,
        expiryDate: "2024-12-10",
        category: "Vegetables",
        tags: ["Crunchy", "Bright"],
        deliveryOptions: ["Home Delivery"],
        deliveryTime: "2-3 days",
        returnPolicy: "Return within 5 days",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 55,
        addedDate: "2024-10-22",
        lastUpdated: "2024-11-12",
        relatedProducts: [20, 21],
        personalizedSuggestions: [25, 26],
        supportContact: "+8801234567894",
        isVerified: true,
        farmerContact: "+8801234567894",
        farmDetails: {
          farmName: "Healthy Harvest",
          area: "4 acres",
          methods: ["Traditional"],
        },
        averageResponseTime: "2 hours",
      },
      {
        id: 25,
        availableOffer: true,
        coupon: true,
        name: "Green Peas",
        farmer: "Ayesha Begum",
        price: 30,
        quantity: 60,
        unit: "kg",
        location: "Gazipur",
        image: "",
        gallery: ["greenpeas1.jpg", "greenpeas2.jpg"],
        description: "Sweet and tender green peas.",
        rating: 4.7,
        reviews: 20,
        comments: [
          { user: "Rima", userEmail: "rima@gmail.com", text: "Very fresh and delicious!", date: "2024-11-06" }
        ],
        discount: 8,
        expiryDate: "2024-12-20",
        category: "Vegetables",
        tags: ["Sweet", "Tender"],
        deliveryOptions: ["Home Delivery"],
        deliveryTime: "2 days",
        returnPolicy: "Return within 4 days",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 35,
        addedDate: "2024-10-25",
        lastUpdated: "2024-11-14",
        relatedProducts: [20, 24],
        personalizedSuggestions: [26, 27],
        supportContact: "+8801234567895",
        isVerified: true,
        farmerContact: "+8801234567895",
        farmDetails: {
          farmName: "Evergreen Farms",
          area: "6 acres",
          methods: ["Organic"],
        },
        averageResponseTime: "1.5 hours",
      },
      {
        id: 26,
        availableOffer: true,
        coupon: false,
        name: "Potatoes",
        farmer: "Nurul Islam",
        price: 15,
        quantity: 150,
        unit: "kg",
        location: "Jessore",
        image: "",
        gallery: ["potato1.jpg", "potato2.jpg"],
        description: "Fresh and versatile potatoes.",
        rating: 4.2,
        reviews: 25,
        comments: [
          { user: "Farhan", userEmail: "farhan@gmail.com", text: "Great for cooking.", date: "2024-11-07" }
        ],
        discount: 5,
        expiryDate: "2024-12-18",
        category: "Vegetables",
        tags: ["Versatile", "Nutritious"],
        deliveryOptions: ["Home Delivery", "Pick-up"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 3 days",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 90,
        addedDate: "2024-10-24",
        lastUpdated: "2024-11-13",
        relatedProducts: [22, 23],
        personalizedSuggestions: [27, 28],
        supportContact: "+8801234567896",
        isVerified: true,
        farmerContact: "+8801234567896",
        farmDetails: {
          farmName: "Golden Roots",
          area: "10 acres",
          methods: ["Hybrid"],
        },
        averageResponseTime: "2 hours",
      },
      {
        id: 27,
        availableOffer: false,
        coupon: true,
        name: "Tomatoes",
        farmer: "Shamima Akter",
        price: 28,
        quantity: 90,
        unit: "kg",
        location: "Bogura",
        image: "",
        gallery: ["tomato1.jpg", "tomato2.jpg"],
        description: "Juicy and ripe tomatoes.",
        rating: 4.6,
        reviews: 18,
        comments: [
          { user: "Rahim", userEmail: "rahim@gmail.com", text: "Perfectly ripe and juicy!", date: "2024-11-08" }
        ],
        discount: 7,
        expiryDate: "2024-12-25",
        category: "Vegetables",
        tags: ["Ripe", "Juicy"],
        deliveryOptions: ["Home Delivery"],
        deliveryTime: "1 day",
        returnPolicy: "Return within 2 days",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 50,
        addedDate: "2024-10-27",
        lastUpdated: "2024-11-15",
        relatedProducts: [24, 26],
        personalizedSuggestions: [28, 29],
        supportContact: "+8801234567897",
        isVerified: true,
        farmerContact: "+8801234567897",
        farmDetails: {
          farmName: "Tomato Garden",
          area: "8 acres",
          methods: ["Traditional"],
        },
        averageResponseTime: "1 hour",
      },
      {
        id: 28,
        availableOffer: true,
        coupon: false,
        name: "Onions",
        farmer: "Babul Hossain",
        price: 22,
        quantity: 200,
        unit: "kg",
        location: "Khulna",
        image: "",
        gallery: ["onion1.jpg", "onion2.jpg"],
        description: "Sharp and flavorful onions.",
        rating: 4.3,
        reviews: 22,
        comments: [
          { user: "Kamal", userEmail: "kamal@gmail.com", text: "High-quality onions.", date: "2024-11-09" }
        ],
        discount: 6,
        expiryDate: "2024-12-30",
        category: "Vegetables",
        tags: ["Sharp", "Flavorful"],
        deliveryOptions: ["Home Delivery"],
        deliveryTime: "1-2 days",
        returnPolicy: "Return within 3 days",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 120,
        addedDate: "2024-10-26",
        lastUpdated: "2024-11-14",
        relatedProducts: [25, 27],
        personalizedSuggestions: [29, 30],
        supportContact: "+8801234567898",
        isVerified: true,
        farmerContact: "+8801234567898",
        farmDetails: {
          farmName: "Fresh Onion Fields",
          area: "12 acres",
          methods: ["Organic"],
        },
        averageResponseTime: "1.5 hours",
      },
      {
        id: 29,
        availableOffer: false,
        coupon: true,
        name: "Garlic",
        farmer: "Abdul Karim",
        price: 40,
        quantity: 70,
        unit: "kg",
        location: "Rajshahi",
        image: "",
        gallery: ["garlic1.jpg", "garlic2.jpg"],
        description: "Strong and aromatic garlic.",
        rating: 4.8,
        reviews: 30,
        comments: [
          { user: "Nafisa", userEmail: "nafisa@gmail.com", text: "Premium quality garlic.", date: "2024-11-10" }
        ],
        discount: 9,
        expiryDate: "2025-01-10",
        category: "Spices",
        tags: ["Aromatic", "Premium"],
        deliveryOptions: ["Pick-up"],
        deliveryTime: "1 day",
        returnPolicy: "Return within 2 days",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 40,
        addedDate: "2024-10-28",
        lastUpdated: "2024-11-16",
        relatedProducts: [28, 30],
        personalizedSuggestions: [30, 31],
        supportContact: "+8801234567899",
        isVerified: true,
        farmerContact: "+8801234567899",
        farmDetails: {
          farmName: "Garlic Haven",
          area: "7 acres",
          methods: ["Traditional"],
        },
        averageResponseTime: "2 hours",
      },
      {
        id: 30,
        availableOffer: true,
        coupon: false,
        name: "Cauliflower",
        farmer: "Jamal Uddin",
        price: 18,
        quantity: 75,
        unit: "kg",
        location: "Pabna",
        image: "",
        gallery: ["cauliflower1.jpg", "cauliflower2.jpg"],
        description: "Fresh and tasty cauliflowers.",
        rating: 4.4,
        reviews: 14,
        comments: [
          { user: "Nayeem", userEmail: "nayeem@gmail.com", text: "Very fresh!", date: "2024-11-05" }
        ],
        discount: 6,
        expiryDate: "2024-12-15",
        category: "Vegetables",
        tags: ["Fresh", "Tasty"],
        deliveryOptions: ["Pick-up"],
        deliveryTime: "1 day",
        returnPolicy: "Return within 3 days",
        isRefundable: true,
        stockStatus: "In Stock",
        sold: 40,
        addedDate: "2024-10-28",
        lastUpdated: "2024-11-15",
        relatedProducts: [27, 29],
        personalizedSuggestions: [29, 31],
        supportContact: "+8801234567890",
        isVerified: true,
        farmerContact: "+8801234567890",
        farmDetails: {
          farmName: "Green Valley Farms",
          area: "5 acres",
          methods: ["Organic"]
        },
        averageResponseTime: "1.5 hours",
      },
      
   
  ];
  



