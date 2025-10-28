// src/pages/HomePage.jsx
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ImageCarousel from '../components/ImageCarousel';
import WhatsAppButton from '../components/WhatsAppButton';
import ServiceModal from '../components/ServiceModal';
import VideoModal from '../components/VideoModal';
import { services } from '../information/servicesData';
import { WrenchScrewdriverIcon, AcademicCapIcon, ShieldCheckIcon, CalendarDaysIcon, PlayCircleIcon, MegaphoneIcon } from '@heroicons/react/24/outline';

// Este componente está diseñado para un fondo claro.
const FeatureLight = ({ icon, title, description }) => (
    <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-taller-blue text-white">
            {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
    </div>
);

const ServiceCard = ({ title, description, onClick }) => (
    <div
        onClick={onClick}
        className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-lg transition-all border-t-4 border-taller-blue cursor-pointer hover:scale-105 transform"
    >
        <div className="text-taller-blue mb-3 sm:mb-4">
            <WrenchScrewdriverIcon className="h-12 w-12 sm:h-12 sm:w-12 mx-auto" />
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900">{title}</h3>
        <p className="mt-2 text-sm sm:text-base text-gray-600 hidden sm:block">{description}</p>
        <p className="mt-3 sm:mt-4 text-sm sm:text-sm text-taller-blue font-medium">Click para más información →</p>
    </div>
);

const CourseCard = ({ icon, title, description, duration }) => (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-taller-red">
        <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-taller-blue text-white">
                    {icon}
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex flex-wrap gap-3 text-sm">
                    {/* <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-taller-blue font-medium">
                        <ClipboardDocumentCheckIcon className="h-4 w-4 mr-1" />
                        {level}
                    </span> */}
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                        <CalendarDaysIcon className="h-4 w-4 mr-1" />
                        {duration}
                    </span>
                </div>
            </div>
        </div>
    </div>
);

const Feature = ({ icon, title, description }) => (
    <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-taller-blue text-white ring-4 ring-taller-red ring-offset-2 ring-offset-gray-900">
            {icon}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
    </div>
);

export default function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

    // Google Drive video URL
    const courseVideoUrl = "https://drive.google.com/file/d/10n1uAKNxLG6uvaFZzuYkM115JjFP3Q0D/view?usp=sharing";

    const openModal = (service) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedService(null), 300);
    };

    const openVideoModal = () => {
        setIsVideoModalOpen(true);
    };

    const closeVideoModal = () => {
        setIsVideoModalOpen(false);
    };

    return (
        <div className="bg-white">
            <Header />

            {/* Modal de Servicios */}
            <ServiceModal
                isOpen={isModalOpen}
                closeModal={closeModal}
                service={selectedService}
            />

            {/* Modal de Video */}
            <VideoModal
                isOpen={isVideoModalOpen}
                closeModal={closeVideoModal}
                videoUrl={courseVideoUrl}
            />

            <main>
                {/* Carrusel de Imágenes */}
                <ImageCarousel />

                {/* Sección de Servicios */}
                <section id="servicios" className="py-16 sm:py-24 bg-white" aria-labelledby="servicios-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 id="servicios-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Nuestros Servicios de Alineación y Balanceo</h2>
                            <p className="mt-4 text-lg text-gray-600">Soluciones integrales para tu auto en Montevideo. Taller especializado con equipamiento de última generación.</p>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {services.map((service) => (
                                <ServiceCard
                                    key={service.id}
                                    title={service.title}
                                    description={service.description}
                                    onClick={() => openModal(service)}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sección de Cursos */}
                <section id="cursos" className="py-16 sm:py-24 bg-gray-50" aria-labelledby="cursos-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 id="cursos-heading" className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Curso de Alineación y Capacitación Profesional</h2>
                            <p className="mt-4 text-lg text-gray-600">Formación profesional en alineación y balanceo vehicular en Montevideo. Aprende técnicas de alineación computarizada con equipamiento de última generación.</p>
                        </div>

                        <div className="space-y-6 mb-12">
                            <article itemScope itemType="https://schema.org/Course">
                                <CourseCard
                                    icon={<WrenchScrewdriverIcon className="h-6 w-6" />}
                                    title="Curso de Alineación"
                                    description="Aprende los fundamentos de la alineación vehicular, conceptos de geometría de dirección, ángulos, diagnóstico y resolución de problemas."
                                    duration="30 horas"
                                // level="Todos los niveles"
                                />
                            </article>
                        </div>

                        {/* Información adicional de cursos */}
                        <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-taller-blue">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Cómo funcionan nuestros cursos?</h3>
                                    <ul className="space-y-3 text-gray-600">
                                        <li className="flex items-start">
                                            <span className="text-taller-red mr-2">✓</span>
                                            <span><strong>Clases teóricas y prácticas:</strong> Combinamos teoría con experiencia y práctica en nuestro taller</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-taller-red mr-2">✓</span>
                                            <span><strong>Certificación:</strong> Recibe un certificado de nuestra empresa al completar el curso</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-taller-red mr-2">✓</span>
                                            <span><strong>Material incluido:</strong> Material en formato físico</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Requisitos y Horarios</h3>
                                    <div className="space-y-4 text-gray-600">
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Requisitos:</h4>
                                            <p>• Mayor de 18 años</p>
                                            <p>• Conocimientos básicos de mecánica (recomendado)</p>
                                            <p>• Ganas de aprender</p>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">Horarios disponibles:</h4>
                                            <p>• Turno mañana: 9:00 - 13:00</p>
                                            <p>• Turno tarde: 14:00 - 17:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Button at the bottom */}
                            <div className="flex justify-start pt-6 border-t border-gray-200 mt-6">
                                <a
                                    href="https://wa.me/+59899743492"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center bg-taller-blue text-white font-bold py-2.5 px-5 rounded-lg hover:bg-blue-800 transition-colors"
                                >
                                    Consultar Inscripciones
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sección "Por qué elegirnos" */}
                <section id="nosotros" className="py-16 sm:py-24 bg-white" aria-labelledby="nosotros-heading">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                        {/* Contenido Superior: Imagen + Texto */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                            {/* Columna de Imagen */}
                            <div>
                                <img
                                    className="w-full h-auto rounded-lg shadow-xl"
                                    src="/images/shop/shop-background.jpg"
                                    alt="Taller de alineación y balanceo Portela Alineaciones"
                                    loading="lazy"
                                />
                            </div>

                            {/* Columna de Texto */}
                            <div>
                                <h2 id="nosotros-heading" className="text-3xl font-extrabold text-taller-blue sm:text-4xl">
                                    ¿Por Qué Confiar en Nuestro Taller de Alineación?
                                </h2>
                                <p className="mt-4 text-lg text-gray-700">
                                    Con una trayectoria de más de 25 años en el rubro automotor, instalados en un moderno local en una zona estratégica en el Centro de Montevideo, <strong>Portela Alineaciones</strong> brinda un servicio de excelente calidad en <strong>alineación y balanceo</strong>, rápido y personalizado.
                                </p>
                                <p className="mt-2 text-lg text-gray-700">
                                    Contamos con <strong>equipamiento Ravaglioli</strong> de última tecnología, y ofrecemos productos de primera línea, que garantizan el óptimo funcionamiento de su vehículo.
                                </p>
                                <p className="mt-2 text-lg text-gray-700">
                                    Servicios para empresas, atención de flotas y formación de personal. Especialistas en alineación computarizada y balanceo de ruedas en Montevideo.
                                </p>
                            </div>
                        </div>

                        {/* Contenido Inferior: Features + Video (Beneficios Clave) */}
                        <div className="mt-12 sm:mt-16">
                            <div className="relative bg-gray-50 rounded-lg shadow-lg p-6 md:p-8">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                                    {/* Left Feature - Order 2 on mobile */}
                                    <div className="order-2 md:order-1">
                                        <FeatureLight
                                            icon={<AcademicCapIcon className="h-6 w-6" />}
                                            title="Técnicos Certificados"
                                            description="Nuestro equipo está altamente capacitado y en constante formación para atender las últimas tecnologías."
                                        />
                                    </div>

                                    {/* Center Video Button - Order 1 on mobile (appears first) */}
                                    <div className="order-1 md:order-2">
                                        <div className="text-center h-full flex flex-col justify-center">
                                            <div className="inline-flex p-2 bg-taller-blue rounded-full text-white mx-auto ring-4 ring-taller-red ring-offset-2">
                                                <MegaphoneIcon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <h3 className="mt-3 text-lg font-bold text-gray-900">
                                                Compromiso con la Innovación
                                            </h3>
                                            <p className="mt-2 text-sm text-gray-700">
                                                Nuestro compromiso con la innovación nos llevó a ser sede de la presentación nacional de la herramienta Gaho, junto al Centro de Talleres Mecánicos (CTMA).
                                            </p>
                                            <div className="mt-4">
                                                <button
                                                    type="button"
                                                    onClick={openVideoModal}
                                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-taller-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taller-blue transition-transform transform hover:scale-105"
                                                >
                                                    <PlayCircleIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                                                    Ver video
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Feature - Order 3 on mobile */}
                                    <div className="order-3">
                                        <FeatureLight
                                            icon={<WrenchScrewdriverIcon className="h-6 w-6" />}
                                            title="Tecnología de Punta"
                                            description="Utilizamos equipos de alineación y balanceo de última generación para diagnósticos y ajustes precisos."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />

            {/* WhatsApp Floating Button */}
            <WhatsAppButton />
        </div>
    );
}