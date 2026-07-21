export default function T({ en, am }: { en: string; am: string }) {
  return (
    <>
      <span className="lang-en">{en}</span>
      <span className="lang-am">{am}</span>
    </>
  );
}