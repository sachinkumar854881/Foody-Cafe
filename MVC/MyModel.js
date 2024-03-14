import { API_URL } from "../helper/helper.js"
import { getJSON, sendJSON} from "../config/config.js"
import { AddRecipeView } from "./AddRecipeView.js"

// storing and handling the data
export const anotherRecipeObject = 
{
    recipeObject:{}
}


export async function storeRecipeData(id)
{
    const recipeData = await getJSON(`${API_URL}/${id}`)


    console.log(recipeData.data.recipe)

    anotherRecipeObject.recipeObject=
    {
        publisher:recipeData.data.recipe.publisher,
        title:recipeData.data.recipe.title,
        imageUrl:recipeData.data.recipe.image_url,
        servings:recipeData.data.recipe.servings,
        cookingTime:recipeData.data.recipe.cooking_time,
        ingredients:recipeData.data.recipe.ingredients,
    }
    console.log(anotherRecipeObject) 
}

export const allData = {
    allRecipeData: [],
    page:1,
    dataPerPage:10
}
export async function getAllData(searchItem)
{
    const recipeData = await getJSON(`${API_URL}?search=${searchItem}&key=b1c98b3d-105e-44a1-9d33-eb8ad0da206c`);
    // console.log(recipeData)
    const recipeArray = recipeData.data.recipes

    allData.allRecipeData = recipeArray
    console.log(allData)
}

export function paginationData(page = allData.page)  //1,2,3,4,5 pages
{   
    console.log(page)
    allData.page = page
    const start = (page - 1) * allData.dataPerPage
    const stop = page * allData.dataPerPage
    return allData.allRecipeData.slice(start, stop)
}


let bookmarksArray = []
export function collectAndStoreBookmark(title){
    // collect the title of each  recipe
    bookmarksArray.push(title)
    
    /*
        localstorage---- is a storage which is inbuild in the browser
        stores the data in the form of key value pair
        4 methods of localStorage----
        1)setItem()---to store the data in local storage in the form of key value pair 
        2)getItem()----get/read that data
        3)remove()-----remove the data from local storage
        4)clear()-----completely clear the data
    */    
    localStorage.setItem("bookmark",JSON.stringify(bookmarksArray))
      
    const titleData = JSON.parse(localStorage.getItem("bookmark")) 
    
    return titleData
}

export async function recipe(data)
{
    // console.log(data)

    console.log(Object.entries(data))
    const ingredient = Object.entries(data).filter(function(i)
    {
        return i[0].startsWith("ingredient")
    }).map(function(j)
    {
        const data = j[1].split(",")
        const [quantity, unit, description] = data 

        return {quantity, unit, description}
    })

    // console.log(ingredient)

    const newData = {
        title:data.title,
        image_url:data.imageUrl,
        ingredients:ingredient,
        cooking_time:data.cookingTime,
        servings:data.servings,
        publisher:data.publisher,
        source_url:data.sourceUrl
    }
    // console.log(newData)   

    const output = await sendJSON("https://forkify-api.herokuapp.com/api/v2/recipes?key=6d256547-4c40-4684-9d5e-03a9e879553a",newData) 
    const outputData = (output.data.recipe)

    const myId = outputData.id
    const myTitle = outputData.title
    const myPublisher = outputData.publisher 
    const myImageUrl = outputData.image_url

    const arv = new AddRecipeView()
    arv.displayData(myId, myTitle, myPublisher, myImageUrl)
}


// cookingTime:"40"
// imageUrl:"https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
// ingredient1:"2 kg,rice"
// ingredient2:"2 kg,daal"
// publisher:"PUBISHER 1"  
// servings:"4"
// sourceUrl:"https://123"
// title:"TITLE 1"