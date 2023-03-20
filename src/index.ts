// Import the native module. On web, it will be resolved to DetectMMEncoding.web.ts
// and on native platforms to DetectMMEncoding.ts
import DetectMMEncodingModule from './DetectMMEncodingModule';

export function isUnicode(): boolean {
  return DetectMMEncodingModule.isUnicode();
}
