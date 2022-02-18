import React, {useEffect, useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Messages = ({route}) => {
  const {thread} = route.params;
  const [messages, SetMessages] = useState([]);
  const user = auth().currentUser.toJSON();

  useEffect(() => {
    const unsubscribeListener = firestore()
      .collection('MESSAGE_THREADS')
      .doc(thread._id)
      .collection('MESSAGES')
      .orderBy('createdAt', 'desc')
      .onSnapshot(querySnapshot => {
        const messages = querySnapshot.docs.map(doc => {
          const firebaseData = doc.data();

          const data = {
            _id: doc.id,
            text: '',
            createdAt: firestore.FieldValue.serverTimestamp(),
            ...firebaseData,
          };
          if (!firebaseData.system) {
            data.user = {
              ...firebaseData.user,
              name: firebaseData.user.displayName,
            };
          }
          return data;
        });
        SetMessages(messages);
        console.log(messages);
      });

    return () => unsubscribeListener();
  }, []);

  return (
    <SafeAreaView>
      <Text>{thread.name}</Text>
    </SafeAreaView>
  );
};
export default Messages;
