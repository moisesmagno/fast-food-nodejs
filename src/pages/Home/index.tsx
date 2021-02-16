import React from 'react';

import Nav from '../../components/Header';
import { SectionHome } from './styles';

const Home: React.FC = () => (
    <>
        <Nav />
        <SectionHome>
            <h1>Seja bem vindo :)</h1>
        </SectionHome>
        
    </>
);

export default Home;