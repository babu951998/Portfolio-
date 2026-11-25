import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        id="main-content"
        className="mx-auto flex w-full max-w-[70rem] flex-1 flex-col justify-center px-5 py-24 sm:px-8"
      >
        <p className="font-mono text-xs tracking-wider text-accent uppercase">
          404 / Not Found
        </p>
        <h1 className="mt-3 font-serif text-4xl font-normal tracking-tight text-ink sm:text-5xl">
          This route does not exist.
        </h1>
        <p className="mt-4 max-w-[50ch] text-base text-ink-secondary">
          The page you requested may have moved or been removed.
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex border border-ink px-5 py-2.5 font-mono text-xs tracking-wide text-ink uppercase transition-colors hover:bg-ink hover:text-bg"
          >
            Return home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
