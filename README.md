# Ping API

Ce dépôt contient deux projets Node.js / TypeScript :

- `WIK-DPS-TP01`
- `WIK-DPS-TP02`

Chaque projet expose une route `GET /ping` qui renvoie les en-têtes de la requête en JSON.

## Prérequis

- Node.js
- pnpm

## Utilisation

```bash
cd WIK-DPS-TP01
pnpm install
pnpm run build
pnpm run start
```

ou

```bash
cd WIK-DPS-TP02
pnpm install
pnpm run build
pnpm run start
```

## Port

Par défaut : `3000`

## Vérification

```bash
curl http://localhost:3000/ping