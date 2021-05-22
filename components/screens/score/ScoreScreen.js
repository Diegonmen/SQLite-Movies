import ScoreView from './ScoreView';
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'database.db', createFromLocation: 1});

const ScoreScreen = (props) => {
  const [score, setScore] = useState('');
  const [items, setitems] = useState([]);
  function filtrarPorPuntuacion(score){
    console.log(items,score);
    db.transaction((txn)=> {
      txn.executeSql(
        "SELECT movies.title, movies.original_title, movies.overview, movies.id, movies.poster, movies.score, movies.popularity, 1 as isPelicula FROM movies where score >= ? UNION SELECT series.name, series.original_name, series.overview, series.id, series.poster, series.score, series.popularity, 0 as isPelicula FROM series where score >= ?",
        [score,score],
        (tx, res) =>{
          var pList = [];
          console.log(res.rows.length);
          for (let i = 0; i < res.rows.length; ++i){
            pList.push(res.rows.item(i))
            console.log(res.rows.item(i));
          }
          setitems(pList);
        },
      );
    });
  }

  function handleTextChange(value){
    setScore(value.replace('\d+((.)\d+)?', ''))
    console.log(score);
    if (value){
      filtrarPorPuntuacion(value.replace('\d+((.)\d+)?', ''))
    }
  }
  function navigateItems(item) {
    if (item.isPelicula === 1) {
      props.navigation.navigate('Pelicula', item.id);
    } else {
      props.navigation.navigate('Serie', item.id);
    }
  }
  return (
    <ScoreView
      handleTextChange={handleTextChange}
      filtrarPorPuntuacion={filtrarPorPuntuacion}
      score={score}
      navigateItems={navigateItems}
      items = {items}
    />
  );
};

export default ScoreScreen;
