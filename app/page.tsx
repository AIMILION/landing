// app/page.tsx (arba ten, kur naudoji)
// Jei šiame faile NENAUDOJI "use client", tai – serverinis komponentas ir new Date() ok.
import Image from "next/image";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="flex flex-col min-h-screen bg-black text-white">
      {/* Header su logotipu ir pavadinimu */}
      <header className="p-6">
        <div className="flex flex-col items-start">
          {/* Logotipas (optimizuotas) */}
          <Image
            src="/logo.png"
            alt="AIMILION Logo"
            width={160}
            height={40}
            className="h-10 w-auto mb-2"
            priority
          />

          {/* Pavadinimas + šūkis */}
          <h1 className="text-xl font-bold tracking-widest">AIMILION</h1>
          <p className="text-sm text-gray-400">GOING WITH LIONS</p>
        </div>
      </header>

      {/* Centrinis laukimo užrašas */}
      <section className="flex flex-grow items-center justify-center px-6 text-center">
        <h2 className="text-2xl md:text-4xl font-light">
          Something powerful is coming…
        </h2>
      </section>

      {/* Footer su linkais kairėje */}
      <footer className="p-6">
        <div className="flex flex-col space-y-2 text-sm text-gray-400">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Open AIMILION on Facebook"
          >
            Facebook
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
            aria-label="Open AIMILION on LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="mailto:info@aimilion.com"
            className="hover:text-white"
            aria-label="Send email to info@aimilion.com"
          >
            Email
          </a>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          © {year} AIMILION. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
