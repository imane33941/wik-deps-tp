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
pnpm build
pnpm start
```

ou

```bash
cd WIK-DPS-TP02
pnpm install
pnpm build
pnpm start
```

## Port

Par défaut : `3000`

## Vérification

```bash
curl http://localhost:3000/ping
```

## WIK-DPS-TP03

Le dossier `WIK-DPS-TP03` contient un projet Docker Compose avec :

- un service applicatif basé sur le `Dockerfile` de `WIK-DPS-TP02`
- 4 réplicas du service applicatif
- un reverse-proxy Nginx exposé vers l'hôte

### Démarrage

```bash
cd WIK-DPS-TP03
docker compose up -d --scale my_app=4 --remove-orphans
```

### Port exposé

Le reverse-proxy doit être exposé sur le port `8080`.

> Sur macOS, Docker Desktop peut déjà réserver le port `8080` (processus `com.docke`).
> Si c’est le cas, teste localement avec un autre port disponible et indique dans ton rendu
> que `8080` est réservé par Docker Desktop sur ta machine.

### Exemple si `8080` est occupé

Modifier le `docker-compose.yml` de `WIK-DPS-TP03` en remplaçant :

```yaml
ports:
  - 8080:80
```

par :

```yaml
ports:
  - 8082:80
```

puis relancer :

```bash
docker compose up -d --scale my_app=4 --remove-orphans
```
