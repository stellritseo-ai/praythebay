import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/seo";
import { ShiningOneHeroSection } from "@/components/sections/the-shining-one/ShiningOneHeroSection";
import { ShiningOneLinksSection } from "@/components/sections/the-shining-one/ShiningOneLinksSection";

export const Route = createFileRoute("/the-shining-one")({
  head: () =>
    pageHead({
      title: "The Shining One — Praying with the Prayer Leader of Heaven | Pray The Bay",
      description: "The Shining One: our mustard seed of faith for awakening. Find the book, upcoming gatherings, FAQ and the gathering interest form.",
      path: "/the-shining-one",
    }),
  component: Shining,
});

function Shining() {
  return (
    <>
      <ShiningOneHeroSection />
      <ShiningOneLinksSection />
    </>
  );
}
