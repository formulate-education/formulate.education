type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "hello@formulate.education",
  title: "Formulate.education",
  // profile: "/profile.webp",
  description:
    "Formulate Education is a non-profit organization that aims to transform the way students engage with higher education.",
  socials: [
    {
      label: "Github",
      link: "https://github.com/MaeWolff",
    },
  ],
};

export default presentation;
