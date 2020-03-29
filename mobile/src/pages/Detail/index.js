import React, { Fragment } from 'react';
import
  { View,
    StatusBar,
    Text,
    Image,
    TouchableOpacity,
    Linking
  } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Feather, FontAwesome } from '@expo/vector-icons';

import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const message = `Olá ${incident.ong}, estou entrando em ` +
  `contato pois gostaria de ajudar no caso "${incident.title}" com o ` +
  `valor de R$ ${incident.value}.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [`${incident.email}`],
      body: message
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
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
          <TouchableOpacity onPress={ navigateBack }>
            <Feather
              name="arrow-left"
              size={28}
              color="#E02041"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.incident}>
          <Text style={styles.incidentProperty, { marginTop: 0 }}>ONG:</Text>
          <Text style={styles.incidentValue}>{ incident.name } de { incident.city }/{ incident.uf }</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>{ incident.title }</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>
            R$ { incident.value }
          </Text>
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
              onPress= { sendWhatsapp }
              style={styles.action}
            >
              <Text style={styles.actionText}>
                Whatsapp <FontAwesome name="whatsapp" size={19} />
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress= { sendMail }
              style={styles.action}
            >
              <Text style={styles.actionText}>
                E-mail <FontAwesome name="envelope-square" size={19} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Fragment>
  );
};
