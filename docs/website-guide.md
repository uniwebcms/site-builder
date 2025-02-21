# Website Creation Guide

Learn how to create content-driven websites with Uniweb. This guide covers everything from basic page creation to advanced content management.

## Contents

- [Getting Started](#getting-started)
- [Content Organization](#content-organization)
- [Creating Pages](#creating-pages)
- [Working with Components](#working-with-components)
- [Advanced Features](#advanced-features)

## Getting Started

### Project Structure

Your website lives in a site directory:

```
my-site/
├── pages/          # Your content
│   ├── home/       # Home page
│   └── about/      # About page
└── public/         # Static assets
```

### Basic Page

Create a new page:

```markdown
---
title: Welcome
description: Our homepage
---

# Welcome to Our Site

We're building something amazing...
```

## Content Organization

### Pages and Sections

Each page can have multiple sections:

```
pages/
└── home/
    ├── page.yml    # Page settings
    ├── hero.md     # Hero section
    ├── features.md # Features section
    └── cta.md      # Call to action
```

### Global Content

Special folders for shared content:

```
pages/
├── @header/       # Global header
├── @footer/       # Global footer
└── _drafts/       # Draft content
```

## Creating Pages

### Page Configuration

```yaml
# pages/home/page.yml
title: Home Page
description: Welcome to our site
layout: default
language: en
```

### Page Sections

Each section connects to a component:

```markdown
---
component: Hero
theme: light
layout: centered
---

# Welcome

Building great websites should be enjoyable...
```

### Content Structure

Sections support various content types:

```markdown
# Main title

## Subtitle

Regular paragraph text...

- List item one
- List item two

[Button text](link)

![Image alt](image.jpg)
```

## Working with Components

### Using Components

Each section specifies its component:

```markdown
---
component: FeatureGrid
columns: 3
theme: light
---

## Our Features

---

title: Fast Development
icon: rocket

---

Build and test instantly

---

title: Clean Design
icon: palette

---

Beautiful by default
```

### Component Parameters

Configure components via parameters:

```markdown
---
component: TeamGrid
layout: mosaic # Visual layout
columns: 4 # Grid columns
showRole: true # Show member roles
animate: true # Enable animations
---
```

### Asset Management

Reference assets from your content:

```markdown
---
component: Hero
background: /images/header.jpg
---

![Team](/images/team.jpg)
```

## Advanced Features

### Draft Content

Use the `_drafts` folder for work in progress:

```
pages/
└── _drafts/
    └── new-feature/
        └── page.md
```

### Content Organization

Group related content:

```
pages/
├── products/
│   ├── product-a/
│   └── product-b/
└── services/
    ├── service-1/
    └── service-2/
```

### Using Data

Some components can load dynamic data:

```markdown
---
component: ProductGrid
dataSource: products.json
---
```

## Best Practices

1. **Organize Content Clearly**

   - Use descriptive folder names
   - Group related content
   - Keep files focused

2. **Write Clean Content**

   - Use clear headings
   - Break up long content
   - Include good metadata

3. **Use Components Effectively**
   - Choose appropriate components
   - Configure parameters thoughtfully
   - Don't fight the component design

## Next Steps

- Explore our [Component Gallery](component-gallery.md)
- Learn about [Development Tools](development-guide.md)
- See [Example Sites](examples.md)

---

Need help? Join our [Discord community](https://discord.gg/uniweb)
