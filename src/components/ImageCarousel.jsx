// src/components/ImageCarousel.jsx
import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function ImageCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Array de imágenes del carrusel
    const slides = [
        {
            image: '/images/carousel/slide-4.jpg',
            title: 'Alineación y Balanceo',
            subtitle: 'de Precisión para tu Vehículo'
        },
        {
            image: '/images/carousel/slide-2.jpg',
            title: 'Tecnología de Última Generación',
            subtitle: 'Equipos modernos para resultados perfectos'
        },
        {
            image: '/images/carousel/slide-3.jpg',
            title: 'Experiencia y Profesionalismo',
            subtitle: 'Más de 25 años cuidando tu vehículo'
        }
    ];

    // Auto-avanzar el carrusel cada 7 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 7000);

        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <section id="inicio" className="relative h-96 md:h-[500px] overflow-hidden">
            {/* Slides */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    {/* Imagen de fondo */}
                    <div
                        className="h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${slide.image}')`,
                            backgroundColor: '#0061af' // Fallback color
                        }}
                    >
                        {/* Overlay oscuro */}
                        <div className="absolute inset-0 bg-black opacity-50"></div>

                        {/* Contenido del slide */}
                        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center md:text-left">
                            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                                {slide.title} <br />
                                <span className="text-taller-blue">{slide.subtitle}</span>
                            </h1>
                            <p className="mt-4 max-w-2xl text-lg text-gray-200 mx-auto md:mx-0">
                                Garantizamos la máxima seguridad y rendimiento en cada kilómetro.
                            </p>
                            <div className="mt-8">
                                <a
                                    href="#contacto"
                                    className="inline-block bg-taller-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-transform transform hover:scale-105"
                                >
                                    Contáctanos Ahora
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Botones de navegación */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
                aria-label="Slide anterior"
            >
                <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white p-2 rounded-full backdrop-blur-sm transition-all z-10"
                aria-label="Siguiente slide"
            >
                <ChevronRightIcon className="h-6 w-6" />
            </button>

            {/* Indicadores (dots) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                            ? 'bg-taller-blue w-8'
                            : 'bg-white/50 hover:bg-white/75'
                            }`}
                        aria-label={`Ir a slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}

