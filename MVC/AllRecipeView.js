import { allData } from "./MyModel.js";

export class AllRecipeView
{
    leftContainer;

    render(data)  //data = allData.allRecipeData
    {
        this.leftContainer = document.getElementById("left-container")
        this.getRecipeDataView(data)
    }

    getRecipeDataView(recipeArray)  //allData.allRecipeData
    {   
        // const recipeArray = allData.allRecipeData
        // console.log(recipeArray)

        recipeArray.map((i)=>
        {
            this.leftContainer = document.getElementById("left-container")

            const myPublisher = i.publisher
            const myTitle = i.title
            const myImageUrl = i.image_url
            const myId = i.id
            console.log(myId)  //get id of particular recipe product because each recipe has one id.

            return this.leftContainer. insertAdjacentHTML("afterbegin", `
            
            <a href="#${myId}">
                <div class="left-food-container">
                    <img src="${myImageUrl}" id="myimage"/>
                    <h2 id="mypublisher">${myPublisher}</h2>
                    <h3 id="mytitle">${myTitle}</h3>
                </div>
            </a>
        `) 
        })
    }
}