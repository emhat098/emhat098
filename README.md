# Read Me First

> Welcome to an alternative blog setup for Notion users. This application provides full control over your content with MDX files for Markdown.

## How to Use It?

1. The pages folder contains all the MDX files, and you must add your Markdown files to this folder.
2. index.mdx serves as the main endpoint.
3. The blog folder is where you can write and organize your blog posts.
4. To define a new route, add a new folder within the pages directory, such as contact/index.mdx.
5. Each MDX file must follow the frontmatter format (metadata) used in other existing files.
6. You can add support components inside MDX files.

## What Are the Components in MDX Files?

These are built-in components available in the MDX compiler for easy integration. Here’s the list:

```tsx
import Articles from './components/articles/articles';
import Banner from './components/banner/banner';
import BlogLatest from './components/blog/latest';
import CategoryList from './components/category/category-list';
import InFooter from './components/footer/in-footer';
import Navbar from './components/navbar/navbar';
```

### Vercel-Only Support

This system is designed for the Vercel platform. Deploying to other platforms may require adjustments.

### Powered by Next.js

This application is built with Next.js, offering flexibility and performance for your blog.

### Tailwind CSS as the Main UI Framework

The UI is designed with Tailwind CSS, focusing on simplicity and custom styling.

### No External Theme Libraries

This application does not use external theme libraries, keeping the UI lightweight and customizable.

Good luck with your blog!
