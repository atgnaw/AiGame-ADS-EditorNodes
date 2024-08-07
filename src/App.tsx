import { FlowsNode } from "./nodes/FlowsNode/FlowsNode";

export const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const Demo = () => {
  return <FlowsNode />;
};

export default Demo;
