import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
import {Card, ListItem} from 'react-native-elements';

class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {
      navigateMovies,
      navigateGenres,
      navigateCountries,
      navigateScore,
      navigateReleaseDate,
      navigatePeliculas,
      navigateSeries,
      loading,
      peliculas,
      series
    } = this.props;
    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView>
        <View>

          <TouchableOpacity
            onPress={navigateCountries}
            style={styles2.button}
            >
            <Text style={styles2.appButtonText}>
              Filtrado por país de origen
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={navigateGenres} 
            style={styles2.button}>
            <Text style={styles2.appButtonText}
            
            >
              Filtrado por géneros
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={navigateScore}
            style={styles2.button}
            >
            <Text style={styles2.appButtonText}>
              Filtrado por puntuación
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={navigateReleaseDate}
            style={styles2.button}
            >
            <Text style={styles2.appButtonText}>
              Filtrado por fecha de estreno
            </Text>
          </TouchableOpacity>
        </View>
        

          <Text style={styles2.appText}>Peliculas: </Text>
          <View style={[style.grandparent]}>

          {peliculas.map((p) => {
            return (
              <View key={p.id} style={[style.parent]}>

                  <TouchableOpacity onPress={() => {navigatePeliculas(p.id)}}>
                    <Card 
                      bottomDivider
                      style={style.child}
                    >
                      <Card.Title style={{height:52,textAlign: 'center',justifyContent: 'center'}}>{p.title}</Card.Title>
                      <Card.Divider />
                      <Card.Image style={{aspectRatio: 1}}
                        source={{
                          uri: 'https://image.tmdb.org/t/p/w500'+p.poster,
                        }}></Card.Image>
                      <Text style={{height:60, textAlign: 'center'}}>
                        {p.overview.substr(0, 60)}...
                      </Text>
                    </Card>
                  </TouchableOpacity>
              </View>
            );
          })}
          </View>
          <Text style={styles2.appText}>Series: </Text>
          <View style={[style.grandparent]}>

          {series.map((s) => {
            return (
              <View key={s.id} style={[style.parent]}>
                  <TouchableOpacity onPress={() => {navigateSeries(s.id)}}>
                    <Card 
                      bottomDivider
                      style={style.child}
                    >
                      <Card.Title style={{height:52,textAlign: 'center',justifyContent: 'center'}}>{s.name}</Card.Title>
                      <Card.Divider />
                      <Card.Image style={{aspectRatio: 1}}
                        source={{
                          uri: 'https://image.tmdb.org/t/p/w500'+s.poster,
                        }}></Card.Image>
                      <Text style={{height:60, textAlign: 'center'}}>
                        {s.overview.substr(0, 60)}...
                      </Text>
                    </Card>
                  </TouchableOpacity>
              </View>
            );
          })}
          </View>
      </ScrollView>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  btn: {
    marginBottom: 7,
  },
});
var style = StyleSheet.create({
  grandparent: {
    flex: 1,
    margin:-20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
},
  parent: {
    width: '50%',

  },
  child: {
    width: '100%',
    height: 400,
    position:'absolute',
  },
  text: {
    width: '100%', 
    alignSelf: 'center',
}
})
const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 3,
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
    marginTop: 3,
    borderColor: '#009688',
    borderWidth: 3,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  appText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin:50
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 700,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button: {
    margin: 12,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

export default HomeView;
