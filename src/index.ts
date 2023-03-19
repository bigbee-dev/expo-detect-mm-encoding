import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to DetectMMEncoding.web.ts
// and on native platforms to DetectMMEncoding.ts
import DetectMMEncodingModule from './DetectMMEncodingModule';
import DetectMMEncodingView from './DetectMMEncodingView';
import { ChangeEventPayload, DetectMMEncodingViewProps } from './DetectMMEncoding.types';

// Get the native constant value.
export const PI = DetectMMEncodingModule.PI;

export function hello(): string {
  return DetectMMEncodingModule.hello();
}

export async function setValueAsync(value: string) {
  return await DetectMMEncodingModule.setValueAsync(value);
}

const emitter = new EventEmitter(DetectMMEncodingModule ?? NativeModulesProxy.DetectMMEncoding);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { DetectMMEncodingView, DetectMMEncodingViewProps, ChangeEventPayload };
