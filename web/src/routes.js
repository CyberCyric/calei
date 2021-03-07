import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import CategoriesList from './pages/CategoriesList';

const Routes = ({children}) => {
    return(
        <>
        <Switch>
            <Route path="/admin/categories" exact><CategoriesList/></Route>
        </Switch>
        {children}
        </>
    );
}

export default Routes;