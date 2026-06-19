# Ping API

API HTTP simple développée avec Node.js natif et TypeScript.

Le serveur expose une route `GET /ping` qui retourne les headers de la requête au format JSON.  
Toutes les autres routes retournent une réponse `404`.

## Prérequis

- Node.js
- pnpm

## 1- Installation

```bash
pnpm install
```

## 2- Compiler 

```bash
pnpm build
```

## 3- Lancer le server

```bash
pnpm start
```

## Docker Compose

Le projet peut aussi être démarré avec Docker Compose pour exécuter 4 réplicas et un reverse-proxy Nginx.

### Démarrage

```bash
cd WIK-DPS-TP03
docker compose up -d --scale my_app=4 --remove-orphans
```

### Port attendu

Le reverse-proxy doit être exposé sur `8080`.

> Si Docker Desktop réserve `8080` localement, utilises un autre port comme `8082` et indique-le dans le rendu.
