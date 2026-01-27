import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "26657810905"; // Format: CountryCodePhoneNumber (no + or spaces)
  const message = encodeURIComponent("Hello Cograbig Institute! I would like to inquire about the upcoming intake.");
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 hover:rotate-6 transition-all group"
      aria-label="Chat on WhatsApp"
    >
      {/* Tooltip that appears on hover */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-black uppercase px-3 py-1 rounded-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with Admissions
      </span>
      
      <MessageCircle size={28} fill="currentColor" />
      
      {/* Ping animation to draw attention */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
    </a>
  );
}