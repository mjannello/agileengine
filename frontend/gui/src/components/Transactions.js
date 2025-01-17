import React, { useState, useEffect } from 'react';
import { List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import axios from 'axios'

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);




const Transactions = (props) => {
    const [transactions, setTransactions] = useState();

const getTransactions = async () => {
  let res = await axios.get('http://127.0.0.1:8000/api/');
//  let { data } = res.data;
  console.log(res.data);
  setTransactions(res.data);
  console.log(transactions);
};

  useEffect(() => {
      getTransactions()
  });



    return (
    <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3,
        }}
        dataSource={transactions}
        footer={
          <div>
            <b>ant design</b> footer part
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.id}
            description={<a> {item.amount} </a>}
          >
          <p>id: {item.id}</p>
          <p> amount: {item.amount}</p>
          <p>type: {item.type}</p>
          <p>date: {item.date}</p>

          </List.Item>

        )}
      />
    )
}

export default Transactions;


