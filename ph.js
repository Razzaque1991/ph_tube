// button fatch section
function category() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
      .then((res)=>res.json())
      .then((data)=>displayCategory (data.
        categories
        ))
}

 
// {category_id: '1001', category: 'Music'}
// button display section
const displayCategory = (categories) => {
    let btnShow_container = document.getElementById('display_containner');
    for (const cat of categories) {
        let cats = cat.category;
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `<button class="btn btn-sm hover:bg-red-400 hover:text-white">${cats}</button>`;
        btnShow_container.appendChild(newDiv);
    }
};

// thambale section

function thambale() {
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then((res) => res.json())
    .then((data) => displayVideo(data.videos))
}
const displayVideo = (videos) => {
    let videoContainer = document.getElementById('vcontainer');
    videos.forEach(video => {
        let videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <div class="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img src="${video.thumbnail}" alt="${video.title}" class="w-full h-48 object-cover rounded-t-lg" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${video.title}</h2>
                    <p>A card component has a figure, a body part, and inside the body, there are title and actions parts.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        `;
        videoContainer.appendChild(videoElement);
    });
};



category();
thambale();
