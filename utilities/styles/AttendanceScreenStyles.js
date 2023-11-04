import { StyleSheet } from "react-native";
import { fontSizes, isIOS, windowHeight, windowWidth } from "../appConstant";
import { FontFamily } from "../fonts";
import { Colors } from "../colors";

export default AttendanceScreenStyle = StyleSheet.create({
    attendanceListItemTouch: {borderColor: "#C4C4C480", borderWidth: 1, borderRadius: 30, height: windowHeight(isIOS ? 23 : 24), alignItems: 'center',
        width: windowWidth(isIOS ? 28 : 27), marginHorizontal: windowWidth(10), justifyContent: 'center'},
    attendanceListText: {fontFamily: FontFamily.MontserratSemiBold, fontWeight: '600', color: Colors.gray, fontSize: fontSizes.FONT13},
    studentListItemView: {flexDirection: 'row', alignItems: 'center', marginVertical: windowHeight(10)},
    studentListItemInfoView: {flexDirection: 'row', alignItems: 'center'},
    studentListItemNameView: {marginLeft: windowWidth(10)},
    studentListItemFirstName: {width: windowWidth(65), fontFamily: FontFamily.MontserratSemiBold, fontWeight: '600', color: Colors.gray, fontSize: fontSizes.FONT15},
    studentListItemLastName: {width: windowWidth(65), fontFamily: FontFamily.MontserratSemiBold, fontWeight: '500', color: Colors.greyTwo, fontSize: fontSizes.FONT11},
    studentListItemAttendanceView: {flexDirection: 'row', position: 'absolute', right: windowWidth(35), alignItems: 'center'},
    studenListItemSelectionView: {flexDirection: 'row', alignItems: 'center', position: 'absolute', right: windowWidth(51), alignItems: 'center'},
    studenListItemSelectedAttendenceView: (StudentAttendanceData, allStudentData, studentID) => ({borderColor: "#C4C4C480", borderWidth: 1, borderRadius: 30,
        height: windowHeight(isIOS ? 23 : 24), alignItems: 'center', width: windowWidth(isIOS ? 28 : 27), marginRight: windowWidth(25), justifyContent: 'center',
        backgroundColor: StudentAttendanceData.find(item => item.name === allStudentData[studentID].attendance)?.selectedBgColor}),
    studenListItemSelectedAttendenceText : (StudentAttendanceData, allStudentData, studentID) => ({fontFamily: FontFamily.MontserratSemiBold, fontWeight: '600',
        color: StudentAttendanceData.find(item => item.name === allStudentData[studentID].attendance)?.selectedTextColor, fontSize: fontSizes.FONT13}),
    studenListItemScoreIconView: {position: 'absolute', alignSelf: 'center', right: 0},
    headerView: {justifyContent: 'space-between'},
    arrowLeftIconTouch: {padding: 5},
    headerText: {fontFamily: FontFamily.SourceSansSemiBold, fontWeight: '600', color: Colors.header, fontSize: fontSizes.FONT24},
    teacherActionsView: {flexDirection: 'row', alignItems: 'center', marginTop: windowHeight(15)},
    teacherInfoView: {flexDirection: 'row', alignItems: 'center'},
    teacherInfoText: {fontFamily: FontFamily.SourceSansSemiBold, fontWeight: '600', color: Colors.black, fontSize: fontSizes.FONT18},
    selectedDateTouch: {flexDirection: 'row', alignItems: 'center', marginTop: windowHeight(5)},
    selectedDateLeftArrowView: {backgroundColor: Colors.purple, borderTopLeftRadius: 5, borderBottomLeftRadius: 5, marginRight: windowWidth(1),
        paddingHorizontal: windowWidth(8), paddingVertical: windowHeight(6)},
    selectedDateTextView: {backgroundColor: Colors.purple, marginRight: windowWidth(1), paddingHorizontal: windowWidth(10), paddingVertical: windowHeight(isIOS ? 3 : 2.5)},
    selectedDateText: {fontFamily: FontFamily.SourceSansSemiBold, fontWeight: '600', color: Colors.white, fontSize: fontSizes.FONT12},
    selectedDateRightArrowView: {backgroundColor: Colors.purple, borderTopRightRadius: 5, borderBottomRightRadius: 5, paddingHorizontal: windowWidth(8),
        paddingVertical: windowHeight(6)},
    dailyAttendanceButtonView: {flexDirection: 'row', position: 'absolute', right: 0, alignItems: 'center', backgroundColor: Colors.purple, elevation: 2,
        borderRadius: 10, shadowColor: Colors.purple, shadowOpacity: 0.7, shadowRadius: 4, shadowOffset: {width: .5, height: 1}, paddingHorizontal: windowHeight(15),
        paddingVertical: windowWidth(12)},
    dailyAttendanceButtonText: {fontFamily: FontFamily.NunitoMedium, fontWeight: '500', color: Colors.white, fontSize: fontSizes.FONT13},
    separatorView: {backgroundColor: Colors.separator, flexDirection: 'row', marginTop: windowHeight(15), marginBottom: windowHeight(20), alignSelf: 'center',
        width: "100%", height: windowHeight(.5)},
    studentListHeaderView: {flexDirection: 'row', alignItems: 'center'},
    allStudentText: {fontFamily: FontFamily.SourceSansSemiBold, fontWeight: '600', color: Colors.black, fontSize: fontSizes.FONT18},
    markAllPresentView: {flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 0},
    markAllPresentText: {fontFamily: FontFamily.SourceSansSemiBold, fontWeight: '600', color: Colors.purple, fontSize: fontSizes.FONT13, marginRight: windowWidth(5)},
    studenListView: {marginBottom: windowHeight(20)},
    
  });