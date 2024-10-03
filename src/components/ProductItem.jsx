import { EllipsisOutlined, HeartOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Avatar, Card } from 'antd'
import Meta from 'antd/es/card/Meta'
import React from 'react'

function ProductItem({item}) {
  return (
    <li>
       <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={item.images[0]}
      />
    }
    actions={[
      <EllipsisOutlined className='!scale-150' key="ellipsis"/>,
      <HeartOutlined className='!scale-150' key="ellipsis" />,
      <ShoppingOutlined className='!scale-150' key="ellipsis" />
    ]}
  >
    <Meta
      avatar={<Avatar src={item.category.image}/>}
      title={item.title}
      description={<p className='line-clamp-3'>{item.description}</p>}
    />
  </Card>
    </li>
  )
}

export default ProductItem