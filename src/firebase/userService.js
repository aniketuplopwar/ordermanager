import {store} from './index';

const getUserList = ()=>{
    return store
        .collection('users').get().then(snap => snap.docs).then(
            docs =>docs.map(doc => doc.data())
        );
};




export {
    getUserList
}