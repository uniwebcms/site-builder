# Site Builder

A modern static site generator that separates content from presentation. Content is written in Markdown files with YAML frontmatter, while the UI components are loaded from a remote federated module.

## How It Works

The system has two main parts:

1. **Content Processing**: Markdown files are processed into a structured JSON format. Each page is a directory containing numbered markdown files that represent different sections of the page.

2. **Runtime**: A React application that:
   - Loads the processed JSON content
   - Dynamically imports components from a remote federated module
   - Renders the content using the specified components

## Project Structure

```
site-builder/
├── content/             # Your website content
│   └── pages/          # Each subdirectory is a page
│       ├── home/       # Example page
│       │   ├── 1-hero.md
│       │   ├── 2.1-features.md
│       │   └── 2.2-more-features.md
│       └── about/
│           └── 1-main.md
├── public/             # Static files
│   └── index.html      # HTML template
├── src/               # Application source
│   ├── index.js       # Entry point
│   └── App.js         # Main application
├── scripts/           # Build scripts
│   └── build-pages.js # Content processor
└── webpack.config.cjs # Webpack configuration
```

## Content Structure

Each page section is a Markdown file with YAML frontmatter:

```markdown
---
component: Hero
props:
  layout: centered
  background: gradient
---

# Welcome to Our Site

This is the main content section.
```

File naming determines the section order:

- Simple order: `1-intro.md`, `2-main.md`
- Subsections: `2.1-feature.md`, `2.2-feature.md`

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Configure the remote components URL in your `.env` file:

   ```
   COMPONENTS_MODULE_URL=http://localhost:3001
   ```

3. Create your content in the `content/pages` directory.

## Development

1. Build the content:

   ```bash
   npm run build:pages
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Visit http://localhost:3000

Any changes to the content require running `build:pages` again.

## Production Build

Build everything for production:

```bash
npm run build
```

This will:

1. Process all markdown content into JSON
2. Build the React application
3. Output everything to the `dist` directory

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build everything for production
- `npm run build:pages` - Process markdown into JSON
- `npm run build:app` - Build just the React application

## Remote Components

Components are loaded from a federated module specified by `COMPONENTS_MODULE_URL`. Each component should:

1. Accept these props:
   - `content`: The markdown content
   - `props`: Additional properties from frontmatter
2. Handle markdown rendering appropriately

Example component from the remote module:

```javascript
export default function Hero({ content, ...props }) {
  return (
    <section className={`hero ${props.layout}`}>
      <div className="hero-content">{/* Render markdown content */}</div>
    </section>
  );
}
```

## Environment Variables

Create a `.env` file in your project root:

```properties
# Remote components URL
COMPONENTS_MODULE_URL=http://localhost:3001

# Other configuration as needed
PUBLIC_URL=/
```

## Content Authoring Guide

### Working with Images

Images can be referenced relative to your markdown file:

```markdown
---
component: Hero
props:
  background: ./images/hero-bg.jpg
---

![Team Photo](./images/team.jpg)

# Welcome to our site

The image above will be processed and optimized automatically.
```

### Links and Navigation

Internal links should use relative paths:

```markdown
[Check our products](/products)
[Contact us](/contact)

# Using buttons

::button[Learn More]{href="/learn" variant="primary"}
::button[Contact]{href="/contact" variant="outline"}
```

### Layout Components

Many components support layout configuration through props:

```markdown
---
component: Features
props:
  columns: 3
  spacing: large
  background: light
---

::feature{icon="rocket"}

# Fast Performance

Description of the feature...
::

::feature{icon="shield"}

# Secure

Another feature description...
::
```

### Content Sections

Organize complex content using sections:

```markdown
---
component: ContentBlock
props:
  layout: two-columns
---

::section{title="Left Column"}
Content for the left column...
::

::section{title="Right Column"}
Content for the right column...
::
```

### Special Elements

Use special syntax for UI elements:

```markdown
# Common Elements

::icon{name="github"}
::badge[New]{color="green"}
::alert[Important notice]{type="info"}

# Cards

::card{theme="primary"}

### Card Title

Card content here...
::

# Tabs

::tabs
::tab[First Tab]
Content of first tab
::
::tab[Second Tab]
Content of second tab
::
::
```

### Advanced Examples

#### Hero Section with Background and Overlay

```markdown
---
component: Hero
props:
  background: ./images/hero.jpg
  overlay: dark
  height: full
  alignment: center
---

::badge[New Release]{color="blue"}

# Welcome to Our Platform

The next generation of web development

::button-group{alignment="center"}
::button[Get Started]{variant="primary" size="large"}
::button[Learn More]{variant="outline" size="large"}
::
```

#### Feature Grid with Icons

```markdown
---
component: FeatureGrid
props:
  columns: 3
  spacing: large
---

::feature{icon="zap"}

# Lightning Fast

Build and deploy in minutes
::

::feature{icon="lock"}

# Secure by Default

Enterprise-grade security
::

::feature{icon="code"}

# Developer Friendly

Intuitive APIs and tools
::
```

#### Content with Sidebar

```markdown
---
component: PageLayout
props:
  sidebar: right
  width: narrow
---

::sidebar
::nav-menu - [Getting Started](/docs/start) - [Configuration](/docs/config) - [Advanced Usage](/docs/advanced)
::
::

::main

# Main Content

Your page content here...
::
```

### Best Practices

1. **Images**

   - Store images close to the markdown files
   - Use descriptive filenames
   - Include alt text for accessibility
   - Consider image dimensions for layout

2. **Content Organization**

   - Use clear section numbering
   - Keep sections focused and concise
   - Use appropriate heading levels
   - Break long content into subsections

3. **Component Usage**
   - Check available props in component documentation
   - Test layouts at different screen sizes
   - Use semantic heading structure
   - Keep component configurations simple

## Notes

- The system uses Module Federation for loading components
- Content is processed at build time, not runtime
- Each page's sections are loaded and rendered in order
- Components are loaded dynamically when needed

## License

Copyright 2024 Proximify Inc.

Licensed under the Apache License, Version 2.0. See the [LICENSE](LICENSE) file for details.
