var pNameInput = document.getElementById("pNameId");// input KOlo
var pPriceInput = document.getElementById("pPriceId");// input KOlo
var pCatInput = document.getElementById("pCatId");// input KOlo
var pDescInput = document.getElementById("pDescId");// input KOlo
var searchInput = document.getElementById("searchInputId")

var ma5zn = []; // 1


if( localStorage.getItem("Store") !=null  )
{
    ma5zn = JSON.parse(  localStorage.getItem("Store")  )

    Display()
}

//=====================




// Create ===> Display() ===> ClearInputs()
function addProduct()
{

    var oneProduct = {

        pName : pNameInput.value , 
        pPrice : pPriceInput.value,
        pCat : pCatInput.value,
        pDesc : pDescInput.value

    } 

    ma5zn.push(oneProduct); // toshiba , Dell , Samsung


    localStorage.setItem("Store" , JSON.stringify(ma5zn)  )

    Display();
    clearInputs();
}


function Display()
{
    //=================== Display , retrive ========

    var hasala = "";

    // loop Array
    for(var i =0 ; i < ma5zn.length ; i++)
    {
      hasala =hasala +   `<tr>
      <td>${i}</td>
        <td>${ma5zn[i].pName}</td>
        <td>${ma5zn[i].pPrice}</td>
        <td>${ma5zn[i].pCat}</td>
        <td>${ma5zn[i].pDesc}</td>

        <td> <button class="btn btn-outline-warning">Update</button> </td>
        <td> <button onclick="deleteProduct(${i} , 'display')" class="btn btn-outline-danger">Delete</button> </td>
    
        </tr>`
    }


    document.getElementById("tBody").innerHTML = hasala;

}

function clearInputs()
{
    pNameInput.value = "";
    pPriceInput.value = "";
    pCatInput.value = "";
    pDescInput.value = "";
    
}





function deleteProduct( pIndex  , yourFlag)
{
    ma5zn.splice( pIndex , 1  );

    localStorage.setItem("Store" , JSON.stringify(ma5zn) )


    if(yourFlag == 'search')
    {
        searchProduct();
    }
    else if( yourFlag == 'display' )
    {
        Display()
    }
    
}





function searchProduct()
{
    // t
   var userWord =  searchInput.value;

   var trMatched = "";

   for(  var i =0 ; i< ma5zn.length ; i++ )
   {
        if( ma5zn[i].pName.includes(userWord)  )
        {
            trMatched +=  `<tr>
            <td>${i}</td>
              <td>${ma5zn[i].pName}</td>
              <td>${ma5zn[i].pPrice}</td>
              <td>${ma5zn[i].pCat}</td>
              <td>${ma5zn[i].pDesc}</td>
      
              <td> <button class="btn btn-outline-warning">Update</button> </td>
              <td> <button onclick="deleteProduct(${i} , 'search')" class="btn btn-outline-danger">Delete</button> </td>
          
              </tr>`
        }
   }

   document.getElementById("tBody").innerHTML = trMatched
   
}

