import React from 'react';
import { shallow } from 'enzyme';
import DocumentDetails from './DocumentDetails';

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
        const wrapper = shallow(<DocumentDetails classes={classes}
                                                document={collection}
                                                config={collectionConfig}
        />);

        expect(wrapper).toMatchSnapshot();
    });



});