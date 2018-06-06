import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import DocumentView from './DocumentExpansionPanelView';
import styles from './ViewStyles';

const CollectionView = ({ classes, collection, collectionConfig, viewConfig } ) => {
        return (<div>
                    {collection.map((document, idx)=>{
                        return (
                            <DocumentView classes={classes}
                                          document={document}
                                          collectionConfig={collectionConfig}
                                          viewConfig={viewConfig}
                                          idx={idx}
                            />
                        );
                    })}
                </div>
        );
};

CollectionView.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CollectionView);