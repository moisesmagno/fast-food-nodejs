import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Order from '../pages/Order';
import Kitchen from '../pages/Kitchen';
import Delivery from '../pages/Delivery';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' component={ Home } exact />
        <Route path='/order' component={ Order } />
        <Route path='/kitchen' component={ Kitchen } />
        <Route path='/delivery' component={ Delivery } />
    </Switch>  
);

export default Routes;