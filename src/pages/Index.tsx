import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900">
                <span className="text-primary">УПРАВЛЯЙ</span> / <span className="text-secondary">ВДОХНОВЛЯЙ</span>
              </h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">
                О конференции
              </button>
              <button onClick={() => scrollToSection('schedule')} className="text-gray-700 hover:text-primary transition-colors">
                Программа
              </button>
              <button onClick={() => scrollToSection('speakers')} className="text-gray-700 hover:text-primary transition-colors">
                Спикеры
              </button>
              <button onClick={() => scrollToSection('registration')} className="text-gray-700 hover:text-primary transition-colors">
                Регистрация
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-gray-700 hover:text-primary transition-colors">
                Контакты
              </button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <button 
                    onClick={() => scrollToSection('hero')} 
                    className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    Главная
                  </button>
                  <button 
                    onClick={() => scrollToSection('about')} 
                    className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    О конференции
                  </button>
                  <button 
                    onClick={() => scrollToSection('schedule')} 
                    className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    Программа
                  </button>
                  <button 
                    onClick={() => scrollToSection('speakers')} 
                    className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    Спикеры
                  </button>
                  <button 
                    onClick={() => scrollToSection('registration')} 
                    className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    Регистрация
                  </button>
                  <button 
                    onClick={() => scrollToSection('contacts')} 
                    className="text-left text-lg font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    Контакты
                  </button>
                  <div className="pt-4 border-t">
                    <Button 
                      onClick={() => scrollToSection('registration')} 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Зарегистрироваться
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-orange-50 via-white to-green-50 py-20 pt-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="text-primary">УПРАВЛЯЙ</span> /{" "}
                <span className="text-secondary">ВДОХНОВЛЯЙ</span> /{" "}
                <span className="text-primary">МОТИВИРУЙ</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Конференция для управленцев и активистов сообществ. Получите новые инструменты лидерства, 
                найдите единомышленников и зарядитесь энергией для достижения целей.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('registration')}
                >
                  <Icon name="Calendar" className="mr-2" />
                  Зарегистрироваться
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 text-lg rounded-2xl hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection('schedule')}
                >
                  Программа
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="/img/bbc8bb66-fbc6-4c60-881d-9d929e423586.jpg" 
                  alt="Конференция" 
                  className="w-full h-auto rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">О конференции</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Практические инструменты и реальные кейсы от экспертов в области управления и лидерства
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Target" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Управление</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Эффективные методы управления командами и проектами в современном мире</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Lightbulb" size={32} className="text-secondary" />
                </div>
                <CardTitle className="text-xl font-semibold">Вдохновение</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Истории успеха и мотивирующие кейсы от лидеров различных индустрий</p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:scale-105">
              <CardHeader>
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">Мотивация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Техники мотивации себя и команды для достижения амбициозных целей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Программа мероприятия</h2>
            <p className="text-xl text-gray-600">Насыщенная программа с практическими мастер-классами</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-r from-white to-gray-50 hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white w-fit px-4 py-2 rounded-2xl shadow-lg">09:00 - 10:30</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Регистрация и приветственный кофе</h3>
                    <p className="text-gray-600">Знакомство участников, networking</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-r from-white to-gray-50 hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <Badge className="bg-gradient-to-r from-secondary to-secondary/80 text-white w-fit px-4 py-2 rounded-2xl shadow-lg">10:30 - 12:00</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Основной доклад: "Лидерство в эпоху перемен"</h3>
                    <p className="text-gray-600">Как адаптировать стиль управления к современным вызовам</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-r from-white to-gray-50 hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <Badge className="bg-gradient-to-r from-primary to-primary/80 text-white w-fit px-4 py-2 rounded-2xl shadow-lg">12:00 - 13:30</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Панельная дискуссия: "Мотивация команды"</h3>
                    <p className="text-gray-600">Обмен опытом между экспертами из разных сфер</p>
                  </div>
                </div>
              </Card>
              <Card className="p-8 hover:shadow-2xl transition-all duration-300 rounded-3xl border-0 bg-gradient-to-r from-white to-gray-50 hover:scale-105">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <Badge className="bg-gradient-to-r from-secondary to-secondary/80 text-white w-fit px-4 py-2 rounded-2xl shadow-lg">14:30 - 16:00</Badge>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">Мастер-классы (на выбор)</h3>
                    <p className="text-gray-600">Практические сессии по управлению конфликтами и построению команды</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section id="speakers" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Спикеры и эксперты</h2>
            <p className="text-xl text-gray-600">Ведущие практики и теоретики в области управления</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center overflow-hidden hover:shadow-2xl transition-all duration-300 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:scale-105 border-0">
              <div className="aspect-square overflow-hidden rounded-t-3xl">
                <img 
                  src="/img/13a08bb3-d1aa-4c14-98c3-08b8a33b8c0f.jpg" 
                  alt="Анна Петрова" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Анна Петрова</h3>
                <p className="text-secondary font-medium mb-2">CEO ТехСтарт</p>
                <p className="text-gray-600 text-sm">15+ лет опыта в управлении IT-командами. Эксперт по agile-трансформации</p>
              </CardContent>
            </Card>
            <Card className="text-center overflow-hidden hover:shadow-2xl transition-all duration-300 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:scale-105 border-0">
              <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
                <Icon name="User" size={64} className="text-gray-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Михаил Волков</h3>
                <p className="text-secondary font-medium mb-2">Директор HR Инновации</p>
                <p className="text-gray-600 text-sm">Специалист по мотивации персонала и развитию корпоративной культуры</p>
              </CardContent>
            </Card>
            <Card className="text-center overflow-hidden hover:shadow-2xl transition-all duration-300 rounded-3xl bg-gradient-to-br from-white to-gray-50 hover:scale-105 border-0">
              <div className="aspect-square overflow-hidden bg-gray-100 flex items-center justify-center">
                <Icon name="User" size={64} className="text-gray-400" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">Елена Сидорова</h3>
                <p className="text-secondary font-medium mb-2">Бизнес-тренер</p>
                <p className="text-gray-600 text-sm">Автор методик по лидерству и командообразованию</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Регистрация участников</h2>
              <p className="text-xl text-gray-600">Количество мест ограничено. Зарегистрируйтесь сейчас!</p>
            </div>
            <Card className="p-10 shadow-2xl rounded-3xl border-0 bg-gradient-to-br from-white via-gray-50 to-white">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                    <Input placeholder="Ваше имя" className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Фамилия</label>
                    <Input placeholder="Ваша фамилия" className="w-full" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <Input type="email" placeholder="your@email.com" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Компания/Организация</label>
                  <Input placeholder="Название организации" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Должность</label>
                  <Input placeholder="Ваша должность" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Ожидания от конференции</label>
                  <Textarea placeholder="Что вы хотите получить от участия?" className="w-full" rows={4} />
                </div>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white py-4 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <Icon name="Send" className="mr-2" />
                  Зарегистрироваться
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Контакты организаторов</h2>
              <p className="text-xl text-gray-300">Свяжитесь с нами по любым вопросам</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6">ООО "Даббл Рус"</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" />
                    <span>info@double-rus.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" />
                    <span>Москва, ул. Примерная, д. 1, офис 100</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-6">Дополнительная информация</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Calendar" className="text-secondary" />
                    <span>Дата: 15 марта 2025</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-secondary" />
                    <span>Время: 09:00 - 18:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Building" className="text-secondary" />
                    <span>Место: Конгресс-холл "Лидер"</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Users" className="text-secondary" />
                    <span>Участников: до 200 человек</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>&copy; 2025 ООО "Даббл Рус". Все права защищены.</p>
            <p className="mt-2">Конференция "УПРАВЛЯЙ / ВДОХНОВЛЯЙ / МОТИВИРУЙ"</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;