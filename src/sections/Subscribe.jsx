import { MapPin, MessageCircle, Clock } from "lucide-react";
import { instagram } from "../assets/icons";

const contactItems = [
    {
        icon: MapPin,
        label: "Ubicación",
        value: "Coro, Estado Falcón",
        sub: "Venezuela",
        link: null,
    },
    {
        icon: MessageCircle,
        label: "WhatsApp",
        value: "+58 479 083 11",
        sub: "Escríbenos ahora",
        link: "https://wa.me/5847908311",
    },
    {
        image: instagram,
        label: "Instagram",
        value: "@_goodstyle.vzz",
        sub: "@_goodstyle",
        link: "https://instagram.com/_goodstyle.vzz",
    },
    {
        icon: Clock,
        label: "Horario",
        value: "Lun – Sáb: 8 AM – 6 PM",
        sub: "Dom: 9 AM – 2 PM",
        link: null,
    },
];

const Subscribe = () => {
    return (
        <section className="max-container" id="contact-us">
            {/* Encabezado */}
            <div className="text-center mb-16">
                <h3 className="text-4xl font-palanquin font-bold">
                    Contáctanos <span className="text-coral-red">aquí</span>
                </h3>
                <p className="info-text mt-4 max-w-lg mx-auto">
                    Visítanos, escríbenos o síguenos. Estamos aquí para ayudarte
                    a encontrar la gorra perfecta.
                </p>
            </div>

            {/* Tarjetas de contacto */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {contactItems.map(
                    ({ icon: Icon, image, label, value, sub, link }) => {
                        const card = (
                            <div
                                className={`group flex flex-col items-center text-center gap-4 bg-white rounded-2xl shadow-3xl px-8 py-10 transition-all duration-300
                ${link ? "hover:shadow-lg hover:-translate-y-1 cursor-pointer" : ""}`}
                            >
                                <div className="w-14 h-14 bg-coral-red rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                    {image ? (
                                        <img
                                            src={image}
                                            alt={label}
                                            className="w-6 h-6"
                                        />
                                    ) : (
                                        <Icon
                                            size={26}
                                            color="white"
                                            strokeWidth={1.8}
                                        />
                                    )}
                                </div>
                                <div>
                                    <p className="font-montserrat text-sm font-semibold uppercase tracking-widest text-slate-gray mb-1">
                                        {label}
                                    </p>
                                    <p className="font-palanquin font-bold text-xl text-gs-black leading-snug">
                                        {value}
                                    </p>
                                    <p className="font-montserrat text-slate-gray text-sm mt-1">
                                        {sub}
                                    </p>
                                </div>
                            </div>
                        );

                        return link ? (
                            <a
                                key={label}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block"
                            >
                                {card}
                            </a>
                        ) : (
                            <div key={label}>{card}</div>
                        );
                    },
                )}
            </div>
        </section>
    );
};

export default Subscribe;
