import Image from "next/image";

export default function Page() {
  return (
    <main className="hero">
      <div className="brand">
        {/* LOGO – išdidintas iki --brand-w */}
        <Image
          src="/logo.png"
          alt="AIMILION"
          width={520}   // tik „intrinsic“ – realus plotis valdomas per CSS
          height={180}  // proporcijai; keisk jei tavo logo kitokio santykio
          priority
        />

        {/* ŠŪKIS – tokio pat pločio kaip logo */}
        <p className="tagline">GOING WITH LIONS</p>
      </div>
    </main>
  );
}
