import type { Node, NodeTypes } from "reactflow";
import { PositionLoggerNode } from "./PositionLoggerNode";
import { RedNode } from "./RedNode";
import { YellowNode } from "./YellowNode";
import { BlueNode } from "./BlueNode";

export const initialNodes = [
  {
    id: "e",
    type: "group",
    data: { label: "parent" },
    position: { x: 0, y: 0 },
    style: {
      width: 80,
      height: 300,
    },
  },
  {
    id: "f",
    type: "group",
    data: { label: "parent" },
    position: { x: 100, y: 100 },
    style: {
      width: 80,
      height: 300,
    },
  },
  {
    id: "a",
    type: "input",
    position: { x: 0, y: 0 },
    data: { label: "example" },
    style: {
      width: 80,
      height: 50,
    },
    parentNode: "e",
    extent: "parent",
  },
] satisfies Node[];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  "red-node": RedNode,
  "yellow-node": YellowNode,
  "blue-node": BlueNode,
} satisfies NodeTypes;
