import React from 'react';

import Image from '../shared/Image';
import Link from '../shared/Link';


import './styles.css'


function Header() {
    return (
        <header className="App-header">
           <Image />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
           <Link 
                className = "My-link"
                href = "https://reactjs.org" 
                text = "Learn React"
                isTargetBlank
            />
           <Link href="test" text="lorem" />

            
        </header>
    )
}

export default Header;