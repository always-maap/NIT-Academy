import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

export default function Nav() {
  return (
    <nav className="bg-black" dir="rtl">
      <Container>
        <ul className="flex items-center py-3 text-gray-200 gap-2">
          <Link href="/">
            <Image width={30} height={37.5} src="/logo.png" alt="logo" />
          </Link>
        </ul>
      </Container>
    </nav>
  );
}
