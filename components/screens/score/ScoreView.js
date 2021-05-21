import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { useEffect } from 'react';
class ScoreView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {
      handleTextChange,
      filtrarPorPuntuacion,
      peliculas,
      score,
    } = this.props;

    return (
      <ScrollView>
        <View>
          <TextInput
            multiline={true}
            placeholder="País"
            value={score}
            onChangeText={(value) => handleTextChange(value, 'description')}
          />
        </View>
        <TouchableOpacity
          onPress={() => filtrarPorPuntuacion()}
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



export default ScoreView;
