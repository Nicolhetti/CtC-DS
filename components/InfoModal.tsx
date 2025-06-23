'use client';

interface InfoModalProps {
    onClose: () => void;
}

export function InfoModal({ onClose }: InfoModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-gray-900 text-white max-w-lg w-full mx-4 p-6 rounded-xl border border-gray-700 shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold mb-4">ℹ️ Información</h2>
                <ul className="list-disc pl-5 text-sm space-y-2">
                    <li><b>Click izquierdo</b>: Copia la URL del emote al portapapeles.</li>
                    <li><b>Click derecho</b>: Abre una vista ampliada del emote.</li>
                    <li><b>Búsqueda</b>: Usa el buscador para filtrar emotes por nombre.</li>
                    <li><b>Contribuciones</b>: Puedes aportar nuevos emotes haciendo un Pull Request al repositorio en GitHub.</li>
                    <li><b>Formato soportado</b>: .gif, .png, .webp, .jpg</li>
                </ul>

                <div className="mt-6 text-center">
                    <a
                        href="https://github.com/Nicolhetti/CtC-DS"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-blue-400 hover:underline"
                    >
                        🌟 Ir al repositorio en GitHub
                    </a>
                </div>

                <button
                    onClick={onClose}
                    className="mt-6 w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white font-semibold transition"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
}
