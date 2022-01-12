import { StyleSheet } from 'react-native';
import { MathMarkdownTypes } from './types';

export const styles = (props: MathMarkdownTypes) =>
  StyleSheet.create({
    markdownTextDiv: {
      // fontFamily: 'Poppins !important',
      // fontSize: 40,
      // fontStyle: props.fontStyle,
      // lineHeight: props.lineHeight,
      // color: props.color,
      // display: props.maxRows ? '-webkit-box' : 'block',
      // '-webkit-line-clamp': props.maxRows ? props.maxRows : undefined,
      // WebkitBoxOrient: 'vertical',
      // overflow: 'hidden',
      // textOverflow: 'ellipsis',
      // whiteSpace: props.whiteSpace ? props.whiteSpace : 'pre-wrap',
      // wordBreak: props.wordBreak ? props.wordBreak : 'break-word',
      // width: props.width ? props.width : '100%',
      // $nest: {
      //   p: {
      //     margin: 0,
      //   },
      //   span: {
      //     color: ColorTypes.BLACK,
      //     fontSize: 16,
      //     lineHeight: 24,
      //     fontFamily: 'Poppins !important',
      //     fontStyle: 'normal !important',
      //     $nest: {
      //       '.base': {
      //         position: 'static',
      //       },
      //     },
      //   },
      //   img: {
      //     width: props.imageSize ? props.imageSize : '50%',
      //   },
      //   '&:hover': {
      //     $nest: {
      //       span: {
      //         color: props.needHover ? ColorTypes.BRAND : undefined,
      //       },
      //     },
      //   },
      // },
    },
  });
