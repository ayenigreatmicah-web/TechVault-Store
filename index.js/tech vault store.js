// =========================
// TECHVAULT PRODUCT DATA
// =========================

const products = {

    samsung: {
        name: "Samsung Galaxy S26 Ultra",
        category: "Smartphone",
        price: "₦1,200,000",
        image: "Images/samsungs26.jpg",

        description:
            "Experience powerful performance, an immersive display and advanced features with the Samsung Galaxy S26 Ultra. Built for productivity, entertainment and everyday use.",

        features: [
            "High-performance processor",
            "Advanced camera system",
            "Premium display",
            "Long-lasting battery",
            "Large storage capacity"
        ],

        about:
            "The Samsung Galaxy S26 Ultra is designed to provide a smooth and powerful experience for communication, entertainment, productivity and everyday tasks."
    },


    iphone: {
        name: "iPhone 18 Pro Max",
        category: "Smartphone",
        price: "₦2,000,000",
        image: "Images/iphone18.jpg",

        description:
            "Enjoy premium performance, an advanced camera system and a smooth user experience with the iPhone 18 Pro Max.",

        features: [
            "Powerful performance",
            "Advanced camera system",
            "Premium display",
            "Long-lasting battery",
            "Large storage capacity"
        ],

        about:
            "The iPhone 18 Pro Max combines premium design, powerful performance and advanced features for everyday use, entertainment and productivity."
    },


    hp: {
        name: "HP Laptop",
        category: "Laptop",
        price: "₦550,000",
        image: "Images/hp laptop.jpg",

        description:
            "A reliable HP laptop designed for school, work, browsing, entertainment and everyday productivity.",

        features: [
            "Reliable performance",
            "Large display",
            "Comfortable keyboard",
            "Fast storage",
            "Portable design"
        ],

        about:
            "The HP Laptop is suitable for students, professionals and everyday users who need a dependable computer for work and entertainment."
    },


    lenovo: {
        name: "Lenovo Laptop",
        category: "Laptop",
        price: "₦600,000",
        image: "Images/laptop.jpg",

        description:
            "Get dependable performance and productivity with this Lenovo laptop, suitable for work, school and everyday computing.",

        features: [
            "Powerful performance",
            "Large display",
            "Comfortable keyboard",
            "Fast storage",
            "Portable design"
        ],

        about:
            "The Lenovo Laptop provides a practical combination of performance, portability and usability for school, work and everyday tasks."
    },


    airpods: {
        name: "Apple AirPods",
        category: "Audio",
        price: "₦120,000",
        image: "Images/airpods.jpg",

        description:
            "Enjoy convenient wireless audio with Apple AirPods, designed for music, calls, videos and everyday listening.",

        features: [
            "Wireless connectivity",
            "Clear audio",
            "Compact design",
            "Portable charging case",
            "Easy everyday use"
        ],

        about:
            "Apple AirPods provide a convenient wireless listening experience for music, calls, videos and other everyday activities."
    },


    headphones: {
        name: "Wireless Headphones",
        category: "Audio",
        price: "₦85,000",
        image: "Images/headphones.jpg",

        description:
            "Enjoy your music, videos and calls with comfortable wireless headphones built for everyday entertainment.",

        features: [
            "Wireless connectivity",
            "Clear sound",
            "Comfortable design",
            "Long battery life",
            "Built for everyday use"
        ],

        about:
            "These wireless headphones are designed to provide convenient and enjoyable audio for music, entertainment and calls."
    },


    smartwatch: {
        name: "Smartwatch",
        category: "Wearable",
        price: "₦95,000",
        image: "Images/smartwatch.jpg",

        description:
            "Stay connected and keep track of your everyday activities with this modern smartwatch.",

        features: [
            "Smart notifications",
            "Activity tracking",
            "Modern display",
            "Wireless connectivity",
            "Comfortable design"
        ],

        about:
            "The smartwatch combines useful everyday features with a modern design, making it a convenient wearable for staying connected."
    },


    powerbank: {
        name: "Fast Charge Power Bank",
        category: "Accessories",
        price: "₦65,000",
        image: "Images/powerbank.jpg",

        description:
            "Keep your devices powered throughout the day with this convenient fast-charge power bank.",

        features: [
            "Fast charging",
            "Portable design",
            "Large battery capacity",
            "Multiple charging options",
            "Convenient for travel"
        ],

        about:
            "The Fast Charge Power Bank provides a convenient way to keep compatible devices powered when you are away from a wall outlet."
    },


    charger: {
        name: "Fast USB-C Charger",
        category: "Accessories",
        price: "₦35,000",
        image: "Images/charger.jpg",

        description:
            "Charge compatible devices conveniently with this fast USB-C charger.",

        features: [
            "USB-C connectivity",
            "Fast charging",
            "Compact design",
            "Portable",
            "Everyday convenience"
        ],

        about:
            "The Fast USB-C Charger is designed for convenient everyday charging of compatible devices at home, school or work."
    },

    ps5: {
        name: "PlayStation 5",
        category: "Gaming",
        price: "₦350,000",
        image: "Images/ps5.jpg",

        description:
            "Charge compatible devices conveniently with this fast USB-C charger.",

        features: [
            "USB-C connectivity",
            "Fast charging",
            "Compact design",
            "Portable",
            "Everyday convenience"
        ],

        about:
            "The Fast USB-C Charger is designed for convenient everyday charging of compatible devices at home, school or work."
    }
    

};


// =========================
// LOAD PRODUCT DETAILS
// =========================

const urlParams = new URLSearchParams(window.location.search);

const productId = urlParams.get("product");

const product = products[productId];


// =========================
// DISPLAY PRODUCT
// =========================

if (product) {

    document.getElementById("productName").textContent = product.name;

    document.getElementById("productCategory").textContent = product.category;

    document.getElementById("productPrice").textContent = product.price;

    document.getElementById("productDescription").textContent =
        product.description;

    document.getElementById("productAbout").textContent =
        product.about;

    document.getElementById("productImage").src =
        product.image;

    document.getElementById("productImage").alt =
        product.name;


    // Product features

    const featureList =
        document.getElementById("productFeatures");

    featureList.innerHTML = "";

    product.features.forEach(function(feature) {

        const li = document.createElement("li");

        li.innerHTML =
            `<i class="fas fa-check"></i> ${feature}`;

        featureList.appendChild(li);

    });


} else {

    // If no valid product was selected

    document.getElementById("productName").textContent =
        "Product Not Found";

    document.getElementById("productCategory").textContent =
        "";

    document.getElementById("productPrice").textContent =
        "";

    document.getElementById("productDescription").textContent =
        "Sorry, the product you are looking for could not be found.";

}