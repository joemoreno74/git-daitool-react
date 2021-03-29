import React, { Component } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                    <TransitionGroup>
                        <CSSTransition classNames="page" timeout={3000}>
                            <Switch>
                                <Route path='/home' render={() => <Home />}/> 
                                <Route exact path='/safety' render={() => <Home />}/>
                                <Route exact path='/janitorial' render={() => <Home />}/>
                                <Route exact path='/tools' render={() => <Home />} />
                                <Route path='/woodworking' render={() => <Home />}/>
                                <Route exact path='/gardening' render={() => <Home />}/>
                                <Route exact path='/office-supplies' render={() => <Home />}/>
                                <Route exact path='/blog' render={() => <Home />} />
                                <Route exact path='/brands' render={() => <Home />} />
                                <Route exact path='/about-us' render={() => <Home />} />
                                <Redirect to='/home' />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>    
                <Footer />
            </div>
        );
    }
}

export default Main;