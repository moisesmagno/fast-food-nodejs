import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { FaShoppingBasket, FaWindowClose } from 'icons-react/fa';

import Nav from '../../components/Header';

import { Section, ListProducts, ModalOrderClose, PaymentAndTotal, TypePayment, Total, ContentButton } from './styles';

interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
}

const Order: React.FC = () => {
    const [ modal, setModal] = useState<boolean>(false);
    const [products, setProducts] = useState<Products[]>([]);
    
    useEffect(() => {
        api.get('/products').then((response) => {
            setProducts(response.data) 
        });

        console.log(products);
    }, []);

    console.log(products);

    // Open Modal
    function handleOpenModal(): void {
        setModal(true);
    }

    // Close Modal
    function handleCloseModal(): void {
        setModal(false);
    }

    return (
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
                        <button onClick={handleOpenModal}>Ver pedido</button>
                    </div>
                </header>
            </Section>
            <ListProducts>
                { 
                    products.map(product => (
                        <div key={ product.id }>
                            <img src={ product.image } alt={ product.name }/>
                            <div>
                                <h2>{ product.name }</h2>
                                <p>{ product.description }</p>
                                <span>{ product.price }</span>
                            </div>
                            <button>
                                Adicionar
                            </button>
                        </div>
                    ))
                }
                
            </ListProducts>

            { modal && (
                <ModalOrderClose>
                    <header>
                        <h2>Fechar pedido</h2>
                        <span onClick={handleCloseModal}><FaWindowClose /></span>
                    </header>
                    <section>
                        <ul>
                            <li>
                            <input type="text" placeholder="Nome do cliente"/>
                            </li>
                            <li>
                                <div>
                                    <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                    <div>
                                        <h2>Nome do produto</h2>
                                        <p>Descrição do produto!</p>
                                        <span>R$ 150,00</span>
                                        <br/>
                                        <textarea placeholder="Objservação"></textarea>
                                    </div>
                                    <button>
                                        Remover
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                    <div>
                                        <h2>Nome do produto</h2>
                                        <p>Descrição do produto!</p>
                                        <span>R$ 150,00</span>
                                        <br/>
                                        <textarea placeholder="Objservação"></textarea>
                                    </div>
                                    <button>
                                        Remover
                                    </button>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                    <div>
                                        <h2>Nome do produto</h2>
                                        <p>Descrição do produto!</p>
                                        <span>R$ 150,00</span>
                                        <br/>
                                        <textarea placeholder="Objservação"></textarea>
                                    </div>
                                    <button>
                                        Remover
                                    </button>
                                </div>
                            </li><li>
                                <div>
                                    <img src="/static/media/comida-2.41145139.png" alt="comida-2"/>
                                    <div>
                                        <h2>Nome do produto</h2>
                                        <p>Descrição do produto!</p>
                                        <span>R$ 150,00</span>
                                        <br/>
                                        <textarea placeholder="Objservação"></textarea>
                                    </div>
                                    <button>
                                        Remover
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <PaymentAndTotal> 
                        <div>
                            <TypePayment>
                                <h4>Formas de pagamentos:</h4>
                                <li>
                                    <div>Cartão</div>
                                </li>
                                <li>
                                    <div>Dinheiro</div>
                                    <div>R$ <input type="text" placeholder="0,00"/></div>
                                </li>
                            </TypePayment>
                            <Total>
                                <li>
                                    <h4>Total</h4>
                                    <h2>R$ 100,00</h2>
                                </li>
                                <li>
                                    <h5>Troco</h5>
                                    <h3>R$ 20,00</h3>
                                </li>    
                            </Total>
                        </div>
                    </PaymentAndTotal>  
                    <ContentButton>
                        <button>Finalizar pedido</button>
                    </ContentButton>
                </ModalOrderClose>
            )}
        </>
    )
}

export default Order;