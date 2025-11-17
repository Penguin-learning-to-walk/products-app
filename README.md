# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Тестовое задание

Создать список карточек, на каждой из которых выводится картинка и любая информация на ваш вкус, которая пришла с эндпоинта или созданная пользователем. 

Дизайн не важен, главное, чтобы было просто и аккуратно. По стэку ориентируемся на список ниже. Остальные решения на вас. 
Стэк: Typescript \ React/Next  \ Redux || Zustand

Для задачи можно выбрать любое публичное api, например, отсюда. Все полученные и созданные данные хранить во внутреннем store

Можно использовать ui библиотеки, библиотеки для работы с формой. 
Будет оцениваться подход к заданию, качество и структура кода.

Задача 1. Вывести список продуктов
На странице /products 
вывести весь список продуктов на карточке должна быть иконка лайка. При нажатии на которую, ставится или убирается like. Иконка должна подкрашиваться, когда проставлен like. На карточке должна быть иконка удаления. При нажатии на которую, карточка удаляется.
добавить фильтр для просмотра всех карточек и карточек, добавленных в избранное
контент карточки. Текст должен быть урезан, чтобы у карточек была одинаковая высота. При клике на любом месте карточки (кроме иконки лайка и кнопки удаления) мы должно попадать на отдельную страницу карточки.

Задача 2. Страница продукта
На странице /products/:id 
вывести более подробную информацию о продукте. Сделать кнопку для перехода на основную страницу.

Задача 3. Создание продукта
На отдельной странице /create- product
реализовать создание продукта создать форму с полями. Поля обязательные и с минимальной валидацией. При отправке формы, сохранить данные в общий store.

Бонусы
Реализовать пагинацию списка
Реализовать возможность редактирования карточки продукта
Реализовать дополнительную фильтрацию
Реализовать поиск (без кнопки отправки) 