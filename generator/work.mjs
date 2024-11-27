'use strict';

import { getMarkdownFiles } from '../next.helper.mjs';
import { createReadStream } from 'node:fs';
import { join, basename, extname } from 'node:path';
import readline from 'node:readline';
import graymatter from 'gray-matter';
import { IS_DEVELOPMENT } from '@/next.constants.mjs';

/**
 * Default work path.
 *
 * @type {string}
 */
const WORK_PATH = join(process.cwd(), 'pages/work');

/**
 * This method parses the source (raw) Markdown content into Frontmatter
 * and returns basic information for work works
 *
 * @param {string} filename the filename related to the work post
 * @param {string} source the source markdown content of the work post
 * @return {import('../types').BaseFrontMatter}
 */
export const getFrontMatter = (filename, source) => {
  try {
    /**
     * @type {import('../types').LegacyFrontMatter}
     */
    const grayFrontMatter = graymatter(source);
    const {
      title = '',
      date = new Date(),
      summary = '',
      banner = '',
      labels = '',
      layout = 'work',
    } = grayFrontMatter.data;

    const slug = `/work/${basename(filename, extname(filename))}`;

    return {
      title,
      date: new Date(date),
      slug,
      summary,
      banner,
      labels,
      layout,
    };
  } catch (err) {
    console.error(`Error parsing front matter in file ${filename}:`, err);
    if (IS_DEVELOPMENT) {
      throw err;
    }
  }
};

/**
 * Generate the work data in system.
 *
 * @returns {Promise<Array<import('../types').WorkData>>}
 */
const generateWorkData = async () => {
  const fileNames = await getMarkdownFiles(process.cwd(), 'pages/work', [
    '**/index.md',
    '**/index.mdx',
  ]);

  return new Promise((resolve) => {
    const works = [];
    const rawFrontMatter = [];

    fileNames.forEach((fileName) => {
      const _stream = createReadStream(join(WORK_PATH, fileName));

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
        works.push(frontMatter);

        if (works.length === fileNames.length) {
          resolve(works);
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

export default generateWorkData;
