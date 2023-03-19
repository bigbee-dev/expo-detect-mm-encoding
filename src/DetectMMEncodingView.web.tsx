import * as React from 'react';

import { DetectMMEncodingViewProps } from './DetectMMEncoding.types';

export default function DetectMMEncodingView(props: DetectMMEncodingViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
