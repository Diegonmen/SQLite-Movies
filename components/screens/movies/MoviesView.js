import {
  Text,
  ScrollView,
  View,

} from 'react-native';
import React, { useEffect } from 'react';
class MoviesView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var {
    } = this.props;

    return (
      <ScrollView>
        <Text> efectivamente</Text>
        {/* <View> */}
        {/* <Mybutton
            title="Register"
            customClick={() => navigation.navigate('Register')}
          />
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
          />
        </View> */}
      </ScrollView>
    );
  }
}



export default MoviesView;
