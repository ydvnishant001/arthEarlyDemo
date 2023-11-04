import React, { useState } from "react"
import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import { Icons } from "../utilities/icons"
import { windowHeight, windowWidth } from "../utilities/appConstant"
import HomeScreenStyles from "../utilities/styles/HomeScreenStyles"
import { StudentAttendanceData, StudentData } from "../utilities/db"
import AttendanceScreenStyles from "../utilities/styles/AttendanceScreenStyles"
import { AllStudentsKey, AttendanceKey, DailyAttendanceKey, DateFormat, DateKey, MarkAllPresentKey, TeacherInfo } from "../utilities/keys"
import moment from "moment"
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useDispatch, useSelector } from "react-redux"
import { attendanceUpdated } from "../utilities/redux/slices/attendanceSlice"

const AttendanceScreen = ({navigation}) => {
    const allStudentData = useSelector(state => state.attendance)

    const [selectedDate, setSelectedDate] = useState(new Date())
    const [showDatePicker, setShowDatePicker] = useState(false)

    const Dispatch = useDispatch()

    const onAttendancePress = (attendance, studentID) => Dispatch(attendanceUpdated({studentID: studentID, attendance: attendance.name}))

    const onDateConfirm = (date) => {
        setShowDatePicker(false)
        setSelectedDate(date)
    }

    const renderStudentList = ({item: student, index: studentID}) => {        
        
        const renderStudentAttendance = ({item: attendance}) => {//render student attendance list
            return(
                <TouchableOpacity style={AttendanceScreenStyles.attendanceListItemTouch} onPress={() => onAttendancePress(attendance, studentID)}>
                    <Text allowFontScaling={false} style={AttendanceScreenStyles.attendanceListText}>{attendance.name}</Text>
                </TouchableOpacity>
            )
        }

        return(
            <View style={AttendanceScreenStyles.studentListItemView}>
                
                <View style={AttendanceScreenStyles.studentListItemInfoView}>
                    <student.profileIcon width={windowWidth(35)} height={windowHeight(35)}/>
                    <View style={AttendanceScreenStyles.studentListItemNameView}>
                        <Text allowFontScaling={false} numberOfLines={1} style={AttendanceScreenStyles.studentListItemFirstName}>{student.firstName}</Text>
                        <Text allowFontScaling={false} numberOfLines={1} style={AttendanceScreenStyles.studentListItemLastName}>{student.lastName}</Text>
                    </View>
                </View>

                {!student.attendance ?
                <View style={AttendanceScreenStyles.studentListItemAttendanceView}>
                    <FlatList horizontal keyExtractor={(_, index) => index.toString()} renderItem={renderStudentAttendance} data={StudentAttendanceData}/>
                </View>
                :
                <View style={AttendanceScreenStyles.studenListItemSelectionView}>
                    <View style={AttendanceScreenStyles.studenListItemSelectedAttendenceView(StudentAttendanceData, allStudentData, studentID)}>
                        <Text allowFontScaling={false}
                        style={AttendanceScreenStyles.studenListItemSelectedAttendenceText(StudentAttendanceData, allStudentData, studentID)}>
                            {student.attendance}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => onAttendancePress("", studentID)}>
                    <Icons.EditSvg width={windowWidth(16)} height={windowHeight(16)}/>
                    </TouchableOpacity>
                </View>
                }

                <View style={AttendanceScreenStyles.studenListItemScoreIconView}>
                    <Icons.StudentScoreSvg width={windowWidth(24)} height={windowHeight(24)}/>
                </View>
            </View>
        )
    }

    return(
        <View style={HomeScreenStyles.mainView}>
            <ScrollView showsVerticalScrollIndicator={false}>
            
            <View style={[HomeScreenStyles.headerView, AttendanceScreenStyles.headerView]}>
                <TouchableOpacity style={AttendanceScreenStyles.arrowLeftIconTouch} onPress={navigation.goBack}>
                    <Icons.ArrowLeftSvg width={windowWidth(24)} height={windowHeight(24)}/>
                </TouchableOpacity>
                <Text allowFontScaling={false} style={AttendanceScreenStyles.headerText}>{AttendanceKey}</Text>
                <Icons.SearchSvg width={windowWidth(24)} height={windowHeight(24)}/>
            </View>
                
            <View style={AttendanceScreenStyles.teacherActionsView}>
                <View>
                    <View style={AttendanceScreenStyles.teacherInfoView}>
                        <Text allowFontScaling={false} style={AttendanceScreenStyles.teacherInfoText}>{TeacherInfo}</Text>
                        <Icons.PurpleDownSvg width={windowWidth(16)} height={windowHeight(16)}/>
                    </View>
                    <TouchableOpacity style={AttendanceScreenStyles.selectedDateTouch} onPress={() => setShowDatePicker(true)}>
                        <View style={AttendanceScreenStyles.selectedDateLeftArrowView}>
                            <Icons.ArrowLeftWhiteSvg width={windowWidth(7)} height={windowHeight(7)}/>
                        </View>
                        <View style={AttendanceScreenStyles.selectedDateTextView}>
                            <Text allowFontScaling={false} style={AttendanceScreenStyles.selectedDateText}>{moment(selectedDate).format(DateFormat)}</Text>
                        </View>
                        <View style={AttendanceScreenStyles.selectedDateRightArrowView}>
                            <Icons.ArrowRightWhiteSvg width={windowWidth(7)} height={windowHeight(7)}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={AttendanceScreenStyles.dailyAttendanceButtonView}>
                    <Text allowFontScaling={false} style={AttendanceScreenStyles.dailyAttendanceButtonText}>{DailyAttendanceKey}</Text>
                    <Icons.ArrowDownWhiteSvg width={windowWidth(16)} height={windowHeight(16)}/>
                </View>
            </View>
                        
            <View style={AttendanceScreenStyles.separatorView}/>

            <View style={AttendanceScreenStyles.studentListHeaderView}>
                <Text allowFontScaling={false} style={AttendanceScreenStyles.allStudentText}>{AllStudentsKey}({allStudentData.length})</Text>
                <View style={AttendanceScreenStyles.markAllPresentView}>
                    <Text allowFontScaling={false} style={AttendanceScreenStyles.markAllPresentText}>{MarkAllPresentKey}</Text>
                    <Icons.CheckCircleSvg width={windowWidth(20)} height={windowHeight(20)}/>
                </View>
            </View>

            <View style={AttendanceScreenStyles.studenListView}>
                <FlatList data={allStudentData} keyExtractor={(_, index) => index.toString()} renderItem={renderStudentList}/>
            </View>

            {showDatePicker ?
                <DateTimePickerModal isVisible={showDatePicker} mode={DateKey} date={selectedDate} onCancel={() => setShowDatePicker(false)}
                onConfirm={onDateConfirm}/> : null
            }

            </ScrollView>
        </View>
    )
}

export default AttendanceScreen