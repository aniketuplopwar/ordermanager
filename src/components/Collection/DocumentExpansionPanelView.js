import React from 'react';
import {Link} from 'react-router-dom';
import ExpansionPanel, {ExpansionPanelDetails, ExpansionPanelSummary,} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button';
import DocumentDetails from './DocumentDetails';

const DocumentView = ({classes, document, collectionConfig, viewConfig, idx})=>{
    return (
        <ExpansionPanel className={classes.expansionPanel}
                        key={'document-'+idx}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                    {document.data[viewConfig.heading]}
                </Typography>
                <Typography className={classes.secondaryHeading}>
                    {document.data[viewConfig.subHeading]}
                 </Typography>
            </ExpansionPanelSummary>

            <ExpansionPanelDetails >

                <div className={classes.details}>
                    <DocumentDetails classes={classes}
                                  document={document}
                                  config={collectionConfig}
                    />

                    <Link to={`/${viewConfig.formLink}/${document.refId}`}
                          className={classes.link}>
                        <Button
                            variant="raised"
                            color="primary"
                            className={classes.button}>
                            Update
                        </Button>
                    </Link>
                </div>
            </ExpansionPanelDetails>
    </ExpansionPanel>)
};

export default DocumentView;