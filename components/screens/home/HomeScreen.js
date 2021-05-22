
import HomeView from './HomeView';
import React, { useEffect , useState} from 'react';
import { openDatabase } from 'react-native-sqlite-storage';


const HomeScreen = (props) => {
  var db = openDatabase({ name: 'database.db', createFromLocation: 1});

  var [loading, setLoading] = useState(true);
  var [peliculas, setPeliculas] = useState([]);
  var [series, setSeries] = useState([]);
  var iter = 0;
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM movies",
        [],
        function (tx, res) {
          console.log('peliculas:', res.rows.length);
          var pList = [];
          console.log(res.rows.length);
          for (let i = 0; i < res.rows.length; ++i){
            pList.push(res.rows.item(i))
          }
          setPeliculas(pList)
          if (iter > 0){
            setLoading(false)
          } else{
            iter= iter+1
          }
        },
      );
      txn.executeSql(
        "SELECT * FROM series",
        [],
        function (tx, res) {
          console.log('series:', res.rows.item(1).poster);
          var sList = [];
          console.log(res.rows.length);
          for (let i = 0; i < res.rows.length; ++i){
            sList.push(res.rows.item(i))
          }
          setSeries(sList)
          if (iter > 0){
            setLoading(false)
          } else{
            iter= iter+1
          }
        },
      );
    });
  }, []);
  function navigatePeliculas(id) {
    props.navigation.navigate('Pelicula', id);
  }
  function navigateSeries(id) {
    props.navigation.navigate('Serie', id);
  }
  function navigateGenres() {
    props.navigation.navigate('Genres');
  }
  function navigateCountries() {
    props.navigation.navigate('Countries');
  }
  function navigateScore() {
    props.navigation.navigate('Score');
  }
  function navigateReleaseDate() {
    props.navigation.navigate('ReleaseDate');
  }
  return (
    <HomeView
      navigatePeliculas={navigatePeliculas}
      navigateSeries={navigateSeries}
      navigateGenres={navigateGenres}
      navigateCountries={navigateCountries}
      navigateScore={navigateScore}
      navigateReleaseDate={navigateReleaseDate}
      loading={loading}
      peliculas={peliculas}
      series={series}
    />
  );
};

export default HomeScreen;
