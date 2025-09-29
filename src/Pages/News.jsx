import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../Service/cryptoNewsApi'

const { Text, Title } = Typography;
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {

  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 20 })
  console.log(cryptoNews);
  
  if (isFetching) return "Loading..."
  

  return (
    <Row gutter={[ 24, 24 ]}>
      {cryptoNews.data.map((news, idx) => (
        <Col xs={24} sm={12} lg={6} key={idx}>
          <Card 
            hoverable
            className='news-card'
          >
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className="">
                <Title className='news-title' level={4}>{news.title}</Title>
                <img src={news?.thumbnail || demoImage } alt="news" />
              </div>
              <p>
                {news.description > 100 
                  ? `${news.description.substring(0, 100)}...`
                  : news.description
                }
              </p>
              <div className="provider-container">
                <div>
                  {/* <Text>{moment(news.createdAt.slice())}</Text> */}
                </div>
              </div>
            </a>
            
          </Card>
        </Col>
      ))}

    </Row>
  )
}

export default News