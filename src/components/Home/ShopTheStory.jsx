"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import "./ShopTheStory.css";

const trimmerImg = "/assets/products/trimmer-hero.png";
const kitchenImg = "/assets/products/dish-rack.jpg";
const storageImg = "/assets/products/fabric-wardrobe.jpg";

const STORIES = [
  {
    title: "The Trimmer, Up Close",
    duration: "0:06",
    image: trimmerImg,
    video: "/assets/videos/trimmer-story.mp4",
  },
  {
    title: "Kitchen Setup Tour",
    duration: "0:06",
    image: kitchenImg,
    video: "/assets/videos/kitchen-story.mp4",
  },
  {
    title: "5 Home Organization Tips",
    duration: "0:06",
    image: storageImg,
    video: "/assets/videos/storage-story.mp4",
  },
];

function StoryCard({ story, index }) {
  const { ref: revealRef, className, style } = useReveal({ delay: index * 100 });
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    const card = cardRef.current;
    if (!video || !card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().then(() => setIsPlaying(true)).catch(() => {});
        } else {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.55 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  function setRefs(node) {
    cardRef.current = node;
    revealRef.current = node;
  }

  return (
    <div ref={setRefs} className={`shop-story__card ${className}`} style={style}>
      <video
        ref={videoRef}
        className="shop-story__video"
        src={story.video}
        poster={story.image}
        muted={muted}
        loop
        playsInline
        preload="metadata"
      />
      <span className={`shop-story__status ${isPlaying ? "is-live" : ""}`}>
        <i />
        {isPlaying ? "Playing" : story.duration}
      </span>
      <button
        type="button"
        className="shop-story__mute"
        onClick={() => setMuted((m) => !m)}
        aria-label={muted ? "Unmute video" : "Mute video"}
      >
        {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>
      <span className="shop-story__title">{story.title}</span>
    </div>
  );
}

export default function ShopTheStory() {
  return (
    <section className="section shop-story">
      <div className="container">
        <span className="eyebrow-badge eyebrow-badge--center">Watch &amp; Learn</span>
        <h2 className="section-heading">Shop The Story</h2>
        <p className="section-subheading">See our latest gadgets and home essentials in action.</p>
        <div className="shop-story__grid">
          {STORIES.map((story, index) => (
            <StoryCard story={story} index={index} key={story.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
