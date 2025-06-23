'use client';

interface ModalProps {
    imageSrc: string;
    onClose: () => void;
}

export function Modal({ imageSrc, onClose }: ModalProps) {
    return (
        <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={onClose}
        >
            <img
                src={imageSrc}
                alt="Emote ampliado"
                className="max-w-[90vw] max-h-[90vh] rounded"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}
