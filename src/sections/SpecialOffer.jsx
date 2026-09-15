import { cap2 } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={cap2}
                    alt="oferta especial gorras Good Style"
                    width={560}
                    height={500}
                    className="object-contain w-full max-w-md rounded-2xl"
                />
            </div>

            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
                    <span className="text-coral-red">Variedad </span>
                    Para Todos los Estilos
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    Desde gorras snapback hasta dad hats, trucker y flex fit, en
                    Good Style encontrarás el modelo perfecto para cada ocasión.
                    Nuestra colección se actualiza constantemente con las
                    tendencias más frescas del mercado.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    ¿No encuentras lo que buscas? Escríbenos por WhatsApp y
                    nuestro equipo te ayuda a encontrar la gorra perfecta.
                    Atención personalizada, siempre disponible para ti.
                </p>
                <div className="mt-11 flex flex-wrap gap-4">
                    <a
                        href="https://wa.me/5847908311"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button label="Pedir por WhatsApp" />
                    </a>
                    <a
                        href="https://instagram.com/_goodstyle.vzz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            label="Ver Instagram"
                            backgroundColor="bg-white"
                            borderColor="border-slate-gray"
                            textColor="text-slate-gray"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SpecialOffer;
