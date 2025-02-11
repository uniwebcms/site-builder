# Uniweb Site Starter

A streamlined template for creating content-driven websites powered by Uniweb runtime modules. Perfect for developers testing modules, teams prototyping sites, or anyone wanting to self-host a Uniweb-compatible website.

## 🎯 What is This?

This starter template helps you create websites using the Uniweb ecosystem:

-   Write content in simple markdown files
-   Style and structure using any Uniweb-compatible component module
-   Preview and test locally using [Uniweb RTE](https://github.com/link-to-rte)
-   Deploy anywhere as a static site

## ⚡️ Quick Start

```bash
# Create a new site
npx create-uniweb-site my-site
cd my-site

# Install dependencies
npm install

# Link to a component module (required)
npm run use https://example.com/my-module

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your site in action!

## 📝 Creating Content

Your website content lives in markdown files, organized in a simple folder structure:

```
my-site/
├── pages/           # Your website content
│   ├── home/       # Home page
│   │   ├── page.yml          # Page settings
│   │   ├── 1-hero.md        # First section
│   │   └── 2-features.md    # Second section
│   └── about/      # Additional pages
│       ├── page.yml
│       └── 1-main.md
└── assets/         # Images and files
    └── images/     # Image assets
```

### Writing Pages

1. Create a folder under `pages/` for each page
2. Add numbered markdown files for each section
3. (Optional) Add `page.yml` for page settings

Each markdown file specifies a component and its properties:

```markdown
---
component: Hero
props:
    title: Welcome to Our Lab
    style: gradient
    background: light
---

# Welcome to Our Research Lab

Discover our groundbreaking work in...
```

### Adding Images

1. Place images in `assets/images/`
2. Reference them in your markdown:

```markdown
![Lab Team](/assets/images/team.jpg)
```

## 🔗 Component Modules

Your site's appearance comes from a Uniweb runtime module - a collection of pre-built React components. You can:

-   Use any public module:

    ```bash
    npm run use https://example.com/my-module
    ```

-   Test with a local module:

    ```bash
    npm run use http://localhost:5001
    ```

-   [Create your own module](link-to-guide) for custom designs

## 🛠 Development Workflow

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Advanced Features

### Section Groups

Organize complex content with section groups:

```
2-features.md         # Parent section
2.1-feature1.md      # First subsection
2.2-feature2.md      # Second subsection
```

### Page Configuration

Configure page-level settings in `page.yml`:

```yaml
title: Our Research
menu:
    label: Research
    order: 2
meta:
    description: Explore our latest research projects
```

## 🌐 Uniweb Ecosystem

This starter is part of the Uniweb family:

-   **Uniweb Site Starter** (this project)

    -   Quick static site creation
    -   Module testing and development
    -   Self-hosted projects

-   [**Uniweb RTE**](link)

    -   Runtime environment
    -   Local development
    -   Self-hosting capabilities

-   [**Uniweb CMS**](https://uniwebcms.com)
    -   Full-featured CMS
    -   Team collaboration
    -   Content management
    -   Enterprise features

## 🚀 Deployment

Your site builds to static files that can be hosted anywhere:

```bash
# Build the site
npm run build

# Output in 'dist' folder:
dist/
├── index.html
├── assets/
└── ...
```

Deploy to your preferred platform:

-   GitHub Pages
-   Netlify
-   Vercel
-   Any static host

## 🤝 Community

-   📚 [Documentation](https://link-to-docs)
-   🌟 [GitHub Repo](https://github.com/uniweb/site-starter)
-   🐛 [Report Issues](https://github.com/uniweb/site-starter/issues)
-   💡 [Feature Requests](https://github.com/uniweb/site-starter/discussions)

---

Built with ❤️ by the Uniweb Community
