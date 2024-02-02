<a name="readme-top"></a>

<div align="center">
  <h3 align="center">spotify-queue</h3>
  <p align="center">
    A web app that allows people to add songs to your spotify queue.
    <br />
    <a href="https://spotify.drischdaan.dev/"><strong>Explore the page »</strong></a>
    <br />
  </p>
</div>

<div align="center">

[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>

## ❗ Important

This project is still in development and not ready for production use.
Only use it for testing purposes.

## 🛠️ Built With

This project was build with following frameworks/libraries:

[![Next JS][NextJs]][NextJs-url]
[![TailwindCSS][TailwindCSS]][TailwindCSS-url]

<img src="https://i.imgur.com/ZJREqpE.jpeg" height=700>

## 🚀 Getting Started

Create an environment file `.env.local` in the root directory and add the following variables:

```environment
DATABASE_URL=<postgres-database-url> # The connection string to your postgres database
SPOTIFY_CLIENT_ID=<spotify-client-id> # The client id of your spotify app
SPOTIFY_CLIENT_SECRET=<spotify-client-secret> # The client secret of your spotify app
SPOTIFY_STATE_KEY=<state-key> # A random string that is used to set the access token
```

After that run the following commands:

```bash
# Install dependencies
$ pnpm install

# Run the development server
$ pnpm run dev
```

Open your browser and enter following url, after replacing `<spotify-client-id>`, `<state-key>` and `<host>`:

```text
https://accounts.spotify.com/authorize?response_type=code&client_id=<spotify-client-id>&scope=user-read-email,user-read-currently-playing,user-read-playback-state,user-modify-playback-state&redirect_uri=<host>/api/spotify/callback&state=<state-key>
```

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🫱🏽‍🫲🏽 Contact

[![Github][Github]][Github-url]
[![Discord][Discord]][Discord-url]
[![Twitter][Twitter]][Twitter-url]

<div>
    <a href="https://www.buymeacoffee.com/Drischdaan">
        <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=Drischdaan&button_colour=BD5FFF&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00">
    </a>
</div>

<!-- Variables -->

[issues-shield]: https://img.shields.io/github/issues/Drischdaan/drischdaan.dev.svg?style=for-the-badge
[issues-url]: https://github.com/Drischdaan/drischdaan.dev/issues
[license-shield]: https://img.shields.io/github/license/Drischdaan/drischdaan.dev.svg?style=for-the-badge
[license-url]: https://github.com/Drischdaan/drischdaan.dev/blob/master/LICENSE.txt

<!-- Frameworks -->

[NextJs]: https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white
[NextJs-url]: https://nextjs.org/
[TailwindCSS]: https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/

<!-- Socials -->

[Github]: https://skillicons.dev/icons?i=github
[Github-url]: https://github.com/Drischdaan
[Discord]: https://skillicons.dev/icons?i=discord
[Discord-url]: https://discord.com/users/244115221776433152
[Twitter]: https://skillicons.dev/icons?i=twitter
[Twitter-url]: https://twitter.com/Drischdaan

<!-- https://github.com/tandpfun/skill-icons -->
<!-- https://github.com/Ileriayo/markdown-badges -->
