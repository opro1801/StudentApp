// import rehypeRaw from 'rehype-raw'
import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
// import
import * as css from './styles';
import {MathMarkdownTypes} from './types';
// import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

export const MathMarkdown = (props: MathMarkdownTypes) => {
  return (
    <ReactMarkdown
      {...props}
      className={'' + css.styles(props).markdownTextDiv}
      remarkPlugins={[remarkMath, remarkGfm]}
      rehypePlugins={[rehypeKatex]}
      // rehypePlugins={props.skipHtml ? [rehypeKatex] : [rehypeRaw,rehypeKatex,]}
    >
      {props.children}
    </ReactMarkdown>
  );
};
