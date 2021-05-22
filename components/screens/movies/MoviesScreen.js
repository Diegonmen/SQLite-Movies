
import MoviesView from './MoviesView';
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'database.db', createFromLocation: 1});

const MoviesScreen = (props) => {
  var movie_id = props.route.params
  var [loading, setLoading] = useState(true);
  var [pelicula, setPelicula] = useState({});
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM movies where id = ?",
        [movie_id],
        function (tx, res) {
          setPelicula(res.rows.item(0))
          setLoading(false)
        },
      );
    });
  }, []);

  return (
    <MoviesView
      pelicula={pelicula}
      loading={loading}
    />
  );
};

export default MoviesScreen;
