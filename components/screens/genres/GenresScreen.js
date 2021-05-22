
import HomeView from './GenresView';
import React, { useEffect , useState} from 'react';
import { openDatabase } from 'react-native-sqlite-storage';


const HomeScreen = (props) => {
  var db = openDatabase({ name: 'database.db', createFromLocation: 1});

  var [loading, setLoading] = useState(true);
  var [items, setItems] = useState([]);
  var [genres, setGenres] = useState([]);

  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT movies.title, movies.original_title, movies.overview, movies.id, movies.poster, movies.score, movies.popularity, 1 as isPelicula, group_concat(genres.name, ',') as genres FROM movies LEFT JOIN movie_genres ON movies.id= movie_genres.movie_id left join genres ON genres.id= movie_genres.genre_id GROUP by movies.id UNION SELECT series.name, series.original_name, series.overview, series.id, series.poster, series.score, series.popularity, 0 as isPelicula, group_concat(genres.name, ',') as genres FROM series LEFT JOIN serie_genres ON series.id= serie_genres.serie_id left join genres ON genres.id= serie_genres.genre_id GROUP by series.id",
        [],
        function (tx, res) {
          console.log('items:', res.rows.length);
          var pList = [];
          var gList= [];
          for (let i = 0; i < res.rows.length; ++i){
            pList.push(res.rows.item(i))
            genres = res.rows.item(i).genres.split(',')
            for(let i = 0; i < genres.length; ++i){
              if(!gList.includes(genres[i])){
                gList.push(genres[i].trim())
              }
            }
          }
          setItems(pList)
          setGenres(gList)
          setLoading(false)
        },
      );
    });
  }, []);

  function navigateItems(item) {
    if (item.isPelicula === 1) {
      props.navigation.navigate('Pelicula', item.id);
    } else {
      props.navigation.navigate('Serie', item.id);
    }
  }

  return (
    <HomeView
      loading={loading}
      items={items}
      genres={genres}
      navigateItems={navigateItems}
    />
  );
};

export default HomeScreen;
