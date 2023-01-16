import { A } from "@solidjs/router";
import Container from "./Container";

export default function Nav() {
  return (
    <nav class="bg-sky-800" dir="rtl">
      <Container>
        <ul class="flex items-center py-3 text-gray-200 gap-2">
          <A href="/">
            <img width={30} src="/logo.png" />
            <span>آکادمی کامپیوتر نوشیروانی</span>
          </A>
        </ul>
      </Container>
    </nav>
  );
}
