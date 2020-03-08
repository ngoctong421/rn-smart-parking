import React from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import qrcodeticket from '../assets/QRcodeticket.png'
import mainbackground from '../assets/mainbackground.png'
import ticketinfo from '../assets/ticket.png'
import historticket from '../assets/tickin.png'
const TicketScreen = () => {
  return (
    <ImageBackground source={mainbackground} style={styles.backgroundstyle}>
      <View>
        <Text style={styles.titlesscreen}>TICKET</Text>
        <View style={styles.container}>
          <View>
            <View style={styles.qrheader}>
              <Text style={styles.qrtexttitle}>QR CODE TICKET</Text>
            </View>
            <View style={styles.codecontainer}>
              <Image source={qrcodeticket} style={styles.imagestyle}/>
              <Text style={styles.qrtext}>Click here to show your QR ticket.</Text>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.inforheader}>
              <Text style={styles.ticketInfotexttitle}>TICKET INFORMATION</Text>
            </View>
            <View style={styles.codecontainer}>
              <Image source={ticketinfo} style={styles.imagestyle}/>
              <View style={styles.sorttext}>
              <Text style={styles.ticketInfotext}>Ticket number:</Text>
              <Text style={styles.ticketInfotext}>Date:</Text>
              <Text style={styles.ticketInfotext}>Arrival time:</Text>
              <Text style={styles.ticketInfotext}>Vehicle plate:</Text>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.historyheader}>
              <Text style={styles.historytexttitle}>RECENT HISTORY</Text>
            </View>
            <View style={styles.codecontainer}>
              <Image source={historticket} style={styles.imagestyle}/>
              <View style={styles.sorttext}>
                <Text>Chỗ này có nên làm flatlist?</Text>
              </View>
            </View>
          </View>

        </View> 
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //alignItems: "center",
    justifyContent: "center",
    marginVertical : 15
  },
  backgroundstyle :{
    resizeMode :'cover',
    flex: 1
  },
  titlesscreen:{
    fontSize : 30,
    fontWeight : 'bold',
    color: '#fff',
    shadowRadius : 6,
    shadowColor : '#000',
    textAlign : 'center',
    paddingTop : 25,
    paddingBottom : 5
  },
  codecontainer:{
    marginLeft : 10,
    marginRight: 10,
    shadowOpacity : 0.5,
    shadowRadius: 10,
    shadowColor: '#000',
    shadowOffset :{ height: 3, width : 0 },
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderBottomLeftRadius : 20,
    borderBottomRightRadius : 20,
    borderTopLeftRadius: 0,
    borderTopRightRadius : 0,
    paddingBottom : 10
  },
  qrheader: {
    marginLeft : 10,
    marginRight: 10,
    borderBottomLeftRadius : 0,
    borderBottomRightRadius : 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius : 20,
    backgroundColor : '#FFF29C'
  },
  imagestyle:{
    marginLeft: 20,
    marginTop : 10,
    alignItems :'center'
  },
  qrtext:{
    color : '#F8A500',
    marginTop: 20,
    marginLeft : 10,
    paddingHorizontal : 20,
    fontWeight : 'bold',
    fontSize : 15
  },
  qrtexttitle:{
    color : '#F8A500',
    marginTop: 10,
    marginLeft : 10,
    paddingBottom : 5,
    paddingHorizontal : 20,
    fontWeight : 'bold',
    fontSize : 20
  },
  ticketInfotexttitle:{
    color : '#0090FE',
    marginTop: 10,
    marginLeft : 10,
    paddingBottom : 5,
    paddingHorizontal : 20,
    fontWeight : 'bold',
    fontSize : 20
  },
  ticketInfotext:{
    color : '#0090FE',
    marginTop: 5,
    marginLeft : 10,
    paddingHorizontal : 20,
    fontWeight : 'bold',
    fontSize : 15,
  },
  inforheader:{
    marginLeft : 10,
    marginRight: 10,
    borderBottomLeftRadius : 0,
    borderBottomRightRadius : 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius : 20,
    backgroundColor : '#2CD4FF'
  },
  sorttext:{
    flexDirection: 'column',
    textAlign : 'center'
  },
  historyheader:{
    marginLeft : 10,
    marginRight: 10,
    borderBottomLeftRadius : 0,
    borderBottomRightRadius : 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius : 20,
    backgroundColor : '#9CFFBA'
  },
  historytexttitle:{
    color : '#18B247',
    marginTop: 10,
    marginLeft : 10,
    paddingBottom : 5,
    paddingHorizontal : 20,
    fontWeight : 'bold',
    fontSize : 20
  },
});

export default TicketScreen;
