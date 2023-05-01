import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import logoImage from '../../../assets/LogoRQ.png'
import {} from '../../components'
import { CustomText, Logo } from '../../components/atoms/Text/styles';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo/>
      <CustomText>Segurança Laboratorial</CustomText>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161616',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
