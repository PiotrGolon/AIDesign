import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Usługi",
    url: "#features",
  },
  {
    id: "1",
    title: "Ceny",
    url: "#pricing",
  },
  {
    id: "2",
    title: "Jak używać",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Mapa celów",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Załóż konto",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Zaloguj się",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Generowanie zdjęć",
  "Upiękrzanie zdjęć",
  "Płynna integracja",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Rozpoznawanie głosu",
    text: "Pozwól chatbotowi rozumieć i reagować na polecenia głosowe, ułatwiając użytkownikom interakcję z aplikacją bez użycia rąk.",
    date: "Maj 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Grywalizacja",
    text: "Dodaj elementy przypominające grę, takie jak odznaki lub tabele wyników, aby zachęcić użytkowników do częstszego korzystania z chatbota.",
    date: "Maj 2023",
    status: "progres",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Personalizacja Chatbota",
    text: "Pozwól użytkownikom dostosować wygląd i zachowanie chatbota, dzięki czemu interakcja z nim będzie bardziej wciągająca i przyjemna.",
    date: "Maj 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integracja z API",
    text: "Zezwól chatbotowi na dostęp do zewnętrznych źródeł danych, takich jak interfejsy API pogody lub interfejsy API wiadomości, aby zapewnić bardziej trafne rekomendacje.",
    date: "Maj 2023",
    status: "progres",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Dzięki inteligentnej automatyzacji i zabezpieczeniom na najwyższym poziomie jest to idealne rozwiązanie dla zespołów, które chcą pracować mądrzej.";

export const collabContent = [
  {
    id: "0",
    title: "Płynna integracja",
    text: collabText,
  },
  {
    id: "1",
    title: "Inteligentna automatyzacja",
  },
  {
    id: "2",
    title: "Bezpieczeństwo na najwyższym poziomie",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Podstawowy",
    description: "Chatbot AI, spersonalizowane rekomendacje",
    price: "0",
    features: [
      "Chatbot AI, który rozumie Twoje zapytania",
      "Spersonalizowane rekomendacje na podstawie Twoich preferencji",
      "Możliwość eksplorowania aplikacji i jej funkcji bez żadnych kosztów",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "Zaawansowany chatbot AI, który potrafi zrozumieć złożone zapytania",
      "Panel analityczny do śledzenia Twoich rozmów",
      "Priorytetowe wsparcie w celu szybkiego rozwiązywania problemów",
    ],
  },
  {
    id: "2",
    title: "Przedsiębiorstwa",
    description:
      "Niestandardowy chatbot AI, zaawansowana analityka, dedykowane konto",
    price: null,
    features: [
      "Chatbot AI, który rozumie Twoje zapytania",
      "Spersonalizowane rekomendacje na podstawie Twoich preferencji",
      "Możliwość eksplorowania aplikacji i jej funkcji bez żadnych kosztów",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Zadaj pytanie",
    text: "Pozwala użytkownikom szybko znaleźć odpowiedzi na swoje pytania, bez konieczności przeszukiwania wielu źródeł.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Lepszy każdego dnia",
    text: "Aplikacja wykorzystuje przetwarzanie języka naturalnego, aby zrozumieć zapytania użytkowników i zapewnić dokładne i odpowiednie odpowiedzi.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Połącz się wszędzie",
    text: "Połącz się z chatbotem AI z dowolnego miejsca i na dowolnym urządzeniu, dzięki czemu będzie on bardziej dostępny i wygodny.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Szybkie odpowiedzi",
    text: "Pozwala użytkownikom szybko znaleźć odpowiedzi na swoje pytania, bez konieczności przeszukiwania wielu źródeł.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Zadaj pytanie",
    text: "Pozwala użytkownikom szybko znaleźć odpowiedzi na swoje pytania, bez konieczności przeszukiwania wielu źródeł.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Lepszy każdego dnia",
    text: "Aplikacja wykorzystuje przetwarzanie języka naturalnego, aby zrozumieć zapytania użytkowników i zapewnić dokładne i odpowiednie odpowiedzi.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
