import { Roboto_Mono } from "next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={`${roboto_mono.className} bg-blue-950 text-white p-10 max-w-2xl mx-auto min-h-screen`}
    >
      {children}
    </section>
  );
}
