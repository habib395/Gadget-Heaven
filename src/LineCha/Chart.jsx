

import React from 'react';
import { ComposedChart, Bar, Area, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
    { "product_id": "1", "product_title": "MacBook", "price": 999.00 },
    { "product_id": "2", "product_title": "Lenovo", "price": 1200.00 },
    { "product_id": "3", "product_title": "ASUS", "price": 1400.00 },
    { "product_id": "4", "product_title": "Samsung", "price": 950.00 },
    { "product_id": "5", "product_title": "SanDisk", "price": 25.00 },
    { "product_id": "6", "product_title": "Raze", "price": 1600.00 },
    { "product_id": "7", "product_title": "iPhone", "price": 799.00 },
    { "product_id": "8", "product_title": "Galaxy S21", "price": 699.99 },
    { "product_id": "9", "product_title": "OnePlus", "price": 729.00 },
    { "product_id": "10", "product_title": "Galaxy Watch 4", "price": 249.99 },
    { "product_id": "11", "product_title": "Gaming Laptop", "price": 900.00 },
    { "product_id": "12", "product_title": "Fitbit Sense", "price": 299.95 },
    { "product_id": "13", "product_title": "Dell", "price": 450.00 },
    { "product_id": "14", "product_title": "Watch", "price": 399.00 },
    { "product_id": "15", "product_title": "Logitech", "price": 99.99 },
    { "product_id": "16", "product_title": "Anker", "price": 65.00 },
    { "product_id": "17", "product_title": "Pixel 6", "price": 599.00 },
    { "product_id": "18", "product_title": "Acer", "price": 1300.00 }
  ]

const SameDataComposedChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="product_title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#7774ce" fillOpacity={0.5} />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <Bar dataKey="Total" barSize={20} fill="#7774ce" />
        <Line type="monotone" dataKey="price" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default SameDataComposedChart;
