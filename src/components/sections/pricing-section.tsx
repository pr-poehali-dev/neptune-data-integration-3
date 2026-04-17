import { motion } from "framer-motion"
import { Check } from "lucide-react"

const options = [
  {
    name: "Еду один(а)",
    price: "1",
    period: " гость",
    description: "Для одного человека",
    features: ["Место за столом", "Праздничный ужин", "Бокал шампанского", "Участие в программе"],
  },
  {
    name: "Еду с парой",
    price: "2",
    period: " гостя",
    description: "Для двух человек",
    features: ["Два места рядом", "Праздничный ужин", "Шампанское для двоих", "Участие в программе", "Памятный подарок"],
    popular: true,
  },
]

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">Подтвердите своё участие</h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">Пожалуйста, сообщите нам до 1 июня, чтобы мы успели всё подготовить.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {options.map((option, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${option.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {option.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  С парой
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">{option.name}</h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-serif text-foreground">{option.price}</span>
                  <span className="text-muted-foreground">{option.period}</span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">{option.description}</p>
              </div>

              <ul className="mt-6 space-y-3">
                {option.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3 text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors ${
                  option.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "bg-secondary text-foreground hover:bg-accent/30"
                }`}
              >
                Подтвердить
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
