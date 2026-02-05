const translations = {
    en: {
        'nav.about': 'About',
        'nav.why': 'Smart Trading',
        'nav.installation': 'Installation',
        'nav.geted': 'Start',
        'hero.title': 'Precision DeFi Tracking & Trading on axiom.trade',
        'hero.description': 'Built for serious traders, Ai tool for Axiom delivers raw speed, smart metrics, and razor-sharp alerts – all wired into the beating heart of axiom.trade. Track trends, execute faster than the competition, and ride every market pulse with surgical precision.',
        'hero.openSoftware': 'Completely open software',
        'hero.freeFeatures': 'Explore free features',
        'smartTrading.badge': 'Smart Trading',
        'smartTrading.title': 'Smart Trade Triggers',
        'smartTrading.description': 'Create advanced trade automation using if-this-then-that logic (price, volume, wallet activity, etc.) – no coding required. Enables reactive strategies like sniping, panic-exit failsafes, or whale-copying without manual execution.',
        'installation.badge': 'Installation',
        'installation.title': 'Activate Ai tool for Axiom',
        'installation.videoTitle': 'How to Install',
        'modal.title': 'Desktop Only Feature',
        'modal.text': 'Sorry, but we, like axiom.trade, work only with desktop connections. You cannot add us to your bookmarks from a mobile device!',
        'modal.button': 'Understood',
        'dragModal.title': 'Drag to Bookmarks',
        'dragModal.text': 'Please drag this button to your bookmarks bar instead of clicking it. This is required for the extension to work properly.',
        'dragModal.button': 'Got it',
        'installation.buttonText': 'Ai tool for Axiom Menu',
        'installation.dragHint': '👆 Drag this button to your bookmarks bar',
    },
    ru: {
        'nav.about': 'О нас',
        'nav.why': 'Смарт-трейдинг',
        'nav.installation': 'Установка',
        'nav.getStarted': 'Начать',
        'hero.title': 'Точный DeFi-трекер и трейдинг на axiom.trade',
        'hero.description': 'Ai tool for Axiom для серьёзных трейдеров: высокая скорость, умные метрики и точные алерты — всё глубоко интегрировано с axiom.trade. Отслеживайте тренды, входите быстрее конкурентов и ловите каждый импульс рынка.',
        'hero.openSoftware': 'Полностью открытое ПО',
        'hero.freeFeatures': 'Изучить бесплатные функции',
        'smartTrading.badge': 'Смарт-трейдинг',
        'smartTrading.title': 'Умные торговые триггеры',
        'smartTrading.description': 'Создавайте продвинутую автоторговлю по логике «если-то» (цена, объём, активность кошельков и т. п.) — без кода. Реагируйте на рынок: снайпинг, аварийный выход, копирование китов — без ручных действий.',
        'installation.badge': 'Установка',
        'installation.title': 'Активация Ai tool for Axiom',
        'installation.videoTitle': 'Как установить',
        'modal.title': 'Функция только для десктопа',
        'modal.text': 'Как и axiom.trade, мы работаем только через десктоп. Добавить нас в закладки с мобильного нельзя.',
        'modal.button': 'Понятно',
        'dragModal.title': 'Перетащите в закладки',
        'dragModal.text': 'Перетащите эту кнопку на панель закладок вместо клика. Это необходимо для корректной работы расширения.',
        'dragModal.button': 'Ок',
        'installation.buttonText': 'Меню Ai tool for Axiom',
        'installation.dragHint': '👆 Перетащите эту кнопку на панель закладок',
    },
};

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.setAttribute('lang', lang);
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        if (dict[key]) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-translate-html]').forEach(el => {
        const key = el.getAttribute('data-translate-html');
        if (dict[key]) el.innerHTML = dict[key];
    });
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.textContent = lang.toUpperCase();
    });
    localStorage.setItem('synusodix_lang', lang);
}

function toggleLanguage() {
    const current = localStorage.getItem('synusodix_lang') || 'en';
    const next = current === 'en' ? 'ru' : 'en';
    applyLanguage(next);
}

function initLanguage() {
    const stored = localStorage.getItem('synusodix_lang');
    const initial = stored ? stored : 'en';
    applyLanguage(initial);
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            toggleLanguage();
        });
    });
    document.querySelectorAll('a[data-translate="nav.getStarted"]').forEach(a => {
        a.removeAttribute('target');
        a.onclick = e => {
            e.preventDefault();
            const el = document.querySelector('#installation');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
    });
}

document.addEventListener('DOMContentLoaded', initLanguage);