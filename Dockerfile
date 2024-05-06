FROM oven/bun:1
WORKDIR /app

COPY package.json ./
COPY bun.lockb ./
RUN bun install
RUN bun run postinstall

# COPY tsconfig.json ./

CMD ["bun", "run", "dev"]