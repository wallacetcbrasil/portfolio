import Image from "next/image";
import Terminal from "@/components/Terminal";

export default function HomePage() {
  return (
    <main className="space-y-4">
      {/* header centralizado */}
      <header className="flex items-center justify-center gap-3 text-center">
        {/* FOTO (opcional): coloque um arquivo em /public/icons/perfil.jpg */}
        {/* Remova este bloco <Image> se não quiser foto */}
        <Image
          src="/icons/perfil.jpg"
          width={44}
          height={44}
          alt="Wallace Correia Brasil"
          className="rounded-full ring-1 ring-neutral-700"
        />
        <h1 className="text-2xl md:text-3xl font-semibold">
          Bem-vindo ao portfólio do Wallace Correia Brasil
        </h1>
      </header>

      <Terminal />
    </main>
  );
}
