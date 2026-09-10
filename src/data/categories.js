export const categories = [
  {
    slug: "electronics",
    name: "Electronics",
    image: "/assets/products/trimmer-cutout.png",
    description: "Grooming gadgets, adapters and everyday tech for a smarter home.",
  },
  {
    slug: "kitchen",
    name: "Kitchen",
    image: "/assets/products/dish-rack.jpg",
    description: "Everyday essentials that make cooking and storage effortless.",
  },
  {
    slug: "storage",
    name: "Storage & Organization",
    image: "/assets/products/fabric-wardrobe.jpg",
    description: "Clever storage solutions for bedroom, hallway and beyond.",
  },
  {
    slug: "furniture",
    name: "Furniture",
    image: "/assets/products/sofa-arm-table.jpg",
    description: "Stylish, functional furniture for every room in the house.",
  },
];

export const getCategoryBySlug = (slug) =>
  categories.find((c) => c.slug === slug);
