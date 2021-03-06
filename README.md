# SDG Next Prismic

A starter template for building websites with NextJS, Prismic and Netlify.

## Get started

### Creating a new project

1. **Create a new project:**
   `npx degit https://github.com/sdghi/next-prismic\#main <app-name>`

2. **Add env variables**
   Copy the content from `.env.example` and paste it into a new file called `.env.local`

3. **Install dependencies**
   `yarn`

### Development

Make sure to have the [Netlify Cli](https://docs.netlify.com/cli/get-started/) installed, then run `ntl dev`

## Core Features

-   [Prismic Integration](#prismic)
-   [Optimized for Netlify](#netlify)
-   [Serverless First](#serverless)

## Prismic

This template uses [Prismic](https://prismic.io) as the HeadlessCMS to manage most of the content. By default it will just contain bare-bones features to get you up and running. All configuration is 100% customizable, you can reference customizing Prismic in the [docs](https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript).

### Slice Machine (Still in development)

Make sure that you have the [Prismic CLI](https://prismic.io/docs/technologies/install-the-prismic-cli-nextjs) installed and sign up/login depending on the client

**Sign Up**
`prismic signup`

**Login**
`prismic login`

# Netlify

Deployment will be handled by Netlify using the [Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs). It will automatically be installed on all new NextJS sites so further configuration isn't required.

Any changes or additional configuration can be made in `netlify.toml`

# Serverless

All serverless functions leverage the power of [Netlify Functions](https://docs.netlify.com/functions/overview/?_ga=2.2220336.1445006700.1616317028-19928415.1598998957).

To create a new serverless function, just add a file to the `functions` directory.
