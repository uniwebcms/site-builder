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
npx create-uniweb-site my-site
cd my-site
npm install
npm run dev
```

Visit `http://localhost:3000` to see your site in action!

## 📁 Project Structure

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
    └── images/
```

### Pages & Sections

Each page is a folder under `pages/`:

-   The `home` folder becomes your landing page
-   Each markdown file is a section of content
-   Sections are numbered to control their order (e.g., `1-hero.md`, `2-features.md`)
-   A `page.yml` file can configure page-level settings

### Writing Content

Pages are built from markdown files that specify which component to use:

```markdown
---
component: Hero
props:
    title: Welcome
    style: gradient
---

# Welcome to Our Site

Main content goes here...
```

### Using Images

Place images in the `assets/images/` directory:

```markdown
![Team Photo](/assets/images/team.jpg)
```

## 🔗 Working with Components

Your site's look and feel comes from a Uniweb runtime module - a collection of pre-built React components. You can:

-   Use any public module
-   Test with a local module during development
-   Create your own module (see our [module development guide](link-to-guide))

To link a module:

```bash
# Use a public module
npm run use https://example.com/my-module

# Or use a local module
npm run use http://localhost:5001
```

## 🛠 Development

```bash
# Start development server
npm run dev

# Build for production
npm run build
```

## 📚 Advanced Features

### Section Groups

For complex content, you can create related sections:

```
2-features.md         # Parent section
2.1-feature1.md      # First subsection
2.2-feature2.md      # Second subsection
```

## 🌐 Part of the Uniweb Ecosystem

This starter template works with:

-   [Uniweb RTE](link) - The runtime environment that powers your site
-   [Uniweb CMS](https://uniwebcms.com) - Full-featured CMS for team-based content management
-   Any Uniweb-compatible component module

### When to Use What?

-   **This Starter**: Perfect for developers testing modules, static sites, and self-hosted projects
-   **Uniweb CMS**: Best for teams, content management, and full-featured web platforms
-   **Uniweb RTE**: The engine that powers both, available for local development and self-hosting

## 🤝 Contributing

-   🌟 [GitHub Repo](https://github.com/uniweb/site-starter)
-   🐛 [Report Issues](https://github.com/uniweb/site-starter/issues)
-   💡 [Feature Requests](https://github.com/uniweb/site-starter/discussions)

---

Built with ❤️ by the Uniweb Community
