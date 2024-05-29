export function sortByGenre(data, genreType){
    if(genreType === 'all'){
        return data;
    }
    return data.filter((item)=>{
        return item.genre.key === genreType;
    })
}