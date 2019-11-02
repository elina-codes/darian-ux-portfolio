// Main images (main section)
import ab_testing_main from "../images/methods/ab_testing-main.jpg"
import competitive_analysis_main from "../images/methods/competitive_analysis-main.jpg"
import contextual_inquiry_main from "../images/methods/contextual_inquiry-main.jpg"
import paper_prototype_main from "../images/methods/paper_prototype-main.jpg"
import ux_strategy_main from "../images/methods/ux_strategy-main.jpg"
import wireframes_main from "../images/methods/wireframes-main.jpg"
import discovery_session_main from "../images/methods/discovery_session-main.jpg"
import affinity_diagram_main from "../images/methods/affinity_diagram-main.jpg"
import usability_test_main from "../images/methods/usability_test-main.jpg"

// Second images (steps section)
import ab_testing_steps from "../images/methods/ab_testing-second.jpg"
import competitive_analysis_steps from "../images/methods/competitive_analysis-second.jpg"
import contextual_inquiry_steps from "../images/methods/contextual_inquiry-second.jpg"
import paper_prototype_steps from "../images/methods/paper_prototype-second.jpg"
import ux_strategy_steps from "../images/methods/ux_strategy-second.jpg"
import wireframes_steps from "../images/methods/wireframes-second.jpg"
import discovery_session_steps from "../images/methods/discovery_session-second.jpg"
import affinity_diagram_steps from "../images/methods/affinity_diagram-second.jpg"
import usability_test_steps from "../images/methods/usability_test-second.jpg"

// Third images (tips section)
import ab_testing_tips from "../images/methods/ab_testing-third.jpg"
import competitive_analysis_tips from "../images/methods/competitive_analysis-third.jpg"
import contextual_inquiry_tips from "../images/methods/contextual_inquiry-third.jpg"
import paper_prototype_tips from "../images/methods/paper_prototype-third.jpg"
import ux_strategy_tips from "../images/methods/ux_strategy-third.jpg"
import wireframes_tips from "../images/methods/wireframes-third.jpg"
import discovery_session_tips from "../images/methods/discovery_session-third.jpg"
import affinity_diagram_tips from "../images/methods/affinity_diagram-third.jpg"
import usability_test_tips from "../images/methods/usability_test-third.jpg"

/*
ex:
  ux_method_name: {
    title: "Title of method",
    url: "/url-for-page",
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
        url: "https://self.explanatory.com (REQUIRED)"",
        title: "Title to be linkified",
        notes: "(extra notes to follow the link)",
      },
      {
        source: "Name of the resource (REQUIRED)",
        url: "https://self.explanatory.com (REQUIRED)"",
        title: "Title to be linkified",
        notes: "(extra notes to follow the link)",
      }
    ]
  }


*/
const uxMethods = {
  ab_testing: {
    title: "A/B Testing",
    url: "/ab-testing/",
    images: {
      main: {
        src: ab_testing_main,
        alt:
          "Two similar highligher caps, side by side, positioned in the same way, but one is pink and the other is yellow.",
      },
      steps: {
        src: ab_testing_steps,
        alt:
          "A person writing down notes in between two laptops displaying two different screens.",
      },
      tips: {
        src: ab_testing_tips,
        alt:
          "Two handheld gaming devices, side by side, positioned in the same way, but one is pink and the other is black.",
      },
    },
    resources: [
      {
        source: "Hubspot",
        url: "https://blog.hubspot.com/marketing/how-to-do-a-b-testing",
        title: "How to Do A/B Testing: A Checklist You'll Want to Bookmark",
      },
      {
        source: "Optimizely",
        url: "https://www.optimizely.com/optimization-glossary/ab-testing/",
        title: "A/B Testing",
        notes: "(info on A/B Testing, but also a good tool for it!)",
      },
      {
        source: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/A/B_testing",
        title: "A/B Testing",
        notes: "(info on A/B Testing)",
      },
      {
        source: "Conversion Sciences",
        url: "https://conversionsciences.com/ab-testing-tools/",
        title: "20 Most Recommended A/B Testing Tools",
      },
    ],
  },
  affinity_diagram: {
    title: "Affinity Diagram",
    url: "/affinity-diagram/",
    images: {
      main: {
        src: affinity_diagram_main,
        alt:
          "A woman placing a sticky note on a wall of sticky notes in front of a few people.",
      },
      steps: {
        src: affinity_diagram_steps,
        alt:
          "Several piles of sticky notes, markers, and tape.",
      },
      tips: {
        src: affinity_diagram_tips,
        alt:
          "A woman reading a sticky note that another woman is pointing to.",
      },
    },
    resources: [
      {
        source: "nnGroup",
        url: "https://www.nngroup.com/articles/affinity-diagram/",
        title: "Affinity Diagramming for Collaboratively Sorting UX Findings and Design Ideas",
        notes: "(this one is long, but it's very detailed and very good)",
      },
      {
        source: "Interaction Design Foundation",
        url: "https://www.interaction-design.org/literature/article/affinity-diagrams-learn-how-to-cluster-and-bundle-ideas-and-facts",
        title: "Affinity Diagrams – Learn How to Cluster and Bundle Ideas and Facts",
      },
      {
        source: "Miro",
        url: "https://miro.com/",
        title: "Miro - Team Collaboration Software",
        notes: "(one of the best tools out there with other great uses too)",
      },
    ],
  },
  competitive_analysis: {
    title: "Competitive Analysis",
    url: "/competitive-analysis/",
    images: {
      main: {
        src: competitive_analysis_main,
        alt: "A person using their laptop with an SWOT diagram on the display.",
      },
      steps: {
        src: competitive_analysis_steps,
        alt: "Three people intently focused on one laptop screen.",
      },
      tips: {
        src: competitive_analysis_tips,
        alt: "A person looking at an analysis on their laptop.",
      },
    },
    resources: [
      {
        source: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Competitor_analysis",
        title: "Competitor analysis",
      },
      {
        source: "Usability Geek",
        url: "https://usabilitygeek.com/how-to-do-ux-competitor-analysis/",
        title: "How To Do A UX Competitor Analysis: A Step By Step Guide",
      },
    ],
  },
  contextual_inquiry: {
    title: "Contextual Inquiry",
    url: "/contextual-inquiry/",
    images: {
      main: {
        src: contextual_inquiry_main,
        alt: "A woman watching a man work on his laptop.",
      },
      steps: {
        src: contextual_inquiry_steps,
        alt: "A woman watching another woman work on her computer.",
      },
      tips: {
        src: contextual_inquiry_tips,
        alt: "Two men high-fiving in front of a computer.",
      },
    },
    resources: [
      {
        source: "AirTable",
        url: "https://airtable.com",
        notes: "(a great tool for compiling findings across projects)",
      },
      {
        source: "Miro",
        url: "https://miro.com",
        notes:
          "(a great tool for compiling findings with multiple collaborators)",
      },
      {
        source: "UX Collective",
        url: "https://uxdesign.cc/contextual-inquiry-a-primer-14e2e0696fb9",
        title: "Go beyond user interviews with contextual inquiry",
      },
    ],
  },
  discovery_session: {
    title: "Discovery Session",
    url: "/discovery-session/",
    images: {
      main: {
        src: discovery_session_main,
        alt: "Two women reviewing notes in a notepad."
      },
      steps: {
        src: discovery_session_steps,
        alt: "A group of people at a table with their laptops open, focusing on a man standing in front of a whiteboard."
      },
      tips: {
        src: discovery_session_tips,
        alt: "A woman looking at her laptop and writing down notes in her notepad."
      }
    },
    resources: [
      {
        source: "The Digital Project Manager",
        url: "https://thedigitalprojectmanager.com/how-to-run-project-discovery-workshop-ask-the-right-questions/",
        title: "How To Run A Great Project Discovery Workshop – Ask The Right Questions",
        notes: "(a lot of great questions broken up by discipline)",
      },
      {
        source: "Mobify",
        url: "https://docs.mobify.com/design/discovery-phase/conducting-ux-dicovery/",
        title: "Conducting a UX Discovery",
        notes: "(the first step has some good example questions and a script to follow, though the examples are a little too specific)",
      },
      {
        source: "Hubspot",
        url: "https://blog.hubspot.com/agency/client-discovery-process",
        title: "The client discovery process",
        notes: "(to help differentiate between a discovery session and the discovery process)",
      }
    ]
  },
  paper_prototype: {
    title: "Paper Prototype",
    url: "/paper-prototype/",
    images: {
      main: {
        src: paper_prototype_main,
        alt:
          "A few pieces of paper, with hand drawn interfaces on them, being interacted with.",
      },
      steps: {
        src: paper_prototype_steps,
        alt:
          "A person cutting orange paper on cutting board with a hobby knife.",
      },
      tips: {
        src: paper_prototype_tips,
        alt:
          "Carefully placed papers with wireframes on them, next to a few perfectly lined up pencils.",
      },
    },
    resources: [
      {
        source: "UX Planet",
        url: "https://uxplanet.org/the-magic-of-paper-prototyping-51693eac6bc3",
        title: "The Magic of Paper Prototyping",
      },
      {
        source: "inVision",
        url: "https://www.invisionapp.com",
        notes: "(a great tool for digital prototyping)",
      },
    ],
  },
  usability_test: {
    title: "Usability Test",
    url: "/usability-test/",
    images: {
      main: {
        src: usability_test_main,
        alt:
          "A man working on a computer while one woman is taking notes and another woman is observing.",
      },
      steps: {
        src: usability_test_steps,
        alt:
          "A hand holding a pink sticky note that says 'Run a Usability Test' in front of several other blurred out sticky notes on a wall.",
      },
      tips: {
        src: usability_test_tips,
        alt:
          "A woman working at her computer while a black kitten is touching her arm.",
      },
    },
    resources: [
      {
        source: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Usability_testing",
        title: "Usability testing",
      },
      {
        source: "Experience UX",
        url: "https://www.experienceux.co.uk/faqs/what-is-usability-testing/",
        title: "What is usability testing?",
      },
      {
        source: "usability.gov",
        url: "https://www.usability.gov/how-to-and-tools/methods/usability-testing.html",
        title: "Usability Testing",
        notes: "(a good, condensed article)",
      },
      {
        source: "User Testing",
        url: "https://www.usertesting.com/",
        title: "UserTesting: Create A Better Customer Experience",
        notes: "(a great tool for quick, unmoderated user testing)",
      },
    ],
  },
  ux_strategy: {
    title: "UX Strategy",
    url: "/ux-strategy/",
    images: {
      main: {
        src: ux_strategy_main,
        alt: "A man and woman writing on a transparent board.",
      },
      steps: {
        src: ux_strategy_steps,
        alt: "A few people sitting around a woman while she writes down notes.",
      },
      tips: {
        src: ux_strategy_tips,
        alt:
          "A desk with a calendar, laptop, clock, coffee and several other objects on it.",
      },
    },
    resources: [
      {
        source: "Medium",
        url:
          "https://medium.com/@MentorMate/what-is-user-experience-strategy-7af34d694fbb",
        title: "What is User Experience Strategy?",
      },
      {
        source: "Bunnyfoot",
        url: "https://bunnyfoot.com/2019/03/what-is-ux-strategy/",
        title: "What is UX Strategy?",
      },
      {
        source: "Nielsen Norman Group",
        url: "https://www.nngroup.com/videos/beware-getting-ux-budget/",
        title: "UX Maturity and Budget",
        notes: "(a 4 minute video that explains the basics of UX Maturity)",
      },
      {
        source: "prototypr.io",
        url:
          "https://blog.prototypr.io/lean-ux-over-waterfall-development-model-3157153893e9",
        title: "Lean UX over waterfall development model",
      },
    ],
  },
  wireframes: {
    title: "Wireframes",
    url: "/wireframes/",
    images: {
      main: {
        src: wireframes_main,
        alt: "A rough sketch of an interface on a notepad.",
      },
      steps: {
        src: wireframes_steps,
        alt: "A rough sketch, showing a few boxes and scribbled lines.",
      },
      tips: {
        src: wireframes_tips,
        alt:
          "A rough sketch of an interface on a notepad, next to a phone and pen.",
      },
    },
    resources: [
      {
        source: "The UX Review",
        url: "https://theuxreview.co.uk/wireframes-beginners-guide",
        title: "Wireframes – The Beginner’s Guide",
      },
      {
        source: "Mockplus",
        url:
          "https://www.mockplus.com/blog/post/wireframe-mockup-prototype-selection-of-prototyping-tools",
        title:
          "Wireframe vs Mockup vs Prototype and Selection of Prototyping Tools",
      },
    ],
  },
}

export default uxMethods
