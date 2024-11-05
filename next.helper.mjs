'use strict';

import { fileURLToPath } from 'node:url';
import { glob } from 'glob';

/**
 * @type {Map<string, Promise<string[]>>}
 */
const globCacheByPath = new Map();

/**
 * This gets the relative path from `import.meta.url`
 *
 * @param {string} path the current import path
 * @returns {string} the relative path from import
 */
export const getRelativePath = (path) => fileURLToPath(new URL('.', path));

/**
 * Get all markdown files in the specified directory.
 *
 * @param {string} root The root directory to search.
 * @param {string} cwd The current working directory.
 * @param {string[]} [ignore=[]] The patterns to ignore.
 * @returns {Promise<string[]>} A promise that resolves to an array of file paths.
 */
export const getMarkdownFiles = async (root, cwd, ignore = []) => {
  const cacheKey = `${root}${cwd}${ignore.join('')}`;

  if (!globCacheByPath.has(cacheKey)) {
    const filesPromise = glob('**/*.{md,mdx}', {
      cwd,
      ignore,
      sync: true,
    });
    globCacheByPath.set(cacheKey, filesPromise);
  }

  return globCacheByPath.get(cacheKey);
};
