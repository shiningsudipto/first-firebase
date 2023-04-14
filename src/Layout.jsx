import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            {/* <h3>Layout goes here</h3> */}
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;