# Vite + GSAP ScrollTrigger

Этот проект демонстрирует использование Vite и GSAP ScrollTrigger для создания анимаций при скролле.

## Описание

При скролле страницы появляются карточки с информацией. На десктопе заголовок фиксирован позади карточек, и пункты пагинации подсвечиваются в зависимости от текущей карточки.

## Файлы

### main.js

Основной файл JavaScript, который инициализирует анимации с использованием GSAP и ScrollTrigger.

- При загрузке страницы инициализируется функция `animateSection`, которая создает анимации для карточек в зависимости от размера экрана (десктоп или мобильный).
- На десктопе заголовок фиксирован позади карточек, и пункты пагинации подсвечиваются при скролле.
- На мобильных устройствах карточки появляются с эффектом плавного появления и смещения.

### style.css

Файл стилей, который содержит стили для карточек, контейнеров и элементов пагинации.

### index.html

Основной HTML файл, который содержит структуру страницы с контейнером для анимаций и карточками.

## Установка и запуск

1. Установите зависимости:
   ```bash
   npm install
   ```

2. Запустите проект:
   ```bash
   npm run dev
   ```

Откройте браузер и перейдите по адресу `http://localhost:3000`, чтобы увидеть анимации в действии.
