import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/header/header.component';
import SidebarComponent from './components/sidebar/sidebar.component';

function AppRouting() {

    // lazy loading components;
    let TODOComponent:any = lazy(() => import("./components/todo/todo.component"));
    let FourNotFourComponent:any = lazy(() => import("./components/404/404.component"));

    return (
        <Suspense fallback={"Loading..."}>
            <BrowserRouter>
                <HeaderComponent />
                <SidebarComponent />
                <Switch>    
                    <Route exact path="/todo" component={ TODOComponent } />
                    <Route path="*" component={ FourNotFourComponent } />
                </Switch>
            </BrowserRouter>
        </Suspense>
    );
}

export default AppRouting;