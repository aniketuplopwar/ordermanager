import React from 'react';
import { shallow } from 'enzyme';
import DocumentView from './DocumentExpansionPanelView';

describe('DocumentDetails View',()=>{

    it('should match the snapshot when rendered',()=>{

        const classes = {};
        const collection = {data: {name: 'Aniket', age: '30'}};
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
        const wrapper = shallow(<DocumentView classes={classes}
                                              document={collection}
                                              collectionConfig={collectionConfig}
                                              viewConfig={viewConfig}
                                              idx='0'
        />);

        expect(wrapper).toMatchSnapshot();
    });



});