import React from 'react';

// importing components
import CellFloor from '../CellFloor';

// importing styles
import './styles.scss';



const GridFloorFake = (props) =>{

    // Recebe as propriedades
    const{tittle, subtittle, icon, type} = props;

    return (
        <React.Fragment>

          <div className="grid_floor">
           <div className="row">
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
           </div>

           <div className="row">
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={1}/>
             <CellFloor type={0}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={2}/>
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={3}/>
           </div>

           <div className="row">
             <CellFloor type={0}/>
             <CellFloor type={0}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={2}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={2}/>
             <CellFloor type={2}/>
           </div>

           <div className="row">
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
           </div>

           <div className="row">
             <CellFloor type={0}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={1}/>
             <CellFloor type={1}/>
             <CellFloor type={2}/>
             <CellFloor type={3}/>
             <CellFloor type={2}/>
             <CellFloor type={3}/>
           </div>

           <div className="row">
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
           </div>

           <div className="row">
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={1}/>
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={3}/>
             <CellFloor type={2}/>
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={0}/>
           </div>

           <div className="row">
             <CellFloor type={0}/>
             <CellFloor type={0}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={1}/>
             <CellFloor type={0}/>
             <CellFloor type={1}/>
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={2}/>
           </div>

           <div className="row">
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={2}/>
             <CellFloor type={1}/>
             <CellFloor type={2}/>
             <CellFloor type={1}/>
             <CellFloor type={3}/>
             <CellFloor type={0}/>
             <CellFloor type={0}/>
           </div>

           




           






           </div>
           
        </React.Fragment>
    )
}

export default GridFloorFake;
