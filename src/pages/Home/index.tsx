import React, {useState, useEffect} from 'react';
import api from '../../services/api';

import Nav from '../../components/Header';
import { SectionHome } from './styles';
import userEvent from '@testing-library/user-event';

interface Products {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    pathImage: string;
    codNameProducto: string;
}

interface Orders {
    id: number;
    customer_name: string;
    product_id: number;
    order_number: number;
    observation: string;
    name: string;
    image: string;
    pathImage: string;
    status: number;
}

const Home: React.FC = () => {
    const [ products, setProducts ] = useState<Products[]>([]);
    const [ orders, setOrders ] = useState<Orders[]>([]);
    const [ totalCustomers, setTotalCustomers ] = useState(0);
    const [ totalProducts, setTotalProducts ] = useState(0);
    const [ totalOrders, setTotalOrders ] = useState(0);
    const [ totalDelivery, setTotalDelivery ] = useState(0);
    const [ totalNotDelivery, setTotalNotDelivery ] = useState(0);
    const [ totalOrderInKitchen, setTotalOrderInKitchen ] = useState(0);
    
    useEffect(() => {

        async function loadData(): Promise<void> {
            const [ productsData, ordersData ] = await Promise.all([
                api.get('/products'), 
                api.get('/order-consolidate')
            ]); 

            setProducts(productsData.data);
            setOrders(ordersData.data);
        }

        loadData();
        
    }, []);

    useEffect(() => {
        countTotalProducts();
        getCustomers();
        getDelivery();
        getNotDelivery();
        getOrderInKitchen();
    }, [products, orders]);

    // Total Products
    function countTotalProducts(): void {
        setTotalProducts(products.length);
    }

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

        setTotalCustomers(customersOrders.length);
        setTotalOrders(customersOrders.length);
    }

    function getDelivery(): void {
        
        const deliveryOrders = orders.filter((order) => {
            return Number(order.status) === 3;
        });

        const customersList = deliveryOrders.map((order) => {
            return order.customer_name;
        });

        const customersName = customersList.filter((customer, index, self) => {
            return index === self.indexOf(customer);
        });

        const txtCustomer = JSON.stringify(customersName);
        const customersOrders = JSON.parse(txtCustomer);

        setTotalDelivery(customersOrders.length);
    }


    function getNotDelivery(): void {
        
        const deliveryOrders = orders.filter((order) => {
            return Number(order.status) === 2;
        });

        const customersList = deliveryOrders.map((order) => {
            return order.customer_name;
        });

        const customersName = customersList.filter((customer, index, self) => {
            return index === self.indexOf(customer);
        });

        const txtCustomer = JSON.stringify(customersName);
        const customersOrders = JSON.parse(txtCustomer);

        setTotalNotDelivery(customersOrders.length);
    }

    function getOrderInKitchen(): void {
        
        const deliveryOrders = orders.filter((order) => {
            return Number(order.status) === 1;
        });

        const customersList = deliveryOrders.map((order) => {
            return order.customer_name;
        });

        const customersName = customersList.filter((customer, index, self) => {
            return index === self.indexOf(customer);
        });

        const txtCustomer = JSON.stringify(customersName);
        const customersOrders = JSON.parse(txtCustomer);

        setTotalOrderInKitchen(customersOrders.length);
    }



    return (
        <>
            <Nav />
            <SectionHome>
            <h1>Seja bem vindo :)</h1>
                <div>
                    <ul>
                        <li>
                            <h2>{ totalCustomers }</h2>
                            <span>Clientes</span>
                        </li>
                        <li>
                        <h2>{ totalProducts }</h2>
                            <span>Produtos</span>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h2>{ totalOrders }</h2>
                            <span>Total de pedidos</span>
                        </li>
                        <li>
                            <h2>{ totalOrderInKitchen }</h2>
                            <span>Pedidos em preparação</span>
                        </li>
                    </ul> 
                    <ul>
                        <li>
                            <h2>{ totalNotDelivery }</h2>
                            <span>Pedidos prontos para entregar</span>
                        </li>
                        <li>
                        <h2>{ totalDelivery }</h2>
                            <span>Pedidos entreges</span>
                        </li>
                    </ul>    
                </div>
            </SectionHome>
        </>
    )
}


export default Home;