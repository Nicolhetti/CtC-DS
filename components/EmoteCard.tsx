'use client';

import { useState } from 'react';
import { copyToClipboard } from '@/utils/copyToClipboard';

interface EmoteCardProps {
    name: string;
    filename: string;
    preview?: string;
    onRightClick: (src: string) => void;
}

export function EmoteCard({ name, filename, preview, onRightClick }: EmoteCardProps) {
    const [copied, setCopied] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const ext = filename.split('.').pop()?.toLowerCase();
    const isGif = ext === 'gif';

    const staticPreview = isGif && preview ? `/emotes-previews/${preview}` : `/emotes/${filename}`;

    const displayedSrc = isGif
        ? isHovered
            ? `/emotes/${filename}`
            : staticPreview
        : `/emotes/${filename}`;

    const handleClick = () => {
        const emoteUrl = `[.](${location.origin}/api/emote?filename=${filename}&size=48)`;
        const success = copyToClipboard(emoteUrl);
        if (success) {
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        }
    };

    const handleContextMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        onRightClick(displayedSrc);
    };

    return (
        <div
            className="relative cursor-pointer p-2 bg-gray-900 border border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-all duration-150"
            onClick={handleClick}
            onContextMenu={handleContextMenu}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={displayedSrc}
                alt={name}
                className="w-12 h-12 object-contain mx-auto"
                loading="lazy"
                draggable={false}
            />
            {isGif && (
                <span className="absolute top-1 right-1 bg-red-600 text-white text-[9px] font-bold px-1 rounded select-none">
                    GIF
                </span>
            )}
            {copied && (
                <span className="absolute top-1 left-1 text-[10px] bg-black/80 text-white px-1.5 py-0.5 rounded-md select-none">
                    Copiado!
                </span>
            )}
        </div>
    );
}
