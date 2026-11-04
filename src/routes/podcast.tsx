import { createFileRoute } from "@tanstack/react-router";
import { img, photos } from "@/content/site";
import { pageHead } from "@/lib/seo";
import { PodcastHeroSection } from "@/components/sections/podcast/PodcastHeroSection";
import { PodcastEpisodesSection } from "@/components/sections/podcast/PodcastEpisodesSection";
import { PodcastResourcesCtaSection } from "@/components/sections/podcast/PodcastResourcesCtaSection";

export const Route = createFileRoute("/podcast")({
  head: () =>
    pageHead({
      title: "Pray The Bay Podcast — Grow in Your Prayer Life",
      description: "Listen and watch the Pray The Bay Podcast on Spotify, Apple Podcasts and YouTube. Conversations to help you grow in prayer.",
      path: "/podcast",
      image: img(photos.podcast),
    }),
  component: Podcast,
});

function Podcast() {
  return (
    <>
      <PodcastHeroSection />
      <PodcastEpisodesSection />
      <PodcastResourcesCtaSection />
    </>
  );
}
