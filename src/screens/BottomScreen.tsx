import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

import {mocData} from '../helpers';
import {Routes} from '../navigation';
import {RouteService} from '../shared';

interface iPost {
  image: string;
  name: string;
  video: string;
  id: string;
  views: number;
}

export const BottomScreen = ({navigation}: any) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener(
      'transitionStart',
      (event: any) => {
        console.log('event', event);
        event.data?.closing && RouteService.navigate(Routes.HOME_SCREEN);
      },
    );

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <SafeAreaView edges={['top']} style={styles.backColor} />

      <View style={styles.layout}>
        <Text style={styles.name}>BOTTOM SCREEN</Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {mocData.map((post: iPost) => {
            return (
              <View key={post?.id} style={styles.box}>
                <Image source={{uri: post.image}} style={styles.image} />
                <Text style={styles.caption}>{post?.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <SafeAreaView edges={['bottom']} style={styles.backColor} />
    </>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0, 2, 52, 0.8)',
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  backColor: {
    backgroundColor: 'rgba(0, 2, 52, 0.8)',
  },

  name: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },

  box: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    paddingBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: 'white',
    borderWidth: 1,
  },

  caption: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: '500',
    color: 'white',
    textTransform: 'capitalize',
  },
});
