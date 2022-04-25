import Head from "next/head";
import Header from "@components/Header";
import styles from "./Henning.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import Project from "../components/project/project";
import ProjectDescription from "../components/project/project-description";

export default function Henning() {
  return (
    <div className={styles.cv}>
      <Head>
        <title>Henning Anderssen</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header />
      <aside className={styles["key-info"]}>
        <section aria-label="Kontakt informasjon">
          <div>
            <a className={styles.contact} href="mailto:henning@dotcode.no">
              <FontAwesomeIcon icon={faEnvelope} /> henning@dotcode.no
            </a>
          </div>
          <div>
            <a className={styles.contact} href="tel:93460863">
              <FontAwesomeIcon icon={faPhone} /> 934 60 863
            </a>
          </div>
        </section>
        <section aria-labelledby="roles-title">
          <h2 id="roles-title">Roller</h2>
          <ul>
            <li>Frontendutvikler</li>
            <li>Fullstackutvikler</li>
            <li>Arkitekt</li>
            <li>Tech lead</li>
          </ul>
        </section>
        <section aria-labelledby="skills-title">
          <h2 id="skills-title">Ekspertise</h2>
          <ul>
            <li>Typescript/Javascript</li>
            <li>HTML/CSS</li>
            <li>C#</li>
          </ul>
        </section>
        <section aria-labelledby="education-title">
          <h2 id="education-title">Utdannelse</h2>
          <ul className={styles.education}>
            <li>
              <h3>Bachelor Computer Science</h3>
              <div>NITH</div>
              <div>2002 - 2006</div>
            </li>
          </ul>
        </section>
      </aside>
      <main className={styles.main}>
        <section aria-labelledby="profile">
          <h2 id="profile">Profil</h2>
          <p>
            Henning is a Senior Fullstack .NET Developer, with core strength in
            ASP.NET MCV, Frontend Development (HMTL5, CSS3, JS, Angular) and UI
            Development.
          </p>
          <p>
            Extensive experience working on rich Web Applications, using
            HTML/JavaScript/ CSS, Angular and React
          </p>
          <p>
            Primarily worked under Object Oriented principles and Scrum/agile
            methodology, having held Scrum Master responsibility and Tech lead
            role for a team of 4 (2013-2016 - Patentstyret).
          </p>
        </section>
        <section aria-labelledby="work-title">
          <h2 id="work-title">Arbeid</h2>
          <Project
            company="Schibsted AS"
            position="Developer"
            periodFrom="Feb 2008"
            periodTo="Oct 2009"
          >
            <ProjectDescription>
              Works as an independent development consultant. My primary role is
              both frontend and backend development, in addition to
              administration of my company. Also in the start phase of
              developing an e-commerce app using react.
            </ProjectDescription>
          </Project>
          <div className={styles.project}>
            <header className={styles["project-header"]}>
              <h3 className={styles["project-title"]}>
                Owner and senior consultant
              </h3>
              <span className={styles["project-date"]}>Feb 2018 - Present</span>
            </header>
            <strong className={styles["project-company-name"]}>
              dotCode AS
            </strong>
            <p className={styles["project-description"]}>
              Works as an independent development consultant. My primary role is
              both frontend and backend development, in addition to
              administration of my company. Also in the start phase of
              developing an e-commerce app using react.
            </p>
          </div>
          <div className={styles.project}>
            <header className={styles["project-header"]}>
              <h3 className={styles["project-title"]}>Senior consultant</h3>
              <span className={styles["project-date"]}>
                Sep 2008 - Feb 2018
              </span>
            </header>
            <strong className={styles["project-company-name"]}>
              ITverket AS
            </strong>
            <div className={styles["project-description"]}>
              <p>
                Worked on a number of large and small .NET projects where I've
                had the role as systems developer, with a focus towards frontend
                development and rich web applications the last few years. My
                role at ITverket includes development, Scrum Master, Tech lead
                and architect.
              </p>
              <p>
                Additionally I have contributed with numerous internal
                presentations and organized internal meetups.
              </p>
            </div>
          </div>
          <div className={styles.project}>
            <header className={styles["project-header"]}>
              <h3 className={styles["project-title"]}>
                Techincal support/developer
              </h3>
              <span className={styles["project-date"]}>
                Jun 2007 - Sep 2008
              </span>
            </header>
            <strong className={styles["project-company-name"]}>
              NetConnect Systems AS
            </strong>
            <p className={styles["project-description"]}>
              2nd/3rd line technical support on a teleconferencing platform in
              addition to Microsoft LiveMeeting
            </p>
          </div>
          <div className={styles.project}>
            <header className={styles["project-header"]}>
              <h3 className={styles["project-title"]}>Consultant</h3>
              <span className={styles["project-date"]}>2007 - 2008</span>
            </header>
            <strong className={styles["project-company-name"]}>
              Tackyworld Media
            </strong>
            <p className={styles["project-description"]}>
              Part time freelance consultant through my own company where I had
              the responsibility to set up a community with forums, media and
              blogs.
            </p>
          </div>
        </section>
        <section aria-labelledby="projects-title">
          <h2 id="projects-title">Prosjekter</h2>
          <div className={styles.project}>
            <header className={styles["project-header"]}>
              <h3 className={styles["project-title"]}>Fullstackutvikler</h3>
              <span className={styles["project-date"]}>
                October 2018 - Present
              </span>
            </header>
            <strong className={styles["project-company-name"]}>Ice</strong>

            <p className={styles["project-description"]}>
              Development of various sales portals used by various sales
              channels, including retail, webshop, telesales etc. Taking part of
              a new initiative to revamp the design of various systems. Was the
              lead frontend developer for one of Ice's key new products,
              Mobilbytte, which involved a lot of discussions with the UX
              designer. In 2020-2021 I changed team, to the team who is
              responsible for Ice's website (ice.no), various checkout solutions
              and the api for the webshop. During this period, we’ve changed the
              technology stack for the subscription checkout solution from
              asp.net mvc to Angular with Ngxs and rxjs. During this migration,
              we've heavily focused on accessibility (UU), creating reusable
              components that can be used by other teams, heavily collaborated
              with the UX designers to create a common style guide, while still
              A/B testing new ideas to see what converts the best, etc.
            </p>
            <ul>
              <li>Frontend development</li>
              <li>Backend development, including design of databases</li>
              <li>
                Integrated with various internal and external services like BSS,
                logistics, credit check, SMS gateway, identity server, payment,
                etc.
              </li>
              <li>Maintenance, modernising and development of new features</li>
              <li>Supported all the portals</li>
              <li>Development of unit tests</li>
            </ul>
            <p>
              Technology: .Net Framework 4.6, C#, ASP.NET MVC 5, ASP.NET Core,
              Razor, Javascript/ Typescript, Git, MsSQL, Autofac, (S)CSS,
              Elasticsearch, Kibana, Web api, IdentityServer 4, Webpack 2/3,
              Angular., Ngxs, GA/GTM, Teamcity, Octopus, Application Insights,
              Dynatrace, Cypress, Azure
            </p>
          </div>

          <div className={styles.project}>
            <header className={styles["project-header"]}>
              <h3 className={styles["project-title"]}>Fullstackutvikler</h3>
              <span className={styles["project-date"]}>
                Feb 2018 to Oct 2018
              </span>
            </header>
            <strong className={styles["project-company-name"]}>
              Schibsted
            </strong>

            <p className={styles["project-description"]}>
              Part of a team that focused on privacy and GDPR compliance for a
              specific product called About Me. This is a portal where
              Schibsted's users and customers can read about their privacy, take
              actions like data download, deletions, statistics etc. This
              product was developed using Node.js and Choo as the frontend
              framework. I also was the main developer on a new Wordpress site
              that contains all of Schibsted's user facing privacy articles. I
              also participated in discussions with the UX designers about the
              design of the application.
            </p>
            <ul>
              <li>Frontend development</li>
              <li>Backend development</li>
              <li>Integrated with various new and existing microservices.</li>
              <li>Lead dev on new Wordpress site</li>
            </ul>
            <p>
              Technology: Javascript, Node.js, Choo, Koa router, Microservices,
              AWS, Wordpress, Git/ Github, CSS
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
