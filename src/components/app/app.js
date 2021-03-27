import React from 'react';

import AppHeader from '../app-header';
import Slider from '../slider';
import AboutCracker from '../about-cracker';
import CrackerConstructor from '../cracker-constructor'

const App = () => {
    return(
        <div className = 'app'>
            <AppHeader/>
            <Slider/>
            <AboutCracker/>
            <CrackerConstructor/>
        </div>
    )
} 

export default App;