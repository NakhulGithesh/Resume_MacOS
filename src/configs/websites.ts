import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/NakhulGithesh"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/nakhulgithesh"
      },
      {
        id: "my-instagram",
        title: "Instagram",
        img: "img/sites/instagram.png",
        link: "https://instagram.com/nakhulgithesh/"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:nakhulgitheshwork@gmail.com"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "youtube",
        title: "YouTube",
        img: "img/sites/youtube.png",
        link: "https://www.youtube.com/"
      },
      {
        id: "x",
        title: "X",
        img: "img/sites/x.png",
        link: "https://x.com/"
      },
      {
        id: "chatgpt",
        title: "ChatGPT",
        img: "https://chat.openai.com/favicon.ico",
        link: "https://chatgpt.com/"
      },
      {
        id: "pinterest",
        title: "Pinterest",
        img: "img/sites/pinterest.svg",
        link: "https://www.pinterest.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "steam",
        title: "Steam",
        img: "img/sites/steam.svg",
        link: "https://store.steampowered.com/"
      }
    ]
  }
};

export default websites;
