import { useState, useEffect } from "react"
import { motion } from "framer-motion"

function CountdownTimer() {
  const weddingDate = new Date("2025-06-14T14:00:00")
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const diff = weddingDate.getTime() - now.getTime()
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        })
      }
    }
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full gap-4">
      {[
        { value: timeLeft.days, label: "дней" },
        { value: timeLeft.hours, label: "часов" },
        { value: timeLeft.minutes, label: "минут" },
      ].map(({ value, label }) => (
        <div key={label} className="text-center">
          <motion.span
            className="font-serif text-4xl md:text-5xl text-foreground block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {String(value).padStart(2, "0")}
          </motion.span>
          <span className="text-xs text-muted-foreground">{label}</span>
        </div>
      ))}
    </div>
  )
}

function HeartAnimation() {
  const [hearts, setHearts] = useState([0])

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [...prev.slice(-4), prev.length])
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center h-full relative overflow-hidden">
      {hearts.map((id) => (
        <motion.span
          key={id}
          className="absolute text-3xl"
          initial={{ y: 20, opacity: 1, scale: 0.5 }}
          animate={{ y: -60, opacity: 0, scale: 1.2 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          style={{ left: `${30 + Math.random() * 40}%` }}
        >
          🤍
        </motion.span>
      ))}
      <span className="text-5xl">💍</span>
    </div>
  )
}

function VenueCard() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-2 text-center">
      <span className="text-4xl">📍</span>
      <p className="font-serif text-xl text-foreground">Ресторан «Берёзка»</p>
      <p className="text-sm text-muted-foreground">Москва, ул. Садовая, 12</p>
    </div>
  )
}

export function FeaturesSection() {
  return (
    <section className="bg-background px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <motion.p
          className="text-muted-foreground text-sm uppercase tracking-widest mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Детали торжества
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            data-clickable
          >
            <div className="flex-1">
              <CountdownTimer />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">До свадьбы</h3>
              <p className="text-muted-foreground text-sm mt-1">Совсем скоро начнётся самый важный день.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 0.98 }}
            data-clickable
          >
            <div className="flex-1">
              <HeartAnimation />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Дресс-код</h3>
              <p className="text-muted-foreground text-sm mt-1">Пастельные оттенки — белый, пудровый, нежно-розовый.</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-secondary rounded-xl p-8 min-h-[280px] flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 0.98 }}
            data-clickable
          >
            <div className="flex-1">
              <VenueCard />
            </div>
            <div className="mt-4">
              <h3 className="font-serif text-xl text-foreground">Место</h3>
              <p className="text-muted-foreground text-sm mt-1">Торжество пройдёт в уютном загородном ресторане.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
