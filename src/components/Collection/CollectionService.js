
export default class CollectionService {
    constructor(collectionName, store) {
        this.collection = store.collection(collectionName);
    }

    getDoc(refId) {
        return this.collection.doc(refId).get().then(snap =>{
            return snap.data();
        }).catch((e)=>{
        });
    }

    addDoc(doc) {
        return this.collection.add(doc);
    }

    updateDoc(doc, refId) {
        return this.collection.doc(refId).update(doc);
    }

    saveDoc(doc, refId) {
        if(refId)
            return this.updateDoc(doc, refId);
        return this.addDoc(doc)
    }

    deleteDoc(refId) {
        return this.collection.doc(refId).delete();
    }

    getDocs(){
        return this.collection.orderBy('date', 'desc').get()
            .then(snap=> snap.docs);
    }

    getCollection(){
        return this.getDocs().then(docs =>docs.map(doc => {
                    return {
                        data: doc.data(),
                        refId: doc.ref.id
                    }
                })
            );
    }

    getCollectionWithFilter(filters){
        return this.getDocs().then(snap=> filters ? snap.filter(filters) : snap)
            .then(docs =>docs.map(doc => {
                return {
                    data: doc.data(),
                    refId: doc.ref.id
                }
            })
        );
    }
}