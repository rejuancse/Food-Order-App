import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2'
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55'
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435'
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1625938393850-10f1f23de467'
  },

  {
    id: 'm5',
    name: 'Pizza',
    description: 'Healthy...and green...',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
  },
  {
    id: 'm6',
    name: 'Food 1',
    description: 'Healthy...and green...',
    price: 13.99,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141'
  },
  {
    id: 'm7',
    name: 'Food 2',
    description: 'Healthy...and green...',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1546964124-0cce460f38ef'
  },
  {
    id: 'm8',
    name: 'Food 3',
    description: 'Healthy...and green...',
    price: 15.99,
    image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8'
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
