import { motion } from "framer-motion"

const weddingItems = [
  "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/0db19c86-0cdd-4761-b7e4-9843c242fd3a.jpg",
  "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/9e103cfc-d188-4cc2-93e0-71a0e896f7bb.jpg",
  "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/bb425d32-2721-4226-8451-2644ad65ce08.jpg",
  "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/c451564d-227a-4692-abec-2aaec64e006a.jpg",
  "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/ecabb780-07d0-4487-bfb7-ddd01d88af73.jpg",
  "https://cdn.poehali.dev/projects/47110f39-25e0-4acd-8600-7755b38863c4/files/66806319-0048-402c-8810-7460d1775714.jpg",
]

export function CarouselSection() {
  const items = [...weddingItems, ...weddingItems]

  return (
    <section className="bg-primary py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <motion.h2
          className="text-3xl md:text-4xl font-serif text-primary-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Создано с любовью, <em className="italic">для вас.</em>
        </motion.h2>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {items.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[400px] h-[300px] rounded-xl overflow-hidden shadow-2xl"
              data-clickable
            >
              <img
                src={src}
                alt={`Свадьба ${(i % weddingItems.length) + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
