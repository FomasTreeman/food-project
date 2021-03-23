import Card from './Card';

const CardList = ({ meals }) => {
  
  return (

    <div>
      {
        meals.length === 0 ? 'loading...' : meals.results.map((meal, i) => {
          return (
            <Card
              key={i}
              id={meal.id}
              name={meal.title}
              readyInMinutes={meal.readyInMinutes}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;