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
            onPress={navigateMovies}
            style={styles2.button}
            >
            <Text style={styles2.appButtonText}>
              Peliculas {peliculas.length}
              Series {series.length}
            </Text>
          </TouchableOpacity>

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
          {peliculas.map((p) => {
            return (
                <ListItem style={[style.parent]}
                  key={p.id}
                  bottomDivider
                  onPress={() => {
                    navigatePeliculas(p.id);
                  }}>
                <Card style={[style.child]}>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Divider />
                    <Card.Image
                      source={{
                        uri: 'https://image.tmdb.org/t/p/w500'+p.poster,
                      }}></Card.Image>
                    <Text style={[style.text]}>
                      {}...
                    </Text>
                    <Text>
                      {}
                    </Text>
                </Card>
              </ListItem>
            );
          })}
          <Text style={styles2.appText}>Series: </Text>
          {series.map((s) => {
            return (
                <ListItem style={[style.parent]}
                  key={s.id}
                  bottomDivider
                  onPress={() => {
                    navigatePeliculas(s.id);
                  }}>
                <Card style={[style.child]}>
                    <Card.Title style={[style.text]} >{s.name}</Card.Title>
                    <Card.Divider />
                    <Card.Image
                      source={{
                        uri: 'https://image.tmdb.org/t/p/w500'+s.poster,
                      }}></Card.Image>
                    <Text style={[style.text]}>
                      {}...
                    </Text>
                    <Text style={[style.text]}>
                      {}
                    </Text>
                </Card>
              </ListItem>
            );
          })}
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
  parent: {
      width: '100%', 
      flexDirection: 'row', 
      flexWrap: 'wrap',
      flex:1
  },
  child: {
      width: '49%',  
      alignSelf: 'center',
      aspectRatio: 1
  },
  text: {
    width: '1%', 
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
