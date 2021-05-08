import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n.use(LanguageDetector).init({
  resources: {
    eu: {
      translations: {
        'Сбер': 'Sber',
        'Content-card_text1': 'is a trusted assistant and navigator in a changing world: we help people, businesses and our country to develop sustainably by building a fully integrated ',
        'ecosystem': 'ecosystem',
        'Content-card_text2': '. Group companies cover all customer needs in the digital world',
        'Титульный партнер ПМЭФ’21' : 'Title Partner of SPIEF 2021',
        '2 июня - 5 июня 2021 год': '2 - 5 June 2021',
        'Смотреть программу': 'View the programme',
        'Деловая программа Сбера на ПМЭФ': "Sber's business programme at SPIEF",
        'Форум МСП' : 'Форум МСП',
        'Форум лекарственной безопасности': 'Форум лекарственной безопасности',
        'Сессия Л.А. Хасиса “Венчурная экономика развивающихся стран”': 'Сессия Л.А. Хасиса “Венчурная экономика развивающихся стран”',
        'Сессия С.К.Кузнецова Безопасное развитие экосистем – что лежит в основе?': 'Сессия С.К.Кузнецова Безопасное развитие экосистем – что лежит в основе?',
        'Официальное открытие форума': 'Официальное открытие форума',
        'Панельная сессия с участием Президента, Председятеля правления Г.О. Грефа': 'Панельная сессия с участием Президента, Председятеля правления Г.О. Грефа',
        'Вечерний прием Сбера/Концерт на Дворцовой площади': 'Вечерний прием Сбера/Концерт на Дворцовой площади',
        'Деловой завтрак Сбера': 'Деловой завтрак Сбера',
        'Сессия А.А. Ведяхина “Art.Creativity.AI” ': 'Сессия А.А. Ведяхина “Art.Creativity.AI” ',
        'Пленарная сессия с участием Президента РФ': 'Пленарная сессия с участием Президента РФ',
      },
    },
    rus: {
      translations: {
        'Сбер': 'Сбер',
        'Content-card_text1' : 'доверенный помощник и навигатор в меняющемся мире: помогает человеку, бизнесу и стране стабильно развиваться благодаря построению полностью интегрированной ',
        'ecosystem': 'экосистемы',
        'Content-card_text2': '. Компании Группы покрывают все потребности клиентов в цифровом мире.',
        'Титульный партнер ПМЭФ’21' : 'Титульный партнер ПМЭФ’21',
        '2 июня - 5 июня 2021 год': '2 июня - 5 июня 2021 год',
        'Смотреть программу': 'Смотреть программу',
        'Деловая программа Сбера на ПМЭФ': 'Деловая программа Сбера на ПМЭФ',
        'Форум МСП' : 'Форум МСП',
        'Форум лекарственной безопасности': 'Форум лекарственной безопасности',
        'Сессия Л.А. Хасиса “Венчурная экономика развивающихся стран”': 'Сессия Л.А. Хасиса “Венчурная экономика развивающихся стран”',
        'Сессия С.К.Кузнецова Безопасное развитие экосистем – что лежит в основе?': 'Сессия С.К.Кузнецова Безопасное развитие экосистем – что лежит в основе?',
        'Официальное открытие форума': 'Официальное открытие форума',
        'Панельная сессия с участием Президента, Председятеля правления Г.О. Грефа': 'Панельная сессия с участием Президента, Председятеля правления Г.О. Грефа',
        'Вечерний прием Сбера/Концерт на Дворцовой площади': 'Вечерний прием Сбера/Концерт на Дворцовой площади',
        'Деловой завтрак Сбера': 'Деловой завтрак Сбера',
        'Сессия А.А. Ведяхина “Art.Creativity.AI” ': 'Сессия А.А. Ведяхина “Art.Creativity.AI” ',
        'Пленарная сессия с участием Президента РФ': 'Пленарная сессия с участием Президента РФ',
      },
    },
  },
  fallbackLng: 'rus',
  debug: true,

  ns: ['translations'],
  defaultNS: 'translations',

  keySeparator: false,

  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },

  react: {
    wait: true,
  },
});

export default i18n;
