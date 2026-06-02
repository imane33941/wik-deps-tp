FROM node:22-alpine
RUN addgroup -S myuser && adduser -S myuser -G myuser
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY src/server.ts .env tsconfig.json ./
RUN chown -R myuser:myuser /app
USER myuser
EXPOSE 3000
CMD ["pnpm", "start"]