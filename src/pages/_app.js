import { AnimatePresence } from "framer";
import Link from "next/link";

export default function App({ Component, pageProps, router }) {
  return (
    <main>
      <AnimatePresence mode="wait">
        <Component key={router.route} {...pageProps} />
      </AnimatePresence>
    </main>
  );
}
