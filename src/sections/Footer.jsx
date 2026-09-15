import { Copyright } from "lucide-react";

const Footer = () => {
    return (
        <footer className="max-container">
            <div className="flex justify-center text-white-400 py-1 gap-4">
                <div className="flex items-center gap-2 font-montserrat">
                    <Copyright size={16} />
                    <p className="text-sm">
                        2025 Good Style. Todos los derechos reservados.
                    </p>
                </div>
                <p className="font-montserrat text-sm">
                    Coro, Falcón — Venezuela
                </p>
            </div>
        </footer>
    );
};

export default Footer;
