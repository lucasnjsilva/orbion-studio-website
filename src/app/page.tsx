import Link from "next/link";
import React from "react";
import { PhoneCall, Calendar } from "lucide-react";

import { inter, righteous } from "@/utils/fonts";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <BackgroundBeams />

      <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-white">
        <div className="w-1/3 space-y-8 relative z-10">
          <div className="space-y-2">
            <h1 className={`text-3xl ${righteous.className}`}>orbion studio</h1>
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>

          <div className="space-y-8">
            <h4 className={`text-6xl font-black ${inter.className}`}>
              A simplicidade é o último grau de sofisticação.
            </h4>
            <p className={`float-end ${inter.className} mr-28`}>Leonardo da Vinci</p>
          </div>

          <div className="space-x-4 pt-8 relative z-10">
            <Link href="https://api.whatsapp.com/send?phone=5587991985000&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20oferecidos%20por%20voc%C3%AAs.%20Poderiam%20me%20ajudar?" target="_blank" >
              <Button type="button" variant="secondary">
                <PhoneCall />
                Entrar em Contato
              </Button>
            </Link>

            <Link href="https://calendly.com/lucasnjsilva/reuniao-de-descoberta/" target="_blank" >
              <Button type="button" variant="ghost" className="border">
                <Calendar />
                Agendar Contato
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
