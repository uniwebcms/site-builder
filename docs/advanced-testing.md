# Advanced Testing: Connecting to Uniweb CMS

When developing components, being able to test them with real-world content and data makes a huge difference. This guide shows you how to connect your local development environment directly to a live Uniweb CMS site, enabling you to test your modules in a production-like environment while maintaining the quick feedback loop of local development.

## Overview

```
┌─ Local Development ─┐     ┌─ Tunnel ─────┐     ┌─ Uniweb CMS ─────┐
│                     │     │              │     │                  │
│  Your Module        │ ==> │  Cloudflare  │ ==> │  Live Website    │
│  • Components       │     │  Tunnel      │     │  • Real content  │
│  • Hot reloading    │     │              │     │  • Dynamic data  │
│                     │     │              │     │                  │
└─────────────────────┘     └──────────────┘     └──────────────────┘
```

This connection gives you the best of both worlds: the immediate feedback of local development combined with the rich content and data available in your CMS. You can make changes to your components and see them instantly reflected in your live CMS site, testing against real content, dynamic data, and production APIs.

## Getting Started

Before you begin, you'll need a few things in place. On your local machine, you should have the Uniweb Framework installed and a module you're developing. You'll also need the Cloudflared CLI tool, which creates a secure tunnel between your local environment and the internet. On the CMS side, you'll need an active website where you have editor access.

The Cloudflared CLI can be installed through various package managers:

```bash
# macOS
brew install cloudflared

# Windows
winget install cloudflare.cloudflared

# Linux (Debian/Ubuntu)
curl -L https://pkg.cloudflare.com/cloudflared-deb | sudo tee /etc/apt/cloudflared.list
sudo apt update && sudo apt install cloudflared
```

## Setting Up the Connection

The setup process involves several steps that connect your local environment to your CMS site securely.

### Starting Your Local Environment

First, get your local development environment running. Open a terminal and start your development server:

```bash
# Start your development server
yarn uniweb start
```

In a separate terminal, create the tunnel that will make your local environment accessible:

```bash
# Create a secure tunnel
yarn uniweb tunnel
```

The tunnel command will provide you with a URL like `https://your-tunnel-name.trycloudflare.com/your-module`. Save this URL - you'll need it to configure your CMS site.

### Configuring Your CMS Site

With your local environment accessible through the tunnel, you can now connect it to your CMS site. Navigate to your website settings in the Uniweb CMS and locate the Development Mode section:

```
┌─ Website Settings ────────────────────────────────────┐
│                                                       │
│  ⚙️ Development Mode                                   │
│                                                       │
│  [✓] Enable Dev Mode                                  │
│                                                       │
│  Module URL:                                          │
│  [https://your-tunnel.trycloudflare.com/your-module]  │
│                                                       │
│                                                       │
│  [Save Changes]                                       │
│                                                       │
└───────────────────────────────────────────────────────┘
```

Enable Dev Mode and enter your tunnel URL. Once you save these settings, the CMS will begin using your local module instead of the production version.

## Working with CMS Data

Your components now have access to all the data available in the CMS environment. This means you can work with actual content structures, test dynamic features, and ensure your components handle all possible scenarios correctly.

For example, a component that displays dynamic data might look like this:

```javascript
function DynamicComponent({ block }) {
  const data = block.input;

  return (
    <div className="dynamic-content">
      <h2>{data.title}</h2>
      <div className="content">
        {data.items.map((item) => (
          <ItemCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
```

You can modify this component locally and see your changes instantly reflected in the CMS environment, complete with real data flowing through the system.

## Advanced Configuration

The tunnel connection can be customized to match your development needs. Create a configuration file to set up persistent options:

```javascript
// uniweb.config.js
module.exports = {
  tunnel: {
    provider: "cloudflare",
    options: {
      // Custom subdomain if you have a Cloudflare account
      subdomain: "my-module-dev",
      // Local port to expose
      port: 3000,
      // Additional headers
      headers: {
        "X-Dev-Mode": "true",
      },
    },
  },
  // Development server options
  dev: {
    // Enable hot module replacement
    hot: true,
    // Use HTTPS locally
    https: true,
    // Configure API proxying
    proxy: {
      "/api": {
        target: "https://api.example.com",
        changeOrigin: true,
      },
    },
  },
};
```

## Testing Best Practices

When testing your components with the CMS, follow these proven practices to ensure thorough testing:

Start with simple content and gradually increase complexity. Test your components with:

- Minimal content to ensure base functionality
- Rich content to verify layout handling
- Edge cases like missing data or extremely long content
- Different screen sizes and orientations

Monitor performance throughout your testing:

- Watch for unnecessary re-renders
- Check network request patterns
- Verify memory usage
- Test loading states

Pay special attention to error handling:

- Invalid data structures
- Network failures
- Missing assets
- User input validation

## Troubleshooting

If you encounter issues with your development setup, here are some common solutions:

### Connection Issues

If your tunnel connection isn't working:

```bash
# Check tunnel status
yarn uniweb tunnel status

# Restart the tunnel
yarn uniweb tunnel restart
```

If the CMS isn't loading your local module:

1. Verify your tunnel URL is correct and accessible
2. Check that Dev Mode is properly enabled
3. Clear your browser cache
4. Review browser console for specific errors

### Development Server Problems

For issues with the local development server:

```bash
# Start with debug logging
yarn uniweb start --debug

# Clear development cache
yarn uniweb clean

# Verify your configuration
yarn uniweb config verify
```

## Security Considerations

When using Dev Mode, keep these security practices in mind:

Remember that Dev Mode provides direct access to your local environment. Always:

- Use it only during active development
- Disable it when not needed
- Never expose sensitive development data
- Use secure tunnel connections
- Monitor access logs

## Getting Help

If you run into issues or have questions:

1. Check the troubleshooting section above
2. Review the logs using the debug commands
3. Visit our [Documentation](https://docs.uniweb.dev)
4. Join our [Discord community](https://discord.gg/uniweb)
5. Open an issue on our [GitHub repository](https://github.com/uniwebcms/framework)

The Uniweb community is active and helpful - don't hesitate to reach out if you need assistance.
