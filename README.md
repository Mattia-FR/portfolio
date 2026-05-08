# Portfolio — Mattia Bouvier

Application web de portfolio personnelle : présentation, liste de projets avec fiche détaillée en modal, et page de contact avec liens professionnels.

## Stack technique

- **React 19** + **TypeScript**
- **Vite 7**
- **React Router** (routes imbriquées, `createBrowserRouter`)
- **Lucide React** (icônes du sélecteur de thème)
- **Biome** — lint et format sur `src/`

## Fonctionnalités

### Pages et navigation

- **`/`** — Accueil : titre, accroche stack, texte de présentation, liens vers Projets et Contact (avec `viewTransition` sur le lien « Voir mes projets »).
- **`/projects`** — Projets : cartes regroupées en **projets globaux** (`tier: "main"`) et **projets ciblés** (`tier: "secondary"`). Clic sur une carte ouvre une **modal** (description, points forts, stack, liens GitHub / démo si présente).
- **`/contact`** — Contact : message court et liens **GitHub** et **LinkedIn** (icônes importées depuis `src/assets`).

### Layout et UX

- **Header** : barre de navigation + bascule **clair / sombre** (`useTheme` : `data-theme` sur `<html>`, persistance `localStorage`, défaut selon `prefers-color-scheme`).
- **Header masquable au scroll** (`useNavbar`) : se cache en descendant, réapparaît en remontant ou près du haut de page.
- **Footer** : texte léger + lien vers le [dépôt du portfolio](https://github.com/Mattia-FR/portfolio).
- **Modal** accessible : piège du focus, **Échap** pour fermer, fond cliquable pour fermer.

### Données projets

- Fichier **`src/data/projects.ts`** : tableau typé `Project` (`src/types/projects.ts`).
- Champs utiles : `tier` (main / secondary), `stack`, `highlights`, `thumbnail`, `githubUrl`, `liveUrl` optionnel, etc.
- Les vignettes pointent vers des chemins **`public`** du type `/images/<projet>/thumbnail.png` (à placer dans `public/images/...` côté Vite).

## Démarrage local

À exécuter depuis ce dossier `Front` :

```bash
npm install
npm run dev
```

Ouvrir l’URL indiquée dans le terminal (souvent `http://localhost:5173`).

## Scripts npm

| Script        | Rôle |
|---------------|------|
| `npm run dev` | Serveur de développement Vite |
| `npm run build` | Vérification TypeScript + build de production |
| `npm run preview` | Prévisualisation du build |
| `npm run check` | `biome check src` (lecture seule) |
| `npm run format` | Formatage Biome sur `./src` |
| `npm run lint` | Biome avec corrections automatiques sur `./src` |

## Structure du code (aperçu)

```text
Front/
├── index.html
├── vite.config.ts
├── biome.json
├── tsconfig*.json
└── src/
    ├── main.tsx              # Router + routes
    ├── App.tsx               # Layout : Header, <Outlet />, Footer
    ├── index.css             # Variables CSS, thèmes, typo (Google Fonts)
    ├── vite-env.d.ts
    ├── assets/               # Icônes contact (GitHub, LinkedIn), etc.
    ├── data/
    │   └── projects.ts       # Liste des projets affichés
    ├── types/
    │   └── projects.ts       # Interface Project
    ├── hooks/
    │   ├── useTheme.ts
    │   └── useNavbar.ts
    └── components/
        ├── molecules/
        │   ├── Navbar.tsx
        │   └── ProjectCard.tsx
        ├── organisms/
        │   ├── Header.tsx
        │   ├── Footer.tsx
        │   └── Modal.tsx
        └── pages/
            ├── HomePage.tsx
            ├── ProjectsPage.tsx
            └── ContactPage.tsx
```

Les styles sont en **CSS par composant / page** (fichiers `*.css` à côté des composants concernés).

## Configuration

- **Biome** : `biome.json` à la racine de `Front`.
- **Thème** : couleurs et polices définies dans `src/index.css` ; le thème actif est `data-theme="dark"` ou `"light"` sur l’élément racine du document.
