import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'
import { CryptoCurrencies, News } from '../Components'

const { Title } = Typography;

import { useGetCryptosQuery } from '../Service/cryptoApi';

const Home = () => {

  const { data, isFetching } = useGetCryptosQuery(10);
  console.log(data);

  const gloabalStats = data?.data.stats;
  
  if (isFetching) return 'Loading...'
  

  return (
    <>
      <Title level={2} className='heading'>Global Crypto Stats</Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={gloabalStats.total}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(gloabalStats.totalExchanges)}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(gloabalStats.totalMarketCap)}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(gloabalStats.total24hVolume)}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(gloabalStats.totalMarkets)}/></Col>  
      </Row>
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
        <Title level={3} className='show-more'><Link to="/cryptocurrencies">Show More</Link></Title>
      </div>
      <CryptoCurrencies simplified />
      <div className='home-heading-container'>
        <Title level={2} className='home-title'>latest Crypto News</Title>
        <Title level={3} className='show-more'><Link to="/news">Show More</Link></Title>
      </div>
      <News simplified />
    </>
  )
}

export default Home