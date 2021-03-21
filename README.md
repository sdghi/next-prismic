# SDG Next Prismic

A starter template for building websites with NextJS, Prismic and Netlify.

**Get Started**
`npx degit https://github.com/sdghi/next-prismic\#main <app-name>`

## Core Features

-   [Prismic Integration](#prismic)
-   [Optimized for Netlify](#netlify)
-   [Serverless First](#serverless)

## Prismic

This template uses [Prismic](https://prismic.io) as the HeadlessCMS to manage most of the content. By default it will just contain bare-bones features to get you up and running. All configuration is 100% customizable, you can reference customizing Prismic in the [docs](https://prismic.io/docs/technologies/integrating-with-an-existing-project-javascript).

# Netlify

Deployment will be handled by Netlify using the [Essential Next.js Build Plugin](https://github.com/netlify/netlify-plugin-nextjs). It will automatically be installed on all new NextJS sites so further configuration isn't required.

Any changes or additional configuration can be made in `netlify.toml`

# Serverless

All serverless functions leverage the power of [Netlify Functions](https://docs.netlify.com/functions/overview/?_ga=2.2220336.1445006700.1616317028-19928415.1598998957).

To create a new serverless function, just add a file to the `functions` directory.
