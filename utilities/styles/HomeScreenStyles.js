import { StyleSheet } from "react-native";
import { fontSizes, isIOS, windowHeight, windowWidth } from "../appConstant";
import { FontFamily } from "../fonts";
import { Colors } from "../colors";

export default HomeScreenStyle = StyleSheet.create({
    mainView: { flex: 1, backgroundColor: Colors.white, paddingHorizontal: windowWidth(20) },
    headerView: {flexDirection: 'row', marginTop: windowHeight(isIOS ? 50 : 30), alignItems: 'center'},
    headerLeftView: {marginLeft: windowWidth(15)},
    headerText: {fontFamily: FontFamily.SourceSansSemiBold, fontWeight: '600', fontSize: fontSizes.FONT20, color: Colors.header},
    headerLeftSubView: {flexDirection: 'row', alignItems: 'center'},
    headerTextTwo: {fontFamily: FontFamily.SourceSansMedium, fontWeight: '600', fontSize: fontSizes.FONT16, color: Colors.purple},
    notificationIconView: {position: 'absolute', right: 0},
    blockListView: {flexDirection: 'row', marginTop: windowHeight(10)},
    blockListItemView: (bgColor) => ({paddingVertical: windowHeight(20), width: '47%', alignItems: 'center', backgroundColor: bgColor, borderRadius: 8,
      marginVertical: windowHeight(7), marginRight: windowWidth(18)}),
    blockListItemText: {fontFamily: FontFamily.SourceSansSemiBold, fontWeight: '600', fontSize: fontSizes.FONT16, color: Colors.header, marginTop: windowHeight(10)},
    bottomBarView: {position: 'absolute', bottom: windowHeight(25), alignSelf: 'center', elevation: 2, borderRadius: 40, backgroundColor: Colors.white,
      shadowColor: Colors.gray, shadowOpacity: 0.2, shadowRadius: 4, shadowOffset: {width: .5, height: 1}, paddingHorizontal: windowHeight(20),
      paddingVertical: windowWidth(5), width: "100%"},
    bottomBarItemView: (index) => ({alignItems: 'center', marginVertical: windowHeight(5), marginRight: index === 4 ? 0 : windowWidth(8)}),
    bottomBarItemText: (index) => ({fontFamily: FontFamily.InterMedium, textAlign: 'center', fontWeight: '400', fontSize: fontSizes.FONT10,
      color: !index ? Colors.purple : Colors.grey, width: windowWidth(53)})
    });
    
    
    
    
    
    
    
    
    
    
    
    