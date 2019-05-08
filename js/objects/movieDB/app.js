var movies = [
    {title: "in bruges",hasWatched: false, rating: null},
    {title: "The Ballad of Buster Scrugs", hasWatched: true, rating: 4.1},
    {title: "A Prayer Before Dawn", hasWatched: true, rating: 4.1}
]


/* My soloutioon
for(i = 0; i < movies.length; i++){
    console.log(movies[i])
}*/

// Tutorial's soloution

movies.forEach(function(x){
    
    console.log(buildString(x));
});

function buildString(x){
    var result = "You have ";
    if (x.hasWatched){
        result += "seen "
    } else {
        result += "not seen"
    }
    result += x.title
    result += ". Rating - " + x.rating
    return result
}