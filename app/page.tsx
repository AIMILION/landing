/* Palik savo turimus resetus/šriftus – žemiau tik būtini pakeitimai */

html, body {
  height: 100%;
}

body {
  margin: 0;
  background: #1c1c1c;          /* tamsiai pilkas fonas */
  color: #e8e8e8;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Hero centras */
.hero {
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

/* „Brand“ blokas, nustatome vienodą pločio kintamąjį */
.brand {
  /* ČIA KEITI norimą logo/sukio bendrą plotį
     (mažesniuose ekranuose – sklandžiai mažėja) */
  --brand-w: clamp(260px, 32vw, 520px);

  width: var(--brand-w);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

/* Logo pritaikymas prie pločio */
.brand img {
  width: 100%;
  height: auto;
  display: block;
}

/* Šūkis – lygiai tokio pat pločio kaip logo */
.tagline {
  width: var(--brand-w);
  margin: 0;
  text-align: center;
  font-weight: 700;
  letter-spacing: 0.06em;
  line-height: 1.2;
  font-size: clamp(18px, 2.2vw, 28px);
}
