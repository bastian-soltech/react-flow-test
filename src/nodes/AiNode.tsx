import { Handle, Position, type NodeProps } from '@xyflow/react';

import { type Ai } from './types';

export function AiNode({
  data,
}: NodeProps<Ai>) {

  function alertFunction(){
    alert('halo')

  }


 
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div className="react-flow__node-default">
      {data.label && <div>{data.label}</div>}

      <div>

        <button onClick={alertFunction}>Add some ai</button>
        
        
      </div>

      <Handle type="source" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
