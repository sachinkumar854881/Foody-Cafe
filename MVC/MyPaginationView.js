export class MyPaginationView
{
    paginationData // make a variable having name data
    data

    render(data)
    {
        this.data = data
        this.paginationData = document.getElementById("pagination")
        this.paginationLogic()
    }

    paginationLogic()
    {
        const recipeLength = this.data.allRecipeData.length;

        const recipePerPage = this.data.dataPerPage
        //  logic to count how many pages are actually requires
        const numberOfPages = Math.ceil(recipeLength / recipePerPage)
        // console.log(numberOfPages)
       const currentPage = this.data.page 
        
        // scenerios
        // Page 1 and there are some other pages that are available
        if(currentPage === 1 && numberOfPages > 1)
        {
            // console.log("i am in first page and some other pages are available")
            this.paginationData.innerText = ""
            return this.paginationData.insertAdjacentHTML("afterbegin", `
                <button class="btn-inline next">
                    <span>Page${currentPage + 1}</span>
                </button>
            `
        )}
        // last page
        if(currentPage === numberOfPages && numberOfPages > 1)
        {
            // console.log("i am in last page")
            this.paginationData.innerText = ""
            return this.paginationData.insertAdjacentHTML("afterbegin",`
                <button class="btn-inline previous">
                    <span>Page${currentPage - 1}</span>
                </button>
            `
        )}
        // other page 
        if(currentPage < numberOfPages)
        {
            // console.log("there are other pages are available")
            this.paginationData.innerText = ""
            return this.paginationData.insertAdjacentHTML("afterbegin",`
                <button class="btn-inline previous">
                    <span>Page${currentPage - 1}</span>
                </button>
                <button class="btn-inline next">
                    <span>Page${currentPage + 1}</span>
                </button>
            `
        )}
        // Page 1 and their are no other pages  are not required
        else 
        {
            // console.log("i am in first page and some other pages are not available")
            this.paginationData.innerText = ""
            return this.paginationData.insertAdjacentHTML("afterbegin",`
                <button class="btn-inline currentPage">
                    <span>Page${currentPage}</span>
                </button>
            `
        )}
    }

    getPageNumberFromButton(handler)  //handler = controlPagination
    {
        this.paginationData = document.getElementById("pagination")
        // logic to get the page number
        this.paginationData.addEventListener("click",function(e)
        {
            // left container will be cleared
            this.left = document.getElementById("left-container")    
            this.left.innerText=""
            const pageNo = Number(e.target.innerText.slice(4))

            handler(pageNo)
        })
    }
}