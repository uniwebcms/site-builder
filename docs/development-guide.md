# Development Guide

Learn how to use Uniweb's development environment effectively. This guide covers local development, testing, and the tools available to you.

## Contents

- [Development Environment](#development-environment)
- [Working with Modules](#working-with-modules)
- [Working with Sites](#working-with-sites)
- [Testing & Preview](#testing--preview)
- [Advanced Tools](#advanced-tools)

## Development Environment

### Starting Development

```bash
# Start the development environment
yarn uniweb start

# Start with specific options
yarn uniweb start --port 3000 --tunnel
```

### Interface Overview

```
┌─ Uniweb Development Environment ────────────────────────┐
│                                                        │
│ ┌─ Navigation ───┐ ┌─ Main Area ──────────────────┐    │
│ │                │ │                               │    │
│ │ 🏠 Dashboard   │ │  [Module/Site Preview]        │    │
│ │ └─ Status     │ │                               │    │
│ │                │ │                               │    │
│ │ 📦 Modules     │ │                               │    │
│ │ ├─ module1    │ │                               │    │
│ │ └─ module2    │ │                               │    │
│ │                │ │                               │    │
│ │ 🌐 Sites       │ │                               │    │
│ │ ├─ site1      │ │                               │    │
│ │ └─ site2      │ │                               │    │
│ │                │ │                               │    │
│ │ 🛠️ Tools       │ └───────────────────────────────┘    │
│ │ └─ Settings   │                                      │
│ └──────────────┘                                      │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Key Features

- Hot Module Reloading
- Instant Preview
- Component Testing
- Asset Management
- Build Tools

## Working with Modules

### Creating Components

```bash
# Create a new component
yarn uniweb new:component MyComponent

# Create with options
yarn uniweb new:component MyComponent \
  --type exported \
  --module custom
```

### Development Flow

1. Create/modify components
2. See instant preview
3. Test with different content
4. Review in test site

### Directory Structure

```
module1/
├── components/
│   ├── Hero/
│   │   ├── index.jsx
│   │   └── styles.css
│   └── Features/
│       ├── index.jsx
│       └── styles.css
├── shared/
│   └── utils.js
└── package.json
```

### Testing Components

```javascript
// Preview different states
export default function MyComponent({ content }) {
  return <div className="preview-wrapper">{/* Your component content */}</div>;
}
```

## Working with Sites

### Creating Pages

```bash
# Create a new page
yarn uniweb new:page AboutUs

# Create with template
yarn uniweb new:page Products --template basic
```

### Live Preview

- Changes appear instantly
- Preview multiple devices
- Test different layouts
- Check responsive design

### Asset Management

```bash
# Add assets to your site
yarn uniweb assets add image.jpg

# Optimize assets
yarn uniweb assets optimize
```

## Testing & Preview

### Local Testing

```bash
# Start local server
yarn uniweb start

# Watch for changes
yarn uniweb watch
```

### Remote Testing

Connect your local development environment to a live Uniweb CMS site, and test with multilingual content and dynamic data.

```bash
# Create tunnel for remote access
yarn uniweb start --tunnel

# Get public URL
yarn uniweb url
```

Learn more in our [Advanced Testing Guide](docs/advanced-testing.md).

## Advanced Tools

### Development Server

Configure your development environment:

```javascript
// uniweb.config.js
module.exports = {
  port: 3000,
  hot: true,
  open: true,
  tunnel: false,
};
```

### Module Management

Work with multiple modules:

```bash
# List modules
yarn uniweb modules list

# Create new module
yarn uniweb modules create NewModule

# Link modules
yarn uniweb modules link ./local-module
```

### Site Management

Manage multiple sites:

```bash
# Create new site
yarn uniweb sites create MySite

# List sites
yarn uniweb sites list

# Set active site
yarn uniweb sites use site1
```

### Build Process

Control the build process:

```bash
# Development build
yarn uniweb build --dev

# Production build
yarn uniweb build --prod

# Build specific targets
yarn uniweb build --modules module1 --sites site1
```

## Best Practices

### Development Workflow

1. Start development server
2. Make changes to code/content
3. See instant preview
4. Test thoroughly
5. Build for production

### Testing Strategy

- Test components in isolation
- Test with various content
- Test responsive behavior
- Test performance
- Test error cases

## Troubleshooting

### Common Issues

1. **Server won't start**

   - Check port availability
   - Verify dependencies
   - Check configuration

2. **Hot reload not working**

   - Clear cache
   - Restart server
   - Check file watchers

3. **Preview issues**
   - Clear browser cache
   - Check console errors
   - Verify routes

### Debug Tools

```bash
# Enable debug mode
yarn uniweb start --debug

# Show detailed logs
yarn uniweb --verbose

# Check system status
yarn uniweb doctor
```

## Next Steps

- Explore [Component Development](component-guide.md)
- Learn about [Deployment](deployment-guide.md)
- Join our [Discord](https://discord.gg/uniweb) for help

---

Need assistance? Check our [troubleshooting guide](troubleshooting.md) or join our [Discord community](https://discord.gg/uniweb).
