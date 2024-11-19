import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { SIZES } from '../../constants';
import { Nearbyjobs, Popularjobs, Welcome } from '../../components';

const DashboardScreen = () => {
    return (
        
        <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1, padding: SIZES.medium }}>
          <Welcome />
          <Popularjobs />
          <Nearbyjobs />
        </View>
      </ScrollView>
        </View>
    );
};

export default DashboardScreen;

const styles = StyleSheet.create({

    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
});