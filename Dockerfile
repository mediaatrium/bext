FROM node:lts-alpine AS base
WORKDIR /base
COPY ./package.json ./package.json
RUN yarn install
COPY . .

FROM base AS build
ENV NODE_ENV=production
WORKDIR /build
COPY --from=base /base ./
RUN yarn build

FROM node:lts-alpine AS prod
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build /build/package.json ./package.json
RUN yarn add next@12.1.0
COPY --from=build /build/.next ./.next
COPY --from=build /build/public ./public
COPY --from=build /build/next.config.js ./next.config.js

EXPOSE 3000
