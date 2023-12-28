// ItemComponent.js
import React ,{useState}from "react";
import { Icon } from "react-native-elements";// import the relevant icon component
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  View,
  ScrollView,
  Modal,
} from "react-native";
const ItemComponent = ({ item, onPress, backgroundColor, textColor }) => {
  const [modalVisible, setModalVisible] = useState(false);// Sample data for rates and charges
  const baseFare = 10;
  const ratePerKm = 0.5;
  const ratePerMinute = 0.2;
  const waitingCharges = 5;
  const calculateTotalPrice = (distanceInKm, truckType) => {
    let baseCostPerKm, baseCostPerKm2;
    switch (truckType) {
      case 'dalaauto':
        baseCostPerKm = 18;
        baseCostPerKm2 = 19;
        break;
      case 'tataace':
        baseCostPerKm = 22;
        baseCostPerKm2 = 23;
        break;
      case 'small_pickup':
        baseCostPerKm = 28;
        baseCostPerKm2 = 29;
        break;
      case 'large_pickup':
        baseCostPerKm = 30;
        baseCostPerKm2 = 31;
        break;
      case 'eicher':
        baseCostPerKm = 41;
        baseCostPerKm2 = 42;
        break;
      default:
        throw new Error('Invalid truck type');
    }
    const totalCost = distanceInKm <= 30 ? baseCostPerKm * distanceInKm : baseCostPerKm2 * distanceInKm;
    // Calculate the commission (15%)
    const commissionAmount = (totalCost * 15) / 100;
    const costAfterCommission = totalCost + commissionAmount;
    // Calculate the GST (5%)
    const gstAmount = (costAfterCommission * 5) / 100;
    const costAfterGst = costAfterCommission + gstAmount;
    // Calculate the TDS (2%)
    const tdsAmount = (costAfterGst * 2) / 100;
    const finalPrice = costAfterGst + tdsAmount;
    console.log(finalPrice)
    return finalPrice;
  }
  return (
    <View>
      <TouchableOpacity 
     onPress={() => setModalVisible(true)}
      style={[styles.item, { backgroundColor }]}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: textColor }]}>{item.truckType}</Text>
          <Text style={styles.details}>{item.imgDetails}</Text>
          <Text style={styles.details}>{item.capacity}</Text>
          <Text style={styles.details}>{item.weitage}</Text>
        </View>
        {console.log(10,"dalaauto")}
         <Text style={[styles.price, { color: textColor }]}>
         Rs:{calculateTotalPrice(10,"dalaauto")}
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      // animationType="fade"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity
              style={styles.closeButtonModal}
              onPress={() => setModalVisible(false)}
            >
              <Icon
                type="material-community"
                name="window-close"
                // color={colors.grey1}
                fontSize={26} />
            </TouchableOpacity>

            <Image source={item.image} />
            <Text style={styles.modalText}>{item.weitage}</Text>
            <Text style={{ textAlign: "center", fontSize: 13, fontWeight: '600', color: "gray", padding: 5 }}>
              {item.itemDetails}
            </Text>
            <View style={styles.dashedLine}></View>
            <View>
              <Text style={{ textAlign: 'center', fontSize: 18 }}>Total Amount</Text>

              <Text style={[styles.totalAmount]}>
              Rs:{calculateTotalPrice(10,"dalaauto")}
              </Text>
              <Text>Total Estimated fare price including taxes</Text>

            </View>
            <View style={[styles.farelist]}>
              <View>
                <Text style={styles.detailLabel}>Base Fare:</Text>
                <Text style={styles.detailLabel}>Rate per Km:</Text>
                <Text style={styles.detailLabel}>Rate per Minute:</Text>
                <Text style={styles.detailLabel}>Waiting Charges:</Text>
              </View>

              <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
                <Text style={styles.detailValue}>${baseFare.toFixed(2)}</Text>
                <Text style={styles.detailValue}>${ratePerKm.toFixed(2)}</Text>
                <Text style={styles.detailValue}>${ratePerMinute.toFixed(2)}</Text>
                <Text style={styles.detailValue}>${waitingCharges.toFixed(2)}</Text>

              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: 30,
                margin: 30
              }}
            >
              <Image source={require("../../../assets/groupimg.png")} />
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.closeButton}>Got It</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    borderWidth:1,
    borderColor:'#EE272E'
  },
  image: {
    width: 80,
    height: 50,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "gray",
  },
    modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding:10,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    height:'80%'
  },
  modalText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#EE272E",
    textAlign: "center",
  },
  closeButton: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
    backgroundColor: "#EE272E",
    width: 130,
    height: 50,
    borderRadius: 40,
    padding: 9,
    marginLeft:10
  },
    closeButtonModal: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },

  dashedLine: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    borderStyle: "dashed",
    marginVertical: 10,
    width: "100%", // Adjust the width as needed
  },
  farelist: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin:30,
  },
  detailLabel: {
    color:'gray',
    fontSize: 16,
    marginRight:60,
    // marginBottom: 5, // Add spacing between label and value
  },
  detailValue: {
    color:'gray',
    fontSize: 16,
    marginLeft:40,
    // marginBottom: 5, 
  },
  totalAmount: {
    color: "#EE272E",
    fontWeight: "bold",
    textAlign:'center',
    margin:10,
    fontSize:23
  },
});

export default ItemComponent;
