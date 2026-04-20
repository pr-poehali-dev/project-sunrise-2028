import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Лэндинг для фитнес-клуба",
    category: "Лэндинг",
    image: "/placeholder.jpg",
    description:
      "Продающий лэндинг для фитнес-клуба с формой записи на пробное занятие, блоком с тренерами и акциями. Конверсия выросла на 40% по сравнению со старым сайтом.",
    url: "#portfolio",
    tags: ["Лэндинг", "Адаптивный дизайн", "CRM-интеграция"],
  },
  {
    title: "Интернет-магазин цветов",
    category: "Интернет-магазин",
    image: "/placeholder.jpg",
    description:
      "Полноценный магазин с каталогом букетов, онлайн-оплатой и доставкой. Клиент самостоятельно управляет товарами через удобную панель администратора.",
    url: "#portfolio",
    tags: ["Интернет-магазин", "Онлайн-оплата", "Каталог"],
  },
  {
    title: "Сайт-визитка юридической фирмы",
    category: "Сайт-визитка",
    image: "/placeholder.jpg",
    description:
      "Строгий и профессиональный сайт для юридической компании. Описание практик, команды и форма записи на консультацию. Высокие позиции в Google по региональным запросам.",
    url: "#portfolio",
    tags: ["Визитка", "SEO", "Форма записи"],
  },
  {
    title: "Корпоративный сайт строительной компании",
    category: "Корпоративный сайт",
    image: "/placeholder.jpg",
    description:
      "Многостраничный сайт со страницами услуг, портфолио объектов и блогом. Интегрирован калькулятор стоимости работ для расчёта смет онлайн.",
    url: "#portfolio",
    tags: ["Корпоративный сайт", "Калькулятор", "Портфолио"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наше портфолио</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Примеры наших работ — от лэндингов и визиток до интернет-магазинов для разных сфер бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                    onClick={() => window.open(project.url, "_blank")}
                  >
                    Открыть проект <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}