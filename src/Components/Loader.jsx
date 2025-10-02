import React from 'react';
import { Flex, Spin } from 'antd';

const Loader = () => {
  const [auto, setAuto] = React.useState(false);
  const [percent, setPercent] = React.useState(-50);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    timerRef.current = setTimeout(() => {
      setPercent(v => {
        const nextPercent = v + 5;
        return nextPercent > 150 ? -50 : nextPercent;
      });
    }, 100);
    return () => clearTimeout(timerRef.current);
  }, [percent]);

  const mergedPercent = auto ? 'auto' : percent;

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Flex align="center" gap="middle">
        <Spin percent={mergedPercent} size="small" />
        <Spin percent={mergedPercent} />
        <Spin percent={mergedPercent} size="large" />
      </Flex>
    </div>
  );
};

export default Loader;