import React, { useEffect, useState } from "react";
import Hero from "../_components/Hero";
import { motion, AnimatePresence } from "framer-motion";
import "./ShufflingGrid.css";
import TeacherCard from "../_components/TeacherCard";
const Teacher = () => {
  const items = [
    {
      id: 1,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-1.jpg",
      name: "Jacke Masito",
      category: "arts",
    },
    {
      id: 2,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-2.jpg",
      name: "Clark Malik",
      category: "bio",
    },
    {
      id: 3,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-3.jpg",
      name: "John Doe",
      category: "bio",
    },
    {
      id: 4,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-1.jpg",
      name: "Alex Rook",
      category: "science",
    },
    {
      id: 5,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-2.jpg",
      name: "Din Martin",
      category: "business",
    },
    {
      id: 6,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-3.jpg",
      name: "Raka Jim",
      category: "law",
    },
    {
      id: 7,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-1.jpg",
      name: "David Luis",
      category: "pharmacy",
    },
    {
      id: 8,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-2.jpg",
      name: "Zim Cook",
      category: "law",
    },
    {
      id: 9,
      image:
        "https://demo.themefisher.com/educenter-bootstrap/images/teachers/teacher-3.jpg",
      name: "Duis Riu",
      category: "social",
    },
  ];
  const categories = [
    "arts",
    "bio",
    "business",
    "law",
    "pharmacy",
    "science",
    "social",
  ];
  return (
    <div>
      <Hero path="Our Teacher" />
      <div className="my-20 respPx20 min-h-screen">
        <ShufflingGrid items={items} categories={categories} />
      </div>
    </div>
  );
};

export default Teacher;

const ShufflingGrid = ({ items, categories }) => {
  const [filteredItems, setFilteredItems] = useState(items);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(() => {
    if (currentCategory === "all") {
      setFilteredItems(items);
    } else {
      setFilteredItems(
        items.filter((item) => item.category === currentCategory)
      );
    }
  }, [currentCategory, items]);

  const shuffle = () => {
    const shuffled = [...filteredItems].sort(() => Math.random() - 0.5);
    setFilteredItems(shuffled);
  };

  const handleCategoryChange = (category) => {
    setCurrentCategory(category);
  };

  return (
    <div className="grid-container">
      <div className="buttons flex gap-10">
        <button
          className={`hover:text-sunrise transitional text-lg font-medium uppercase ${currentCategory === "all" && "text-sunrise font-bold"}`}
          onClick={() => handleCategoryChange("all")}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              className={`hover:text-sunrise transitional text-lg font-medium uppercase ${currentCategory === category && "text-sunrise font-bold"}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
      <div className="resp3ColGrid gap-10 my-10">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              className="grid-item"
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <TeacherCard image={item.image} name={item.name} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
