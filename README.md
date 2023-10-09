# Quick RSVP Event App

This application was build as a demo for my my workshops and hands-on-lab, you can follow along and build a similar app at home by checking out this [documentation tutorial](https://nextjs.choubari.com).

The goal is to build a quick RSVP Event application, while learning web development with Next.js 13 core features:

- Client Components
- Server Components
- Routing, Layouts, Errors, Loading UI...
- Data Fetching on the client and on the server
- Route Handlers, Suspense, Async/Await...
- Env Variables
- SEO (metadata, openGraph, robots, sitemap..)
- `next/image`, `next/font`, `next/link` ...
- Along with TypeScript and TailwindCSS 💙

To make it easy for ourselves, We are going to use an API based on my [Guichet.com](https://guichet.com) events data, hosted on a json-server, and handle the RSVP part on local storage.

In case of difficulties, reach out to me live at the conference/workshop, or drop me DM on [Twitter (X)](https://twitter.com/choubari_) if you're doing this exercise at home!

At the end, you can checkout the whole source code of this application in this Github Repository, and customize your app with [more features](https://nextjs.choubari.com/features-to-add)! **Stay Creative!**

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://localhost:3000/api/hello](http://localhost:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
