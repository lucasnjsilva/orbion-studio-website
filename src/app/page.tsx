import { fonts } from "./layout";

export default function Home() { 
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900">
      <div className="w-1/3 space-y-8">
        <div className="space-y-2">
          <h1 className={`text-3xl ${fonts.righteous.className}`}>orbion</h1>
          <div className="w-16 h-1 bg-white rounded-full"></div>
        </div>

        <h4 className={`text-6xl font-black ${fonts.inter.className}`}>
          A simplicidade é o último grau de sofisticação.
        </h4>
        <p className={`float-end ${fonts.inter.className} italic`}>Leonardo da Vinci</p>
      </div>
    </div>
  );
}
