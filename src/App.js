import logo from './logo.svg';
import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [recipe, setRecipe] = useState(0);
  useEffect(() => {
    fetch('https://api.spoonacular.com/recipes/search/?apiKey=a16242dbabbf4f58b527968205a7eebe')
    .then(response => response.json())
    .then(response => {
      console.log(response)
      setRecipe(response)
    })
    
  }, []);
  //const ID = recipe.id;
  return (
    <div className="App">
      <header className="App-header">
        <h1>RECIPE LIST</h1>
      </header>
      <div>
      {
          (recipe!==0) ? 
            recipe.results.map(recipe => {
              const fid = 'https://spoonacular.com/recipeImages/{recipe.id}-90x90.jpg';
              return(
                <div className="info">
                  <img src={'https://spoonacular.com/recipeImages/'+ recipe.id +'-312x231.jpg'} />
                  <h1><a href={recipe.sourceUrl}>{recipe.title}</a></h1>
                  <h3>Servings: {recipe.servings}</h3>
                  <h3>Ready In Minutes: {recipe.readyInMinutes}</h3>
                </div>
              )
            }) : null
        }
      </div>
    </div>
  );
}

export default App;
