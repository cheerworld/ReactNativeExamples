import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'
import styled from 'styled-components/native'

const CenterView = styled.View`
  flex: 1;
  align-items: center;
  background: #333;
`
const WelcomeText = styled.Text`
  color: white;
  font-size: 20px;
`

const WelcomeBtn = styled.TouchableOpacity`
  width: 100px;
  height: 50px;
  background: red;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

class FlexboxExamples extends Component {
  render() {
    return (
      <CenterView>
        <WelcomeText style={{marginTop: 100}}>
          Hello!
        </WelcomeText>
        <WelcomeBtn onPress={()=>alert("hello")}>
          <WelcomeText>Push me!</WelcomeText>
        </WelcomeBtn>
      </CenterView>
    )
  }
}


export default FlexboxExamples;
