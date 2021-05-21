
import HomeView from './GenresView';
import React, { useEffect , useState} from 'react';
import { openDatabase } from 'react-native-sqlite-storage';


const HomeScreen = (props) => {
  var db = openDatabase({ name: 'database.db', createFromLocation: 1});

  var [loading, setLoading] = useState(true);
  var [items, setItems] = useState({});
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT movies.title, movies.original_title, movies.overview, movies.id, movies.poster, movies.score, movies.popularity, group_concat(genres.name, ' , ') as genres FROM movies LEFT JOIN movie_genres ON movies.id= movie_genres.movie_id left join genres ON genres.id= movie_genres.genre_id GROUP by movies.id UNION SELECT series.name, series.original_name, series.overview, series.id, series.poster, series.score, series.popularity, group_concat(genres.name, ' , ') as genres FROM series LEFT JOIN serie_genres ON series.id= serie_genres.serie_id left join genres ON genres.id= serie_genres.genre_id GROUP by series.id",
        [],
        function (tx, res) {
          console.log('items:', res.rows.length);
          setItems(res.rows)
          setLoading(false)
        },
      );
    });
  }, []);

  return (
    <HomeView
      loading={loading}
      items={items}
    />
  );
};

export default HomeScreen;
