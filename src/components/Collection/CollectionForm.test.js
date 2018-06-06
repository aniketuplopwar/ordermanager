import React from 'react';
import { shallow, mount } from 'enzyme';
import CollectionForm from './CollectionForm';

describe('Collection Form',()=>{
   let mockService,
       failingMockService,
       successAction,
       failureAction,
       mockDoc;

   beforeEach(()=>{
       mockDoc = {
           'name': 'aniket'
       };
    mockService = {
        saveDoc: jest.fn().mockImplementation((formData, refId)=>{
            return new Promise((resolve)=> {
                resolve();
            });
        }),
        deleteDoc: jest.fn().mockImplementation((refId)=>{
            return new Promise((resolve)=> {
                resolve();
            });
        }),
        getDoc: jest.fn().mockImplementation((refId)=>{
            return new Promise((resolve)=> {
                resolve(mockDoc);
            });
        })
    };

    failingMockService = {
           saveDoc: jest.fn().mockImplementation((formData, refId)=>{
               return new Promise((resolve, reject)=> {
                   reject();
               });
           }),
           deleteDoc: jest.fn().mockImplementation((refId)=>{
               return new Promise((resolve, reject)=> {
                   reject();
               });
           }),
           getDoc: jest.fn().mockImplementation((refId)=>{
               return new Promise((resolve, reject)=> {
                   reject();
               });
           })
       };

    successAction = jest.fn();
    failureAction = jest.fn();
   });


   it('should match the snapshot when rendered',()=>{
        const wrapper = shallow(<CollectionForm service={mockService}
                                                successAction={successAction}
                                />);

       expect(wrapper).toMatchSnapshot();
   });

    it('should get the document details when refId of document is provided as props',()=>{
        const wrapper = shallow(<CollectionForm service={mockService}
                                                successAction={successAction}
                                                refId='123'
        />);
        wrapper.instance().componentWillReceiveProps({refId: '123'});
        expect(mockService.getDoc).toHaveBeenCalledWith('123');
    });


    it('should call saveDoc of service with form Data only when new document is added', (done)=>{
        const wrapper = shallow(<CollectionForm service={mockService}
                                                successAction={successAction}
                                />);
        const formData = { 'someKey': 'someValue'};

        wrapper.instance().onSubmit(formData).then(()=>{
            expect(mockService.saveDoc).toHaveBeenCalledWith(formData, undefined);
            expect(successAction).toHaveBeenCalledWith('ADD');
            done();
        });

    });

    it('should call saveDoc of service with form Data and refId when document is updated', (done)=>{
        const wrapper = shallow(<CollectionForm service={mockService}
                                                successAction={successAction}
        />);
        const formData = { 'someKey': 'someValue'};
        const refId= '123';
        wrapper.setState({refId});
        wrapper.instance().onSubmit(formData).then(()=>{
            expect(mockService.saveDoc).toHaveBeenCalledWith(formData, refId);
            expect(successAction).toHaveBeenCalledWith('UPDATE');
            done();
        });

    });

    it('should not delete the doc when user does not confirm to delete it',()=>{
        const wrapper = shallow(<CollectionForm service={mockService}
                                                successAction={successAction}
        />);
        const refId= '123';
        global.confirm = jest.fn().mockImplementation((message)=>{
            return false;
        });
        wrapper.setState({refId});
        expect(wrapper.instance().deleteData(refId)).toBe(undefined);
        expect(mockService.deleteDoc).toHaveBeenCalledTimes(0);
    })

    it('should call deleteDoc of service with refId when document is requested to delete & user cofirms to delete', (done)=>{
        const wrapper = shallow(<CollectionForm service={mockService}
                                                successAction={successAction}
        />);
        const refId= '123';
        global.confirm = jest.fn().mockImplementation((message)=>{
            return true;
        });
        wrapper.setState({refId});
        wrapper.instance().deleteData(refId).then(()=>{
            expect(mockService.deleteDoc).toHaveBeenCalledWith(refId);
            expect(successAction).toHaveBeenCalledWith('DELETE');
            done();
        });

    });

    it('should call failureAction when there is any service failure', (done)=>{
        const wrapper = shallow(<CollectionForm service={failingMockService}
                                                successAction={successAction}
                                                failureAction={failureAction}
        />);
        const formData = { 'someKey': 'someValue'};
        wrapper.instance().onSubmit(formData).then(()=>{
            expect(failureAction).toHaveBeenCalled();
            done();
        });

    });
});