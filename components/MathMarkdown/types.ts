import { ReactNode } from 'react';
import { ReactMarkdownOptions } from 'react-markdown/lib/react-markdown';
import { StyleSheet } from 'react-native';

export interface MathMarkdownProps {
  // style?: StyleSheet.NamedStyles<any>,
  children: string;
  // needHover?: boolean
  // imageSize?: string,
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  fontStyle?: 'normal' | 'italic';
  color?: string;
  // whiteSpace?: 'normal' | 'nowrap' | 'pre-wrap'
  // wordBreak?: 'break-all' | 'break-word' | 'normal',
  // maxRows?: number
  // width?: string
}

export type MathMarkdownTypes = MathMarkdownProps & ReactMarkdownOptions;
