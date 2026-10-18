import { Phone } from 'lucide-react';
import Chatbot from './Chatbot';

export default function FloatingButtons() {
  return (
    <>
      {/* Chatbot */}
      <Chatbot />

      {/* Sticky call bar - mobile only */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-tortora-700 text-white shadow-lg">
        <a
          href="tel:+39059260667"
          className="flex items-center justify-center gap-2 py-4 font-semibold text-[15px]"
        >
          <Phone className="w-5 h-5" />
          CHIAMA ORA — 059 260667
        </a>
      </div>
    </>
  );
}
