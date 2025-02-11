# Uniweb Site Starter

A streamlined template for creating content-driven websites powered by Uniweb runtime modules. Perfect for testing component libraries, prototyping sites, and exploring the Uniweb ecosystem.

## 🎯 What is This?

This starter template provides a lightweight environment for working with Uniweb component libraries:

-   Test component libraries during development
-   Create prototype sites with structured content
-   Explore Uniweb's content-first approach
-   Build static sites powered by Uniweb runtime modules

## ⚡️ Quick Start

**Option 1: Use as Template (Recommended)**

1. Click the green "Use this template" button above
2. Name your repository and create it
3. Clone your new repository locally
4. Install dependencies: `npm install`
5. Link a component module: `npm run use <module-url>`
6. Start developing: `npm run dev`

**Option 2: Direct Clone**

```bash
git clone https://github.com/uniwebcms/site-starter my-site
cd my-site
rm -rf .git
git init
npm install
npm run use <module-url>
npm run dev
```

Visit `http://localhost:3000` to see your site in action!

## 📝 Creating Content

### Page Types

The site supports several types of pages with special prefixes:

1. **Regular Pages** (e.g., `home`, `about`)

    - Create content specific to that page
    - Can opt out of global elements via settings

2. **Global Pages** (prefixed with `@`)

    - `@header/` - Site-wide header/navigation
    - `@footer/` - Site-wide footer
    - `@left/` - Left sidebar/panel
    - `@right/` - Right sidebar/panel
    - Content appears on all pages unless disabled

3. **Hidden Pages** (prefixed with `_`)
    - Pages starting with underscore (e.g., `_drafts/`) are ignored during processing
    - Useful for work in progress or archived content
    - Example: `_drafts/`, `_archive/`, `_temp/`

Each page can have multiple sections and its own settings:

```yaml
# page.yml example
title: About Us
layout:
    header: false # Opt out of global header
    leftPanel: true # Include left panel
    rightPanel: false # No right panel
```

Your website content lives in markdown files, organized in a simple folder structure:

```
my-site/
├── pages/              # Your website content
│   ├── @header/       # Global header
│   │   ├── page.yml
│   │   └── 1-nav.md
│   ├── @footer/       # Global footer
│   │   └── 1-links.md
│   ├── home/          # Home page
│   │   ├── page.yml
│   │   ├── 1-hero.md
│   │   └── 2-features.md
│   ├── about/         # Regular page
│   │   ├── page.yml
│   │   └── 1-main.md
│   └── _drafts/       # Hidden from processing
│       ├── new-page/
│       └── archive/
└── public/            # Static assets
    ├── index.html
    ├── img/
    └── video/
```

### Writing Pages

1. Create a folder under `pages/` for each page
2. Add numbered markdown files for each section
3. (Optional) Add `page.yml` for page settings

Each markdown file configures how its content should be displayed:

```markdown
---
# Component selection
component: Hero

# System-wide settings (handled by runtime engine)
theme: light
background: assets/images/hero.jpg
spacing: large
animation: fade-in

# Component-specific properties
props:
    layout: compact
    showCta: true
---

### Eyebrow heading

# Welcome to Our Research Lab

Discover our groundbreaking work in...
```

The front matter (between `---`) contains:

-   `component`: Which component to use
-   System settings: Common features like `theme`, `background`, `spacing`, handled automatically by the runtime engine
-   `props`: Properties specific to the chosen component

### Adding Static Assets

Place your static files in the `public` folder:

```markdown
# Images

![Lab Team](/img/team.jpg)

# Local Video

@[video](/video/demo.mp4)

# YouTube

@[video](https://www.youtube.com/watch?v=VIDEO_ID)

# Vimeo

@[video](https://vimeo.com/VIDEO_ID)
```

The `public` folder can contain any static assets:

-   `img/` - Images used in your content
-   `video/` - Local video files
-   `favicon.ico` - Site favicon
-   Other assets like fonts, documents, etc.

All files in `public` are copied to the root of your built site, maintaining their folder structure.

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

For complex content, create related sections:

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

## 🌐 Part of the Uniweb Ecosystem

This starter works with the broader Uniweb ecosystem:

-   [**Uniweb CMS**](https://uniwebcms.com)

    -   Full-featured content management system
    -   Dynamic data and multilingual workflows
    -   Team collaboration features
    -   Built-in search and infrastructure
    -   Enterprise-ready deployment

-   **Uniweb Runtime Modules**
    -   Reusable component libraries
    -   Instant updates across sites
    -   Consistent design systems
    -   Professional development tools

For production websites that need dynamic data, team workflows, or enterprise features, [Uniweb CMS](https://uniwebcms.com) provides a complete solution. This starter template is ideal for component library development, prototyping, and exploring the Uniweb approach to content management.

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
