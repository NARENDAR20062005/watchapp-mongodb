import React, { Component } from 'react';
import '../style/Home.css'; 
import backgroundImage from './homebk.jpg'; 



class Home extends Component {
    render() {
        return (
            <>
           

            <div style={{ backgroundImage: `url(${backgroundImage})`, height: '100vh',
             backgroundSize: 'cover', backgroundPosition: 'center', textAlign: 'center', paddingTop: '100px' }}>
                <p>Welcome to the Watch application</p>
            </div>
            </>
        );
    }
}

export default Home;
