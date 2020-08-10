import React from 'react';
import { Switch, Route } from 'react-router-dom';

// <Switch> é único, pois renderiza uma rota exclusivamente.
// path = é o caminho (link) a ser pesquisado, exact é a rota exata. 

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const Routes: React.FC = () => (
    <Switch>
        <Route path='/' exact component={Dashboard} />
         {/* O '+' é para reconhecer tudo o que depois de /repository/ */}
        <Route path='/repositories/:repository+' component={Repository} />
    </Switch>
)

export default Routes;