import { Fragment } from "react";
import classes from './Meals.module.css';
import MealsItem from "./MealsItems";

const Meals = props => {
    return <Fragment>
        <div className={classes.expenseItem}>
            <MealsItem />
        </div>
    </Fragment>
}

export default Meals;
