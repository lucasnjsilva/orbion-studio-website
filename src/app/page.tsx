import Link from "next/link";
import React from "react";
import { PhoneCall, Calendar } from "lucide-react";

import { inter, righteous } from "@/utils/fonts";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

export default function Home() {
  const whatsappNumber = "5587991985000";
  const whatsappMessage = "Olá, gostaria de saber mais sobre os serviços oferecidos por vocês.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-white">
      <div className="px-12 space-y-6 md:px-32 lg:space-y-8 max-w-6xl relative z-10">
        <div className="space-y-2">
          <h1 className={`text-md md:text-2xl lg:text-3xl ${righteous.className}`}>orbion studio</h1>
          <div className="w-10 h-1 md:w-12 lg:w-16 bg-white rounded-full"></div>
        </div>

        <h4 className={`text-3xl md:text-4xl lg:text-6xl font-black ${inter.className}`}>
          Desenvolvimento de Software e Web Design.
        </h4>

        <div className="relative z-10 flex flex-col space-y-4 2xs:flex-row 2xs:space-y-0 2xs:space-x-4">
          <Link href={whatsappLink} target="_blank">
            <Button type="button" variant="secondary">
              <PhoneCall />
              Entrar em Contato
            </Button>
          </Link>

          <Link href="https://calendly.com/lucasnjsilva/reuniao-de-descoberta/" target="_blank" >
            <Button type="button" variant="ghost" className="border border-zinc-300 text-zinc-300">
              <Calendar />
              Agendar Contato
            </Button>
          </Link>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  );
}
