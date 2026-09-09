import { Play } from "lucide-react";
import "./ShopTheStory.css";

const doorbellImg = "/assets/products/doorbell.png";
const riceDispenserImg = "/assets/products/rice-dispenser.jpeg";
const bathroomImg = "/assets/products/bathroom-organizer.jpeg";

const STORIES = [
  { title: "How the Smart Doorbell Works", duration: "1:16", image: doorbellImg },
  { title: "Kitchen Setup Tour", duration: "2:47", image: riceDispenserImg },
  { title: "5 Home Organization Tips", duration: "3:30", image: bathroomImg },
];

export default function ShopTheStory() {
  return (
    <section className="section shop-story">
      <div className="container">
        <h2 className="section-heading">Shop The Story</h2>
        <p className="section-subheading">See our latest gadgets and home essentials in action.</p>
        <div className="shop-story__grid">
          {STORIES.map((story) => (
            <button type="button" className="shop-story__card" key={story.title}>
              <img src={story.image} alt={story.title} />
              <span className="shop-story__play">
                <Play size={22} fill="#fff" />
              </span>
              <span className="shop-story__duration">{story.duration}</span>
              <span className="shop-story__title">{story.title}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
