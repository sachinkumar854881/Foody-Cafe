// https://forkify-api.herokuapp.com/v2  i have use this api using particular recipe,add recipe and delete recipe.
// 1).Get all recipes/Create recipe. 
// 2).Get recipe/Delete recipe.

// https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=<insert your key>   I  have using this api for searching the pizza.
// b1c98b3d-105e-44a1-9d33-eb8ad0da206c   this a generate api key is used for get all details of recipe's. 

//1). https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=b1c98b3d-105e-44a1-9d33-eb8ad0da206c 
// isse pizza recipe ki sari detail get kar skate hai

// 1). https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bcd4d


const searchbtn = document.getElementById("search")
const searchInput = document.getElementById("searchinput")
// const leftContainer = document.getElementById("left-container")


import { storeRecipeData } from "./MVC/MyModel.js"
import { OneRecipeView } from "./MVC/OneRecipeView.js"
import { API_URL } from "./helper/helper.js"
import { getJSON } from "./config/config.js"
import { getAllData } from "./MVC/MyModel.js"
import { AllRecipeView } from "./MVC/AllRecipeView.js" 
import { allData } from "./MVC/MyModel.js"
import { paginationData } from "./MVC/MyModel.js"
import {MyPaginationView} from "./MVC/MyPaginationView.js"
import { ServingView } from "./MVC/ServingView.js"
import { BookmarkView } from "./MVC/BookmarkView.js"
import { AddRecipeView } from "./MVC/AddRecipeView.js"


searchbtn.addEventListener("click", ()=>{
    getRecipeData();
})


async function getRecipeData(){

    try{

        const searchItem = searchInput.value
        
        await getAllData(searchItem)

        const arv = new AllRecipeView()

        // arv.render(allData.allRecipeData)
        arv.render(paginationData(7))

        // PAGINATION CONCEPT TO GET EXECUTED 
        const mpv = new MyPaginationView()
        mpv.render(allData)
    }
    catch(err)
    {
        alert(err)
    }
}

async function loadParticularRecipe()
{
    // logic to collet particular hash id
    const hashID = window.location.hash.slice(1)
    console.log(hashID)

    await storeRecipeData(hashID)


    const rv = new OneRecipeView()
    rv.render()


}
loadParticularRecipe()

function callHashChangeEventHandler()
{
    const r = new OneRecipeView()
    r.hashChangeEventHandler(loadParticularRecipe)
}

callHashChangeEventHandler()


function controlPagination(number)
{
    const arv = new AllRecipeView()
    arv.render(paginationData(number))
 
    const mpv = new MyPaginationView()
    mpv.render(allData)

}
function callIt()
{
    const view = new MyPaginationView()
    view.getPageNumberFromButton(controlPagination)
}
callIt()


function servings()
{
    const sv = new ServingView()
    sv.render()
}
servings()



function bookmark()
{
    const bv = new BookmarkView()
    bv.handleBookmarks()
}
bookmark()


function addRecipe()
{
    const arv = new AddRecipeView()
    arv.displayAddRecipeForm()
    arv.collectRecipeData()
}
addRecipe()
// window.addEventListener("hashchange",loadParticularRecipe)