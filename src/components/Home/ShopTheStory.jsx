"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
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

function StoryCard({ story, index, isPlaying, onPlay }) {
  const { ref, className, style } = useReveal({ delay: index * 100 });
  const videoRef = useRef(null);

  return (
    <button
      ref={ref}
      type="button"
      className={`shop-story__card ${className} ${isPlaying ? "is-playing" : ""}`}
      style={style}
      onClick={() => {
        if (!isPlaying) onPlay(index);
      }}
      aria-label={isPlaying ? story.title : `Play video: ${story.title}`}
    >
      {isPlaying ? (
        <video
          ref={videoRef}
          className="shop-story__video"
          src={story.video}
          poster={story.image}
          autoPlay
          muted
          loop
          controls
          playsInline
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <>
          <img src={story.image} alt={story.title} />
          <span className="shop-story__play">
            <Play size={22} fill="#fff" />
          </span>
          <span className="shop-story__duration">{story.duration}</span>
          <span className="shop-story__title">{story.title}</span>
        </>
      )}
    </button>
  );
}

export default function ShopTheStory() {
  const [playingIndex, setPlayingIndex] = useState(null);

  return (
    <section className="section shop-story">
      <div className="container">
        <h2 className="section-heading">Shop The Story</h2>
        <p className="section-subheading">See our latest gadgets and home essentials in action.</p>
        <div className="shop-story__grid">
          {STORIES.map((story, index) => (
            <StoryCard
              story={story}
              index={index}
              key={story.title}
              isPlaying={playingIndex === index}
              onPlay={setPlayingIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
