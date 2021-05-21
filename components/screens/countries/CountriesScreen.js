import CountriesView from './CountriesView';
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'database.db', createFromLocation: 1});

const CountriesScreen = (props) => {
  const [pais, setPais] = useState("es");
  const [peliculas, setPeliculas] = useState([]);
  function filtrarPorPais(){
    console.log(peliculas,pais);
    db.transaction((txn)=> {
      txn.executeSql(
        "SELECT movies.title, movies.original_title, movies.overview, movies.id, movies.poster, movies.score, movies.popularity FROM movies where original_language = ? UNION SELECT series.name, series.original_name, series.overview, series.id, series.poster, series.score, series.popularity FROM series where original_language = ?",
        [pais,pais],
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
    setPais(value)
    console.log(pais);
  }

  return (
    <CountriesView
      handleTextChange={handleTextChange}
      filtrarPorPais={filtrarPorPais}
      pais={pais}
      peliculas = {peliculas}
    />
  );
};

export default CountriesScreen;
