import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"

const schedule = [
  {
    title: "Регистрация брака",
    category: "14:00",
    image: "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/bb425d32-2721-4226-8451-2644ad65ce08.jpg",
  },
  {
    title: "Фотосессия и прогулка",
    category: "15:30",
    image: "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/0db19c86-0cdd-4761-b7e4-9843c242fd3a.jpg",
  },
  {
    title: "Банкет и ужин",
    category: "17:00",
    image: "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/c451564d-227a-4692-abec-2aaec64e006a.jpg",
  },
  {
    title: "Первый танец молодожёнов",
    category: "20:00",
    image: "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/66806319-0048-402c-8810-7460d1775714.jpg",
  },
]

export function InsightsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="bg-background px-6 py-24" onMouseMove={handleMouseMove}>
      <div className="max-w-4xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Программа дня
        </motion.p>

        <div className="divide-y divide-border">
          {schedule.map((item, i) => (
            <motion.div
              key={i}
              className="group flex items-center justify-between py-6 relative cursor-default"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ paddingLeft: 16, paddingRight: 16 }}
              data-clickable
            >
              <div className="flex-1">
                <span className="text-xs text-muted-foreground uppercase tracking-wider font-sans">{item.category}</span>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mt-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {hoveredIndex !== null && (
            <motion.div
              className="fixed pointer-events-none z-50 w-[200px] md:w-[300px] rounded-lg overflow-hidden shadow-2xl hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: mousePosition.x + 20,
                y: mousePosition.y - 100,
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={schedule[hoveredIndex].image}
                alt={schedule[hoveredIndex].title}
                className="w-full h-auto"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
