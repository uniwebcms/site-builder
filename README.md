# Uniweb Framework Starter

[![Discord](https://img.shields.io/discord/1234567890?color=7289da&label=Discord&logo=discord&logoColor=white)](https://discord.gg/uniweb)
[![License](https://img.shields.io/badge/license-GPL--3.0-blue.svg)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/uniwebcms/framework-starter?style=social)](https://github.com/uniwebcms/framework-starter)

Create websites and runtime modules with a unique architecture that separates content from code. Build once, update everywhere, and maintain with ease.

```
┌─ Your Content ─────┐     ┌─ Runtime Module ────┐
│  • Pages           │     │  • Components       │
│  • Sections        │ ←── │  • Layouts          │
│  • Assets          │     │  • Features         │
└────────────────────┘     └─────────────────────┘
```

**What is Uniweb?**

- A framework for creating websites and reusable component libraries
- Content lives in simple markdown files
- Components are packaged as runtime modules
- Updates propagate instantly to all connected sites
- Perfect for documentation, marketing sites, and more

**What makes it different?**

- No rebuilding sites when components change
- Clean separation of content from presentation
- Share components across multiple sites
- Instant preview of changes

## Getting Started

See it working in 2 minutes:

```bash
# Create your project
git clone https://github.com/uniwebcms/framework-starter my-project
cd my-project
yarn install

# Start development environment
yarn uniweb start

# Visit http://localhost:3000 to see:
# - Example website
# - Component library
# - Development tools
```

## Understanding Uniweb

Traditional web development couples content tightly with code. Uniweb takes a different approach:

```
Traditional Approach        │  Uniweb Approach
----------------------------│--------------------------------
🏗️ Build-time compilation   │  🚀 Runtime loading
🔨 Rebuild all sites        │  ⚡ Instant updates everywhere
🔗 Coupled content & code   │  ✨ Clean separation
📦 Complex dependencies     │  🎯 Single runtime module
```

### How It Works

```
         Your Sites                   Your Module
┌─────────────────────────┐    ┌─────────────────────────┐
│ Website 1               │    │                         │
│ └─ Content (Markdown)   │    │    React Components     │
│                         │    │    • Layouts            │
│ Website 2               │    │    • Features           │
│ └─ Content (Markdown)   │ ←──│    • Interactions       │
│                         │    │                         │
│ Website 3               │    │    Updates propagate    │
│ └─ Content (Markdown)   │    │    instantly to all     │
│                         │    │    connected sites      │
└─────────────────────────┘    └─────────────────────────┘
```

## Building Websites

Create content-driven websites using markdown and YAML:

```markdown
---
component: Hero
theme: light
---

# Welcome to Our Site

Building powerful websites should be enjoyable...
```

Your content connects to sophisticated components that handle the presentation. Learn more in our [Website Creation Guide](docs/website-guide.md).

## Creating Modules

Build reusable component libraries that power multiple sites:

```javascript
export default function Hero({ content, params }) {
  const { theme = "light" } = params;
  const { title, description } = content.main;

  return (
    <section className={`hero ${theme}`}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
}
```

Your components receive structured content and configuration. Learn more in our [Component Development Guide](docs/component-guide.md).

## Development Tools

The included development environment provides everything you need:

- 🔄 Hot reloading for instant feedback
- 🖼️ Asset management
- 🎮 Auto build and deploy via GitHub Actions
- 🔗 CMS connection to test with dynamic data
- 📝 Comprehensive documentation website

Learn more in our [Development Guide](docs/development-guide.md).

## Choose Your Path

Start with what you need:

### Create a Website

Perfect for:

- Documentation sites
- Marketing pages
- Personal websites
- Static content

### Build a Module

Perfect for:

- Component libraries
- Design systems
- Custom features
- Reusable layouts

### Do Both

Perfect for:

- Testing components
- Rapid prototyping
- Complete solutions
- Learning the framework

You can even connect your local module development to a live Uniweb CMS site for testing with real-world content and data.

## Project Structure

Different project structures are supported.

**Multi-site configuration:**

```
my-project/
├── modules/         # Your runtime modules (optional)
│   └── module1/     # A component library
└── sites/           # Your websites (optional)
   └── site1/        # A website
```

**Single-site configuration:**

```
my-project/
├── pages/           # Website pages
├── modules/         # Your runtime modules (optional)
│   └── module1/     # A component library
├── public/          # Public website assets
├── src/             # Entry files for the website
└── site.yml         # Website settings
```

These commands can be used to create sites and modules:

```bash
# Create a site in the `sites` folder
yarn uniweb create site --name site1

# Create a site at the project's root level
yarn uniweb create site --root

# Create a module in the `modules` folder
yarn uniweb create module --name module1
```

Learn more about available commands in the [CLI Guide](docs/cli-guide.md).

## Deployment

```bash
# Build everything
yarn uniweb build

# Deploy to any static host
yarn uniweb deploy
```

Learn more in our [Deployment Guide](docs/deployment-guide.md).

## Next Steps

### Ready to Grow?

As your needs evolve, consider [Uniweb CMS](https://uniwebcms.com) for a complete, hassle-free solution:

```
┌─ Uniweb Framework ─────┐    ┌─ Uniweb CMS ───────────────┐
│                        │    │                            │
│ • Markdown in files    │ => │ • Visual markdown editor   │
│ • Manual asset upload  │ => │ • Drag-and-drop assets     │
│ • Manual deployment    │ => │ • One-click publishing     │
│ • BYO hosting          │ => │ • Built-in hosting         │
│                        │    │ • Domain management        │
└────────────────────────┘    └────────────────────────────┘
```

The CMS provides everything you need:

- Intuitive visual editor for markdown content
- Simple drag-and-drop asset management
- One-click publishing and hosting
- Domain registration and management
- Team collaboration tools
- Content workflow management
- Translation management
- Enterprise features

It's the easiest way to manage a Uniweb site while maintaining all the power and flexibility of the framework.

### Learn More

- [Component Guide](docs/component-guide.md)
- [Website Guide](docs/website-guide.md)
- [Development Guide](docs/development-guide.md)
- [Deployment Guide](docs/deployment-guide.md)

### Join the Community

- [Discord](https://discord.gg/uniweb)
- [Documentation](https://docs.uniweb.dev)
- [Examples](https://github.com/uniwebcms/examples)

## License

Licensed under GPL-3.0-or-later. You can freely use and modify this starter, but distributions must use the same license. Websites and modules created with this starter are not considered distributions.

---

<div align="center">

Built with ❤️ by the Uniweb Community

[Website](https://uniweb.io) • [Documentation](https://docs.uniweb.dev) • [Discord](https://discord.gg/uniweb)

</div>
