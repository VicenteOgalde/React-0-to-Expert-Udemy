


export const getImg = async() => {

    try {

        const apiKey = '4TgKq8mgyOtGThZTUCixskXZchB43I81';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        console.log(error)
    }
    
    
    
}

 getImg();



