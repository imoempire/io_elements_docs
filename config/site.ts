export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "io-elements",
  description: "Make beautiful react native ui",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs/Introduction",
    },
    {
      label: "Components",
      href: "/docs/Button",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    // {
    //   label: "About",
    //   href: "/about",
    // },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com/imoempire/IO-ELEMENTS",
    twitter: "https://twitter.com/getnextui",
    docs: "/docs",
    discord: "https://www.npmjs.com/package/io-elements",
    // sponsor: "https://patreon.com/jrgarciadev",
  },
};
