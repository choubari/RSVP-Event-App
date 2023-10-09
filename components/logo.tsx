import Link from "next/link";
import { Dela_Gothic_One } from "next/font/google";

const gothic = Dela_Gothic_One({ weight: "400", subsets: ["latin"] });

export default function Logo() {
  return (
    <Link href={"/"}>
      <div
        className={`${gothic.className} text-2xl text-blue-600 font-bold font-serif`}
      >
        RSVP
      </div>
    </Link>
  );
}
