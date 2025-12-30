# Devcontainer Configuration for Strapi CMS

This directory contains the configuration for GitHub Codespaces and VS Code Dev Containers.

## What's Included

- **Node.js 20**: The development environment includes Node.js 20.x, which is compatible with Strapi's requirements (18.0.0 - 22.x.x)
- **Git**: Version control tools pre-installed
- **VS Code Extensions**: 
  - ESLint for code linting
  - Prettier for code formatting
  - TypeScript support

## Automatic Setup

When you open this repository in a Codespace or Dev Container:

1. The container will be created with Node.js 20
2. Dependencies will be automatically installed via `npm install`
3. Port 1337 (Strapi admin panel) will be forwarded automatically

## Running Strapi

After the container is set up, you can run:

```bash
npm run develop
```

This will start the Strapi development server on port 1337. The port will be automatically forwarded, and you'll receive a notification with a link to access the admin panel.

## First Time Setup

If this is your first time running Strapi in this Codespace:

1. Copy `.env.example` to `.env` if needed
2. Run `npm run develop`
3. Access the admin panel via the forwarded port
4. Create your admin user

## Troubleshooting

If you encounter issues:

- **Dependencies not installed**: Run `npm install` manually
- **Port conflicts**: Check the Ports tab in VS Code to see forwarded ports
- **Permissions errors**: The container runs as the `node` user by default
