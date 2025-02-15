# Uniweb Site Starter

Create sophisticated websites using just markdown files. This template lets you build anything from documentation to interactive marketing sites without writing any code - by connecting your content to pre-built component libraries that handle all the technical complexity.

Each markdown file in your site can tap into advanced React components through simple configuration, giving you the power of modern web development without the coding overhead.

> **Looking for a quick start?** Check out our pre-configured starters for [documentation sites](link) and [marketing sites](link) that come with ready-to-use content and open-source component libraries.

## How It Works

Your website's capabilities come from two parts:

1. **Your Content** (using this template):

   - Simple markdown files that define your content
   - Easy-to-understand front matter for configuration
   - Static assets like images and documents
   - No coding required

2. **A Component Library**:
   - Pre-built collection of advanced React components
   - Handles all technical implementation
   - Provides sophisticated features and interactions
   - Loaded automatically at runtime

This separation of content and functionality is powered by Uniweb's runtime module system. Each component library is packaged as a runtime module that can be loaded dynamically by any Uniweb site. This architecture enables powerful workflows:

- Content teams can work independently of design changes
- Component updates instantly propagate to all sites using them
- Sites can switch design systems while keeping their content unchanged
- Developers can maintain and evolve components separately from content

Everything is powered by the Uniweb Runtime Environment (RTE), an open-source engine that handles routing, data management, and component loading.

## Why Choose This Approach?

The Uniweb Site Starter excels in several scenarios:

- **Component Library Development**: If you're building Uniweb components, this provides the ideal testing environment. Create and test your libraries with real content before deploying them to production sites.

- **Content-Focused Teams**: For teams who prefer working directly with markdown and Git, this provides a streamlined way to manage content using familiar developer tools.

- **Technical Testing and Prototyping**: Whether you're evaluating Uniweb for a project or prototyping a new design system, this starter gives you hands-on experience with the core concepts.

While this starter is perfect for markdown-based projects, teams needing visual editing tools, collaboration features, or advanced content management will love our [Uniweb CMS](https://uniwebcms.com). The CMS provides a complete no-code solution with translation management, team workflows, and enterprise features.

## Component Libraries

Component libraries define how your content appears and behaves. They provide the building blocks—from simple text components to complex interactive features—that bring your content to life. With Uniweb, you can:

- Use any public component library
- Create your own using our [component library template](https://github.com/uniwebcms/component-library-template)
- Use commercial libraries from the Uniweb marketplace
- Switch libraries without modifying your content

## Getting Started

Before you begin, you'll need:

- A component library URL (public or local development)
- Node.js and npm installed
- Basic familiarity with markdown and Git

Create your first Uniweb site:

1. Create your site repository:

   ```bash
   # Use this template (recommended)
   Click the "Use this template" button above

   # Or clone directly
   git clone https://github.com/uniwebcms/site-starter my-site
   cd my-site
   rm -rf .git
   git init
   ```

2. Set up your development environment:
   ```bash
   npm install
   npm run use <library-url>  # Link a component library
   npm run dev               # Start development server
   ```

Visit `http://localhost:3000` to see your site in action! The development server includes hot reloading, so you'll see your content changes immediately.

## Content Organization

Your website's content is structured through markdown files, organized in a clear folder hierarchy:

```
my-site/
├── pages/
│   ├── home/          # Your home page
│   │   ├── page.yml   # Page settings
│   │   ├── 1-hero.md  # Hero section
│   │   └── 2-main.md  # Main content
│   ├── about/         # About page
│   ├── @header/       # Global header (appears on all pages)
│   ├── @footer/       # Global footer
│   └── _drafts/       # Hidden during build
└── public/            # Static assets
    └── images/
```

Each markdown file defines both its content and how it should be displayed:

```markdown
---
component: Hero
theme: light
props:
  layout: centered
---

# Welcome to Our Site

We believe in making website development both powerful and enjoyable...
```

## Deployment

Build your site for production:

```bash
npm run build
```

The `dist` folder contains everything needed to deploy your site. Host it anywhere:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## Technical Details

For detailed information about page types, configuration options, and advanced features, see our [Technical Guide](docs/technical.md).

## Join the Community

We're building something special, and we'd love for you to be part of it:

- 📘 [Documentation](https://link-to-docs)
- 🌟 [GitHub Repository](https://github.com/uniweb/site-starter)
- 🐛 [Report Issues](https://github.com/uniweb/site-starter/issues)
- 💡 [Feature Requests](https://github.com/uniweb/site-starter/discussions)

## License

This starter repository is licensed under GPL-3.0-or-later.

You are free to use and modify this repository, but if you distribute it (as a template or software package), you must also release your modifications under the same license.

Note: Websites created using this starter are NOT considered distributions and do not need to be licensed under GPL.

---

Built with ❤️ by the Uniweb Community. Want to learn more about what's possible with Uniweb? Visit us at [uniwebcms.com](https://uniwebcms.com).
