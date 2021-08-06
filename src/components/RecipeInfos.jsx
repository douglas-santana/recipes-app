import React from 'react';
// colocar o id de ingredientes do datatest
// Video so mostra para comidas - Pensar logca if
function RecipeInfos() {
  return (
    <div>
      <h2>Ingredients</h2>
      <p data-testid={ `${0}-ingredient-name-and-measure` }>
        Lista dos ingredientes
      </p>
      <p data-testid="instructions">
        Texto instruções
      </p>
      <div data-testid="video">
        Videozinho (apenas para comidas)
      </div>
    </div>
  );
}

export default RecipeInfos;
