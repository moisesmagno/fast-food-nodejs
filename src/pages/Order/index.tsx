import React from 'react';
import { FaShoppingBasket } from 'icons-react/fa';

import Nav from '../../components/Header';

import { Section, Header } from './styles';

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
    </>
)

//https://react-icons.github.io/react-icons/icons?name=fa

export default Order;