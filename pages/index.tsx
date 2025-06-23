import Head from 'next/head';
import { useState, useMemo } from 'react';
import { emotes } from '../emotes';
import { EmoteCard } from '@/components/EmoteCard';
import { Modal } from '@/components/Modal';
import { InfoModal } from '@/components/InfoModal';
import { DisclaimerCard } from '@/components/DisclaimerCard';
import Fuse from 'fuse.js';

export default function Home() {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const [query, setQuery] = useState('');

  // Configurar búsqueda difusa
  const fuse = useMemo(() => {
    return new Fuse(emotes, {
      keys: ['name'],
      threshold: 0.4,
    });
  }, []);

  const results = query.trim()
    ? fuse.search(query).map((r) => r.item)
    : emotes;

  return (
    <>
      <Head>
        <title>Click to Copy Discord Emojis</title>
      </Head>
      <main className="min-h-screen bg-gray-950 text-white px-4 py-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4 text-center"><svg className="inline -translate-y-[10%]" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.59 34.173A49 49 0 0 1 14.68 38C7.3 37.79 4.5 33 4.5 33a44.8 44.8 0 0 1 4.81-19.52A16.47 16.47 0 0 1 18.69 10l1 2.31A33 33 0 0 1 24 12a33 33 0 0 1 4.33.3l1-2.31a16.47 16.47 0 0 1 9.38 3.51A44.8 44.8 0 0 1 43.5 33s-2.8 4.79-10.18 5a47 47 0 0 1-2.86-3.81m6.46-2.9c-3.84 1.945-7.555 3.89-12.92 3.89s-9.08-1.945-12.92-3.89" stroke-width="1" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.497 26.23a3.35 3.35 0 1 1 6.7 0m5.606 0a3.35 3.35 0 1 1 6.7 0" stroke-width="1" /></svg> Click to Copy Discord Emojis</h1>
          <DisclaimerCard />
          <div className="flex justify-center mb-6">
            <button
              onClick={() => setShowInfo(true)}
              className="px-4 py-2 bg-gray-800 border border-gray-600 rounded-md text-sm hover:bg-gray-700 transition"
            >
              ℹ️ Instrucciones / Cómo aportar
            </button>
          </div>

          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar emote..."
            className="w-full mb-6 px-4 py-2 rounded-md bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-3">
            {results.map((emote) => (
              <EmoteCard
                key={emote.filename}
                name={emote.name}
                filename={emote.filename}
                preview={emote.preview}
                onRightClick={(src) => setModalImage(src)}
              />
            ))}
          </div>

          {modalImage && (
            <Modal imageSrc={modalImage} onClose={() => setModalImage(null)} />
          )}
          {showInfo && <InfoModal onClose={() => setShowInfo(false)} />}
        </div>
      </main>
    </>
  );
}
