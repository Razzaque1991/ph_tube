function category() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then((res)=>res.json())
      .then((data)=>displayCategory (data.
        categories
        ))
}

 
// {category_id: '1001', category: 'Music'}

const displayCategory = (categories) => {
    let btnShow_container = document.getElementById('display_containner');
    for (const cat of categories) {
        let cats = cat.category;
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `<button class="btn btn-sm hover:bg-red-400 hover:text-white">${cats}</button>`;
        btnShow_container.appendChild(newDiv);
    }
};

 
category();
