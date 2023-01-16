FROM node:18.13-alpine3.16

COPY . app/

WORKDIR /app

RUN yarn global add pnpm && pnpm i --frozen-lockfile

CMD ["pnpm", "dev", "--port", "80", "--host"]
