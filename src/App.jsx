
import { Document, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import './App.css'

const styles = StyleSheet.create({
  page: {
    justifyContent: 'flex-start',
    padding: 30,
    position: 'relative',
  },
  Header: {
    textAlign: 'center',
  },
  HeaderTextOne: {
    fontSize: 14,
  },
  HeaderTextTwo: {
    fontSize: 13,
    marginTop: 5
  },
  HeaderTextThree: {
    fontSize: 10,
    marginTop: 5
  },
  Table: {
    display: 'table',
    marginTop: 20,
    width: 'auto',

  },
  TableRowOne: {
    flexDirection: 'row',
  },
  TableColOne: {
    width: '25%',
    borderStyle: 'solid',
    borderColor:'grey',
    height: 'auto',
    justifyContent:'center',
    textAlign:'center',
    borderWidth: 1,
    borderRightWidth: 0,
    padding: 5,
    backgroundColor: '#EEEEEE',
    borderTopWidth: 1

  },
  TableColTwo: {
    borderStyle: 'solid',
    justifyContent:'center',
    borderWidth: 1,
    borderColor:'grey',
    height: 'auto',
    padding: 5,
    backgroundColor: '#EEEEEE',
    width: '25%',
    borderTopWidth: 1
  },
  TableColThree: {
    borderStyle: 'solid',
    justifyContent:'center',
    textAlign:'center',
    borderWidth: 1,
    borderColor:'grey',
    height: 'auto',
    borderRightWidth: 0,
    padding: 5,
    width: '25%',
    borderTopWidth: 1
  },
  TableColFour: {
    borderStyle: 'solid',
    height: 'auto',
    justifyContent:'center',
    textAlign:'center',
    borderWidth: 1,
    borderColor:'grey',
    borderTopWidth: 1,
    padding: 5,
    width: '25%',
  },
  TableText: {
    fontSize: 8,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    borderTop: ' 1px solid black',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    marginLeft: 30,
  },
  footerText: {
    fontSize: 8,
    marginTop: 5,
    marginLeft: 0
  },
  pageNumber: {
    fontSize: 8,
    marginTop: 5,
  },
  printDateTime: {
    fontSize: 8,
    marginTop: 5,
  },
})

const MyApp = () => {
  return (
    <PDFViewer width={1200} height={760}>
      <MyDocument></MyDocument>
    </PDFViewer>
  )
}

const MyDocument = () => {
  return (
    <Document title='Employee Information'>

      <Page size='A4' orientation='landscape' style={styles.page}>
        {/* Header */}
        <View style={styles.Header}>
          <Text style={styles.HeaderTextOne}>WALTON KHAMAR BARI</Text>
          <Text style={styles.HeaderTextTwo}>Branch : Atahar Ali Talukder Vaban</Text>
          <Text style={styles.HeaderTextThree}>Employee Information</Text>
        </View>
        {/* Table Start */}
        <View style={styles.Table}>
          <View style={styles.TableRowOne} >
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>ID</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Photo</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Name</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Designation</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Last Edu</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Department</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Responsible</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Join Date</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Present Address</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>District</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Mobile</Text>
            </View>
            <View style={styles.TableColOne}>
              <Text style={styles.TableText}>Blood Group</Text>
            </View>
            <View style={styles.TableColTwo}>
              <Text style={styles.TableText}>Employee Category</Text>
            </View>
          </View>

          {/* Data */}
          {Array.from({ length: 30 }).map((_, i) => (
            <View key={i} style={styles.TableRowOne} wrap={false} pageBrake="avoid">

              <View style={styles.TableColThree}>
                <Text style={styles.TableText}>AATD-5001</Text>
              </View>

              <View style={styles.TableColThree}>
                <Text style={styles.TableText}>jbdfjvbdvbdfbvsduvbfdsjdfhjgbvdhfbvdfvbdfivbdfivbisdhfgvddfsge</Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}>MD Selim Miah</Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}>Meshon (Raj)</Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}> </Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}>Construction</Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}></Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}>27/05/2024</Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}>Dhaka</Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}> </Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}>01234543434</Text>
              </View>
              <View style={styles.TableColThree}>
                <Text style={styles.TableText}> </Text>
              </View>
              <View style={styles.TableColFour}>
                <Text style={styles.TableText}> </Text>
              </View>
            </View>
          ))}
        </View>

        <Footer></Footer>
      </Page>

    </Document>
  )
}
const Footer = () => (
  <View style={styles.footer} fixed >
    <Text style={styles.footerText}>Design and developed by: Walton Group</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => ` ${pageNumber} / ${totalPages}`} />
    <Text style={styles.printDateTime}>Print Date and Time: Monday, 8 July 2024 11: 57: 44 AM</Text>
  </View>
)

export default MyApp;
