import CountriesView from './CountriesView';
import React, { useEffect, useState } from 'react';
import { openDatabase } from 'react-native-sqlite-storage';
var db = openDatabase({ name: 'database.db', createFromLocation: 1});

const CountriesScreen = (props) => {
  const [pais, setPais] = useState("es");
  const [items, setItems] = useState([]);
  useEffect(() => {
    filtrarPorPais('es')
  }, []);

  function filtrarPorPais(pais){
    console.log(items,pais);
    db.transaction((txn)=> {
      txn.executeSql(
        "SELECT movies.title, movies.original_title, movies.overview, movies.id, movies.poster, movies.score, movies.popularity, 1 as isPelicula FROM movies where original_language = ? UNION SELECT series.name, series.original_name, series.overview, series.id, series.poster, series.score, series.popularity, 0 as isPelicula  FROM series where original_language = ?",
        [pais,pais],
        (tx, res) =>{
          var pList = [];
          console.log(res.rows.length);
          for (let i = 0; i < res.rows.length; ++i){
            pList.push(res.rows.item(i))
            console.log(res.rows.item(i));
          }
          setItems(pList);
        },
      );
    });
  }
  function navigateItems(item) {
    if (item.isPelicula === 1) {
      props.navigation.navigate('Pelicula', item.id);
    } else {
      props.navigation.navigate('Serie', item.id);
    }
  }
  function handleTextChange(value){
    setPais(value)
    filtrarPorPais(value);
  }

  return (
    <CountriesView
      navigateItems={navigateItems}
      handleTextChange={handleTextChange}
      pais={pais}
      items = {items}
    />
  );
};

export default CountriesScreen;
