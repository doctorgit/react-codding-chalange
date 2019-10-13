import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as Pages from '../../pages';
import HeaderBasic from '../header-basic';
import SubHeader from '../sub-header';
import MainContainer from '../../styled/MainContainer';
import { PageContainer } from '../../styled/Containers';
import { StyledFooter } from '../../styled/Footer';

import './app.css';

const App = () => {
    return (
        <>
            <HeaderBasic/>
            <SubHeader/>
            <MainContainer>
                <PageContainer>
                <Switch>
                    <Route path="/" component={ Pages.HomePage } exact/>
                    <Route path="/series" component={ () => <Pages.ItemsPage type={'series'} /> }/>
                    <Route path="/movies" component={ () => <Pages.ItemsPage type={'movie'} /> }/>
                </Switch>
                </PageContainer>
            </MainContainer>
            <StyledFooter>
                {'footer'}
            </StyledFooter>
        </>
    );
};

export default App;
