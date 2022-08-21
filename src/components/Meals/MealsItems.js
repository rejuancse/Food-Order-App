import classes from './Meals.module.css';

const MealsItem = props => {
    const itemsName = 'Pasta Pizza';
    const itemPrice = 12;  

    return <frameElement>
        <div className={classes.items}>
            <div className={classes.itemsname}>{itemsName}</div>
            <div className={classes.cart}>
                <div className={classes.price}>${itemPrice}</div>
                <button className={classes.addtocart}>Add to Cart</button>
            </div>
        </div>
    </frameElement>
}

export default MealsItem;
