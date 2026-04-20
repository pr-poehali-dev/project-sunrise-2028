import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Layout, ShoppingCart, FileText, Wrench, Search, Smartphone } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "Сайт-визитка",
    description:
      "Компактный и стильный сайт для представления вашего бизнеса в интернете. Расскажем о вас, ваших услугах и контактах — всё, что нужно клиенту для принятия решения.",
  },
  {
    icon: Layout,
    title: "Лэндинг",
    description:
      "Продающая одностраничная страница, которая превращает посетителей в клиентов. Разрабатываем структуру и дизайн с фокусом на конверсию и достижение ваших целей.",
  },
  {
    icon: ShoppingCart,
    title: "Интернет-магазин",
    description:
      "Полноценный онлайн-магазин с каталогом, корзиной и приёмом оплаты. Удобный для покупателя и простой в управлении — даже без технических знаний.",
  },
  {
    icon: Smartphone,
    title: "Адаптивный дизайн",
    description:
      "Все сайты корректно отображаются на телефонах, планшетах и компьютерах. Ваши клиенты получат одинаково удобный опыт с любого устройства.",
  },
  {
    icon: Wrench,
    title: "Техническое сопровождение",
    description:
      "Обеспечиваем стабильную работу сайта после запуска: обновления, исправление ошибок, резервные копии. Вы занимаетесь бизнесом — мы следим за сайтом.",
  },
  {
    icon: Search,
    title: "SEO-оптимизация",
    description:
      "Настраиваем сайт так, чтобы поисковики находили его быстрее. Ваши клиенты смогут легко найти вас в Google и Яндексе по нужным запросам.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши услуги
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Всё для вашего <span className="text-primary">онлайн-присутствия</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Разрабатываем сайты любой сложности и берём на себя техническое сопровождение, чтобы вы могли сосредоточиться на бизнесе.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}