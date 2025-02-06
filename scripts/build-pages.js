// scripts/build-pages.js
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';

// Get current directory in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processDirectory(dirPath) {
    const sections = [];
    const files = await fs.readdir(dirPath);

    for (const file of files) {
        if (file.endsWith('.md')) {
            const fullPath = path.join(dirPath, file);
            const content = await fs.readFile(fullPath, 'utf-8');
            const { data: frontmatter, content: markdown } = matter(content);

            // Process markdown content into AST
            const ast = await unified().use(remarkParse).use(remarkGfm).parse(markdown);

            // Extract section order from filename (e.g., "1.1-hero.md" -> "1.1")
            const sectionId = file.split('-')[0];

            sections.push({
                id: sectionId,
                component: frontmatter.component,
                props: frontmatter.props || {},
                content: {
                    raw: markdown,
                    ast: JSON.parse(JSON.stringify(ast)) // Make ast JSON-serializable
                }
            });
        }
    }

    // Sort sections by their numeric ID
    return sections.sort((a, b) => {
        const [aMajor, aMinor = 0] = a.id.split('.').map(Number);
        const [bMajor, bMinor = 0] = b.id.split('.').map(Number);
        return aMajor !== bMajor ? aMajor - bMajor : aMinor - bMinor;
    });
}

async function buildPages() {
    try {
        // Get the project root directory
        const projectRoot = path.resolve(__dirname, '..');
        const pagesDir = path.join(projectRoot, 'content', 'pages');
        const outputDir = path.join(projectRoot, 'dist');

        // Create output directory if it doesn't exist
        await fs.mkdir(outputDir, { recursive: true });

        // Process all page directories
        const pages = {};
        const entries = await fs.readdir(pagesDir, { withFileTypes: true });

        for (const entry of entries) {
            if (entry.isDirectory()) {
                const pagePath = path.join(pagesDir, entry.name);
                pages[entry.name] = await processDirectory(pagePath);
                console.log(`Processed page: ${entry.name}`);
            }
        }

        // Write the processed content
        await fs.writeFile(path.join(outputDir, 'content.json'), JSON.stringify(pages, null, 2));

        console.log('Content built successfully!');
    } catch (error) {
        console.error('Error building pages:', error);
        process.exit(1);
    }
}

buildPages();
