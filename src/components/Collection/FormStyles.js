const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 300,
    },
    menu: {
        width: 200,
    },
    button: {
        width: 300,
        marginBottom: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 300,
        marginTop: theme.spacing.unit * 2,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
    card: {
        margin: '20px'
    },
    footer: {
        marginTop: '20px'
    }
});

export default styles;