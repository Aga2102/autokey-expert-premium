import Link from "next/link";

export default async function BrandPage({ params }: { params: Promise<{ brand: string }> }) {
  const { brand } = await params;
  const name = brand === "vw" ? "Volkswagen" : brand.charAt(0).toUpperCase() + brand.slice(1);
  return <main className="brand-page"><Link href="/">← Wróć do strony głównej</Link><p className="eyebrow red">OBSŁUGIWANA MARKA</p><h1>Klucze samochodowe <em>{name}</em></h1><p>Ta podstrona jest przygotowana pod ofertę, cennik i treści SEO dla marki {name}.</p><Link className="button button-red" href="/#kontakt">Poproś o wycenę →</Link></main>;
}
