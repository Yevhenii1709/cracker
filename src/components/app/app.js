import React from 'react';

import AppHeader from '../app-header';
import Slider from '../slider';
import AboutCracker from '../about-cracker';
import CrackerConstructor from '../cracker-constructor';
import AppFooter from '../app-footer';

import './app.scss';

const App = () => {
    return(
        <div className = 'app'>
            <AppHeader/>
            <Slider/>
            <AboutCracker/>
            <CrackerConstructor/>
            <AppFooter/>
        </div>
    )
} 

export default App;