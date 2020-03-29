import React, { Fragment, useState, useEffect } from 'react';
import
  {
    View,
    StatusBar,
    FlatList,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Incidents() {
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  // incident prop
  function navigateToDetail(incident) {
    // Navegar para Detail
    navigation.navigate('Detail', { incident });
  };

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (total > 0 && incidents.length === total) {
      return;
    }

    setLoading(true);

    const response = await api.get('/incidents', {
      params: { page }
    });

    // anexar vetores
    setIncidents([...incidents, ...response.data]);
    // Total de casos
    setTotal(response.headers['x-total-count']);
    setPage(page + 1)
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

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
            Total de <Text style={styles.headerTextBold}>{ total } casos.</Text>
          </Text>
        </View>

        <Text style={styles.title}>Bem vindo!</Text>
        <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia.</Text>

        <FlatList
          data={ incidents }
          style={styles.incidentList}
          keyExtractor=
            {incident => String(incident.id)}
          showsVerticalScrollIndicator={false}
          onEndReached={ loadIncidents }
          onEndReachedThreshold={0.3}
          renderItem={({ item: incident }) => (
            /* Incident */
            <View style={styles.incident}>
              <Text style={styles.incidentProperty}>ONG:</Text>
              <Text style={styles.incidentValue}>{ incident.name }</Text>

              <Text style={styles.incidentProperty}>CASO:</Text>
              <Text style={styles.incidentValue}>{ incident.title }</Text>

              <Text style={styles.incidentProperty}>VALOR:</Text>
              <Text style={styles.incidentValue}>
                R$ { incident.value }
                {/*
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(incident.value)}
                */}
              </Text>

              <TouchableOpacity
                onPress={() => navigateToDetail(incident)}
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
