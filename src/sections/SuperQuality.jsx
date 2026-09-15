import { cap4 } from "../assets/images";
import Button from "../Components/Button";

const SuperQuality = () => {
    return (
        <section
            id="about-us"
            className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
                <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
                    Calidad
                    <span className="text-coral-red"> Inigualable </span>
                    en Cada Gorra
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                    En Good Style seleccionamos cuidadosamente cada gorra para
                    ofrecerte materiales de primera categoría, costuras
                    perfectas y diseños que marcan tendencia. Nuestra obsesión
                    por los detalles garantiza que tu gorra luzca y se sienta
                    premium desde el primer día.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Con más de 50 modelos disponibles, encontrarás desde
                    clásicos atemporales hasta diseños urbanos de vanguardia. En
                    Good Style, la calidad no es una opción — es nuestra
                    promesa.
                </p>
                <div className="mt-11">
                    <a
                        href="https://instagram.com/_goodstyle.vzz"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button label="Ver Colección" />
                    </a>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img
                    src={cap4}
                    alt="gorra premium Good Style"
                    width={570}
                    height={522}
                    className="object-contain"
                />
            </div>
        </section>
    );
};

export default SuperQuality;
