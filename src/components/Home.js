import React, { Component } from 'react';
import SimpleButton from './SimpleButton';
import logo from '../img/kawai-burguer.png';
import '../App.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }//Constructor

    render() {
        return(
            <section className='Main'>
                <div className=''>
                    <img src={logo} className='Home-logo' alt='logo' />
                    <h2> BURGUER QUEEN</h2>
                </div>

                <SimpleButton></SimpleButton>
            </section>    
        );
    }//render

}//Component

export default Home;