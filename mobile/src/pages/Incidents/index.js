import React, { Fragment } from 'react';
import
  {
    View,
    StatusBar,
    FlatList,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const navigation = useNavigation();

  function navigateToDetail() {
    // Navegar para Detail
    navigation.navigate('Detail');
  }

  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F2F2F2"
      />

      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold} />0 casos.
          </Text>
        </View>

        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

        <FlatList
          data={[ 1, 2, 3, 4 ]}
          style={styles.incidentList}
          keyExtractor=
            { incident => String( incident )}
          showsVerticalScrollIndicator={false}
          renderItem={() => (
            /* Incident */
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>APAD</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={styles.incidentValue}>R$ 120,00</Text>

              <TouchableOpacity
                onPress={ navigateToDetail }
                style={styles.detailsButton}
              >
                <Text style={styles.detailsButtonText}>
                  VER MAIS DETALHES
                </Text>

                <Feather
                  name="arrow-right"
                  size={17}
                  color="#E02041"
                  style={styles.arrowRight}
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Fragment>
  );
};
