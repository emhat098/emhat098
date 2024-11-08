'use strict';

import javaScriptLanguage from 'shiki/langs/javascript.mjs';
import jsxScriptLanguage from 'shiki/langs/jsx.mjs';
import typeScriptLanguage from 'shiki/langs/typescript.mjs';
import jsonLanguage from 'shiki/langs/json.mjs';
import tsxScriptLanguage from 'shiki/langs/tsx.mjs';
import htmlLanguage from 'shiki/langs/html.mjs';
import cssLanguage from 'shiki/langs/css.mjs';
import scssLanguage from 'shiki/langs/scss.mjs';
import sassLanguage from 'shiki/langs/sass.mjs';
import baseLanguage from 'shiki/langs/bash.mjs';
import javaLanguage from 'shiki/langs/java.mjs';
import dotenvLanguage from 'shiki/langs/dotenv.mjs';
import dockerLanguage from 'shiki/langs/dockerfile.mjs';
import yamlLanguage from 'shiki/langs/yaml.mjs';

import BASE_THEME from 'shiki/themes/tokyo-night.mjs';
/**
 * All languages needed within the Node.js website for syntax highlighting.
 *
 * @type {Array<import('shiki').LanguageRegistration>}
 */
export const LANGUAGES = [
  {
    ...javaScriptLanguage[0],
    aliases: javaScriptLanguage[0].aliases.concat('cjs', 'mjs'),
  },
  ...jsxScriptLanguage,
  ...typeScriptLanguage,
  ...jsonLanguage,
  ...tsxScriptLanguage,
  ...htmlLanguage,
  ...cssLanguage,
  ...scssLanguage,
  ...sassLanguage,
  ...baseLanguage,
  ...javaLanguage,
  ...dotenvLanguage,
  ...dockerLanguage,
  ...yamlLanguage,
];

export const DEFAULT_THEME = {
  ...BASE_THEME,
};
