// Main images (main section)
import sparq_next_gen_main from "../images/work/sparq-next-gen-01.jpg"
import otherly_main from "../images/work/otherly-01.jpg"
import party_in_my_dorm_main from "../images/work/pimd-mockup.jpg"
import meego_village_main from "../images/work/meego-mockup.jpg"
import smash_monsters_main from "../images/work/smash-mockup.jpg"
import fifa_main from "../images/work/fifa-mockup.jpg"
import perfect_drift_main from "../images/work/perfect-drift-mockup.jpg"
import whats_your_thing_main from "../images/work/whats-your-thing-mockup.jpg"
import the_1_percent_main from "../images/work/the-1-percent-01.jpg"
import fifa_ultimate_team_main from "../images/work/fifa-ultimate-mock.jpg"

/*
ex:
  ux_method_name: {
    title: "Title of method",
    url: "//url-for-page",
    images: {
      main: {
        src: variable_name_for_image_declared_above,
        alt: "Alt text to appear with image"
      },
      steps: {
        src: variable_name_for_image_declared_above,
        alt: "Alt text to appear with image"
      },
      tips: {
        src: variable_name_for_image_declared_above,
        alt: "Alt text to appear with image"
      }
    },
    resources: [
      {
        source: "Name of the resource (REQUIRED)",
        url: "/https://self.explanatory.com (REQUIRED)"",
        title: "Title to be linkified",
        notes: "(extra notes to follow the link)",
      },
      {
        source: "Name of the resource (REQUIRED)",
        url: "/https://self.explanatory.com (REQUIRED)"",
        title: "Title to be linkified",
        notes: "(extra notes to follow the link)",
      }
    ]
  }


*/
const projects = {
  sparq_next_gen: {
    title: "Sparq Next Gen",
    url: "/sparq-next-gen",
    images: {
      main: {
        src: sparq_next_gen_main,
        alt: "",
      },
    },
    categories: ["UX Design"],
  },
  otherly: {
    title: "Otherly",
    url: "/otherly",
    images: {
      main: {
        src: otherly_main,
        alt: "",
      },
    },
    categories: ["UX Strategy"],
  },
  party_in_my_dorm: {
    title: "Party in my Dorm",
    url: "/party-in-my-dorm",
    images: {
      main: {
        src: party_in_my_dorm_main,
        alt: "",
      },
    },
    categories: ["UX Design", "Product Management"],
  },
  meego_village: {
    title: "Meego Village",
    url: "/meego-village",
    images: {
      main: {
        src: meego_village_main,
        alt: "",
      },
    },
    categories: ["UX Design", "Product Management"],
  },
  smash_monsters: {
    title: "S.M.A.S.H Monsters",
    url: "/smash",
    images: {
      main: {
        src: smash_monsters_main,
        alt: "",
      },
    },
    categories: ["UX Consultation"],
  },
  fifa: {
    title: "FIFA",
    url: "/fifa",
    images: {
      main: {
        src: fifa_main,
        alt: "",
      },
    },
    categories: ["UX Design", "Game Design"],
  },
  perfect_drift: {
    title: "Perfect Drift",
    url: "/perfect-drift",
    images: {
      main: {
        src: perfect_drift_main,
        alt: "",
      },
    },
    categories: ["Game Design", "Project Management"],
  },
  whats_your_thing: {
    title: "whatsyourthing",
    url: "/whats-your-thing",
    images: {
      main: {
        src: whats_your_thing_main,
        alt: "",
      },
    },
    categories: ["Personal Project"],
  },
  the_1_percent: {
    title: "The 1%",
    url: "/the-1-percent",
    images: {
      main: {
        src: the_1_percent_main,
        alt: "",
      },
    },
    categories: ["UX", "Branding", "Mobile"],
  },
  fifa_ultimate_team: {
    title: "FIFA Ultimate Team",
    url: "/fifa-ultimate-team",
    images: {
      main: {
        src: fifa_ultimate_team_main,
        alt: "",
      },
    },
    categories: ["UX Design", "Game Design"],
  },
}

export default projects
