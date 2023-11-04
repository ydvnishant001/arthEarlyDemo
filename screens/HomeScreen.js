import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { Icons } from '../utilities/icons';
import { windowHeight, windowWidth } from '../utilities/appConstant';
import HomeScreenStyles from '../utilities/styles/HomeScreenStyles';
import { BlocksData, BottomBarData } from '../utilities/db';
import { AttendanceKey, TeacherInfo, TeacherName } from '../utilities/keys';

const HomeScreen = ({navigation}) => {

  const renderBlocks = ({item: Block, index}) => {
    return(
      <TouchableOpacity disabled={index !== 1} onPress={() => index === 1 && navigation.navigate(AttendanceKey)}
      style={HomeScreenStyles.blockListItemView(Block.bgColor)}>
        <Block.icon width={windowWidth(50)} height={windowHeight(50)}/>
        <Text allowFontScaling={false} style={HomeScreenStyles.blockListItemText}>{Block.name}</Text>
      </TouchableOpacity>
    )
  }

  const renderBottomBar = ({item, index}) => {
    return(
      <View style={HomeScreenStyles.bottomBarItemView(index)}>
        <item.icon width={windowWidth(20)} height={windowHeight(20)}/>
        <Text allowFontScaling={false} numberOfLines={1} style={HomeScreenStyles.bottomBarItemText(index)}>{item.name}</Text>
      </View>
    )
  }

  return (
      <View style={HomeScreenStyles.mainView}>
        <View style={HomeScreenStyles.headerView}>
          <Icons.UserSvg width={windowWidth(55)} height={windowHeight(55)}/>
          
          <View style={HomeScreenStyles.headerLeftView}>
            <Text allowFontScaling={false} style={HomeScreenStyles.headerText}>{TeacherName}</Text>
            <View style={HomeScreenStyles.headerLeftSubView}>
              <Text allowFontScaling={false} style={HomeScreenStyles.headerTextTwo}>{TeacherInfo + " "}</Text>
              <Icons.PurpleDownSvg width={windowWidth(16)} height={windowHeight(16)}/>
            </View>
          </View>
          
          <View style={HomeScreenStyles.notificationIconView}>
            <Icons.NotificationSvg width={windowWidth(30)} height={windowHeight(30)}/>
          </View>
        </View>

        <View style={HomeScreenStyles.blockListView}>
          <FlatList numColumns={2} data={BlocksData} keyExtractor={(_, index) => index.toString()} renderItem={renderBlocks}/>
        </View>

        <View style={HomeScreenStyles.bottomBarView}>
          <FlatList showsHorizontalScrollIndicator={false} scrollEnabled={false} horizontal data={BottomBarData} keyExtractor={(_, index) => index.toString()}
          renderItem={renderBottomBar}/>
        </View>
      </View>
    );
  }

export default HomeScreen