import React from 'react';
import { Link } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div>
            <div role="tablist" className="tabs bg-white p-4 tabs-boxed flex flex-col space-y-2">
     {
        categories.map(category => <Link key={category.category} to={`/categoryIssue/${category.category}`} role="tab" className="btn w-full rounded-full">{category.category}</Link>)
     }
     </div>
        </div>
    );
};

export default Categories;