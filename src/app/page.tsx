"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const dummyCards = [
  { id: 1, category: "design", title: "UX Case Study" },
  { id: 2, category: "dev", title: "React App" },
  { id: 3, category: "design", title: "Wireframe Kit" },
  { id: 4, category: "dev", title: "Next.js Project" },
  { id: 5, category: "dev", title: "Motion Layout" },
];

const categories = ["all", "design", "dev"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("all");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const containerRef = useRef(null);

  // ✅ 스크롤 기반 애니메이션 설정
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  const filteredCards = dummyCards.filter(
    (card) => filter === "all" || card.category === filter
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-amber-400 text-center mb-6">My Portfolio</h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full border transition-colors ${
              filter === cat ? "bg-black text-white" : "bg-white text-black border-gray-300"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Card Grid */}
      <motion.div
        layout
        ref={containerRef}
        style={{ opacity, scale }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredCards.map((card) => (
            <motion.div
              layout
              key={card.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="p-6 bg-white rounded-xl shadow cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedId(card.id)}
            >
              <h3 className="font-semibold text-amber-300">{card.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{card.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Layout Transition: Detail Modal */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center z-50"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-xl text-amber-300 font-bold mb-4">
                {dummyCards.find((c) => c.id === selectedId)?.title}
              </h2>
              <p className="text-sm text-gray-600">
                상세 설명이 여기에 들어갑니다. 카드 ID: {selectedId}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
