import React, { Component, Fragment } from 'react';
import { Row, Col, Tabs, Tab, CardPanel } from 'react-materialize';
import ViewMenu from './ViewMenu';
import '../App.css'

class Hosts extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }//Constructor

    render() {
        return(
            <Fragment >
                <Row>
                    <Col m={8} className='view-height'>
                        <Tabs className='tab-demo z-depth-1' options={{swipeable: true}}>
                            <Tab title='DESAYUNOS' className=''>
                                <Row>
                                    <Col m={6} s={12}>
                                        <CardPanel className="teal">
                                            <span className="white-text">
                                                ITEM
                                            </span>
                                            <ViewMenu />
                                        </CardPanel>
                                    </Col>
                                </Row>
                            </Tab>
                            <Tab title='COMIDAS' active className=''>
                            COMIDAS
                            </Tab>
                            <Tab title='POSTRES' className=''>
                            POSTRES
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col m={4}>
                        <h2> Pedido </h2>
                    </Col>
                </Row>
            </Fragment>          
        );
    }//render

}//Component

export default Hosts;