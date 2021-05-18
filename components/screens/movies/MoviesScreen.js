
import MoviesView from './MoviesView';
import React, { useEffect } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'database.db', createFromLocation: 1});

const MoviesScreen = (props) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM movies",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
        },
      );
    });
  }, []);
  function navigateB() {
    props.navigation.navigate('Movies');
  }
  return (
    <MoviesView
    />
  );
};

export default MoviesScreen;
