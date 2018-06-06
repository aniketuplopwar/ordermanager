import React from 'react';
import { shallow } from 'enzyme';
import CollectionView from './CollectionView';

describe('Collection View',()=>{

    it('should match the snapshot when rendered',()=>{

        const classes = {};
        const collection = [{name: 'Aniket', age: '30'}];
        const collectionConfig = {
            'name': {
                type: 'text',
                label: 'Name'
            },
            'age': {
                type: 'number',
                label: 'Name'
            }
        };
        const viewConfig = {
            'heading': 'name',
            'subHeading': 'age',
            'formLink': 'users'
        };
        const wrapper = shallow(<CollectionView classes={classes}
                                                collection={collection}
                                                collectionConfig={collectionConfig}
                                                viewConfig={viewConfig}
        />);

        expect(wrapper).toMatchSnapshot();
    });



});