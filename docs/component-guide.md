# Uniweb Components: A Developer's Guide

This guide will show you how to create powerful web components with minimal complexity. Whether you're new to web development or an experienced React developer, you'll find Uniweb's approach both intuitive and powerful.

## The Uniweb Advantage

Uniweb handles common parts of web development for you:

- Content is structured and ready when your component renders
- Dynamic data is fetched automatically
- Components receive everything through a clean, consistent interface
- Theming variables are pre-applied by the rendering engine

## Component Basics

Here's a simple component that displays a feature card:

```javascript
function FeatureCard({ content, params }) {
  // Access structured content and parameters
  const { layout = "default" } = params;
  const { title, description } = content.main;

  return (
    <div className={`card layout-${layout}`}>
      <img src={content.main.image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
```

## Component Properties

Your component receives these properties:

### 1. Content (`content`)

Structured content ready for display:

```javascript
function ContentSection({ content }) {
  // Main content section
  const { title, subtitle } = content.main;

  // Repeated items (like cards or features)
  const items = content.items;

  // Sequential view of all content elements
  const elements = content.byOrder;

  // Content elements organized by type
  const { headings, images, lists } = content.byType;

  return (
    <section>
      <h1>{title}</h1>
      {items.map((item) => (
        <Card content={item} />
      ))}
    </section>
  );
}
```

### 2. Parameters (`params`)

Configuration options defined by your component:

```javascript
function TeamSection({ params }) {
  // Component parameters with defaults
  const { layout = "grid", columns = 3, showImages = true } = params;

  return (
    <div className={`team layout-${layout} cols-${columns}`}>
      {/* Your content here */}
    </div>
  );
}
```

Each component defines its available parameters in a schema file:

```javascript
// Available parameters shown to users:
{
  "layout": "grid | list | carousel",
  "theme": "light | dark",
  "columns": "number (2-6)"
}
```

For details on creating parameter schemas, see our [Component Configuration Guide](docs/configuration.md).

### 3. Block (`block`)

The complete context when needed:

```javascript
function MyComponent({ block }) {
  // Access all context properties
  const { content, params, input, page, website } = block;

  // Helper methods
  const childContent = block.renderChildren();
}
```

## Common Patterns

### Content Display

```javascript
function HeroSection({ content, params }) {
  const { theme = "light" } = params;
  const { title, subtitle } = content.main;

  return (
    <section className={`hero theme-${theme}`}>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </section>
  );
}
```

### Working with Items

```javascript
function FeatureGrid({ content, params }) {
  const { columns = 3 } = params;
  const features = content.items;

  return (
    <div className={`grid grid-cols-${columns}`}>
      {features.map((feature, i) => (
        <FeatureCard key={i} content={feature} />
      ))}
    </div>
  );
}
```

### Dynamic Data

```javascript
function DashboardCard({ block }) {
  // Access dynamic data
  const metrics = block.input;

  return (
    <div className="dashboard-card">
      <MetricsDisplay data={metrics} />
      <RefreshButton onClick={block.refreshInput} />
    </div>
  );
}
```

## Best Practices

1. **Keep It Simple**

   ```javascript
   // Most components just need content
   function MyComponent({ content }) {
     const { title } = content.main;
     return <h1>{title}</h1>;
   }
   ```

2. **Use Content Structure**

   ```javascript
   const { title, subtitle } = content.main; // Main content
   const items = content.items; // Repeated items
   const { headings, images } = content.byType; // Content by type
   ```

3. **Configure with Parameters**
   ```javascript
   const { layout = "default", theme = "light" } = params;
   ```

## Advanced Features

While Uniweb simplifies common scenarios, you have access to React's complete feature set when needed:

### State Management

```javascript
import { useState } from "react";

function TabPanel({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = content.items;

  return (
    <div>
      {tabs.map((tab, i) => (
        <button onClick={() => setActiveTab(i)}>{tab.title}</button>
      ))}
    </div>
  );
}
```

### Effects

```javascript
import { useEffect } from "react";

function AnimatedSection({ content }) {
  useEffect(() => {
    const element = document.querySelector(".animated");
    element.classList.add("fade-in");
  }, []);

  return <div className="animated">{content.main.title}</div>;
}
```

## Common Use Cases

### Marketing Components

```javascript
function CTASection({ content, params }) {
  const { theme } = params;
  const { title, subtitle, buttonText } = content.main;

  return (
    <div className={`cta theme-${theme}`}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <button>{buttonText}</button>
    </div>
  );
}
```

### Documentation Components

```javascript
function CodeExample({ content }) {
  const { title, code, language } = content.main;

  return (
    <div className="code-example">
      <h3>{title}</h3>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
```

## Conclusion

Uniweb makes component development accessible without sacrificing power:

- Start simple - most components just need to display content
- Use structured content - organized for easy access
- Configure with parameters - clean customization
- Advanced features available when needed

Remember:

- Content is structured and ready
- Dynamic data is handled automatically
- Parameters provide clean configuration
- React features are available when needed

This approach lets you focus on creating great components while Uniweb handles the complexity.
