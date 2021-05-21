
import HomeView from './HomeView';
import React, { useEffect , useState} from 'react';
import { openDatabase } from 'react-native-sqlite-storage';


const HomeScreen = (props) => {
  var db = openDatabase({ name: 'database.db', createFromLocation: 1});

  var [loading, setLoading] = useState(true);
  var [peliculas, setPeliculas] = useState({});
  var [series, setSeries] = useState({});
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT * FROM movies",
        [],
        function (tx, res) {
          console.log('peliculas:', res.rows.length);
          setPeliculas(res.rows)
          setLoading(false)
        },
      );
      txn.executeSql(
        "SELECT * FROM series",
        [],
        function (tx, res) {
          console.log('series:', res.rows.length);
          setSeries(res.rows)
          setLoading(false)
        },
      );
    });
  }, []);
  function navigateMovies() {
    props.navigation.navigate('Movies');
  }
  function navigateSeries() {
    props.navigation.navigate('Series');
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
      navigateMovies={navigateMovies}
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
