var movieList = [
  { title: "Star Wars: Return of the Jedi", year: "1977", length: 125, rating: "8.4", genre: "sci-fi" },
  { title: "The Matrix Revolutions", year: "2003", length: 129, rating: "6.7", genre: "sci-fi" },
  { title: "Omen : The Final Conflict", year: "1981", length: 108, rating: "6.7", genre: "horror" },
  { title: "Gladiator", year: "2000", length: 155, rating: "8.5", genre: "historical" },
  { title: "The Patriot", year: "2000", length: 165, rating: "7.1", genre: "historical" },
  { title: "The Matrix Reloaded”, year: “2003", length: 138, rating: "7.2", genre: "sci-fi" },
  { title: "Interstellar”, year: “2014", length: 169, rating: "8.6", genre: "sci-fi" }
  ];

function getMovieTitle( index ){
  return movieList[index].title;
}

console.log(getMovieTitle(3));
console.log(getMovieTitle(0));

function addMovie( movie ){
  movieList.push(movie);
  return movieList;

}

var newMovie = {title: "The Terminator", year: "1994", length: 130, rating: "8.0", genre: "sci-fi"};
console.log(addMovie(newMovie));



function movieByRating(){
  movieList.sort(function(x, y){
    return (y.rating)-(x.rating);
  });
  return movieList;
}
console.log(movieByRating());

function findByTitle( title ){
  var list = [];
  movieList.map(function(v,i){
    if(v.title.toLowerCase().includes(title)) list.push(v);
  });
  return list;
}
console.log(findByTitle("matrix"));
