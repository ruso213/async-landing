
const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCECJDeK0MNapZbpaOzxrUPA&part=snippet%2Cid&order=date&maxResults=6'

const content = null  || document.getElementById("content")


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f96a02c2bfmsh4424cb15d11d92cp165ec2jsn428e42afea46',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchdata (urlapi){
    const response = await fetch(urlapi, options);
    const data = await response.json();
    return data
}

(async () => {
    try{
        const videos = await fetchdata(API);
        let view = ` ${videos.items.map(video =>    `
        <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-200">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3> text
        </div>
      </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view
    }
    catch(e) {
        console.log(e)
    }
})();   