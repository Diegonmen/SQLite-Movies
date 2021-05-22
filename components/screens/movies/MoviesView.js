import {
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
  ScrollView,
  Button,
  StyleSheet,
  SafeAreaView,
  Alert,
  CheckBox,
  checkboxContainer,
  Image,

} from 'react-native';
import React, { useEffect } from 'react';
import {Card} from 'react-native-elements';
class MoviesView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.pelicula);
    var {
      pelicula,
      loading
    } = this.props;
    if (loading) {
      return (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500'+pelicula.poster,
          }}
        />

        <View style={{backgroundColor: '#FFFFFF'}}>
          <Card>
            <Card.Title style={styles.title}>{pelicula.title} - {pelicula.release_date.substr(0, 4)}</Card.Title>
            <Card.Divider style={{height: 2}}/>
            <Text style={styles.attribute}><Text style={{fontWeight: 'bold'}}>Idioma original:</Text> {pelicula.original_language.toUpperCase()}</Text>
            <Text style={styles.attribute}><Text style={{fontWeight: 'bold'}}>Título original:</Text> {pelicula.original_title}</Text>
            <Text style={styles.attribute}><Text style={{fontWeight: 'bold'}}>Fecha de estreno:</Text> {pelicula.release_date}</Text>
            <Text style={styles.attribute}><Text style={{fontWeight: 'bold'}}>Puntuación:</Text> {pelicula.score}</Text>
            <Text style={styles.attribute}><Text style={{fontWeight: 'bold'}}>Ratio popularidad:</Text> {pelicula.popularity}</Text>
            <Text style={styles.description}>{pelicula.overview}</Text>
          </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
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
  image: {
    width: 420,
    height: 550,
    resizeMode: 'cover',
    borderWidth: 0.5,
    borderColor: '#9B9B9B',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    padding: 5,
    marginTop: 10,
    textTransform: 'uppercase',
  },
  attribute: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
  price: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  description: {
    color: 'black',
    fontSize: 14,
    textAlign: 'justify',
    padding: 10
  },
  btn: {
    marginBottom: 7,
    padding: 20,
  },
});


export default MoviesView;
