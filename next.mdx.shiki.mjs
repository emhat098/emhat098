'use strict';

import { visit } from 'unist-util-visit';
// import classnames from 'classnames';
// import { toString } from 'hast-util-to-string';
// import { SKIP, VISIT } from 'unist-util-visit';
import { shikiPromise, highlightToHast } from './util/get-highlighter';
import { toString } from 'hast-util-to-string';
import classNames from 'classnames';

const languagePreFix = 'language-';

export default function rehypeShikiji() {
  return async function (tree) {
    const memorizedShiki = highlightToHast(await shikiPromise);

    // Styling the code block with shikiji.
    visit(tree, 'element', (node, index, parent) => {
      // Only <pre> elements apply for the style.
      if (!parent || index === null || node.tagName !== 'pre') {
        return;
      }

      const preElement = node.children[0];

      if (!preElement || !preElement.properties) {
        return;
      }

      if (preElement.type !== 'element' || preElement.tagName !== 'code') {
        return;
      }

      // Get the language string.
      const preClassNames = preElement.properties.className;

      if (typeof preClassNames !== 'object' || preClassNames.length === 0) {
        return;
      }

      const codeLanguage = preClassNames.find(
        (c) => typeof c === 'string' && c.startsWith(languagePreFix),
      );

      if (typeof codeLanguage !== 'string') {
        return;
      }

      const preElementContent = toString(preElement);

      const languageId = codeLanguage.slice(languagePreFix.length);

      const { children } = memorizedShiki(preElementContent, languageId);

      children[0].properties.class = classNames(
        children[0].properties.class,
        codeLanguage,
      );

      parent.children.splice(index, 1, ...children);
    });
  };
}
