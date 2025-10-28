// src/components/Header.jsx
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const NavLink = ({ href, children }) => (
    <a href={href} className="text-gray-700 hover:text-taller-blue px-3 py-2 rounded-md text-base font-medium transition-colors">
        {children}
    </a>
);

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#inicio" className="flex items-center" aria-label="Portela Alineaciones - Taller de Alineación y Balanceo">
                            <img
                                src="/images/logo/portela-logo.png"
                                alt="Logo Portela Alineaciones - Taller de Alineación y Balanceo Montevideo"
                                className="h-12 md:h-16 w-auto"
                            />
                        </a>
                    </div>

                    {/* Menú de Navegación - Escritorio */}
                    <nav className="hidden md:block" aria-label="Navegación principal">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <NavLink href="#inicio">Inicio</NavLink>
                            <NavLink href="#servicios">Servicios</NavLink>
                            <NavLink href="#cursos">Cursos</NavLink>
                            <NavLink href="#nosotros">Nosotros</NavLink>
                            <NavLink href="#contacto">Contacto</NavLink>
                        </div>
                    </nav>

                    {/* Botón CTA - Escritorio */}
                    <div className="hidden md:block">
                        <a
                            href="#contacto"
                            className="ml-4 inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-taller-blue hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taller-blue transition-transform transform hover:scale-105"
                        >
                            Agendar Cita
                        </a>
                    </div>

                    {/* Botón Menú - Móvil */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-taller-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-taller-blue"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Abrir menú principal</span>
                            {isOpen ? <XMarkIcon className="block h-6 w-6" /> : <Bars3Icon className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Menú Desplegable - Móvil */}
            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#inicio" className="text-gray-700 hover:text-taller-red block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
                        <a href="#servicios" className="text-gray-700 hover:text-taller-red block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
                        <a href="#cursos" className="text-gray-700 hover:text-taller-red block px-3 py-2 rounded-md text-base font-medium">Cursos</a>
                        <a href="#nosotros" className="text-gray-700 hover:text-taller-red block px-3 py-2 rounded-md text-base font-medium">Nosotros</a>
                        <a href="#contacto" className="text-gray-700 hover:text-taller-red block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <a
                            href="#contacto"
                            className="ml-4 inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-taller-blue hover:bg-blue-800"
                        >
                            Agendar Cita
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}