import React from 'react';
import Image from 'next/image';

export const ProvidedBanner: React.FC = () => {
  return (
    <section
      aria-label="Comprehensive Agency Solutions Banner"
      className="w-full py-8 bg-[#F8F6EB]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <a
            href="https://www.digitaldictionarysiliguri.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full max-w-4xl transition-transform duration-300 hover:scale-[1.01] focus:outline-none cursor-pointer"
            title="Visit Digital Dictionary Siliguri - www.digitaldictionarysiliguri.com"
            aria-label="Visit Digital Dictionary Siliguri - www.digitaldictionarysiliguri.com"
          >
            <div className="relative w-full aspect-[1000/290] sm:aspect-[1200/340] banner-blink">
              <Image
                src="/banner/digital-dictionary-banner.png"
                alt="Comprehensive Agency Solutions - Digital Dictionary Siliguri - www.digitaldictionarysiliguri.com"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                className="object-contain"
                priority={false}
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
