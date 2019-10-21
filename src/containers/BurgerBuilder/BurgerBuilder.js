import React, {Component} from 'react';
import Fragment from '../../hoc/Fragment/Fragment';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICE = {
    salad: 0.25,
    bacon: 0.5,
    cheese: 0.35,
    meat: 1
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 1,
        purchaseable: false,
        purchasing: false
    }

    updatePurchaseState = (updatedIngredients) => {
        const sum = Object.keys(updatedIngredients)
            .map(igKey => updatedIngredients[igKey])
            .reduce((total, num) => total += num);
        this.setState({purchaseable: sum > 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceSubtraction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceSubtraction;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: updatedPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    togglePurchaseHandler = () => {
        this.setState({purchasing: !this.state.purchasing});
    }

    continuePurchaseHandler = () => {
        alert("Puchase continue clicked");
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] === 0;
        }

        return (
            <Fragment>
                <Modal 
                    show={this.state.purchasing}
                    clicked={this.togglePurchaseHandler} >
                    <OrderSummary 
                        price={this.state.totalPrice}
                        ingredients={this.state.ingredients}
                        purchasing={this.togglePurchaseHandler} 
                        continue={this.continuePurchaseHandler} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls 
                    price={this.state.totalPrice}
                    disabledInfo={disabledInfo}
                    add={this.addIngredientHandler}
                    remove={this.removeIngredientHandler}
                    purchaseable={this.state.purchaseable}
                    purchasing={this.togglePurchaseHandler} />
            </Fragment>
        );
    }

}

export default BurgerBuilder;