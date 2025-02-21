# Deployment Guide

Learn how to deploy Uniweb modules and sites to production. This guide covers build processes, hosting options, and best practices for deployment.

## Contents

- [Understanding Deployment](#understanding-deployment)
- [Building for Production](#building-for-production)
- [Hosting Options](#hosting-options)
- [Continuous Integration](#continuous-integration)
- [Advanced Deployment](#advanced-deployment)

## Understanding Deployment

### What Gets Deployed

```
┌─ Your Project ─────┐    ┌─ Production ──────┐
│                    │    │                    │
│  Modules           │ => │  Built Modules     │
│  • Source code     │    │  • Optimized JS    │
│  • Assets          │    │  • Processed CSS   │
│                    │    │                    │
│  Sites             │ => │  Static Sites      │
│  • Content         │    │  • HTML            │
│  • Images          │    │  • Assets          │
└────────────────────┘    └────────────────────┘
```

### Deployment Types

1. **Module Deployment**

   - Hosted on CDN/static hosting
   - Available to websites
   - Versioned updates

2. **Site Deployment**
   - Static site hosting
   - Connected to modules
   - Content-focused

## Building for Production

### Basic Build

```bash
# Build everything
yarn uniweb build

# Build specific parts
yarn uniweb build --modules module1
yarn uniweb build --sites site1
```

### Build Configuration

```javascript
// uniweb.config.js
module.exports = {
  build: {
    modules: {
      minify: true,
      sourceMaps: false,
    },
    sites: {
      optimize: true,
      prefetch: true,
    },
  },
};
```

### Build Output

```
dist/
├── modules/
│   └── module1/
│       ├── index.js
│       └── assets/
├── sites/
│   └── site1/
│       ├── index.html
│       └── assets/
└── index.html
```

## Hosting Options

### GitHub Pages

1. Enable GitHub Pages:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: yarn install
      - run: yarn uniweb build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

2. Configure repository settings
3. Access your deployed content

### Netlify

1. Connect your repository
2. Configure build settings:

```toml
# netlify.toml
[build]
  command = "yarn uniweb build"
  publish = "dist"
```

### Vercel

1. Import your project
2. Set build configuration:

```json
{
  "build": {
    "command": "yarn uniweb build",
    "output": "dist"
  }
}
```

### Custom Hosting

1. Build your project
2. Upload to any static host
3. Configure routing if needed

## Continuous Integration

### GitHub Actions

```yaml
name: CI/CD
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node
        uses: actions/setup-node@v2
      - name: Install
        run: yarn install
      - name: Build
        run: yarn uniweb build
      - name: Test
        run: yarn uniweb test
```

### Version Management

```bash
# Update module version
yarn uniweb version patch
yarn uniweb version minor
yarn uniweb version major

# Deploy new version
yarn uniweb deploy
```

## Advanced Deployment

### Environment Configuration

```bash
# Set environment
yarn uniweb build --env production

# Use env file
yarn uniweb build --env-file .env.prod
```

### CDN Integration

```javascript
// uniweb.config.js
module.exports = {
  cdn: {
    url: "https://your-cdn.com",
    upload: true,
    cache: true,
  },
};
```

### Performance Optimization

1. **Asset Optimization**

```bash
# Optimize images
yarn uniweb assets optimize

# Generate image variants
yarn uniweb assets variants
```

2. **Bundle Optimization**

```bash
# Analyze bundles
yarn uniweb analyze

# Split chunks
yarn uniweb build --split-chunks
```

### Security

1. **Content Security Policy**

```html
<!-- dist/index.html -->
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'"
/>
```

2. **Access Control**

```javascript
// uniweb.config.js
module.exports = {
  security: {
    headers: true,
    cors: ["allowed-domain.com"],
  },
};
```

## Best Practices

### Pre-deployment Checklist

1. Run tests
2. Build in production mode
3. Check bundle sizes
4. Verify assets
5. Test performance

### Monitoring

1. Set up error tracking
2. Monitor performance
3. Check analytics
4. Watch server logs

### Rollback Strategy

1. Keep version history
2. Maintain backups
3. Test rollback process
4. Document procedures

## Troubleshooting

### Common Issues

1. **Build Failures**

   - Check dependencies
   - Verify configurations
   - Review build logs

2. **Deployment Errors**
   - Check permissions
   - Verify paths
   - Review hosting settings

### Debug Tools

```bash
# Debug build
yarn uniweb build --debug

# Show detailed logs
yarn uniweb deploy --verbose

# Validate configuration
yarn uniweb config validate
```

## Next Steps

- Set up [Monitoring](monitoring-guide.md)
- Learn about [Scaling](scaling-guide.md)
- Join our [Discord](https://discord.gg/uniweb) for help

---

Need help? Check our [troubleshooting guide](troubleshooting.md) or join our [Discord community](https://discord.gg/uniweb).
