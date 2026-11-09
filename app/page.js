"use client";

import { useEffect, useRef, useState } from "react";
const emailContact = "ton-ekofogael55@gmail.com";
import Image from "next/image";
const rubriques = [
  { id: "hero", titre: "Accueil" },
  { id: "about", titre: "À propos" },
  { id: "skills", titre: "Compétences" },
  { id: "portfolio", titre: "Portfolio" },  
  { id: "resume", titre: "Parcours" },
  { id: "facts", titre: "Faits marquants" },
  { id: "services", titre: "Services" },
  { id: "contact", titre: "Contact" },
];

const reseaux = [
  { nom: "GitHub", icone: "bxl-github", url: "URL_DE_TON_PROFIL_GITHUB" },
  { nom: "LinkedIn", icone: "bxl-linkedin", url: "URL_DE_TON_PROFIL_LINKEDIN" },
  { nom: "Instagram", icone: "bxl-instagram", url: "URL_DE_TON_PROFIL_INSTAGRAM" },
  { nom: "facebook", icone: "bxl-facebook", url: "URL_DE_TON_PROFIL_FACEBOOK" },
];
export default function Accueil() {
  const [filtreProjet, setFiltreProjet] = useState("Tous");
  const [menuOuvert, setMenuOuvert] = useState(false);

  const [rubriqueActive, setRubriqueActive] = useState("hero");

  const fenetreCapture = useRef(null);
const [captureActive, setCaptureActive] = useState(null);

useEffect(() => {
  if (captureActive && !fenetreCapture.current.open) {
    fenetreCapture.current.showModal();
  }
}, [captureActive]);

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

    useEffect(() => {
        const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)");

        if (mouvementReduit.matches || typeof IntersectionObserver === "undefined") {
          return;
        }

        const observateur = new IntersectionObserver((entrees) => {
          for (const entree of entrees) {
            if (!entree.isIntersecting) continue;
            entree.target.classList.add("rubrique-visible");
            observateur.unobserve(entree.target);
          }
        }, { threshold: 0.1 });

        document.querySelectorAll("#main > section").forEach((section) => {
          observateur.observe(section);
        });

        return () => observateur.disconnect();
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
          <div className="social-links mt-3 text-center" aria-label="Réseaux sociaux">
          {reseaux.filter(({ url }) => url).map(({ nom, icone, url }) => (
            <a
              key={nom}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={nom}
              title={nom}
            >
              <i className={`bx ${icone}`} aria-hidden="true" />
            </a>
          ))}
        </div>
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

<section id="portfolio" className="portfolio section-bg">
  <div className="container">
    <div className="section-title">
   <h2>Portfolio</h2>
      <p>Une sélection de projets sur lesquels j’ai travaillé.</p>
    </div>

    <div className="d-flex flex-wrap gap-2 mb-4" role="group" aria-label="Filtrer les projets">
      {["Tous", "Gestion", "Événementiel"].map((filtre) => (
        <button
          key={filtre}
          type="button"
          className={`btn ${filtreProjet === filtre ? "btn-primary" : "btn-outline-primary"}`}
          aria-pressed={filtreProjet === filtre}
          onClick={() => setFiltreProjet(filtre)}
        >
          {filtre}
        </button>
      ))}
    </div>
<div className="row g-4">
  <div
    className="col-12 col-md-6 col-lg-4"
    hidden={filtreProjet === "Événementiel"}
  ></div>
              <div className="col-md-6 col-lg-6">
                <article className="card h-100">
                <button
                type="button"
                className="ratio ratio-16x9 d-block border-0 p-0 bg-light"
                aria-label="Agrandir la capture de TaskFlow RH"
                onClick={() =>
                  setCaptureActive({
                    src: "/assets/img/projets/taskflow-rh.png",
                    titre: "TaskFlow RH",
                  })
                }
              >
                <Image
                  src="/assets/img/projets/taskflow-rh.png"
                  alt=""
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                  className="object-fit-contain"
                />
              </button>
          <div className="card-body">
            <h3 className="h5">TaskFlow RH</h3>
            <p>Application de suivi des projets et des tâches RH.</p>
            <p className="small text-muted mb-0">React · Vite · JSON Server</p>
            <summary className="fw-semibold text-primary">
              Voir les fonctionnalités 
            </summary>
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

        <div
            className="col-12 col-md-6 col-lg-4"
            hidden={filtreProjet === "Événementiel"}
          >
        <article className="card h-100">
          <div className="card-body">
            <button
              type="button"
              className="ratio ratio-16x9 d-block border-0 p-0 bg-light"
              aria-label="Agrandir la capture de TaskFlow RH"
              onClick={() =>
                setCaptureActive({
                  src: "/assets/img/projets/SmartResto.jfif",
                  titre: "TaskFlow RH",
                })
              }
            >
              <Image
                src="/assets/img/projets/SmartResto.jfif"
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                className="object-fit-contain"
              />
            </button>
            <h3 className="h5">SmartResto</h3>
            
            <p>
              Contribution au module Personnel pour gérer les fiches des
              employés et leur statut.
            </p>
            <p className="small text-muted mb-0">Nuxt · JSON Server</p>
            <details className="mt-3">
            <summary className="fw-semibold text-primary">
              Voir les fonctionnalités 
            </summary>
            <ul className="small mt-2 mb-0 ps-3">
              <li>Consulter la liste des employés.</li>
              <li>Créer et modifier une fiche employé.</li>
              <li>Désactiver un employé en conservant ses commandes.</li>
            </ul>
            <a
              className="btn btn-outline-primary btn-sm mt-3"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Voir le code de TaskFlow RH sur GitHub (nouvel onglet)"
            >
              Voir le code
            </a>
          </details>
          </div>
        </article>
      </div>

       <div
    className="col-12 col-md-6 col-lg-4"
    hidden={filtreProjet === "Gestion"}
  >

        <article className="card h-100">
          <div className="card-body">

            <button
              type="button"
              className="ratio ratio-16x9 d-block border-0 p-0 bg-light"
              aria-label="Agrandir la capture de TaskFlow RH"
              onClick={() =>
                setCaptureActive({
                  src: "/assets/img/projets/Invitations.jfif",
                  titre: "TaskFlow RH",
                })
              }
            >
              <Image
                src="/assets/img/projets/Invitations.jfif"
                alt=""
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                className="object-fit-contain"
              />
            </button>
            <h3 className="h5">Invitations interactives</h3>
            
            <p>
              
              Application pour créer des invitations numériques et suivre les
              confirmations de présence.
            </p>
            <p className="small text-muted mb-0">React · Express · Prisma</p>
            <details className="mt-3">
            <summary className="fw-semibold text-primary">
              Voir les fonctionnalités
            </summary>

            <ul className="small mt-2 mb-0 ps-3">
              <li>Créer un événement et choisir un modèle d’invitation.</li>
              <li>Gérer la liste des invités et les tables.</li>
              <li>Suivre les confirmations de présence depuis le tableau de bord.</li>
            </ul>
          </details>
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
<section id="services" className="services">
  <div className="container">
    <div className="section-title">
      <h2>Services</h2>
      <p>Je conçois des outils numériques pour simplifier le travail des équipes.</p>
    </div>

    <div className="row g-4">
      <div className="col-md-4 icon-box">
        <div className="icon"><i className="bx bx-globe" aria-hidden="true" /></div>
        <h3 className="title">Création de sites web</h3>
        <p className="description">
          Présenter une entreprise, une institution ou une activité sur ordinateur et mobile.
        </p>
      </div>

      <div className="col-md-4 icon-box">
        <div className="icon"><i className="bx bx-layer" aria-hidden="true" /></div>
        <h3 className="title">Applications métier</h3>
        <p className="description">
          Centraliser les informations et faciliter le suivi du personnel, des tâches ou des événements.
        </p>
      </div>

      <div className="col-md-4 icon-box">
        <div className="icon"><i className="bx bx-cog" aria-hidden="true" /></div>
        <h3 className="title">Automatisation</h3>
        <p className="description">
          Simplifier la collecte des données et réduire les tâches répétitives.
        </p>
      </div>
    </div>
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

<dialog
  ref={fenetreCapture}
  aria-labelledby="titre-capture"
  className="rounded-4 border-0 p-3 shadow"
  style={{ width: "min(92vw, 850px)", maxHeight: "90vh" }}
  onClose={() => setCaptureActive(null)}
>
  <form method="dialog" className="text-end mb-2">
    <button type="submit" className="btn btn-outline-primary btn-sm">
      Fermer
    </button>
  </form>

  {captureActive && (
    <>
      <h2 id="titre-capture" className="h5 mb-3">
        {captureActive.titre}
      </h2>
      <div className="ratio ratio-16x9 bg-light">
        <Image
          src={captureActive.src}
          alt={`Capture de ${captureActive.titre}`}
          fill
          sizes="(max-width: 900px) 92vw, 850px"
          className="object-fit-contain"
        />
      </div>
    </>
  )}
</dialog>
    </div>
  );
}