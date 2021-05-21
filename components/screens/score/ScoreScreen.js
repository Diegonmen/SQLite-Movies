import ScoreView from './ScoreView';
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'database.db', createFromLocation: 1});

const ScoreScreen = (props) => {
  const [score, setScore] = useState("es");
  const [peliculas, setPeliculas] = useState([]);
  function filtrarPorPuntuacion(){
    console.log(peliculas,score);
    db.transaction((txn)=> {
      txn.executeSql(
        "SELECT movies.title, movies.original_title, movies.overview, movies.id, movies.poster, movies.score, movies.popularity FROM movies where score >= ? UNION SELECT series.name, series.original_name, series.overview, series.id, series.poster, series.score, series.popularity FROM series where score >= ?",
        [score,score],
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
    setScore(value)
    console.log(score);
  }

  return (
    <ScoreView
      handleTextChange={handleTextChange}
      filtrarPorPuntuacion={filtrarPorPuntuacion}
      score={score}
      peliculas = {peliculas}
    />
  );
};

export default ScoreScreen;
