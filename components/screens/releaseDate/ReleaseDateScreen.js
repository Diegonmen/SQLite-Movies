import ReleaseDateView from './ReleaseDateView';
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'database.db', createFromLocation: 1});

const ReleaseDateScreen = (props) => {
  const [date, setDate] = useState(new Date());
  const [peliculas, setPeliculas] = useState([]);
  function filtrarPorFecha(){
    console.log(peliculas,date);
    db.transaction((txn)=> {
      txn.executeSql(
        "SELECT movies.title, movies.original_title, movies.overview, movies.id, movies.poster, movies.score, movies.popularity FROM movies where release_date >= ? UNION SELECT series.name, series.original_name, series.overview, series.id, series.poster, series.score, series.popularity FROM series where first_air_date >= ?",
        [date.toISOString().slice(0, 10),date.toISOString().slice(0, 10)],
        (tx, res) =>{
          var pList = [];
          console.log(res.rows.length);
          for (let i = 0; i < res.rows.length; ++i){
            pList.push(res.rows.item(i))
            console.log(res.rows.item(i));
          }
          setPeliculas(pList);
        },
      );
    });
  }

  function handleTextChange(value){
    setDate(value)
  }

  return (
    <ReleaseDateView
      handleTextChange={handleTextChange}
      filtrarPorFecha={filtrarPorFecha}
      date={date}
      peliculas = {peliculas}
    />
  );
};

export default ReleaseDateScreen;
