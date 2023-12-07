import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg'
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5634/08.jpg'
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5630/04.jpg'
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5633/07.jpg'
  },

  {
    id: 'm5',
    name: 'Pizza',
    description: 'Healthy...and green...',
    price: 18.99,
    image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5631/05.jpg'
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      image={meal.image}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
