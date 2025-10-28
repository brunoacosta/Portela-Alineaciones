// src/components/Footer.jsx
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/solid';

export default function Footer() {
    return (
        <footer className="bg-taller-blue text-white border-t-4 border-taller-red" id="contacto" itemScope itemType="https://schema.org/AutomotiveBusiness">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Columna 1: Logo y descripción */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold border-b-2 border-taller-red pb-2 inline-block" itemProp="name">Portela Alineaciones</h2>
                        <p className="text-gray-300" itemProp="description">
                            Expertos en alineación, balanceo y mantenimiento vehicular. Tu seguridad es nuestra prioridad.
                        </p>
                    </div>

                    {/* Columna 2: Datos de Contacto */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold tracking-wider uppercase border-b-2 border-taller-red pb-2">Contacto</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                <MapPinIcon className="h-6 w-6 mr-3 flex-shrink-0 text-taller-red" aria-hidden="true" />
                                <a
                                    href="https://www.google.com/maps/place/Portela+Alineaciones/@-34.9101705,-56.1952222,17z/data=!3m1!4b1!4m6!3m5!1s0x959f81d3b2f86e85:0xe17bf667bf2cf2cd!8m2!3d-34.9101705!4d-56.1952222"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-taller-red transition-colors hover:underline"
                                    aria-label="Ver ubicación en Google Maps"
                                >
                                    <span itemProp="streetAddress">Wilson Ferreira Aldunate 1144</span>, <span itemProp="addressLocality">Montevideo</span>, <span itemProp="addressCountry">Uruguay</span>
                                </a>
                            </li>
                            <li className="flex items-center">
                                <PhoneIcon className="h-5 w-5 mr-3 text-taller-red" aria-hidden="true" />
                                <a href="tel:29032424" className="hover:text-taller-red transition-colors" itemProp="telephone">29032424</a>
                            </li>
                            <li className="flex items-center">
                                <DevicePhoneMobileIcon className="h-5 w-5 mr-3 text-taller-red" aria-hidden="true" />
                                <a href="tel:+59899743492" className="hover:text-taller-red transition-colors" itemProp="telephone">099743492</a>
                            </li>
                            <li className="flex items-center">
                                <EnvelopeIcon className="h-5 w-5 mr-3 text-taller-red" aria-hidden="true" />
                                <a href="mailto:alineacionesportela@gmail.com" className="hover:text-taller-red transition-colors" itemProp="email">alineacionesportela@gmail.com</a>
                            </li>
                            <li className="flex items-center" itemProp="openingHours" content="Mo-Fr 09:00-17:00">
                                <ClockIcon className="h-5 w-5 mr-3 text-taller-red" aria-hidden="true" />
                                <span>Lunes a Viernes: 9:00 - 13:00 y 14:00 - 17:00</span>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Mapa */}
                    <div>
                        <h3 className="text-lg font-semibold tracking-wider uppercase border-b-2 border-taller-red pb-2">Ubicación</h3>
                        <div className="mt-4 rounded-lg overflow-hidden border-2 border-taller-red">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.3235232823977!2d-56.19522222308821!3d-34.91017047079435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959f81d3b2f86e85%3A0xe17bf667bf2cf2cd!2sPortela%20Alineaciones!5e0!3m2!1sen!2suy!4v1760307678032!5m2!1sen!2suy"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Ubicación de Portela Alineaciones"
                            ></iframe>
                        </div>
                        {/* <a
                            href="https://www.google.com/maps/place/Portela+Alineaciones/@-34.9101705,-56.1952222,17z/data=!3m1!4b1!4m6!3m5!1s0x959f81d3b2f86e85:0xe17bf667bf2cf2cd!8m2!3d-34.9101705!4d-56.1952222"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-3 text-sm text-white hover:text-taller-red transition-colors underline"
                        >
                            Ver en Google Maps →
                        </a> */}
                    </div>

                </div>
                <div className="mt-8 border-t border-blue-800 pt-8 text-center text-gray-300">
                    <p>&copy; {new Date().getFullYear()} Portela Alineaciones - Taller de Alineación y Balanceo en Montevideo. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}