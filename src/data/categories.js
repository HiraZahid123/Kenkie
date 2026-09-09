export const categories = [
  {
    slug: "electronics",
    name: "Electronics",
    image: "/assets/products/doorbell.png",
    description: "Smart doorbells, gadgets and connected devices for a smarter home.",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    image: "/assets/products/rice-dispenser.jpeg",
    description: "Everyday essentials that make cooking and storage effortless.",
  },
  {
    slug: "storage",
    name: "Storage & Organization",
    image: "/assets/products/bathroom-organizer.jpeg",
    description: "Clever storage solutions for bathroom, bedroom and beyond.",
  },
  {
    slug: "furniture",
    name: "Furniture",
    image: "/assets/products/bar-stools.jpeg",
    description: "Stylish, functional furniture for every room in the house.",
  },
];

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug);
