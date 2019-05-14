import React, { Component, Fragment } from 'react';
import { Row, Col, Tabs, Tab } from 'react-materialize';
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
                        <Tabs className="tab-demo z-depth-1" options={{swipeable: true}}>
                            <Tab title="Test 1" className="blue">
                            Test 1
                            </Tab>
                            <Tab title="Test 2" active className="grey">
                            Test 2
                            </Tab>
                            <Tab title="Test 3" className="green">
                            Test 3
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