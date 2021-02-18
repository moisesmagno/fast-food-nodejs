import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';

import { Alert, Dashboard, OrdersList } from './styles';

import api from '../../services/api';

interface Orders {
    id: number;
    customer_name: string;
    product_id: number;
    order_number: number;
    observation: string;
    name: string;
    image: string;
    pathImage: string;
}

const Delivery: React.FC = () => {
    const [ orderOK, setOrderOk ] = useState<Boolean>(false);
    const [ orders, setOrders ] = useState<Orders[]>([]);
    const [ customers, setCustomers ] = useState([]);
    
    // Get Orders
    useEffect(() => {
        api.get('/delivery').then((response) => {
            setOrders(response.data) 
        });
    }, []);

    useEffect(() => {
        getCustomers();
    }, [orders]);

    // Get customer
    function getCustomers(): void {

        const customersList = orders.map((order) => {
                return order.customer_name;
        });

        const customersName = customersList.filter((customer, index, self) => {
            return index === self.indexOf(customer);
        });

        const txtCustomer = JSON.stringify(customersName);
        const customersOrders = JSON.parse(txtCustomer);

        setCustomers(customersOrders);
    }

    // Remove Order
    function removeOrder(customer: String): void{
        const orderCustomer = orders.filter((order) => {
            return order.customer_name !== customer;
        });

        setOrders(orderCustomer);
    }

    function sendOrderDelivery(customer: String): void{

        removeOrder(customer);
        setOrderOk(true);

        const orderToDelivey = orders.filter((order) => {
            return order.customer_name === customer;
        });

        const headers = {
            'Content-Type': 'application/json',
        }
        api.put(`/delivery/${orderToDelivey[0].id}`, JSON.stringify(orderToDelivey), {
            headers: headers,
        })
        .then((response)=>{
            if(response.data) {
                if(response.data === 1) {
                    setOrderOk(false);
                }
            } else {
                setOrderOk(false);
                console.log('Erro ao gravar dados!');
            }
        })
        .catch((error) => {
            console.log(error);
        }); 
    }

    return (
        <>
            <Header />
            {orderOK && (<Alert>Pedido retirado para Delivery!</Alert>)}
            <Dashboard>
                {
                    ((customers.length > 0) ? <h1><span>{((customers) ? customers.length : 0)}</span> Pedidos a preparar :)</h1> : <h1>Carregando....</h1>)
                
                }
            </Dashboard>
            
            <OrdersList>
                <ul>
                    {customers.map((customer) => (
                        <li key={customer}>
                            <header>
                                <h2>{ customer }</h2>
                                <button onClick={()=>sendOrderDelivery(customer)}>Retirar</button>
                            </header>
                            <div>
                                <ul>
                                    {
                                        orders.map((order) => {
                                            
                                            if(order.customer_name === customer){
                                                return (
                                                    <li key={order.id}>
                                                        <img src={order.pathImage+order.image} alt={order.name}/>
                                                        <div>
                                                            <h3>{ order.name }</h3>
                                                            <h4>Observações!</h4>
                                                            <p> {(order.observation) ? order.observation : 'Sem observações por parate do cliente.'} </p> 
                                                        </div>
                                                    </li>
                                                );
                                            }    
                                        })
                                    }
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </OrdersList>
        </>
    )
};

export default Delivery;