import React from "react"

import projects from "../data/projects"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridLayout from "../components/grid_layout"
import ExperienceItem from "../components/portfolio/section-experience"

import adaptTheProcess from "../images/work/svg/adapt-the-process.svg"
import setGoals from "../images/work/svg/set-goals.svg"
import uxItAll from "../images/work/svg/ux-it-all.svg"

import "../components/portfolio/page-portfolio.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section id="home" className="banner">
      <div className="wrapper">
        <h1 className="banner__title">Darian Grant</h1>
        <h2 className="banner__subtitle">UX Designer in Vancouver, Canada</h2>
      </div>
    </section>

    <section id="what-i-do">
      <div className="wrapper">
        <h2 className="section__title">What I do</h2>
        <div className="grid">
          <div className="grid__item">
            <img src={setGoals} alt="" className="what-i-do__img" />
            <h3>Set Goals</h3>
            <p>
              I work with you to define and solidify your goals so everyone
              understands why we’re doing what we’re doing, and the overall
              direction of the company and project.
            </p>
          </div>
          <div className="grid__item">
            <img src={adaptTheProcess} alt="" className="what-i-do__img" />
            <h3>Adapt the Process</h3>
            <p>
              I then adapt the UX process to best fit your goals, timeframe,
              budget, and project, then define a roadmap.
            </p>
          </div>
          <div className="grid__item">
            <img src={uxItAll} alt="" className="what-i-do__img" />
            <h3>UX it All!</h3>
            <p>
              I then work where I'm needed to make sure your project is
              researched, wireframed, prototyped, tested, documented, released,
              reiterated, and hitting your KPIs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="work">
      <div className="wrapper">
        <h2 className="section__title">Work</h2>
        <GridLayout gridItems={projects} />
      </div>
    </section>

    <section id="experience">
      <div className="wrapper">
        <h2 className="section__title">Experience</h2>
        <div className="experience-container">
          <ExperienceItem
            date="June 2017 - Present"
            company="Moz | STAT Search Analytics"
            position="Principal UX Designer & Strategist"
          >
            Acquired by Moz in October 2018, I’m currently helping the company
            build their UX culture and processes, while also supporting the
            product team to make confident decisions that will affect the future
            of the company.
          </ExperienceItem>

          <ExperienceItem
            date="Aug 2016 - June 2017"
            company="Freelance"
            position="UX Consultant"
          >
            Consultant on a new startup as well as several smaller projects. The
            main project was Otherly, where I analyzed their site metrics,
            performed usability tests and extensive research interviews, defined
            the target audience, redesigned the MVP and worked with their UI
            Designer to define the branding and mockups.
          </ExperienceItem>

          <ExperienceItem
            date="Aug 2015 - Aug 2016"
            company="Vision Critical"
            position="UX Designer"
          >
            On a design team of 7, our goal was to redesign their current SaaS
            platform. I conducted user research and analyses to define and solve
            problems, delivered wireframes, sitemaps, prototypes, and design
            documentation to the dev team, plus more.
          </ExperienceItem>

          <ExperienceItem
            date="Dec 2012 - Jan 2015"
            company="A Thinking Ape"
            position="UX Designer | Game Designer"
          >
            Worked on multiple mobile apps. Used our metrics tools to gather
            data on our users to justify design decisions for new features and
            additions. Also supported other projects with usability testing on
            low to hi fidelity prototypes.
          </ExperienceItem>

          <ExperienceItem
            date="Jan 2009 - Nov 2012"
            company="EA Canada"
            position="UX Designer | Game Designer"
          >
            Worked on 5 different titles across console, mobile and web for over
            3 years. Introduced and taught best UX practices along the way.
            Worked closely with the user research department to gather data for
            prototypes of all levels, and to justify design decisions for new
            features.
          </ExperienceItem>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
