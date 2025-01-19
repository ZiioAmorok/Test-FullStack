require("dotenv").config();
const mongoose = require("mongoose");
const Destination = require("./models/Destination.js");
const dbConnect = require("./config/database.js");

const seedDatabase = async () => {
  await dbConnect();
  const destinations = [
    {
      name: "Eiffel Tower",
      country: "France",
      rating: 4.8,
      image: "https://example.com/eiffel-tower.jpg",
      tags: "landmark,romantic",
      description:
        "The Eiffel Tower is one of the most iconic landmarks in the world, located in Paris. A must-see destination for couples and art enthusiasts.",
    },
    {
      name: "Grand Canyon",
      country: "USA",
      rating: 4.9,
      image: "https://example.com/grand-canyon.jpg",
      tags: "natural-wonder,hiking",
      description:
        "A stunning natural wonder located in Arizona, USA, famous for its breathtaking views and hiking trails.",
    },
    {
      name: "Great Wall of China",
      country: "China",
      rating: 4.7,
      image: "https://example.com/great-wall.jpg",
      tags: "historic,adventure",
      description:
        "One of the greatest wonders of the world, this historic wall stretches thousands of miles and offers an incredible cultural experience.",
    },
    {
      name: "Santorini",
      country: "Greece",
      rating: 4.6,
      image: "https://example.com/santorini.jpg",
      tags: "island,romantic",
      description:
        "A picturesque Greek island known for its stunning sunsets, white-washed buildings, and crystal-clear waters.",
    },
    {
      name: "Machu Picchu",
      country: "Peru",
      rating: 4.8,
      image: "https://example.com/machu-picchu.jpg",
      tags: "historic,adventure",
      description:
        "A historic Incan citadel located in the Andes Mountains, famous for its archaeological significance and scenic beauty.",
    },
    {
      name: "Kyoto",
      country: "Japan",
      rating: 4.9,
      image: "https://example.com/kyoto.jpg",
      tags: "culture,tradition",
      description:
        "A city that beautifully preserves Japan's traditional culture, known for its temples, gardens, and historic districts.",
    },
    {
      name: "Mount Kilimanjaro",
      country: "Tanzania",
      rating: 4.7,
      image: "https://example.com/kilimanjaro.jpg",
      tags: "adventure,hiking",
      description:
        "The highest mountain in Africa, offering a thrilling adventure for climbers and stunning views of the surrounding landscape.",
    },
    {
      name: "Venice",
      country: "Italy",
      rating: 4.6,
      image: "https://example.com/venice.jpg",
      tags: "romantic,cultural",
      description:
        "Known as the city of canals, Venice is a romantic destination filled with gondolas, historic architecture, and art.",
    },
    {
      name: "Dubai",
      country: "UAE",
      rating: 4.5,
      image: "https://example.com/dubai.jpg",
      tags: "modern,luxury",
      description:
        "A city of skyscrapers, luxury shopping, and modern attractions like the Burj Khalifa and Dubai Mall.",
    },
    {
      name: "Bali",
      country: "Indonesia",
      rating: 4.8,
      image: "https://example.com/bali.jpg",
      tags: "beach,wellness",
      description:
        "An island paradise known for its beaches, lush greenery, and wellness retreats.",
    },
    {
      name: "Cape Town",
      country: "South Africa",
      rating: 4.7,
      image: "https://example.com/cape-town.jpg",
      tags: "adventure,nature",
      description:
        "A vibrant city located at the tip of Africa, offering stunning landscapes, Table Mountain, and rich cultural experiences.",
    },
    {
      name: "Reykjavik",
      country: "Iceland",
      rating: 4.8,
      image: "https://example.com/reykjavik.jpg",
      tags: "nature,adventure",
      description:
        "The capital of Iceland, known for its proximity to stunning natural attractions like geysers, waterfalls, and the northern lights.",
    },
    {
      name: "Sydney Opera House",
      country: "Australia",
      rating: 4.9,
      image: "https://example.com/sydney-opera-house.jpg",
      tags: "landmark,cultural",
      description:
        "An architectural masterpiece in Sydney, offering world-class performances and stunning views of Sydney Harbour.",
    },
    {
      name: "Petra",
      country: "Jordan",
      rating: 4.8,
      image: "https://example.com/petra.jpg",
      tags: "historic,adventure",
      description:
        "An archaeological site famous for its rock-cut architecture and water conduit system, also known as the 'Rose City.'",
    },
    {
      name: "New York City",
      country: "USA",
      rating: 4.6,
      image: "https://example.com/nyc.jpg",
      tags: "urban,cultural",
      description:
        "The Big Apple, a bustling city filled with iconic landmarks like Times Square, Central Park",
    },
  ];

  try {
    await Destination.deleteMany();
    await Destination.insertMany(destinations);
    console.log("Database seeded successfully");
    mongoose.connection.close();
  } catch (err) {
    console.log("error seeding database:", err);
    mongoose.connection.close();
  }
};
//Basic data, do not update! newly added ones would also be deleted...
seedDatabase();
