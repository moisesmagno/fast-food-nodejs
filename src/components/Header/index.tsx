import React from 'react';
import { Link } from 'react-router-dom';
 
import { Header } from './styles';

const Nav: React.FC = () => (
    <Header>
        <h1>Logotipo</h1>
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/order'}>Pedido</Link></li>
            <li><Link to={'/kitchen'}>Cozinha</Link></li>
            <li><Link to={'/delivery'}>Delivery</Link></li>
        </ul>
    </Header>
);

export default Nav;