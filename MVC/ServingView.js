import { anotherRecipeObject } from "./MyModel.js"

export class ServingView
{
    rightContainer; 

    render()
    {
        this.rightContainer = document.getElementById("right-container")
        this.handleServings()
    }
    
    handleServings()
    {
        this.rightContainer = document.getElementById("right-container")
        // logic which will identify increase or decrease button  
        this.rightContainer.addEventListener("click",function(e)
        { 
            const btnName = e.target.innerText

            if(btnName == "INCREASE")
            {
                this.rightContainer = document.getElementById("right-container")
                const completeData = anotherRecipeObject.recipeObject
                let myServings = completeData.servings
                
                anotherRecipeObject.recipeObject.servings = myServings + 1

                anotherRecipeObject.recipeObject.ingredients.map(function(i)
                {
                    i.quantity = Math.ceil((i.quantity * anotherRecipeObject.recipeObject.servings) / 5)
                })

                const receivedData = anotherRecipeObject.recipeObject
                
                this.rightContainer.innerText = ""
                return this.rightContainer.insertAdjacentHTML("afterbegin",`<div class="right-food-container">
                    <img class="right-image" src="${receivedData.imageUrl}"/>
                    <h2 class="right-title">Title :${receivedData.title}</h2>
                    <h3 class="right-publisher">Publisher :${receivedData.publisher}</h3>
                    <h3 class="right-servings">Servings :${receivedData.servings}</h3>
                    <button id="inc">INCREASE</button>
                    <button id="dec">DECREASE</button>
                    <h3 class="right-cooking-time">Cooking Time :${receivedData.cookingTime}</h3>
                    <div class="ingredients">
                        ${receivedData.ingredients.map(function(i)
                        {
                        // console.log(i)
                            return `<div>
                                <span>${i.description}</span> --
                                <span>${i.quantity}</span>
                                <span>${i.unit}</span>
                            </div>`
                        }).join("")}
                    </div>
                </div>`
            )}
            else if(btnName == "DECREASE")
            {
                // logic to increase the count of serving  
                this.rightContainer = document.getElementById("right-container")
                const completeData = anotherRecipeObject.recipeObject
                let myServings = completeData.servings
                
                anotherRecipeObject.recipeObject.servings = myServings - 1

                anotherRecipeObject.recipeObject.ingredients.map(function(i)
                {
                    i.quantity = Math.ceil((i.quantity * anotherRecipeObject.recipeObject.servings) / 5)
                })
                
                const receivedData = anotherRecipeObject.recipeObject
                
                this.rightContainer.innerText = ""
                return this.rightContainer.insertAdjacentHTML("afterbegin",`<div class="right-food-container">
                    <img class="right-image" src="${receivedData.imageUrl}"/>
                    <h2 class="right-title">Title :${receivedData.title}</h2>
                    <h3 class="right-publisher">Publisher :${receivedData.publisher}</h3>
                    <h3 class="right-servings">Servings :${receivedData.servings}</h3>
                    <button id="inc">INCREASE</button>
                    <button id="dec">DECREASE</button>
                    <h3 class="right-cooking-time">Cooking Time :${receivedData.cookingTime}</h3>
                    <div class="ingredients">
                        ${receivedData.ingredients.map(function(i)
                        {
                        // console.log(i)
                            return `<div>
                                <span>${i.description}</span> --
                                <span>${i.quantity}</span>
                                <span>${i.unit}</span>
                            </div>`
                        }).join("")}
                    </div>
                </div>` 
            )}
        })
    }
}