var docFrag = document.createDocumentFragment();
    // creates a fragment of document...
    // we will append all elements on
    //  this DocumentFragment and then render it...

for(var x = 1; x <= 9; x++){
    var createbr = document.createElement('br')
        // creates 'br' element...
    var createbtn = document.createElement('button');
        // creates 'button' element...
    createbtn.id = `btn${x}`;
        // setting properties like id, value, name, etc...
    createbtn.style.width = `${30}%`;
    createbtn.style.height = `${48}px`;
    createbtn.style.fontSize = `${24}px`;
        // setting stylesheet properties... like width,height, background, etc...

    createbtn.innerHTML = `${x}`;
        // setting what should be there inside the html tag...
    docFrag.appendChild(createbtn);
        // appending all created nodes or elements to DocumentFragment...
    if(x%3 === 0){
        docFrag.appendChild(createbr);
            // this appends 'br' nodes after appending 3 'button' nodes to DocumentFragment...
    }
}

let btns = document.getElementById('btns')
    // selects 'div' tag with id = btns...
btns.appendChild(docFrag)
    // appends DocumentFragment to element who's value is contained in btns variable,
    // ie.,'div tag with id=divs'...
btns.style.width = `${75}%`
    // setting stylesheet property, ie., 'width'...
let nums = [1,2,3,6,9,8,7,4]
let ids = [1,2,3,6,9,8,7,4]
    // assigning arrays to nums and ids variables...

let btn5 = document.getElementById('btn5');
    // selects 'button' tag with id = btn5...

btn5.addEventListener('click', function(){
    // adding Event Listener 'on-click'
    
    last = nums.pop()
        // pops last element from array...
        // stores last element in variable 'last'
    nums.unshift(last)
        // pushes last element to the bigining of array
        // pop() and unshift collectively are performing stack operation here,
        // ie., element popped from last is being pushed at start(circular queue...)


    for(x=0; x<8; x++){
        document.getElementById(`btn${ids[x]}`).innerHTML = nums[x];
            // adding value which is at x location of nums to 
            // inner HTML of 'button' having id at x location of 'ids' array 
            // ie., `btn${ids[x]}`
    }
    
});