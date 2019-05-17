import React from 'react';
import Menu from '../data.json';



const ViewMenu = () => {
    //console.log(Menu);
    return (
        <div>
            {
                Menu.desayuno.bebidas.map((item) => {
                 return <h2>item</h2>
                })
             }
            {/* <h3> {Menu.desayuno.bebidas[0]} </h3> */}
        </div>        
        // itemsMenu.map(item =>{
        //     <h2>item</h2>
        // })
        // <h2> {Menu.desayuno.bebidas[0]} </h2>
    );
};

export default ViewMenu;