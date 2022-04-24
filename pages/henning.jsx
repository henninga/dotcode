import Head from "next/head";
import Header from "@components/Header";
import styles from "./Henning.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

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
              <li></li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
