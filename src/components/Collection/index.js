import React from 'react';
import CollectionForm from './CollectionForm';
import CollectionView from './CollectionView';
import CollectionService from './CollectionService';
import {store} from '../../firebase';

const getCollectionService = (collectionName)=>{
    const collectionList = {};
    return collectionList[collectionName] ? collectionList[collectionName] : new CollectionService(collectionName, store);
};

const CollectionDataForm = (props)=>{
      return (
          <CollectionForm
              service={getCollectionService(props.collectionName)}
              {...props}
          />
      )
};

export {
    CollectionDataForm,
    CollectionView,
    getCollectionService
}