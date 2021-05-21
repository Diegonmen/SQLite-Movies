import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { useEffect } from 'react';
class CountriesView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {
      handleTextChange,
      filtrarPorPais,
      peliculas,
      pais,
    } = this.props;

    return (
      <ScrollView>
        <View>
          <TextInput
            multiline={true}
            placeholder="País"
            value={pais}
            onChangeText={(value) => handleTextChange(value, 'description')}
          />
        </View>
        <TouchableOpacity
          onPress={() => filtrarPorPais()}
          >
          <Text>Filtrar</Text>
        </TouchableOpacity>
        {peliculas.map((p) => {
            return (
              <Text key={p.id}
              >{p.original_title}</Text>
            );
          })}
      </ScrollView>
    );
  }
}



export default CountriesView;
