const doorbell = "/assets/products/doorbell.png";
const waterBottle = "/assets/products/water-bottle.jpeg";
const bookcaseLadder = "/assets/products/bookcase-ladder.jpeg";
const babyBathTub = "/assets/products/baby-bath-tub.jpeg";
const barStools = "/assets/products/bar-stools.jpeg";
const bathroomOrganizer = "/assets/products/bathroom-organizer.jpeg";
const riceDispenser = "/assets/products/rice-dispenser.jpeg";
const woodenEasel = "/assets/products/wooden-easel.jpeg";
const computerDesk = "/assets/products/computer-desk.jpeg";
const cornerShelf = "/assets/products/corner-shelf.jpg";

export const products = [
  {
    id: 1,
    slug: "kenkie-smart-video-doorbell-2-0",
    name: "KENKIE Smart Video Doorbell 2.0",
    category: "electronics",
    price: 149.99,
    oldPrice: null,
    badge: "NEW",
    image: doorbell,
    images: [doorbell],
    rating: 4.6,
    reviewCount: 128,
    inStock: true,
    shortDescription:
      "1080P HD video, night vision, and instant phone alerts — see who's at the door from anywhere.",
    description:
      "The KENKIE Smart Video Doorbell 2.0 brings crisp 1080P HD video, a 166° wide viewing angle and two-way noise-cancelling audio to your front door. Get instant motion alerts on your phone, chat with visitors from anywhere, and keep footage safe with lifetime free cloud storage. Weatherproof to IP64 and powered by long-life batteries, it installs in minutes and works with up to 4 household members on the app.",
    features: [
      "1080P HD video with 166° wide-angle lens",
      "Two-way audio with noise cancellation",
      "Free 7-day cloud storage, no subscription required",
      "PIR motion detection with adjustable sensitivity",
      "IP64 weatherproof rating",
      "Supports up to 4 app users",
    ],
    options: {
      Colour: ["Black", "Silver"],
    },
  },
  {
    id: 2,
    slug: "1l-motivational-water-bottle",
    name: "1L Motivational Water Bottle with Time Marker & Straw",
    category: "kitchen",
    price: 7.99,
    oldPrice: 12.99,
    badge: "SALE",
    image: waterBottle,
    images: [waterBottle],
    rating: 4.4,
    reviewCount: 84,
    inStock: true,
    shortDescription:
      "Leakproof gradient sports bottle with time markers to keep your daily hydration on track.",
    description:
      "Stay on top of your daily water intake with this 1L motivational bottle, featuring bold time markers, a leakproof flip-top lid and a convenient built-in straw. Made from durable, BPA-free plastic with a smooth gradient finish, it's the perfect companion for the gym, office, school or outdoor adventures.",
    features: [
      "1L capacity with printed time markers",
      "Leakproof, flip-top lid",
      "BPA-free, durable plastic",
      "Built-in straw for easy sipping",
      "Lightweight and portable",
    ],
    options: {
      Colour: ["Blue Gradient", "Pink Gradient", "Green Gradient"],
    },
  },
  {
    id: 3,
    slug: "4-tier-bookcase-ladder-shelf",
    name: "4-Tier Bookcase Ladder Shelf",
    category: "furniture",
    price: 32.99,
    oldPrice: 37.99,
    badge: "SALE",
    image: bookcaseLadder,
    images: [bookcaseLadder],
    rating: 4.5,
    reviewCount: 56,
    inStock: true,
    shortDescription:
      "A slim, ladder-style bookcase that adds storage without taking up floor space.",
    description:
      "This space-saving ladder shelf stands 55.1\" tall on a footprint of just 11.8\" x 13.3\", making it ideal for narrow corners in the living room, bedroom or home office. Built from sturdy particleboard and steel with reinforced back panels for stability, it holds up to 88 lbs across four generous shelves. Includes an anti-tip wall kit and numbered parts for straightforward assembly.",
    features: [
      "4 tiers, slim ladder design",
      "Particleboard & steel construction",
      "Supports up to 88 lbs total",
      "Anti-tip kit included",
      "Easy tool-assisted assembly",
    ],
    options: {
      Finish: ["Natural Oak", "Black", "White"],
    },
  },
  {
    id: 4,
    slug: "foldable-baby-bath-tub",
    name: "Foldable Baby Bath Tub",
    category: "storage",
    price: 26.99,
    oldPrice: 29.99,
    badge: "SALE",
    image: babyBathTub,
    images: [babyBathTub],
    rating: 4.7,
    reviewCount: 41,
    inStock: true,
    shortDescription:
      "Collapsible baby bath with a built-in temperature sensor and soft support cushion.",
    description:
      "Bath time made safer and easier. This foldable baby bath tub features a built-in temperature sensor to help you get the water just right, plus a soft floating cushion that supports newborns. It collapses flat for easy storage and travel, and suits babies through toddlers up to 36 months. Made from non-toxic PP and TPE with an easy-drain plug.",
    features: [
      "Built-in water temperature sensor",
      "Soft floating support cushion",
      "Folds flat for storage or travel",
      "Suitable up to 36 months",
      "Non-toxic PP + TPE materials",
      "Easy-drain system",
    ],
    options: {
      Colour: ["Blue", "Grey", "Pink"],
    },
  },
  {
    id: 5,
    slug: "modern-upholstered-bar-stools",
    name: "2x Modern Upholstered Bar Stools",
    category: "furniture",
    price: 77.99,
    oldPrice: 88.99,
    badge: null,
    image: barStools,
    images: [barStools],
    rating: 4.6,
    reviewCount: 97,
    inStock: true,
    shortDescription:
      "PU leather bar stools with curved backs and sturdy metal frames — set of two.",
    description:
      "Upgrade your kitchen island or breakfast bar with this set of two modern bar stools. Soft PU leather cushioning and a curved backrest offer all-day comfort, while the powder-coated metal frame keeps them sturdy and stable. A versatile, elegant design that fits kitchens, home bars and restaurants alike.",
    features: [
      "Set of 2 stools",
      "PU leather cushioned seat",
      "Curved ergonomic backrest",
      "Powder-coated metal frame",
      "Easy to wipe clean",
    ],
    options: {
      Colour: ["Black", "Grey", "Tan"],
    },
  },
  {
    id: 6,
    slug: "3-tier-metal-bathroom-organizer",
    name: "3-Tier Metal Bathroom Organizer Over Toilet Rack",
    category: "storage",
    price: 16.99,
    oldPrice: 19.99,
    badge: null,
    image: bathroomOrganizer,
    images: [bathroomOrganizer],
    rating: 4.3,
    reviewCount: 33,
    inStock: true,
    shortDescription:
      "Rust-resistant over-toilet storage with three shelves for towels and toiletries.",
    description:
      "Make the most of small bathrooms with this three-tier over-toilet storage rack. The rust-resistant black metal frame is waterproof and moisture-proof, with protective foot pads to keep floors scratch-free. Perfect for organizing towels, toiletries and everyday essentials in style.",
    features: [
      "3 spacious shelves",
      "Rust-resistant, waterproof metal frame",
      "Fits most standard toilets",
      "Protective non-slip foot pads",
      "Dimensions: 46cm W x 25cm D x 157cm H",
    ],
    options: {
      Colour: ["Black", "White"],
    },
  },
  {
    id: 7,
    slug: "rice-dispenser-container",
    name: "Rice Dispenser Container",
    category: "kitchen",
    price: 19.99,
    oldPrice: 23.99,
    badge: null,
    image: riceDispenser,
    images: [riceDispenser],
    rating: 4.4,
    reviewCount: 19,
    inStock: true,
    shortDescription:
      "Airtight rice storage with effortless one-touch dispensing, available in 5kg or 10kg.",
    description:
      "Keep rice fresh and pest-free with this airtight dispenser container. A large opening allows for effortless, spill-free refilling, while a built-in compartment holds natural pest repellents like star anise or garlic. Made from food-safe PP and PET, it comes complete with a measuring cup and needs no assembly.",
    features: [
      "Available in 5kg or 10kg capacity",
      "Airtight, moisture-proof seal",
      "One-touch dispensing",
      "Includes measuring cup",
      "No assembly required",
    ],
    options: {
      Size: ["5kg", "10kg"],
      Colour: ["White", "Green"],
    },
  },
  {
    id: 8,
    slug: "wooden-a-frame-easel",
    name: "Wooden A-Frame Easel",
    category: "furniture",
    price: 16.49,
    oldPrice: 19.99,
    badge: null,
    image: woodenEasel,
    images: [woodenEasel],
    rating: 4.2,
    reviewCount: 15,
    inStock: true,
    shortDescription:
      "1.75m collapsible pinewood easel with adjustable canvas clamp, for studio or display.",
    description:
      "This 1.75m pinewood A-frame easel folds flat for easy transport and storage, making it ideal for studios, exhibitions, weddings and outdoor painting sessions. The adjustable canvas carrier and clamp securely hold canvases up to 140cm tall, suiting both amateur and professional artists.",
    features: [
      "1.75m tall, solid pinewood build",
      "Folds flat for storage or travel",
      "Adjustable canvas clamp",
      "Holds canvases up to 140cm",
      "Weighs just 3kg",
    ],
    options: {},
  },
  {
    id: 9,
    slug: "height-adjustable-computer-desk",
    name: "Height Adjustable Computer Desk",
    category: "furniture",
    price: 39.99,
    oldPrice: 44.99,
    badge: "NEW",
    image: computerDesk,
    images: [computerDesk],
    rating: 4.5,
    reviewCount: 62,
    inStock: true,
    shortDescription:
      "Multi-layer desk with a high-gloss finish, welded steel frame and rolling wheels.",
    description:
      "A compact, height-adjustable desk built for home offices and study spaces. The high-gloss wooden panel sits on a welded metal frame for lasting stability, while omnidirectional wheels make it easy to move between rooms. Multiple storage layers keep your essentials within reach.",
    features: [
      "Height-adjustable design",
      "High-gloss wood panel top",
      "Welded steel frame",
      "Omnidirectional rolling wheels",
      "Dimensions: 820 x 600 x 400mm",
    ],
    options: {
      Colour: ["White", "Black", "Oak"],
    },
  },
  {
    id: 10,
    slug: "5-tier-corner-shelf",
    name: "5-Tier Corner Shelf",
    category: "storage",
    price: 64.99,
    oldPrice: 70.0,
    badge: null,
    image: cornerShelf,
    images: [cornerShelf],
    rating: 4.5,
    reviewCount: 27,
    inStock: true,
    shortDescription:
      "Space-maximizing corner storage with a steel frame and warm wood-finish shelves.",
    description:
      "Make use of every corner with this 5-tier standing shelf, combining a durable steel frame with warm wood-finish shelving. A versatile organizer for the living room, bedroom or kitchen, it's equally at home displaying décor or storing everyday essentials.",
    features: [
      "5 tiers of storage",
      "Steel frame with wood-finish shelves",
      "Space-saving corner design",
      "Available in black or white",
    ],
    options: {
      Colour: ["Black", "White"],
    },
  },
];

export const getProductBySlug = (slug) =>
  products.find((p) => p.slug === slug);

export const getProductById = (id) =>
  products.find((p) => p.id === Number(id));

export const getRelatedProducts = (product, count = 4) =>
  products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, count)
    .concat(
      products.filter((p) => p.category !== product.category).slice(0, count)
    )
    .slice(0, count);

export const getTrendingProducts = () => products;

export const getNewArrivals = () => products.filter((p) => p.badge === "NEW");

export const getSaleProducts = () => products.filter((p) => p.badge === "SALE" || p.oldPrice);
