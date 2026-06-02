FROM node:22-alpine
WORKDIR /ping-api
RUN corepack enable
COPY package.json ./
RUN pnpm install
COPY . .
EXPOSE 3000
CMD ["pnpm", "start"]