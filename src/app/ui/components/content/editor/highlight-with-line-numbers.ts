import { highlight, languages } from 'prismjs'
import 'prismjs/themes/prism-funky.css'

export const hightlightWithLineNumbers = (code: string, lineClass: string) =>
  highlight(code, languages.js, 'js')
    .split("\n")
    .map((line, i) => `<span class=${lineClass}>${i + 1}</span>${line}`)
    .join("\n");

    
export const withLineNumbers = (code: string, lineClass: string) =>
  code
    .split("\n")
    .map((line, i) => `<span class=${lineClass}>${i + 1}</span>${line}`)
    .join("\n");