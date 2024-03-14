import { recipe } from "./MyModel.js"

export class AddRecipeView
{
    left
    right  //make a variable
    addBtn

    displayAddRecipeForm()
    {
        this.right = document.getElementById("right-container")
        this.addBtn = document.getElementById("add-recipe")

        this.addBtn.addEventListener("click",()=>
        {
            // console.log("Add recipe button has been clicked ")
            // logic to display form in write container 
            const addRecipeForm = `<form method="POST">

                    <label>Title:</label>
                    <input type="text" placeholder="Enter the title..." name="title" value="TITLE 1"/><br/><br/>

                    <label>Image URL:</label>
                    <input type="text" placeholder="Enter the image url..." name="imageurl" value="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"/><br/><br/>

                    <label>Cooking Time:</label>
                    <input type="text" placeholder="Enter the cooking time..." name="cookingtime" value="40"/><br/><br/>

                    <label>Servings:</label>
                    <input type="text" placeholder="Enter the servings..." name="servings" value="4"/><br/><br/>

                    <label>Publisher:</label>
                    <input type="text" placeholder="Enter the publisher..." name="publisher" value="PUBISHER 1"/><br/><br/>

                    <label>Ingredient 1:</label>
                    <input type="text" placeholder="Enter the ingredient 1..." name="ingredient1" value="2,kg,rice"/><br/><br/>

                    <label>Ingredient 2:</label>
                    <input type="text" placeholder="Enter the ingredient 2..." name="ingredient2" value="2,kg,daal"/><br/><br/>

                    <label>Source Url:</label>
                    <input type="text" placeholder="Enter the source url..." name="sourceurl" value="https://123"/><br/><br/>

                    <input type="submit" value="Add" id="add"/>

                </form>`

                this.right.innerText = ""
                return this.right.insertAdjacentHTML("afterbegin",addRecipeForm)
        })
    }
    
    collectRecipeData()
    {
        this.right = document.getElementById("right-container")

        this.right.addEventListener("click",(event)=>
        {
            event.preventDefault()
            // collect data from form 
            const title = event.target.form[0].value
            const imageUrl = event.target.form[1].value
            const cookingTime = event.target.form[2].value
            const servings = event.target.form[3].value
            const publisher = event.target.form[4].value
            const ingredient1 = event.target.form[5].value 
            const ingredient2 = event.target.form[6].value
            const sourceUrl  = event.target.form[7].value

            const newRecipeData = {
                title:title,
                imageUrl:imageUrl,
                cookingTime:cookingTime,
                servings:servings,
                publisher:publisher,
                ingredient1:ingredient1,
                ingredient2:ingredient2,
                sourceUrl:sourceUrl
            }
            // console.log(newRecipeData)
            recipe(newRecipeData)

        })
    }

    displayData(myId, myTitle, myPublisher, myImageUrl)
    {
        this.leftContainer = document.getElementById("left-container")

        return this.leftContainer.insertAdjacentHTML("afterbegin", `
            
            <a href="#${myId}">
                <div class="left-food-container">
                    <img src="${myImageUrl}" id="myimage"/>
                    <h2 id="mypublisher">${myPublisher}</h2>
                    <h3 id="mytitle">${myTitle}</h3>
                </div>
            </a>
        `) 
    }
}