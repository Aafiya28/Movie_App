
const URL = "https://github.com/Aafiya28/Movie_App";

const getMovie = async (url) => {
    try{
        const data = await axios.get(url)
        console.log(data);
    }catch(err) {

    }
};

getMovie(URL);