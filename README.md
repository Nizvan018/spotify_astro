# Spotify Clon with Astro 🚀🎶

<div align="center">
  <br />
  <strong>This is a Spotify Clon made with Astro and using Web Transitions</strong>
</div>

![Desktop Screenshot](https://github.com/user-attachments/assets/dcf3f8b1-e49f-4f1e-8b00-18cf7cbddda0)

<div align="center">
  
  [![Contributors][contributors-shield]][contributors-url]
  [![Forks][forks-shield]][forks-url]
  [![Stargazers][stars-shield]][stars-url]
  [![Issues][issues-shield]][issues-url]
  
</div>
<br />

<p align="center">
  Do you love it?, <strong>Please give me a star! 🌟</strong>
</p>
<br />

## What is this about? 🤔

<br />

This project is a Spotify clone developed using Astro, which replicates the main functionalities of the original aplication: music playback, skipping tracks forwar and backward, adjusting the volume up and down, music paylist, and the cherry on the cake... Web Transitions!

It is base on a project created by [midudev](https://github.com/midudev) but adapted to match Spotify's latest interface (at the time of development) and includes some additional features, such as scrolling through songs and the original behavior of Spotify. For instance:

* Add functionalit to skip tracks forwar and backward.
* Clicking the back button during the first few seconds of a song changes to the previous track, but after the initial seconds, the back button will simply restart the current song.
* The song switches to the next one when it ends.

This project uses Astro, React, some Svelt code, TailwindCSS and Zustand for the global state.

<br />

## ✨ Getting started

1. Clone this repository
2. Install the dependencies:
```sh
npm i
```
3. Execute the project:
```sh
npm run dev
```
4. You are ready for coding!

<br />
<p align="center">
  <strong>¡As simple as that!</strong>
</p>
<br />

## ⚙️ Project structure

When you open the project, you'll find something like this:

```text
/
├── public/
│   ├── fonts/
│   ├── music/
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── icons/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   ├── colors.ts
│   │   └── data.ts
│   ├── pages/
│   │   ├── api/
│   │   ├── playlist/
│   │   └── index.astro
│   └── store/
│       └── playerStore.js
└── package.json
```

<br />
Here are the datails of the structure:

| Section                   | Description                                                                  |
| :------------------------ | :--------------------------------------------------------------------------- |
| `public/`                 | Stores the favicon, the fonts and the songs                                  |
| `src/components/`         | Contains the astro and react components                                      |
| `src/layouts/`            | Contains the main layout `Layout.astro`                                      |
| `src/pages/`              | Contains the index, the playlist pages and the API                           |
| `src/lib/`                | Contains `colors.ts` with the used colors and `data.ts` with the song's info |
| `src/store/`              | Here you can find the global state `playerStore.js` of zustand               |

<br />

## 💾 Dependencies used

The most important dependencies are listed here:

* [Astro 4](https://astro.build/blog/astro-4/)
* [React 18](https://es.react.dev/blog/2022/03/29/react-v18)
* [Svelte 4](https://svelte.dev/)
* [TailwindCSS 3](https://tailwindcss.com/blog/tailwindcss-v3)
* [Zustand](https://zustand-demo.pmnd.rs/)

## 🤝 How to contribute

This project is open source, so feel free to clone it, edit it and use it.

If you have any suggestion or improvement, you can contribute to this project in the following way:

1. Fork this project
2. Clone your fork with:
```sh
git clone <URL of your fork>`
```
3. Add the original repository as remote:
```sh
git remote add upstream <URL of the original repo>
```
4. Create your branch, make your changes and make a push them to your branch
5. Open a Pull Request (PR)

**Ensure that your commits are clean and descriptive**

## 🌟 If you love it, give me a star

If this project was helpful to you you or you liked it, please give me a star!, I would be very grateful! :D

See you coding 👋

## 💙 My social media

<p align="center">
  <a href="https://nizvan-dev.vercel.app"><img src="https://img.icons8.com/?size=50&id=9x65MLqCekT5&format=png&color=000000" alt="Website"/></a>
	<a href="mailto:nizvan.dev@gmail.com"><img src="https://img.icons8.com/?size=50&id=xLIkjgcmFOsC&format=png&color=000000" alt="Gmail"/></a>
	<a href="https://www.instagram.com/nizvan_dev/"><img src="https://img.icons8.com/?size=50&id=Xy10Jcu1L2Su&format=png&color=000000" alt="Instagram"/></a>
</p>

[contributors-shield]: https://img.shields.io/github/contributors/Nizvan018/spotify_astro.svg?style=for-the-badge
[contributors-url]: https://github.com/Nizvan018/spotify_astro/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Nizvan018/spotify_astro.svg?style=for-the-badge
[forks-url]: https://github.com/Nizvan018/spotify_astro/network/members
[stars-shield]: https://img.shields.io/github/stars/Nizvan018/spotify_astro.svg?style=for-the-badge
[stars-url]: https://github.com/Nizvan018/spotify_astro/stargazers
[issues-shield]: https://img.shields.io/github/issues/Nizvan018/spotify_astro.svg?style=for-the-badge
[issues-url]: https://github.com/Nizvan018/spotify_astro/issues
