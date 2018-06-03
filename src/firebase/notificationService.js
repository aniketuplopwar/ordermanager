import {store} from './index';

const getNotificationList = ()=>{
    return store
        .collection('notifications').get().then(snap => snap.docs).then(
            docs =>docs.map(doc => {
                return {
                    data: doc.data(),
                    refId: doc.ref.id
                }
            })
        );
};

const deleteNotification = (refId)=>{
    return store
        .collection('notifications').doc(refId).delete()
};

const notify = ({message, type, dismissType= "IMMEDIATE"})=>{
    const notification = {message, type, dismissType};
    store.collection("notifications").add(notification);
};

export {
    getNotificationList,
    deleteNotification,
    notify
}