import {
    cap1,
    cap2,
    cap3,
    cap5,
    cap6,
    cap7,
    cap8,
    customer1,
    customer2,
} from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Inicio" },
    { href: "#about-us", label: "Nosotros" },
    { href: "#products", label: "Productos" },
    { href: "#contact-us", label: "Contacto" },
];

export const shoes = [
    {
        thumbnail: cap1,
        bigShoe: cap1,
    },
    {
        thumbnail: cap2,
        bigShoe: cap2,
    },
    {
        thumbnail: cap3,
        bigShoe: cap3,
    },
];

export const statistics = [
    { value: "50+", label: "Modelos Disponibles" },
    { value: "100%", label: "Calidad Premium" },
    { value: "500+", label: "Clientes Satisfechos" },
];

export const products = [
    {
        imgURL: cap8,
        name: "Gorra Snapback Clásica",
        price: "$15.00",
    },
    {
        imgURL: cap5,
        name: "Gorra Trucker Premium",
        price: "$18.00",
    },
    {
        imgURL: cap6,
        name: "Gorra Dad Hat Vintage",
        price: "$16.00",
    },
    {
        imgURL: cap7,
        name: "Gorra Flex Fit Pro",
        price: "$20.00",
    },
];

export const services = [
    {
        icon: "Truck",
        label: "Envíos a Todo el País",
        subtext:
            "Llevamos tu gorra favorita hasta la puerta de tu casa a todo Venezuela.",
    },
    {
        icon: "ShieldCheck",
        label: "Calidad Garantizada",
        subtext:
            "Cada gorra pasa por un control de calidad riguroso para asegurar tu satisfacción.",
    },
    {
        icon: "HeadphonesIcon",
        label: "Atención Personalizada",
        subtext:
            "Nuestro equipo está disponible para asesorarte y encontrar la gorra perfecta.",
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: "Andrés Morales",
        rating: 5,
        feedback:
            "¡Increíble calidad! La gorra llegó perfecta, exactamente como la vi en el perfil. Sin duda seguiré comprando en Good Style.",
    },
    {
        imgURL: customer2,
        customerName: "María González",
        rating: 5,
        feedback:
            "La variedad es impresionante y la atención fue excelente. Mi gorra llegó rápido y en perfectas condiciones. Totalmente recomendado.",
    },
];

export const footerLinks = [
    {
        title: "Productos",
        links: [
            { name: "Snapback", link: "/" },
            { name: "Trucker", link: "/" },
            { name: "Dad Hat", link: "/" },
            { name: "Flex Fit", link: "/" },
            { name: "Edición Limitada", link: "/" },
            { name: "Colección Nueva", link: "/" },
        ],
    },
    {
        title: "Ayuda",
        links: [
            { name: "Sobre Nosotros", link: "/" },
            { name: "Preguntas Frecuentes", link: "/" },
            { name: "Cómo Comprar", link: "/" },
            { name: "Política de Privacidad", link: "/" },
            { name: "Política de Envíos", link: "/" },
        ],
    },
    {
        title: "Contáctanos",
        links: [
            {
                name: "WhatsApp: +58 479 083 11",
                link: "https://wa.me/5847908311",
            },
            {
                name: "Instagram: @_goodstyle.vzz",
                link: "https://instagram.com/_goodstyle.vzz",
            },
            {
                name: "TikTok: @_goodstyle",
                link: "https://tiktok.com/@_goodstyle",
            },
        ],
    },
];

export const socialMedia = [
    {
        icon: "Instagram",
        alt: "Instagram Good Style",
        link: "https://instagram.com/_goodstyle.vzz",
    },
    {
        icon: "MessageCircle",
        alt: "WhatsApp Good Style",
        link: "https://wa.me/5847908311",
    },
];
