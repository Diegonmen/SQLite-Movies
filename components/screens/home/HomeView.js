import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect } from 'react';
class HomeView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {
      navigateB,
      loading,
      cantidad
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
            onPress={navigateB}>
            <Text>
              Peliculas {cantidad}
            </Text>
          </TouchableOpacity>
{/* 
          <Mybutton
            title="Update"
            customClick={() => navigation.navigate('Update')}
          />
          <Mybutton
            title="View"
            customClick={() => navigation.navigate('View')}
          />
          <Mybutton
            title="View All"
            customClick={() => navigation.navigate('ViewAll')}
          />
          <Mybutton
            title="Delete"
            customClick={() => navigation.navigate('Delete')}
          /> */}
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
})

export default HomeView;
