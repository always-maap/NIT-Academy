import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Nav() {
  return (
    <nav className="bg-black" dir="rtl">
      <Container>
        <ul className="flex justify-center items-center py-3 text-gray-200 gap-2">
          <Link href="/">
            <Image
              width={40}
              height={50}
              src="https://nitacademy.ir/logo.png"
              alt="logo"
              unoptimized
            />
          </Link>
        </ul>
      </Container>
    </nav>
  );
}
