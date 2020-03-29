import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#F2F2F2',
    paddingTop: Constants.statusBarHeight + 1
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 24,
    marginTop: 48
  },

  incidentProperty: {
    fontSize: 14,
    color: '#41414D',
    fontWeight: 'bold',
    marginTop: 24
  },

  incidentValue: {
    marginTop: 4,
    fontSize: 15,
    color:'#737380'
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#13131A',
    lineHeight: 30
  },

  heroContact: {
    fontSize: 15,
    color: '#737380',
    marginTop: 16
  },

  actionsContact: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  action: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold'
  }

});