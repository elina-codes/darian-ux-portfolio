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
            <h3>Refine and Set Goals</h3>
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
            <h3>UX Everything!</h3>
            <p>
              I then work where needed to make sure your project is
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
            date="Feb 2021 - Present"
            company="Moz | STAT Search Analytics"
            position="Principal UX Strategist"
          >
            Working back at Moz on the highest priority projects. Setting the strategy for each project, assigning designers to different parts, and contributing where needed to in order to complete the projects. Also working with other departments to increase UX maturity, and build proper design processes and culture across the company.
          </ExperienceItem>

          <ExperienceItem
            date="Feb 2020 - Feb 2021"
            company="ePACT Network Ltd"
            position="UX Director"
          >
            Increased UX and product maturity across the company by implementing tools and processes for every department to truly become user-centric, while staying focused on our business goals and considering our constraints.
          </ExperienceItem>

          <ExperienceItem
            date="June 2017 - Nov 2019"
            company="Moz | STAT Search Analytics"
            position="UX Manager"
          >
            (Acquired by Moz, originally STAT Search Analytics) Managing a team of 5 and directing the UX culture and processes, building cross-functional relationships with other departments, educating others on the role of UX Design, mentoring other designers, conducting research, guiding the product team, and empowering confident decisions that will affect the future of the company.
          </ExperienceItem>

          <ExperienceItem
            date="Aug 2016 - Present"
            company="Freelance"
            position="UX Strategist & Consultant"
          >
            Applying the UX process to a wide range of projects, from start-ups to simple site redesigns. 
            All work I do is justified by data and works towards your overarching goals. I assess, tailor, and execute on all things UX.
          </ExperienceItem>

          <ExperienceItem
            date="Apr 2015 - May 2017"
            company="Alida"
            position="Lead UX Designer"
          >
            Lead designer on the largest part of Alida's platform. Was also interim manager for a team of 6 UX designers, ranging in experience levels. I conducted user research and analyses to define and solve problems, delivered wireframes, sitemaps, prototypes, and design
            documentation to the dev team, plus more.
          </ExperienceItem>

          <ExperienceItem
            date="Dec 2012 - Jan 2015"
            company="A Thinking Ape"
            position="Senior UX Designer | Game Designer"
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
