import { anotherRecipeObject } from "./MyModel.js"
import { collectAndStoreBookmark } from "./MyModel.js"


export class BookmarkView
{
    handleBookmarks()
    {
        // logic to perform click on the button....
        this.right = document.getElementById("right-container")
        this.right.addEventListener("click",function(e)
        {
            const btnName = e.target.innerText
            if(btnName == "Mark as Bookmark")
            {
                // logic to get title and store it
                const myTitle = anotherRecipeObject.recipeObject.title
                let titleArray = collectAndStoreBookmark(myTitle)
                
                this.bookmark = document.getElementById("childbookmark")
                this.bookmark.innerText = ""  
                titleArray.map((i)=>
                {   
                    this.bookmark.insertAdjacentHTML("afterbegin",`<h3>${i}</h3>`)
                    
                })
            }
        })
       }
}