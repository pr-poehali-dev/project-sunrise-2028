import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Обратился в Apis Studio за лэндингом для своей кофейни. Сделали быстро, красиво и ровно так, как я просил. Заявки пошли уже в первую неделю!",
    name: "Алексей",
    role: "Владелец кофейни",
  },
  {
    quote:
      "Заказывали интернет-магазин — боялись, что будет сложно разобраться с управлением. Ребята всё настроили и объяснили. Теперь сам добавляю товары без проблем.",
    name: "Марина",
    role: "Предприниматель, товары для дома",
  },
  {
    quote:
      "Старый сайт совсем устарел. Apis Studio сделали новый сайт-визитку — современный, быстрый, хорошо индексируется. И поддержка всегда на связи, если что-то нужно поправить.",
    name: "Дмитрий",
    role: "Руководитель юридической фирмы",
  },
  {
    quote:
      "Долго не решался делать сайт — казалось, это дорого и долго. С Apis Studio всё оказалось просто: обсудили задачу, получил готовый лэндинг за неделю. Рекомендую!",
    name: "Ольга",
    role: "Мастер маникюра",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши клиенты
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Нам важно, чтобы каждый клиент получил результат, а не просто красивые картинки. Вот что говорят о нас те, с кем мы уже работали.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}