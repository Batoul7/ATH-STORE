import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import VisaImg from '/src/assets/Footer/visa.webp';
import PaypalImg from '/src/assets/Footer/paypal.webp';
import masterCardImg from '/src/assets/Footer/masterCard.webp';
export const icons = [
    {
        name: faInstagram,
        path: "https://instagram.com"
    },
    {
        name: faFacebook,
        path: "https://facebook.com"
    },
    {
        name: faYoutube,
        path: "https://youtube.com"
    },
    {
        name: faTwitter,
        path: "https://x.com"
    },
];
export const categories = [
    { name: "Electronics", path: "/electronics" },
    { name: "Jewelry", path: "/jewelry" },
    { name: "Women's Clothing", path: "/womens-clothing" },
    { name: "Men's Clothing", path: "/mens-clothing" },
];
export const customerService = [
    { name: "Shipping & Delivery", path: "/shipping" },
    { name: "Returns & Exchanges", path: "/returns" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact Us", path: "/contact" },
];
// صور وسائل الدفع
export const paymentMethods = [
    { name: "Visa", img: VisaImg },
    { name: "MasterCard", img: masterCardImg },
    { name: "PayPal", img: PaypalImg },
];
