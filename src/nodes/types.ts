import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label : string }, 'position-logger'>;
export type Ai = Node<{ label: string }, 'ai'>;
export type AppNode = BuiltInNode | PositionLoggerNode;
