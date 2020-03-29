import React, { Fragment } from 'react';
import
  { View,
    StatusBar,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';
import { Feather } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
  return (
    <Fragment>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#F2F2F2"
      />

      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={logoImg} />
          <TouchableOpacity onPress={() => {}}>
            <Feather
              name="arrow-left"
              size={28}
              color="#E02041"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <Text style={[styles.incidentProperty, {marginTop: 0}]}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

          <Text style={styles.incidentProperty}>Valor:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>
        </View>

        {/* IncidentContactBox */}
        <View style={[styles.incident, {marginTop: 0}]}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>
            Seja o herói desse caso.
          </Text>

          <Text style={styles.heroContact}>
            Entre em contato:
          </Text>

          <View style={styles.actionsContact}>
            <TouchableOpacity
              onPress= {() => {}}
              style={styles.action}
            >
              <Text style={styles.actionText}>
                Whatsapp
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= {() => {}}
              style={styles.action}
            >
              <Text style={styles.actionText}>
                E-mail
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Fragment>
  );
};
