import type { NodeProps } from "reactflow";
import { Handle, Position } from "reactflow";

export type YellowNodeData = {
  label?: string;
};

export function YellowNode({ data }: NodeProps<YellowNodeData>) {
  return (
    // We add this class to use the same styles as React Flow's default nodes.
    <div
      className="react-flow__node-default"
      style={{ backgroundColor: "gold", color: "white", width: "55px", height: "30px" }}
    >
      {data.label && <div>{data.label}</div>}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
