const FORM_CONFIG = {
    'name': {
        label: 'Name',
        type: 'text'
    },
    'items': {
        label: 'Items',
        type: 'text'
    },
    'date': {
        label: 'Date',
        type: 'date'
    },
    'time': {
        label: 'Time',
        type: 'time'
    },
    'price': {
        label: 'Price',
        type: 'number'
    },
    'contact': {
        label: 'Contact',
        type: 'number'
    },
    'address': {
        label: 'Address',
        type: 'text'
    },
    'deliveryStatus': {
        label: 'Order Status',
        type: 'select',
        defaultValue: 'PLACED',
        options: [
            {
                'label': 'Placed',
                'value': 'PLACED'
            },
            {
                'label': 'In Progress',
                'value': 'IN_PROGRESS'
            },
            {
                'label': 'Delivered',
                'value': 'DELIVERED'
            },
            {
                'label': 'Cancelled',
                'value': 'CANCELLED'
            }

        ]
    },
    'paymentStatus': {
        label: 'Payment Status',
        type: 'select',
        defaultValue: 'PENDING',
        options: [
            {
                'label': 'Pending',
                'value': 'PENDING'
            },
            {
                'label': 'Paid',
                'value': 'PAID'
            }
        ]
    }
};

const VIEW_CONFIG = {
    'heading': 'name',
    'subHeading': 'date',
    'formLink': 'order'
};

export {FORM_CONFIG, VIEW_CONFIG}