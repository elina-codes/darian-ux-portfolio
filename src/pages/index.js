import React from "react"

import projects from "../data/projects"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GridLayout from "../components/grid_layout"

import adaptTheProcess from "../images/work/svg/adapt-the-process.svg"
import setGoals from "../images/work/svg/set-goals.svg"
import uxItAll from "../images/work/svg/ux-it-all.svg"

import "../components/portfolio/page-portfolio.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section id="home">
      <div className="wrapper">
        <h1 className="home__title">Darian Grant</h1>
        <h2 className="home__subtitle">UX Strategist</h2>
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
              I work with you to define and solidify your business goals so
              everyone understands why we’re doing what we’re doing, and the
              overall direction of the company and project.
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
          <div className="grid experience-item">
            <div className="grid__item experience-item__title">
              <h3 className="h4 experience-item__date">June 2017 - Present</h3>
              <h3 className="experience-item__company">
                Moz/STAT Search Analytics
              </h3>
            </div>
            <div className="grid__item experience-item__details">
              <h3 className="experience-item__position">UX Strategist</h3>
              <div className="experience-item__duties">
                Acquired by Moz in October 2018, I’m currently helping the
                company build their UX culture and processes, while also
                supporting the product team to make confident decisions that
                will affect the future of the company.
              </div>
            </div>
          </div>

          <div className="grid experience-item">
            <div className="grid__item experience-item__title">
              <h3 className="h4 experience-item__date">Aug 2016 - June 2017</h3>
              <h3 className="experience-item__company">Freelance</h3>
            </div>
            <div className="grid__item experience-item__details">
              <h3 className="experience-item__position">UX Consultant</h3>
              <div className="experience-item__duties">
                Consultant on a new startup as well as several smaller projects.
                The main project was Otherly, where I analyzed their site
                metrics, performed usability tests and extensive research
                interviews, defined the target audience, redesigned the MVP and
                worked with their UI Designer to define the branding and
                mockups.
              </div>
            </div>
          </div>

          <div className="grid experience-item">
            <div className="grid__item experience-item__title">
              <h3 className="h4 experience-item__date">Aug 2015 - Aug 2016</h3>
              <h3 className="experience-item__company">Vision Critical</h3>
            </div>
            <div className="grid__item experience-item__details">
              <h3 className="experience-item__position">UX Designer</h3>
              <div className="experience-item__duties">
                On a design team of 7, our goal was to redesign their current
                SaaS platform. I conducted user research and analyses to define
                and solve problems, delivered wireframes, sitemaps, prototypes,
                and design documentation to the dev team, plus more.
              </div>
            </div>
          </div>

          <div className="grid experience-item">
            <div className="grid__item experience-item__title">
              <h3 className="h4 experience-item__date">Dec 2012 - Jan 2015</h3>
              <h3 className="experience-item__company">A Thinking Ape</h3>
            </div>
            <div className="grid__item experience-item__details">
              <h3 className="experience-item__position">
                UX Designer | Game Designer
              </h3>
              <div className="experience-item__duties">
                Worked on multiple mobile apps. Used our metrics tools to gather
                data on our users to justify design decisions for new features
                and additions. Also supported other projects with usability
                testing on low to hi fidelity prototypes.
              </div>
            </div>
          </div>

          <div className="grid experience-item">
            <div className="grid__item experience-item__title">
              <h3 className="h4 experience-item__date">Jan 2009 - Nov 2012</h3>
              <h3 className="experience-item__company">EA Canada</h3>
            </div>
            <div className="grid__item experience-item__details">
              <h3 className="experience-item__position">
                UX Designer | Game Designer
              </h3>
              <div className="experience-item__duties">
                Worked on 5 different titles across console, mobile and web for
                over 3 years. Introduced and taught best UX practices along the
                way. Worked closely with the user research department to gather
                data for prototypes of all levels, and to justify design
                decisions for new features.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
