import { logo } from "../assets/images";
import { navLinks } from "../constants";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="padding-x py-6 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Good Style Logo"
                        height={48}
                        className="h-12 w-auto object-contain m-0"
                    />
                </a>

                {/* Desktop links */}
                <ul className="flex-1 flex justify-center items-center gap-12 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-base font-semibold text-gs-black hover:text-coral-red transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <a
                    href="https://wa.me/5847908311"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden lg:flex items-center gap-2 bg-coral-red text-white px-5 py-2.5 rounded-full font-montserrat font-semibold text-sm hover:bg-gs-black transition-colors duration-200 wide:mr-24"
                >
                    Comprar Ahora
                </a>

                {/* Mobile hamburger */}
                <button
                    className="hidden max-lg:block text-gs-black"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Abrir menú"
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="lg:hidden bg-white shadow-3xl rounded-2xl mt-2 mx-4 p-6 flex flex-col gap-4">
                    {navLinks.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="font-montserrat font-semibold text-gs-black text-base hover:text-coral-red transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                    <a
                        href="https://wa.me/5847908311"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 bg-coral-red text-white text-center px-5 py-3 rounded-full font-montserrat font-semibold text-sm"
                    >
                        Comprar Ahora
                    </a>
                </div>
            )}
        </header>
    );
};

export default Nav;
