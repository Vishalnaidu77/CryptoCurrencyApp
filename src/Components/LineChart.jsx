import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  if (!coinHistory?.data?.history) {
    return <div style={{ padding: '20px', textAlign: 'center' }}>No chart data available</div>;
  }

  // Sort history by timestamp ascending
  const sortedHistory = [...coinHistory.data.history].sort((a, b) => a.timestamp - b.timestamp);
  const coinPrice = sortedHistory.map((item) => item.price);
  const coinTimestamp = sortedHistory.map((item) => new Date(item.timestamp * 1000).toLocaleDateString());

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;