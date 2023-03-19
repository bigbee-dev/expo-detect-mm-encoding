import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { DetectMMEncodingViewProps } from './DetectMMEncoding.types';

const NativeView: React.ComponentType<DetectMMEncodingViewProps> =
  requireNativeViewManager('DetectMMEncoding');

export default function DetectMMEncodingView(props: DetectMMEncodingViewProps) {
  return <NativeView {...props} />;
}
