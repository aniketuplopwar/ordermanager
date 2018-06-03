const styles = theme => ({
    root: {
        width: '100%',

    },
    toolbar : {
        justifyContent: 'space-between'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    expansionPanel: {
        textAlign: 'left',
        margin: "10px",
        padding: '10px'
    },
    ul: {
        padding: 0
    },
    table: {
        width: "100%"
    },
    button: {
        width: 300,
        margin: "auto",
        marginTop: "20px",
        marginBottom: theme.spacing.unit * 2,
    },
    link: {
        textDecoration: "none",
        color: "white",
    },
    details :{
        width: "100%",
        textAlign: "center"
    },
    heading1: {
        fontSize: "18px",
        margin: "20px auto"
    },
    chipBarContainer: {}
});
export default styles;
