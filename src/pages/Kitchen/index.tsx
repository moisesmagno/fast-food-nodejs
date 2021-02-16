import React from 'react';

import Header from '../../components/Header';

import { Dashboard, OrdersList } from './styles';

const Kitchen: React.FC = () => (
    <>
        <Header />
        <Dashboard>
            <h1><span>5</span> Pedidos a preparar :)</h1>
        </Dashboard>
        
        <OrdersList>
            <ul>
                <li>
                    <header>
                        <h2>Moisés Escurra</h2>
                        <button>Dar baixa</button>
                    </header>
                    <div>
                        <ul>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Observações!</h4>
                                    <p>bla bla bla bla bla bla bla bla.</p>
                                </div>
                            </li>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Observações!</h4>
                                    <p>bla bla bla bla bla bla bla bla.</p>
                                </div>
                            </li>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Sem Observação.</h4>                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <header>
                        <h2>Moisés Escurra</h2>
                        <button>Dar baixa</button>
                    </header>
                    <div>
                        <ul>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Observações!</h4>
                                    <p>bla bla bla bla bla bla bla bla.</p>
                                </div>
                            </li>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Observações!</h4>
                                    <p>bla bla bla bla bla bla bla bla.</p>
                                </div>
                            </li>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Sem Observação.</h4>                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>

                <li>
                    <header>
                        <h2>Moisés Escurra</h2>
                        <button>Dar baixa</button>
                    </header>
                    <div>
                        <ul>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Observações!</h4>
                                    <p>bla bla bla bla bla bla bla bla.</p>
                                </div>
                            </li>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Observações!</h4>
                                    <p>bla bla bla bla bla bla bla bla.</p>
                                </div>
                            </li>
                            <li>
                                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                <div>
                                    <h3>Nome do produto</h3>
                                    <h4>Sem Observação.</h4>                    
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </OrdersList>
    </>
);

export default Kitchen;