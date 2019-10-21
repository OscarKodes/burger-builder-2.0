import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Meat', type: 'meat'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => {
            return (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label}
                    add={() => props.add(ctrl.type)}
                    remove={() => props.remove(ctrl.type)}
                    disabled={props.disabledInfo[ctrl.type]}/>
            )
        })}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.purchasing}>Order Now</button>
    </div>
);

export default buildControls;