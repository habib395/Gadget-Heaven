import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
    return (
        <div>
            <div role="tablist" className="tabs bg-white p-4 tabs-boxed flex flex-col space-y-2">
     {
        categories.map(category => <NavLink key={category.category} to={`/categoryIssue/${category.category}`} role="tab" className={({ isActive }) => `btn w-full rounded-full ${ isActive ? 'btn-primary' : ''}`}>{category.category}</NavLink>)
     }
     </div>
        </div>
    );
};

export default Categories;