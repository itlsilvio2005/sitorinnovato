import { MessageCircle, Phone } from 'lucide-react';
import Chatbot from './Chatbot';

export default function FloatingButtons() {
  return (
    <>
      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/393387277095"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-40 right-4 z-40 md:bottom-6 md:right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-105"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

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
