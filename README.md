This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

Приемочное тестирование

1. Логика работы приложения соответствует описанию использования, который приложен в макете в Figma.
2. Пользователь может зарегистрироваться в приложении.
3. Пользователь может авторизоваться под своими данными в приложении. 
4. Авторизация не слетает при перезагрузки приложения.
5. Пользователь может запустить проигрывание трека
6. Пользователь может переключить на слежующий/предыдущий трек
7. Пользователь может перемешать список треков в рандомном порядке
8. Пользователь может зациклить один трек
9. По окончанию трека автоматически запускается следудующий трек из списка
10. Пользователь может работать с прогрессбаром и перематывать трек
11. Пользователь может изменить громкость с помощью соответствующего ползунка
12. Авторизованный пользователь может поставить лайк треку
13. Все лайкнутые треки попадают в плейлист Избранное
14. Лайки и удаление лайков / добавление / удаление трека из избранного происходит без перезагрузки страницы
15. Пользователь может найти трек с помощью поиска
16. Если запросу пользователя в поиске не соответствует ни один трек из списка, выводится соответствующая надпись
17. Пользователь может воспользоваться фильтрацией по исполнителю и жанру
18. Пользователь может воспользоваться сортировкой по году выпуска
19. Пользовать может разлогиниться без перезагрузки страницы
20. Корректно реализована логика работа с api, ошибки обрабатываются и выводятся пользователю
21. Оптимизируем приложение с помощью хуков UseMemo и useCallback
22. Ключевые компоненты приложения покрыты тестами
23. 
21. Оформлен файл Readme.