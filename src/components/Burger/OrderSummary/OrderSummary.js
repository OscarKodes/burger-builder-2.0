import React, {Component} from 'react';
import Fragment from '../../../hoc/Fragment/Fragment';
import Button from '../../UI/Button/Button';

class orderSummary extends Component {
    // This could be a functional component, doesn't have to be a class
    componentDidUpdate() {
        console.log('OrderSummary DidUpdate');
    };

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {

            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                </li>
            )
        });

        return (
            <Fragment>
                <h3>Your Order</h3>
                <p> A burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price: <strong>${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchasing}>CANCEL</Button>
                <Button btnType='Success' clicked={this.props.continue}>CONTINUE</Button>
            </Fragment>
        )
    }
}

export default orderSummary;