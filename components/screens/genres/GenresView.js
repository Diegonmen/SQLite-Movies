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
      loading,
      items,
      genres,
      navigateItems
    } = this.props;
    if (loading) {
      return (
        <View style={style.loader}>
          <ActivityIndicator size="large" color="#9E9E9E" />
        </View>
      );
    }
    return (
      <ScrollView>
        <Text style={style.appText}>Peliculas y series: </Text>
          
          {genres.map((g) => {
            
          return (
            <View key={g}>
            <Text style={style.appText}>{g} </Text>

            <View style={[style.grandparent]}>
          
            
            {items.map((p) => {
              if(p.genres.split(',').includes(g)){
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
          }})
        }
        </View>
        </View>
        )
        })
        }

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
  },
  appText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    margin:50
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeView;
