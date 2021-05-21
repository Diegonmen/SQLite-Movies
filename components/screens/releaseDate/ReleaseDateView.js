import {
  Text,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import React, { useEffect } from 'react';
import DatePicker from 'react-native-date-picker'
class ReleaseDateView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {
      handleTextChange,
      filtrarPorFecha,
      peliculas,
      date,
    } = this.props;

    return (
        <ScrollView>
          <View>
          <DatePicker
            date={date}
            mode='date'
            onDateChange={handleTextChange}
          />
        </View>
        <TouchableOpacity
          onPress={() => filtrarPorFecha()}
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



export default ReleaseDateView;
