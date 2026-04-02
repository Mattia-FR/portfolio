# Portfolio - Mattia Bouvier

Application portfolio personnelle construite avec React, TypeScript et Vite.
Le projet est en cours de construction et sert de vitrine pour mon profil, mes projets et mes moyens de contact.

## Objectif du projet

Ce portfolio a pour but de présenter :
- mon profil de developpeur web en reconversion ;
- mes projets realises ou en cours ;
- une facon simple de me contacter.

## Stack technique

- `React 19`
- `TypeScript`
- `Vite`
- `React Router`
- `Biome` (lint + format)

## Fonctionnalites actuelles

- Layout global avec `Header`, zone principale (`Outlet`) et `Footer`
- Navigation via une `Navbar`
- Routage client avec 3 pages :
  - `/` : accueil (presentation)
  - `/projects` : projets (placeholder pour le moment)
  - `/contact` : contact (placeholder pour le moment)

## Démarrage local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL affichee dans le terminal (par defaut : `http://localhost:5173`).

## Scripts disponibles

```bash
npm run dev      # Lance le serveur de developpement
npm run build    # Build de production (TypeScript + Vite)
npm run preview  # Lance une preview du build
npm run check    # Verification du code avec Biome (lecture seule)
npm run format   # Formatage automatique des fichiers dans src
npm run lint     # Verification + corrections automatiques dans src
```

## Structure actuelle (simplifiee)

```text
src/
├── main.tsx
├── App.tsx
└── components/
    ├── molecules/
    │   └── Navbar.tsx
    ├── organisms/
    │   ├── Header.tsx
    │   └── Footer.tsx
    └── pages/
        ├── HomePage.tsx
        ├── ProjectsPage.tsx
        └── ContactPage.tsx
```
