# Website

This is the website which contains the documentation of kube-green.

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

In `docs` folder are the documentation pages in markdown.
In `blog` folder are the blog post.
In `scripts/api-reference` folder, there are scripts and templates to automatically generate the API reference for *kube-green* CRD.

## Installation

```sh
npm i
```

## Local Development

```sh
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```sh
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
