import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const panels = [
    {
      id: "about",
      title: "Обо мне",
      icon: "User",
      content: "Привет! Мне 28 лет, живу в Хабаровске. Стримлю с душой и позитивом! 🎮",
      color: "from-purple-600 to-purple-800"
    },
    {
      id: "games",
      title: "Игры",
      icon: "Gamepad2",
      content: (
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center gap-2 bg-black/30 p-2 rounded">
            <span className="text-xl">🔫</span>
            <span className="text-sm">CS2</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 p-2 rounded">
            <span className="text-xl">⚡</span>
            <span className="text-sm">Valorant</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 p-2 rounded">
            <span className="text-xl">🎯</span>
            <span className="text-sm">PUBG</span>
          </div>
          <div className="flex items-center gap-2 bg-black/30 p-2 rounded">
            <span className="text-xl">⚔️</span>
            <span className="text-sm">Dota 2</span>
          </div>
        </div>
      ),
      color: "from-violet-600 to-violet-800"
    },
    {
      id: "schedule",
      title: "Расписание",
      icon: "Calendar",
      content: (
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>ПН-ПТ:</span>
            <span className="text-purple-300">19:00 - 23:00</span>
          </div>
          <div className="flex justify-between">
            <span>СБ-ВС:</span>
            <span className="text-purple-300">14:00 - 00:00</span>
          </div>
        </div>
      ),
      color: "from-indigo-600 to-indigo-800"
    },
    {
      id: "donate",
      title: "Донаты",
      icon: "Heart",
      content: "Поддержи стрим! Любая помощь идет на улучшение контента ❤️",
      color: "from-pink-600 to-pink-800"
    },
    {
      id: "rules",
      title: "Правила",
      icon: "ShieldCheck",
      content: (
        <ul className="text-sm space-y-1">
          <li>• Уважай других зрителей</li>
          <li>• Без спама и флуда</li>
          <li>• Позитив и веселье! 😊</li>
        </ul>
      ),
      color: "from-blue-600 to-blue-800"
    },
    {
      id: "socials",
      title: "Соцсети",
      icon: "Share2",
      content: (
        <div className="flex gap-3 justify-center">
          <div className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-all cursor-pointer hover:scale-110">
            <Icon name="Instagram" size={20} />
          </div>
          <div className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-all cursor-pointer hover:scale-110">
            <Icon name="Twitter" size={20} />
          </div>
          <div className="w-10 h-10 bg-black/30 rounded-full flex items-center justify-center hover:bg-black/50 transition-all cursor-pointer hover:scale-110">
            <Icon name="Youtube" size={20} />
          </div>
        </div>
      ),
      color: "from-cyan-600 to-cyan-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#1A1F2C] p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-white mb-2">
            Stream Info
          </h1>
          <p className="text-purple-300">Вся информация о канале</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {panels.map((panel, index) => (
            <Card
              key={panel.id}
              className={`
                bg-gradient-to-br ${panel.color}
                border-0 p-6 text-white
                hover:scale-105 transition-all duration-300
                cursor-pointer hover:shadow-2xl hover:shadow-purple-500/50
                animate-fade-in
              `}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Icon name={panel.icon as any} size={24} />
                </div>
                <h2 className="text-xl font-semibold">{panel.title}</h2>
              </div>
              <div className="text-white/90">
                {typeof panel.content === 'string' ? (
                  <p>{panel.content}</p>
                ) : (
                  panel.content
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center text-purple-300 text-sm animate-fade-in">
          <p>Стример из Хабаровска • 23.05.1997</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
