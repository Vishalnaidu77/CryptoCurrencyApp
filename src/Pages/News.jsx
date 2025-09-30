import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../Service/cryptoNewsApi'

const { Text, Title } = Typography;
const { Option } = Select

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplified }) => {
  const count = simplified ? 6 : 20;
  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery(count)

  
  if (isFetching) return "Loading..."

  return (
    <Row gutter={[24, 24]}>
      {}
      {cryptoNews?.data?.slice(0, count).map((news, idx) => (
        <Col xs={24} sm={12} lg={8} key={idx}>
          <Card
            hoverable
            className='news-card'
          >
            <a href={news.url} target='_blank' rel='noreferrer'>
              <div className="flex flex-col gap-3">
                <Title className='' level={4}>{news.title}</Title>
                <img src={news?.thumbnail || demoImage} alt="news" className='h-40' />
              </div>
              <p>
                {news.description.length > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description
                }
              </p>
              <div className="provider-container">
                <div>
                  <Text>{moment(news.createdAt).format('DD/MM/YYYY h:mm A')}</Text>
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