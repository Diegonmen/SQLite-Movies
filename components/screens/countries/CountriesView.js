import {
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Picker
} from 'react-native';
import React, { useEffect } from 'react';
import {Card} from 'react-native-elements';
class CountriesView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {
      handleTextChange,
      items,
      navigateItems
    } = this.props;

    return (
      <ScrollView >
        <View style={{flex: 1,
          paddingTop: 10,
          alignItems: "center"}}>
          <Card >
            <Picker
            style={{ height: 50, width: 150, paddingTop: 40,
              alignItems: "center",borderRadius: 1, borderColor: '#7a42f4'}}
            onValueChange={(itemValue) => handleTextChange(itemValue)}
          >
            <Picker.Item label="Español" value="es" />
            <Picker.Item label="Inglés" value="en" />
            <Picker.Item label="Japonés" value="ja" />
            <Picker.Item label="Francés" value="fr" />
            <Picker.Item label="Sueco" value="sv" />
          </Picker>
          </Card>
        </View>
        <Text style={styles2.appText}>Peliculas y series: </Text>
          <View style={[style.grandparent]}>

          {items.map((p) => {
            return (
              <View key={p.id} style={[style.parent]}>

                  <TouchableOpacity onPress={() => {navigateItems(p)}}>
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

      </ScrollView>
    );
  }
}

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


export default CountriesView;
