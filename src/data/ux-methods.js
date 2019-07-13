import ab_testing_main from "../images/methods/ab_testing-main.jpg"
import competitive_analysis_main from "../images/methods/competitive_analysis-main.jpg"
import contextual_inquiry_main from "../images/methods/contextual_inquiry-main.jpg"
import paper_prototype_main from "../images/methods/paper_prototype-main.jpg"
import ux_strategy_main from "../images/methods/ux_strategy-main.jpg"
import wireframes_main from "../images/methods/wireframes-main.jpg"

import ab_testing_steps from "../images/methods/ab_testing-second.jpg"
import competitive_analysis_steps from "../images/methods/competitive_analysis-second.jpg"
import contextual_inquiry_steps from "../images/methods/contextual_inquiry-second.jpg"
import paper_prototype_steps from "../images/methods/paper_prototype-second.jpg"
import ux_strategy_steps from "../images/methods/ux_strategy-second.jpg"
import wireframes_steps from "../images/methods/wireframes-second.jpg"

import ab_testing_tips from "../images/methods/ab_testing-third.jpg"
import competitive_analysis_tips from "../images/methods/competitive_analysis-third.jpg"
import contextual_inquiry_tips from "../images/methods/contextual_inquiry-third.jpg"
import paper_prototype_tips from "../images/methods/paper_prototype-third.jpg"
import ux_strategy_tips from "../images/methods/ux_strategy-third.jpg"
import wireframes_tips from "../images/methods/wireframes-third.jpg"

const uxMethods = {
  ab_testing: {
    title: "A/B Testing",
    url: "/ab-testing/",
    images: {
      main: { ab_testing_main },
      steps: { ab_testing_steps },
      tips: { ab_testing_tips },
    },
    resources: [
      {
        source: "Hubspot",
        url: "https://blog.hubspot.com/marketing/how-to-do-a-b-testing",
        title: "How to Do A/B Testing: A Checklist You'll Want to Bookmark"
      },
      {
        source: "Optimizely",
        url: "https://www.optimizely.com/optimization-glossary/ab-testing/",
        title: "A/B Testing",
        notes: "(info on A/B Testing, but also a good tool for it!)"
      },
      {
        source: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/A/B_testing",
        title: "A/B Testing",
        notes: "(info on A/B Testing)"
      },
      {
        source: "Conversion Sciences",
        url: "https://conversionsciences.com/ab-testing-tools/",
        title: "20 Most Recommended A/B Testing Tools"
      }
    ]
  },
  competitive_analysis: {
    title: "Competitive Analysis",
    url: "/competitive-analysis/",
    images: {
      main: { competitive_analysis_main },
      steps: { competitive_analysis_steps },
      tips: { competitive_analysis_tips },
    },
    resources: [
      {
        source: "Wikipedia",
        url: "https://en.wikipedia.org/wiki/Competitor_analysis",
        title: "Competitor analysis"
      },
      {
        source: "Usability Geek",
        url: "https://usabilitygeek.com/how-to-do-ux-competitor-analysis/",
        title: "How To Do A UX Competitor Analysis: A Step By Step Guide"
      }
    ]
  },
  contextual_inquiry: {
    title: "Contextual Inquiry",
    url: "/contextual-inquiry/",
    images: {
      main: { contextual_inquiry_main },
      steps: { contextual_inquiry_steps },
      tips: { contextual_inquiry_tips },
    },
    resources: [
      {
        source: "AirTable",
        url: "https://airtable.com",
        notes: "(a great tool for compiling findings across projects)"
      },
      {
        source: "Miro",
        url: "https://miro.com",
        notes: "(a great tool for compiling findings with multiple collaborators)"
      },
      {
        source: "UX Collective",
        url: "https://uxdesign.cc/contextual-inquiry-a-primer-14e2e0696fb9",
        title: "Go beyond user interviews with contextual inquiry"
      }
    ]
  },
  paper_prototype: {
    title: "Paper Prototype",
    url: "/paper-prototype/",
    images: {
      main: { paper_prototype_main },
      steps: { paper_prototype_steps },
      tips: { paper_prototype_tips },
    },
    resources: [
      {
        sourceName: "placeholder",
        url: "https://placeholder.ca",
        linkTitle: "placeholder"
      }
    ]
  },
  ux_strategy: {
    title: "UX Strategy",
    url: "/ux-strategy/",
    images: {
      main: { ux_strategy_main },
      steps: { ux_strategy_steps },
      tips: { ux_strategy_tips },
    },
    resources: [
      {
        sourceName: "placeholder",
        url: "https://placeholder.ca",
        linkTitle: "placeholder"
      }
    ]
  },
  wireframes: {
    title: "Wireframes",
    url: "/wireframes/",
    images: {
      main: { wireframes_main },
      steps: { wireframes_steps },
      tips: { wireframes_tips },
    },
    resources: [
      {
        sourceName: "placeholder",
        url: "https://placeholder.ca",
        linkTitle: "placeholder"
      }
    ]
  },
}

export default uxMethods
