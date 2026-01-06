import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Sarvar",
  EMAIL: "contact@sarvarbek.online",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Welcome",
  DESCRIPTION: "Hi, I am Sarvar, a junior software engineer passionate about building web applications and learning new technologies.",
};

export const BLOG: Metadata = {
  TITLE: "My Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "GitHub",
    HREF: "https://github.com/IlyosovSarvarbek"
  },
  { 
    NAME: "Telegram",
    HREF: "https://t.me/SarvarbekIlyosov",
  }
];
