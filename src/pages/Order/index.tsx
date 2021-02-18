import React, { useState, useEffect, FormEvent } from 'react';
import api from '../../services/api';
import { FaShoppingBasket, FaWindowClose } from 'icons-react/fa';

import Nav from '../../components/Header';

import { Alert, Section, ListProducts, ModalOrderClose, PaymentAndTotal, TypePayment, Total, ContentButton, Uploaded } from './styles';

interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    pathImage: string;
}

interface Order {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    pathImage: string;
    observation: string;
    customerName: string;
}

const Order: React.FC = () => {
    const [ orderOK, setOrderOk ] = useState<Boolean>(false);
    const [ modal, setModal] = useState<boolean>(false);
    const [ products, setProducts ] = useState<Products[]>([]);
    const [ customer, setCustomer ] = useState('');
    const [ priceTotal, setPriceTotal ] = useState(null);
    const [ valueInputCash, setValueInputCash ] = useState('');
    const [ changeMoney, setChangeMoney ] = useState<Number>(0);
    const [ cashPaymentOption, setCashPaymentOption ] = useState<Boolean>(false);
    const [ countOrderLocalStorage, setCountOrderLocalStorage] = useState(() => {
        const storagedOrders = localStorage.getItem('@storage:order');
        if (storagedOrders) {
            return Object.keys(JSON.parse(storagedOrders)).length
        } 
        return 0;
    });
    const [ orders, setOrder ] = useState<Order[]>(() => {

        const storagedOrders = localStorage.getItem('@storage:order');
        
        if (storagedOrders) {
            return JSON.parse(storagedOrders);
        } 

        return [];
    });
    
    useEffect(() => {
        api.get('/products').then((response) => {
            setProducts(response.data) 
        });
    }, []);

    useEffect(() => {
        const totalChange = (Number(valueInputCash) - Number(priceTotal))
        setChangeMoney(totalChange);
    },[valueInputCash]);

    // Add new Order.
    function addOrder(idOrder: number) {
               
        const orderData = products.filter((product) => {
            return product.id === idOrder;
        });

        //Add new atribute.
        Object.assign(orderData[0], {observation: null});
        Object.assign(orderData[0], {customerName: null});

        const localStorageOrder = localStorage.getItem('@storage:order');

        if(localStorageOrder) {
            const ordersList = JSON.parse(localStorageOrder);
            
            ordersList.push(orderData[0]);
            localStorage.setItem('@storage:order', JSON.stringify(ordersList));
            setCountOrderLocalStorage(Object.keys(ordersList).length);
        } else {
            localStorage.setItem('@storage:order', JSON.stringify(orderData));  
            setCountOrderLocalStorage(1);
        }
    }

    //Remove item of the order.
    function removeItemOrder(id: Number){
        const localStorageOrder = localStorage.getItem('@storage:order');
        if (localStorageOrder) {
            const itemsOrder = JSON.parse(localStorageOrder);

            const newOrder = itemsOrder.filter((item: Order) => {
                return item.id !== id;
            });

            localStorage.setItem('@storage:order', JSON.stringify(newOrder));

            setOrder(newOrder);

            setCountOrderLocalStorage(Object.keys(newOrder).length);
        } else {
            setOrder([]);
            setCountOrderLocalStorage(0);
        }
    }

    // Calculate price total of the order
    function calculatePriceTotal() {
        const localStorageOrder = localStorage.getItem('@storage:order');
        const orderList = JSON.parse(localStorageOrder || '{}');
        const totalPrice = orderList.reduce((total: number, item: Order) => {
            return (total + Number(item.price));
        }, 0);
        
        setPriceTotal(totalPrice);
    }

    // Show input Money.
    function paymentCash(option: Boolean){
        if(!option){
            setValueInputCash('');
            setChangeMoney(0);
        }

        setCashPaymentOption(option);
    }

    // Close Order.
    function closeOrder(): void {
        const localStorageOrder = JSON.parse(localStorage.getItem('@storage:order') || '');

        const data = document.querySelectorAll("textarea");
        var i = 0;
        for (i; i < data.length; i++) {
            const id = Number(data[i].getAttribute('data-id'));
            const valueTextarea = data[i].value;

            if (data[i].value){
                localStorageOrder.map((order: Order) => {
                    if(order.id === id){
                        order.observation = valueTextarea;
                    }
                    order.customerName = customer;
                });
            }
        }
        sendOrder(localStorageOrder);
    }

    // Send Order
    function sendOrder(objOrder: Order): void {

        setCustomer('');
        handleCloseModal();
        setPriceTotal(null);
        setValueInputCash('');
        setChangeMoney(0);
        setCashPaymentOption(false);
        setCountOrderLocalStorage(0);
        localStorage.setItem('@storage:order', '');

        const headers = {
            'Content-Type': 'application/json',
        }

        api.post('/order', JSON.stringify(objOrder), {
            headers: headers
        }).then((response) => {
            
            if(response.data === 1) {
                setOrderOk(true);
            }else{
                console.log('Erro ao gravar dados.');
            }

            setTimeout(function(){ setOrderOk(false); }, 2000);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    // Open Modal
    function handleOpenModal(): void {
        const localStorageOrder = localStorage.getItem('@storage:order');
        
        if (localStorageOrder){
            const ordersList = JSON.parse(localStorageOrder);        
            setOrder(ordersList);    
        }

        calculatePriceTotal();
        
        setModal(true);
    }

    // Close Modal
    function handleCloseModal(): void {
        setModal(false);
    }


    return (
        <>
            <Nav />
            {orderOK && (<Alert>Pedido enviado com sucesso!</Alert>)}
            
            <Section>
                <header>
                    <form>
                        <input type="text" placeholder="Código ou nome do produto"/>
                        <button>Buscar</button>
                    </form>
                    <div>
                        <div>
                            <span>{ countOrderLocalStorage }</span>
                            <FaShoppingBasket />
                        </div>
                        {(countOrderLocalStorage > 0) && ( <button onClick={handleOpenModal}>Ver pedido</button> )}
                    </div>
                </header>
            </Section>
            
            { (products.length > 0) ? (
            <ListProducts>            
                { 
                    products.map(product => (
                        <div key={ product.id } data-code-name={product.id+' '+product.name}>
                            <img src={ product.pathImage+''+product.image } alt={ product.name }/>
                            <div>
                                <h2>#{ product.id+' - '+product.name }</h2>
                                <p>{ product.description }</p>
                                <span>{ product.price }</span>
                            </div>
                            <button onClick={() => addOrder(product.id)}>
                                Adicionar
                            </button>
                        </div>
                    ))
                }
            </ListProducts>
            ):(<Uploaded>Carregando menu ...</Uploaded>) }

            { modal && (
                <ModalOrderClose>
                    <header>
                        <h2>Fechar pedido</h2>
                        <span onClick={handleCloseModal}><FaWindowClose /></span>
                    </header>
                    <section>
                        <ul>
                            <li>
                                <input type="text" id="customer-name" value={customer} onChange={(e) => setCustomer(e.target.value)} placeholder="Nome do cliente"/>
                            </li>
                            {
                                orders.map((order) => (
                                    <li key={order.id}>
                                        <div>
                                            <img src={order.pathImage+order.image} alt={ order.name }/>
                                            <div>
                                                <h2>{ order.name }</h2>
                                                <p>{ order.description }</p>
                                                <span>R$ { order.price }</span>
                                                <br/>
                                                <textarea id="observation" placeholder="Objservação" data-id={order.id}></textarea>
                                            </div>
                                            <button onClick={()=>removeItemOrder(order.id)}>
                                                Remover
                                            </button>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </section>
                    <PaymentAndTotal> 
                        <div>
                            <TypePayment>
                                <h4>Formas de pagamentos:</h4>
                                <li onClick={() => paymentCash(false)}>
                                    <div>Cartão</div>
                                </li>
                                <li onClick={() => paymentCash(true)}>
                                    <div>Dinheiro</div>
                                    {cashPaymentOption && (<div>R$ <input type="text" onChange={(e) => setValueInputCash(e.target.value)} placeholder={valueInputCash}/></div>)}
                                </li>
                            </TypePayment>
                            <Total>
                                <li>
                                    <h4>Total</h4>
                                    <h2>R$ { priceTotal }</h2>
                                </li>
                                {
                                    cashPaymentOption && (
                                        <li>
                                            <h5>Troco</h5>
                                            <h3>R$ { changeMoney }</h3>
                                        </li>    
                                    )
                                }
                            </Total>
                        </div>
                    </PaymentAndTotal>  
                    <ContentButton>
                        <button onClick={() => closeOrder()}>Finalizar pedido</button>
                    </ContentButton>
                </ModalOrderClose>
            )}
        </>
    )
}

export default Order;