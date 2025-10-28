// src/components/VideoModal.jsx
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function VideoModal({ isOpen, closeModal, videoUrl }) {
    // Extract video embed URL from YouTube or Google Drive URL
    const getVideoEmbedUrl = (url) => {
        if (!url) return '';

        // Handle Google Drive URLs
        if (url.includes('drive.google.com')) {
            // Format: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
            // Convert to: https://drive.google.com/file/d/FILE_ID/preview
            let fileId = '';
            if (url.includes('/file/d/')) {
                fileId = url.split('/file/d/')[1].split('/')[0];
                return `https://drive.google.com/file/d/${fileId}/preview`;
            }
            return url;
        }

        // Handle different YouTube URL formats
        let videoId = '';

        // Format: https://www.youtube.com/watch?v=VIDEO_ID
        if (url.includes('watch?v=')) {
            videoId = url.split('watch?v=')[1].split('&')[0];
        }
        // Format: https://youtu.be/VIDEO_ID
        else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        }
        // Format: https://www.youtube.com/embed/VIDEO_ID
        else if (url.includes('embed/')) {
            videoId = url.split('embed/')[1].split('?')[0];
        }
        // If it's just the video ID
        else if (!url.includes('/')) {
            videoId = url;
        }

        return `https://www.youtube.com/embed/${videoId}`;
    };

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
                            <Dialog.Panel className="w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                                {/* Close Button */}
                                <button
                                    onClick={closeModal}
                                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-colors"
                                >
                                    <XMarkIcon className="h-6 w-6 text-gray-600" />
                                </button>

                                <div className="grid md:grid-cols-3 gap-0">
                                    {/* Left Side - Text Content (1/3) */}
                                    <div className="md:col-span-1 p-8 flex flex-col justify-center">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl font-bold text-gray-900 mb-4 border-b-4 border-taller-red pb-3"
                                        >
                                            Presentación de Herramienta Gaho
                                        </Dialog.Title>

                                        <div className="mt-4 space-y-4">
                                            <p className="text-gray-600 leading-relaxed">
                                                Nuestro taller fue sede de la presentación nacional de Gaho, innovadora herramienta de corrección de caída.
                                            </p>
                                            <p className="text-gray-600 leading-relaxed">
                                                Contamos con la presencia del dueño e ingeniero de la empresa, quienes hicieron una demostración de la herramienta en nuestro taller.
                                            </p>

                                            <p className="text-gray-600 leading-relaxed">
                                                Entre los asistentes a la demostración se encontraban representantes del Centro de Talleres Mecánicos (CTMA), así como profesores y estudiantes del INET, quienes participaron activamente de la jornada y conocieron de primera mano las ventajas de esta nueva herramienta.
                                            </p>

                                            {/* <div className="mt-6">
                                                <h4 className="font-semibold text-gray-900 mb-3">En este video verás:</h4>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start">
                                                        <span className="text-taller-red mr-2 flex-shrink-0">✓</span>
                                                        <span className="text-gray-600">Nuestro taller fue sede de la presentación nacional de Gaho, innovadora herramienta de corrección de caída desarrollada por sus propios creadores.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-taller-red mr-2 flex-shrink-0">✓</span>
                                                        <span className="text-gray-600">Contamos con la presencia de los dueños de la empresa, quienes compartieron su experiencia y demostraron las capacidades de esta tecnología aplicada al trabajo diario.</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-taller-red mr-2 flex-shrink-0">✓</span>
                                                        <span className="text-gray-600">Testimonios de estudiantes</span>
                                                    </li>
                                                    <li className="flex items-start">
                                                        <span className="text-taller-red mr-2 flex-shrink-0">✓</span>
                                                        <span className="text-gray-600">Certificación que recibirás</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-taller-blue">
                                                <p className="text-sm text-gray-700">
                                                    <strong>Duración del curso:</strong> 30 horas<br />
                                                    <strong>Modalidad:</strong> Teórico-práctica
                                                </p>
                                            </div> */}
                                        </div>
                                    </div>

                                    {/* Right Side - Video (2/3) */}
                                    <div className="md:col-span-2 relative bg-gray-900 flex items-center justify-center min-h-[400px] md:min-h-[600px]">
                                        <div className="relative w-full h-full">
                                            <iframe
                                                className="w-full h-full"
                                                src={getVideoEmbedUrl(videoUrl)}
                                                title="Video player"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
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

