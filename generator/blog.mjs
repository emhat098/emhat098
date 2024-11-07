'use strict';

import { getMarkdownFiles } from './../next.helper.mjs';
import { createReadStream } from 'node:fs';
import { join, basename, extname } from 'node:path';
import readline from 'node:readline';
import graymatter from 'gray-matter';
import { IS_DEVELOPMENT } from '@/next.constants.mjs';

const BLOG_PATH = join(process.cwd(), 'pages/blog');

const blogCategories = new Set(['all']);

/**
 * This method parses the source (raw) Markdown content into Frontmatter
 * and returns basic information for blog posts
 *
 * @param {string} filename the filename related to the blog post
 * @param {string} source the source markdown content of the blog post
 */
const getFrontMatter = (filename, source) => {
  try {
    const grayFrontMatter = graymatter(source);
    const {
      title = 'Untitled',
      author = 'Em Ha Tuan',
      username,
      date = new Date(),
      category = 'uncategorized',
    } = grayFrontMatter.data;

    // We also use publishing years as categories for the blog
    const publishYear = new Date(date).getUTCFullYear();

    // Provides a full list of categories for the Blog Post which consists of
    // all = (all blog posts), publish year and the actual blog category
    const categories = [category, `year-${publishYear}`, 'all'];

    // we add the year to the categories set
    blogCategories.add(`year-${publishYear}`);

    // we add the category to the categories set
    blogCategories.add(category);

    // this is the url used for the blog post it based on the category and filename
    const slug = `/blog/${basename(filename, extname(filename))}`;

    return { title, author, username, date: new Date(date), categories, slug };
  } catch (err) {
    console.error(`Error parsing front matter in file ${filename}:`, err);
    if (IS_DEVELOPMENT) {
      throw err;
    }
  }
};

/**
 * Generate the blog data in system.
 *
 * @returns {Promise<import('../types').BlogData>}
 */
const generateBlogData = async () => {
  const fileNames = await getMarkdownFiles(process.cwd(), 'pages/blog', [
    '**/index.md',
    '**/index.mdx',
  ]);

  return new Promise((resolve) => {
    const posts = [];
    const rawFrontMatter = [];

    fileNames.forEach((fileName) => {
      const _stream = createReadStream(join(BLOG_PATH, fileName));

      const _readLine = readline.createInterface({ input: _stream });

      rawFrontMatter[fileName] = [0, ''];

      _readLine.on('line', (line) => {
        rawFrontMatter[fileName][1] += `${line}\n`;

        if (line === '---') {
          rawFrontMatter[fileName][0] += 1;
        }

        if (rawFrontMatter[fileName][0] === 2) {
          _readLine.close();
          _stream.close();
        }
      });

      _readLine.on('close', () => {
        const frontMatter = getFrontMatter(
          fileName,
          rawFrontMatter[fileName][1],
        );
        posts.push(frontMatter);

        if (posts.length === fileNames.length) {
          resolve({
            categories: [...blogCategories],
            posts,
          });
        }
      });

      _stream.on('error', (err) => {
        console.error(`Error reading file ${fileName}:`, err);
        _readLine.close();
        _stream.close();
      });
    });
  });
};

export default generateBlogData;
