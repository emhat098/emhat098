import { getSingletonHighlighterCore, HighlighterCore } from '@shikijs/core';
import { DEFAULT_THEME, LANGUAGES } from '@/shiki.config.mjs';
import { createJavaScriptRegexEngine } from 'shiki';

export const shikiPromise = getSingletonHighlighterCore({
  themes: [DEFAULT_THEME],
  langs: LANGUAGES,
  engine: createJavaScriptRegexEngine(),
});

export const hightlightToHtml =
  (shiki: HighlighterCore) => (code: string, language: string) =>
    shiki
      .codeToHtml(code, {
        lang: language,
        theme: DEFAULT_THEME,
      })
      .match(/<code>(.+?)<\/code>/)![1];

export const highlightToHast =
  (shiki: HighlighterCore) => (code: string, language: string) =>
    shiki.codeToHast(code, {
      lang: language,
      theme: DEFAULT_THEME,
    });
