import React from 'react';

const Plan = (props) => {
    return (
        <div className='text-white'>
            <li className='shadow p-2 my-2 row'>
                <div className='col-sm-9'>{props.value}</div>
                    <div className='col-sm-3 text-right'>
                        <button className='btn btn-danger my-2' onClick={() => {props.sendData(props.id)}}>X
                        </button>
                     </div>
            </li>           
        </div>

    );
};

export default Plan;