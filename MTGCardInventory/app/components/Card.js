/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class MTGCardInventory extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.card}>
        <View style={styles.cardDetails}>
          <Text style={styles.cardTitle}>{this.props.val.card}</Text>
          <Text style={styles.cardCount}>{this.props.val.count}</Text>
        </View>

      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue', alignItems: 'center',
    justifyContent: 'center'}}>
          <TouchableOpacity onPress={this.props.deleteMethod}>
          <Text style={styles.cardItemText}>D</Text>
        </TouchableOpacity>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue', alignItems: 'center',
    justifyContent: 'center'}}>
          <TouchableOpacity onPress={this.props.removeCardMethod}>
          <Text style={styles.cardItemText}>-</Text>
        </TouchableOpacity>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue', alignItems: 'center',
    justifyContent: 'center'}}>
          <TouchableOpacity onPress={this.props.addCardMethod}>
          <Text style={styles.cardItemText}>+</Text>
        </TouchableOpacity>
        </View>
      </View>




      </View>
    );
  }
}

const styles = StyleSheet.create({
    card: {
      position: 'relative',
      padding: 20,
      borderBottomWidth: 2,
      borderBottomColor: '#ededed',
      flex: 1,
      flexDirection: 'row',
    },
    cardDetails: {
      flex: 1,
      flexDirection: 'column'
    },
    cardTitle: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#29434e',
      fontSize: 20
    },
    cardCount: {
      paddingLeft: 20,
      borderLeftWidth: 10,
      borderLeftColor: '#29434e',
    },
    cardItemText: {
      color: 'white',
    }
});

AppRegistry.registerComponent('MTGCardInventory', () => MTGCardInventory);
