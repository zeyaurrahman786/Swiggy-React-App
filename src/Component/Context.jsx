import { createContext } from "react";

let mindData = [
    {
        name: 'Biryanu',
        img: 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png'
    },
    {
        name: "Cake",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png"
    },
    {
        name: "IceCreame",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chocolate%20icecream.png"
    },
    {
        name: "Paratha",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png"
    },
    {
        name: "Noodles",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png"
    },
    {
        name: "Poori",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png"
    },
    {
        name: "Coffee",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_coffee.png"
    },
    {
        name: "Rolls",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png"
    },
    {
        name: "Khichadi",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png"
    },
    {
        name: "Resugulla",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Rasgulla.png"
    },
    {
        name: "Kababs",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Kebabs.png"
    },
    {
        name: "Paw Bhaji",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png"
    },
    {
        name: "Chole Bhature",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png"
    },
    {
        name: "Lassy",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/3f2c40d3-96c7-44ce-8b35-aef6ea746cdc_lassi.png"
    },
    {
        name: "Pure Veg",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pure%20Veg.png"
    },
    {
        name: "Chinese",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png"
    },
    {
        name: "North Indian",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png"
    },
    {
        name: "Desserts",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Desserts.png"
    },
    {
        name: "Gulab Jamun",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Gulab%20jamun.png"
    },
    {
        name: "Tee",
        img: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/cb5669c8-d6f1-46ab-b24d-3da99b9fa32c_tea.png"
    },
]

let recipiesData = [
    {
        name: "Free Item",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vkhcohhmqfczycw9vsar",
        title: "Hotel Sai Nath & Sai Restaurant",
        rating: "4.2",
        time: "45 - 50 mins",
        price: 120,
        type: "North Indian, South Indian, Chinese, Fast Food, Desserts Chhindwara Locality"
    },
    {
        name: "₹100 off above ₹249",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/enj3srsnhbltbom2ovvh",
        title: "Dev International",
        rating: "4.4",
        time: "40 - 50 mins",
        price: 250,
        type: "North Indian, Chinese, Fast Food, Beverages Mohan Nagar"
    },
    {
        name: "₹49 off above ₹199",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mt2aggiscfl3yviatwng",
        title: "Bakery World",
        rating: "4.3",
        time: "55 - 60 mins",
        price: 180,
        type: "Bakery, Ice Cream, Snacks, Beverages Parasia Road"
    },
    {
        name: "10% off above ₹49",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fa4944f0cfdcbca2bec1f3ab8e3db3f7",
        title: "The Fusion Lounge",
        rating: "3.9",
        time: "50 - 55 mins",
        price: 150,
        type: "North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts Railway Station"
    },
    {
        name: "₹150 off above ₹349",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv",
        title: "Adil Hotel",
        rating: "4.5",
        time: "45 - 50 mins",
        price: 300,
        type: "North Indian, South Indian, Indian, Salads, Desserts Satkar Chowk"
    },
    {
        name: "₹150 off above ₹349",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2",
        title: "Satkar Restaurant",
        rating: "4.2",
        time: "45 - 50 mins",
        price: 220,
        type: "South Indian, Chinese, Fast Food, Desserts"
    },
    {
        name: "₹100 off above ₹349",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
        title: "The Belgian Waffle Co.",
        rating: "4.1",
        time: "30 - 35 mins",
        price: 150,
        type: "Waffle, Desserts, Ice Cream, Beverages Mohan Nagar"
    },
    {
        name: "",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fm3rs3g6z7ibfhesmxnu",
        title: "Scoops Fast Food And Ice Cream...",
        rating: "4.2",
        time: "45 - 50 mins",
        price: 100,
        type: "Bakery, Ice Cream, Snacks, Beverages"
    },
    {
        name: "₹50 off above ₹199",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        title: "Raajbagh Restaurant",
        rating: "4.2",
        time: "15 - 25 mins",
        price: 200,
        type: "North Indian, South Indian, Indian, Chinese, Fast Food, Beverages Chhindwara Locality"
    },
    {
        name: "Apni Rasoi Family Dhaba",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xph0vf5pvbxjf8xchwjk",
        title: "Hotel Sai Nath & Sai Restaurant",
        rating: "4.2",
        time: "45 - 50 mins",
        price: 170,
        type: "North Indian, South Indian, Chinese, Fast Food, Desserts Chhindwara Locality"
    },
    {
        name: "₹100 off above ₹249",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/2274f59cb8efcfab1f446b195bcbda3b",
        title: "Dev International",
        rating: "4.4",
        time: "40 - 50 mins",
        price: 250,
        type: "North Indian, Chinese, Fast Food, Beverages Mohan Nagar"
    },
    {
        name: "₹49 off above ₹199",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yzgqriufpzmloogcn2vl",
        title: "Jai Ganesh Bhojnalaya",
        rating: "4.3",
        time: "55 - 60 mins",
        price: 140,
        type: "Bakery, Ice Cream, Snacks, Beverages Parasia Road"
    },
    {
        name: "10% off above ₹49",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hxxasn2kf8g9eyi9eonq",
        title: "The Fusion Lounge",
        rating: "3.9",
        time: "50 - 55 mins",
        price: 150,
        type: "North Indian, South Indian, Chinese, Beverages, Fast Food, Desserts Railway Station"
    },
    {
        name: "₹150 off above ₹349",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/sidigb8zqjfrfpkrtqgl",
        title: "Adil Hotel",
        rating: "4.5",
        time: "45 - 50 mins",
        price: 300,
        type: "North Indian, South Indian, Indian, Salads, Desserts Satkar Chowk"
    },
    {
        name: "₹150 off above ₹349",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/glepanv4xjfnhsbieam1",
        title: "Satkar Restaurant",
        rating: "4.2",
        time: "45 - 50 mins",
        price: 220,
        type: "South Indian, Chinese, Fast Food, Desserts"
    },
    {
        name: "₹100 off above ₹349",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11",
        title: "The Belgian Waffle Co.",
        rating: "4.1",
        time: "30 - 35 mins",
        price: 150,
        type: "Waffle, Desserts, Ice Cream, Beverages Mohan Nagar"
    },
    {
        name: "",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/fm3rs3g6z7ibfhesmxnu",
        title: "Scoops Fast Food And Ice Cream...",
        rating: "4.2",
        time: "45 - 50 mins",
        price: 100,
        type: "Bakery, Ice Cream, Snacks, Beverages"
    },
    {
        name: "₹50 off above ₹199",
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xvyrclhxftulsglktaek",
        title: "Raajbagh Restaurant",
        rating: "4.2",
        time: "15 - 25 mins",
        price: 200,
        type: "North Indian, South Indian, Indian, Chinese, Fast Food, Beverages Chhindwara Locality"
    },
];


let LocateData = [
    { city: "Best Restaurants in Bangalore", near: "Chinese Restaurant Near Me" },
    { city: "Best Restaurants in Pune", near: "South Indian Restaurant Near Me" },
    { city: "Best Restaurants in Mumbai", near: "Indian Restaurant Near Me" },
    { city: "Best Restaurants in Delhi", near: "Kerala Restaurant Near Me" },
    { city: "Best Restaurants in Hyderabad", near: "Korean Restaurant Near Me" },
    { city: "Best Restaurants in Kolkata", near: "North Indian Restaurant Near Me" },
    { city: "Best Restaurants in Chennai", near: "Seafood Restaurant Near Me" },
    { city: "Best Restaurants in Chandigarh", near: "Bengali Restaurant Near Me" },
    { city: "Best Restaurants in Ahmedabad", near: "Punjabi Restaurant Near Me" },
    { city: "Best Restaurants in Jaipur", near: "Italian Restaurant Near Me" },
    { city: "Best Restaurants in Nagpur", near: "Andhra Restaurant Near Me" },
    { city: "Explore more...", near: "Explore more..." },
];




let Context = createContext();

function ContextProvider({ children }) {
    return (
        <Context.Provider value={{ mindData, recipiesData, LocateData }}>
            {children}
        </Context.Provider>
    )
}




export { ContextProvider }
export default Context;