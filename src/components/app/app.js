import React from 'react';

import AppHeader from '../app-header';
import Slider from '../slider';
import AboutCracker from '../about-cracker';

const App = () => {
    return(
        <div className = 'app'>
            <AppHeader/>
            <Slider/>
            <AboutCracker/>
        </div>
    )
} 

export default App;