import React from 'react';
import { FaShoppingBasket } from 'icons-react/fa';

import Nav from '../../components/Header';

import { Section, ListProducts } from './styles';

const Order: React.FC = () => (
    <>
        <Nav />
        <Section>
            <header>
                <form>
                    <input type="text" placeholder="Código ou nome do produto"/>
                    <button>Buscar</button>
                </form>
                <div>
                    <div>
                        <span>5</span>
                        <FaShoppingBasket />
                    </div>
                    <button>Ver pedido</button>
                </div>
            </header>
        </Section>
        <ListProducts>
            <div>
                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                <div>
                    <h2>Nome do produto</h2>
                    <p>Descrição do produto!</p>
                    <span>R$ 150,00</span>
                </div>
                <button>
                    Adicionar
                </button>
            </div>

            <div>
                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                <div>
                    <h2>Nome do produto</h2>
                    <p>Descrição do produto!</p>
                    <span>R$ 150,00</span>
                </div>
                <button>
                    Adicionar
                </button>
            </div>

            <div>
                <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                <div>
                    <h2>Nome do produto</h2>
                    <p>Descrição do produto!</p>
                    <span>R$ 150,00</span>
                </div>
                <button>
                    Adicionar
                </button>
            </div>
        </ListProducts>
    </>
)

export default Order;