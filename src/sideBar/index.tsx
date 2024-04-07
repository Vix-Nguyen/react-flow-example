import { Row, Space } from "antd";

const Sidebar = () => {
  const onDragStart = (event: any, nodeType: any) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <Row>
        <Space>
          <div
            className="dndnode blue"
            onDragStart={(event) => onDragStart(event, "blue-node")}
            draggable
          >
            Blue Node
          </div>
          <div
            className="dndnode yellow"
            onDragStart={(event) => onDragStart(event, "yellow-node")}
            draggable
          >
            Yellow Node
          </div>
          <div
            className="dndnode red"
            onDragStart={(event) => onDragStart(event, "red-node")}
            draggable
          >
            Red Node
          </div>
        </Space>
      </Row>
    </aside>
  );
};

export default Sidebar;
