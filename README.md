# bext
A boilerplate for Websites built with Next.js

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)


## How to use
1. Clone the repository
```bash
# ssh
git clone git@github.com:mediaatrium/bext.git
# or https
git clone https://github.com/mediaatrium/bext.git
```
2. Install the node modules
```bash
# yarn
yarn
# or npm
npm install
```
3. Run the dev server locally
```bash
# yarn
yarn dev
# or npm
npm dev
```
4. Deploy
For the deployment, we use a dedicated server on which our various services run in Docker containers. These are connected to the internet via the reverse proxy Traefik. Of course, one can also use the services from Vercel, Netlify & Co.
```bash
docker compose up -d --build
```
