import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import {connect, useDispatch} from "react-redux";

// configs
import {store} from '../states/store/store'
// redux actions
import {testDispatch} from '../states/actions/test_all_action'

function DispatchExampleComponent ({
  route,
  navigation,
}) {
	const dispatch = useDispatch();

  return (
    <View style={{backgroundColor: 'red', height: 20, marginTop: 20}}>
      <TouchableOpacity onPress={() => dispatch(testDispatch('new data'))}>
        <Text>Sdsds</Text>
      </TouchableOpacity>
    </View>
  )

}

export default connect(state => ({}))(DispatchExampleComponent);
