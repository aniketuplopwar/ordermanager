const FORM_CONFIG = {
    'items': {
        label: 'Items',
        type: 'text'
    },
    'date': {
        label: 'Date',
        type: 'date'
    },
    'price': {
        label: 'Price',
        type: 'number'
    },
    'shop':{
        label: 'Shop',
        type: 'text'
    },
    'type':{
        label: 'Type',
        type: 'text'
    }
};

const FORM_VALIDATION_CONFIG = {
    items:  {
        required: {
            value: 'true',
            message: 'value is required'
        }
    },
    date: {
        required: {
            value: 'true',
            message: 'value is required'
        }
    },
    price: {
        required: {
            value: 'true',
            message: 'value is required'
        }
    },
    type: {
        required: {
            value: 'true',
            message: 'value is required'
        }
    },
    shop: {
        required: {
            value: 'true',
            message: 'value is required'
        }
    }
};

const VIEW_CONFIG = {
    'heading': 'items',
    'subHeading': 'date',
    'formLink': 'expense'
};

export {FORM_CONFIG, FORM_VALIDATION_CONFIG, VIEW_CONFIG}