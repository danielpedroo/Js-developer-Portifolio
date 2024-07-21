
//Request data Json;
async function fetchProfileData(){
    const urlJson = "https://raw.githubusercontent.com/danielpedroo/Js-developer-Portifolio/main/Src/Json/profile.json";
    const fetching = await fetch (urlJson);
    return fetching.json();
}



