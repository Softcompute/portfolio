"use client";

import { useEffect, useState } from "react";
const emailContact = "ton-ekofogael55@gmail.com";
import Image from "next/image";
const rubriques = [
  { id: "hero", titre: "Accueil" },
  { id: "about", titre: "À propos" },
  { id: "skills", titre: "Compétences" },
  { id: "portfolio", titre: "Projets" },
  { id: "resume", titre: "Parcours" },
  { id: "facts", titre: "Faits marquants" },
  { id: "contact", titre: "Contact" },
];


export default function Accueil() {
  const [menuOuvert, setMenuOuvert] = useState(false);

  const [rubriqueActive, setRubriqueActive] = useState("hero");

    useEffect(() => {
      function actualiserRubriqueActive() {
        const hauteurVisible = window.innerHeight;
        const basDePage = document.documentElement.scrollHeight - hauteurVisible;

        if (basDePage > 0 && window.scrollY >= basDePage - 2) {
          setRubriqueActive("contact");
          return;
        }

        let rubriqueVisible = "hero";
        const repere = hauteurVisible / 3;

        for (const { id } of rubriques) {
          const section = document.getElementById(id);

          if (section && section.getBoundingClientRect().top <= repere) {
            rubriqueVisible = id;
          }
        }

        setRubriqueActive(rubriqueVisible);
      }

      window.addEventListener("scroll", actualiserRubriqueActive, { passive: true });
      window.addEventListener("resize", actualiserRubriqueActive);
      const animation = window.requestAnimationFrame(actualiserRubriqueActive);

      return () => {
        window.cancelAnimationFrame(animation);
        window.removeEventListener("scroll", actualiserRubriqueActive);
        window.removeEventListener("resize", actualiserRubriqueActive);
      };
    }, []);
  return (
    <div className={menuOuvert ? "mobile-nav-active" : undefined}>
      <button
        type="button"
        className="mobile-nav-toggle d-xl-none"
        aria-controls="header"
        aria-expanded={menuOuvert}
        aria-label={menuOuvert ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setMenuOuvert(!menuOuvert)}
      >
        <span aria-hidden="true">{menuOuvert ? "×" : "☰"}</span>
      </button>

      <header id="header">
       <div className="profile mt-4">
          <Image
            src="/assets/img/gael-profil.jpg"
            alt="Portrait de Gael Ekofo"
            width={120}
            height={120}
            className="rounded-circle object-fit-cover"
            style={{ width: 120, height: 120 }}
          />
          <h2 className="h4 text-white text-center">Gael Ekofo</h2>
        </div>

        <nav className="nav-menu navbar" aria-label="Navigation principale">
          <ul>
              {rubriques.map(({ id, titre }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={rubriqueActive === id ? "active" : undefined}
                    aria-current={rubriqueActive === id ? "location" : undefined}
                    onClick={() => {
                      setRubriqueActive(id);
                      setMenuOuvert(false);
                    }}
                  >
                    {titre}
                  </a>
                </li>
              ))}
            </ul>
        </nav>
      </header>

      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container px-3">
          <h1>Gael Ekofo</h1>
          <p><span>Développeur Full Stack</span></p>
        </div>
      </section>

      <main id="main">
        <section id="about">
          <div className="container">
            <div className="section-title">
              <h2>À propos</h2>
              <p>
                Je suis Gael Ekofo, développeur Full Stack. Je conçois des
                sites internet et des applications web et mobiles pour aider
                les entreprises, les institutions publiques et les
                établissements éducatifs à centraliser leurs informations,
                automatiser leurs tâches et mieux suivre leurs activités.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Compétences</h2>
      <p>Les technologies que j’utilise pour créer des applications web.</p>
    </div>

    <div className="row g-4">
      <div className="col-md-4">
        <h3 className="h5">Interfaces web</h3>
        <p>HTML, CSS, JavaScript, React et Next.js.</p>
      </div>
      <div className="col-md-4">
        <h3 className="h5">Développement serveur</h3>
        <p>Node.js, Express et création d’API REST.</p>
      </div>
      <div className="col-md-4">
        <h3 className="h5">Bases de données</h3>
        <p>MySQL et MariaDB, avec Prisma pour accéder aux données.</p>
      </div>
    </div>
  </div>
</section>

<section id="portfolio">
  <div className="container">
    <div className="section-title">
      <h2>Projets</h2>
      <p>Une sélection de projets sur lesquels j’ai travaillé.</p>
    </div>

    <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <article className="card h-100">
                  <div className="ratio ratio-16x9">
          <Image
            src="/assets/img/projets/taskflow-rh.png"
            alt="Tableau de bord de TaskFlow RH"
            fill
            sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
            className="object-fit-contain bg-light"
          />
        </div>
          <div className="card-body">
            <h3 className="h5">TaskFlow RH</h3>
            <p>Application de suivi des projets et des tâches RH.</p>
            <p className="small text-muted mb-0">React · Vite · JSON Server</p>
            <a
              className="btn btn-outline-primary btn-sm mt-3"
              href="https://github.com/Softcompute/taskflow-rh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir le code de TaskFlow RH sur GitHub (nouvel onglet)"
            >
              Voir le code
            </a>
          </div>
        </article>
      </div>

      <div className="col-md-6 col-lg-4">
        <article className="card h-100">
          <div className="card-body">
            <h3 className="h5">SmartResto</h3>
            <p>
              Contribution au module Personnel pour gérer les fiches des
              employés et leur statut.
            </p>
            <p className="small text-muted mb-0">Nuxt · JSON Server</p>
          </div>
        </article>
      </div>

      <div className="col-md-6 col-lg-4">
        <article className="card h-100">
          <div className="card-body">
            <h3 className="h5">Invitations interactives</h3>
            <p>
              Application pour créer des invitations numériques et suivre les
              confirmations de présence.
            </p>
            <p className="small text-muted mb-0">React · Express · Prisma</p>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>

<section id="resume" className="resume section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Parcours</h2>
      <p>De ma formation en informatique à la création d’applications web.</p>
    </div>

    <div className="resume-item">
      <h3 className="h5">Licence en informatique</h3>
      <p>Université Libre de Kinshasa (ULK)</p>
    </div>

    <div className="resume-item">
      <h3 className="h5">Développement Full Stack</h3>
      <p>
        J’ai approfondi mes compétences en autodidacte en réalisant des
        projets de gestion du personnel, de suivi des tâches et
        d’organisation d’événements.
      </p>
    </div>
  </div>
</section>

<section id="facts">
  <div className="container">
    <div className="section-title">
      <h2>Faits marquants</h2>
      <p>Quelques fonctionnalités concrètes que j’ai développées.</p>
    </div>

    <ul className="mb-0">
      <li>TaskFlow RH — gérer les projets RH et suivre les tâches associées.</li>
      <li>SmartResto — désactiver un employé tout en conservant ses commandes.</li>
      <li>Invitations interactives — suivre les réponses des invités depuis un tableau de bord.</li>
    </ul>
  </div>
</section>

<section id="contact" className="section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Contact</h2>
      <p>
        Vous avez un projet de site web ou d’application, ou vous souhaitez
        automatiser une tâche dans votre organisation ? Parlons-en.
      </p>
    </div>

    {emailContact && (
      <a className="btn btn-primary" href={`mailto:${emailContact}`}>
        M’écrire par e-mail
      </a>
    )}
  </div>
</section>
</main>
    </div>
  );
}