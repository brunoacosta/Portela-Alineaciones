// src/components/ServiceModal.jsx
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function ServiceModal({ isOpen, closeModal, service }) {
    if (!service) return null;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-900/20 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                                >
                                    <XMarkIcon className="h-6 w-6 text-gray-600" />
                                </button>

                                <div className="grid md:grid-cols-2 gap-0">
                                    {/* Left Side - Image */}
                                    <div className="relative h-64 md:h-auto">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                                    </div>

                                    {/* Right Side - Content */}
                                    <div className="p-8">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-taller-blue pb-3"
                                        >
                                            {service.title}
                                        </Dialog.Title>

                                        <div className="mt-4 space-y-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                {service.fullDescription}
                                            </p>

                                            {service.features && (
                                                <div className="mt-6">
                                                    <h4 className="font-semibold text-gray-900 mb-3">Incluye:</h4>
                                                    <ul className="space-y-2">
                                                        {service.features.map((feature, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <span className="text-taller-red mr-2 flex-shrink-0">✓</span>
                                                                <span className="text-gray-600">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {service.benefits && (
                                                <div className="mt-6">
                                                    <h4 className="font-semibold text-gray-900 mb-3">Beneficios:</h4>
                                                    <ul className="space-y-2">
                                                        {service.benefits.map((benefit, index) => (
                                                            <li key={index} className="flex items-start">
                                                                <span className="text-taller-blue mr-2 flex-shrink-0">●</span>
                                                                <span className="text-gray-600">{benefit}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}

