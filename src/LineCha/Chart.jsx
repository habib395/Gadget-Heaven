import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Chart = () => {
    const priceData = [
        { "product_id": "1", "product_title": "Apple MacBook Air M1", "price": 999.00 },
        { "product_id": "2", "product_title": "Lenovo ThinkPad X1 Carbon", "price": 1200.00 },
        { "product_id": "3", "product_title": "ASUS ROG Zephyrus G14", "price": 1400.00 },
        { "product_id": "4", "product_title": "Samsung Galaxy Book Flex2 Alpha", "price": 950.00 },
        { "product_id": "5", "product_title": "SanDisk Ultra 128GB USB 3.0 Flash Drive", "price": 25.00 },
        { "product_id": "6", "product_title": "Razer Blade 15 Base", "price": 1600.00 },
        { "product_id": "7", "product_title": "iPhone 13", "price": 799.00 },
        { "product_id": "8", "product_title": "Samsung Galaxy S21", "price": 699.99 },
        { "product_id": "9", "product_title": "OnePlus 9 Pro", "price": 729.00 },
        { "product_id": "10", "product_title": "Samsung Galaxy Watch 4", "price": 249.99 },
        { "product_id": "11", "product_title": "HP Pavilion Gaming Laptop", "price": 900.00 },
        { "product_id": "12", "product_title": "Fitbit Sense", "price": 299.95 },
        { "product_id": "13", "product_title": "Dell Inspiron 15 3000", "price": 450.00 },
        { "product_id": "14", "product_title": "Apple Watch Series 7", "price": 399.00 },
        { "product_id": "15", "product_title": "Logitech MX Master 3 Wireless Mouse", "price": 99.99 },
        { "product_id": "16", "product_title": "Anker PowerCore 26800 Portable Charger", "price": 65.00 },
        { "product_id": "17", "product_title": "Google Pixel 6", "price": 599.00 },
        { "product_id": "18", "product_title": "Acer Predator Orion 3000", "price": 1300.00 }
      ]
      
    return (
        <div>
             
             <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="uv" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}


        </div>

    );
};

export default Chart;