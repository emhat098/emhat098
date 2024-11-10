'use strict';

import { existsSync, readFileSync } from 'node:fs';
import { join, normalize, sep } from 'node:path';
import { cache } from 'react';
import { VFile } from 'vfile';
import { compileMDX } from './next.mdx.compiler.mjs';
import { IS_DEVELOPMENT } from './next.constants.mjs';
import { getMarkdownFiles } from './next.helper.mjs';
import matter from 'gray-matter';
import {
  DYNAMIC_ROUTES,
  PAGE_METADATA,
} from './next.dynamic.site.constants.mjs';
import { siteConfig } from './next.site.config.mjs';

const createCachedMarkdownCache = () => {
  if (IS_DEVELOPMENT) {
    return {
      has: () => false,
      set: () => {},
      get: () => null,
    };
  }
  return new Map();
};

const getDynamicRouter = async () => {
  const cachedMarkdownFiles = createCachedMarkdownCache();

  const pathnameToFileName = new Map();

  const websitePages = await getMarkdownFiles(process.cwd(), 'pages');

  websitePages.forEach((filename) => {
    let pathname = filename.replace(/((\/)?(index))?\.mdx?$/i, '');

    if (pathname.length > 1 && pathname.endsWith(sep)) {
      pathname = pathname.substring(0, pathname.length - 1);
    }

    pathname = normalize(pathname).replace('.', '');

    pathnameToFileName.set(pathname, filename);
  });

  const _getMarkdownFile = async (pathname = '') => {
    const normalizedPathname = normalize(pathname).replace('.', '');

    if (pathnameToFileName.has(normalizedPathname)) {
      const filename = pathnameToFileName.get(normalizedPathname);

      let filePath = join(process.cwd(), 'pages');

      if (cachedMarkdownFiles.has(normalizedPathname)) {
        const fileContent = cachedMarkdownFiles.get(normalizedPathname);
        return {
          source: fileContent,
          filename,
        };
      }

      if (existsSync(join(filePath, filename))) {
        filePath = join(filePath, filename);

        const fileContent = readFileSync(filePath, 'utf-8');

        cachedMarkdownFiles.set(normalizedPathname, fileContent);

        return {
          source: fileContent,
          filename,
        };
      }

      const { source: fileContent } = await _getMarkdownFile(pathname);

      cachedMarkdownFiles.set(normalizedPathname, fileContent);

      return {
        source: fileContent,
        filename,
      };
    }

    return { filename: '', source: '' };
  };

  const getMarkdownFile = cache(async (pathname) => {
    return await _getMarkdownFile(pathname);
  });

  const _getMdxContent = async (source = '', filename = '') => {
    const sourceAsVFile = new VFile(source);

    const fileExtension = filename.endsWith('.mdx') ? 'mdx' : 'md';

    return compileMDX(sourceAsVFile, fileExtension);
  };

  const getMdxContent = cache(async (source, filename) => {
    return await _getMdxContent(source, filename);
  });

  const getPathName = (path = []) => path.join('/');

  /**
   * Create cached for page metadata.
   */
  const getMetadata = cache((filename = '') => {
    return _getMetadata(filename);
  });

  /**
   * Get the metadata page.
   *
   * @param {string} path
   * @returns {Promise<import('next').Metadata>}
   */
  const _getMetadata = async (path = '') => {
    try {
      const metadata = { ...PAGE_METADATA };

      const { source = '' } = await getMarkdownFile(path);
      const { data } = matter(source);

      metadata.title = data.title
        ? `${siteConfig.title} - ${data.title}`
        : siteConfig.title;

      metadata.description = data.description ?? siteConfig.description;

      return metadata;
    } catch (error) {
      if (IS_DEVELOPMENT) {
        throw new Error(error);
      }
    }
  };

  /**
   * This method returns a list of all routes.
   *
   * @param {string} locale
   * @returns {Promise<Array<string>>}
   */
  const getRoutes = () => {
    return [...pathnameToFileName.keys()].concat([...DYNAMIC_ROUTES.keys()]);
  };

  return {
    getMarkdownFile,
    getMdxContent,
    getMdxContent,
    getPathName,
    getMetadata,
    getRoutes,
  };
};

export const dynamicRouter = await getDynamicRouter();
