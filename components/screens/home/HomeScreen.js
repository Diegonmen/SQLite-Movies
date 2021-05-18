
import HomeView from './HomeView';
import React, { useEffect , useState} from 'react';
import {cantidadPeliculas} from './HomeScreenModel';
import { openDatabase } from 'react-native-sqlite-storage';


const HomeScreen = (props) => {
  var db = openDatabase({ name: 'database.db', createFromLocation: 1});

  var [loading, setLoading] = useState(true);
  var [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM movies",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          setCantidad(res.rows.length)
          setLoading(false)
        },
      );
    });
  }, []);
  function navigateB() {
    props.navigation.navigate('Movies');
  }
  return (
    <HomeView
      navigateB={navigateB}
      loading={loading}
      cantidad={cantidad}
    />
  );
};

export default HomeScreen;
