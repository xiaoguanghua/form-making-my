export const basicComponents = [{
        type: 'input',
        icon: 'icon-input',
        options: {
            width: '100%',
            standardType: '',
            defaultValue: '',
            required: false,
            dataType: 'string',
            pattern: '',
            placeholder: '',
            disabled: false,
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'textarea',
        icon: 'icon-diy-com-textarea',
        options: {
            width: '100%',
            standardType: '',
            defaultValue: '',
            required: false,
            disabled: false,
            pattern: '',
            placeholder: '',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'number',
        icon: 'icon-number',
        options: {
            width: '',
            standardType: '',
            required: false,
            defaultValue: 0,
            min: '',
            max: '',
            step: 1,
            disabled: false,
            controlsPosition: '',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'radio',
        icon: 'icon-radio-active',
        options: {
            inline: false,
            standardType: '',
            defaultValue: '',
            showLabel: false,
            options: [{
                    value: 'Option 1',
                    label: 'Option 1'
                },
                {
                    value: 'Option 2',
                    label: 'Option 2'
                },
                {
                    value: 'Option 3',
                    label: 'Option 3'
                }
            ],
            required: false,
            width: '',
            remote: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: '',
            disabled: false,
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'checkbox',
        icon: 'icon-check-box',
        options: {
            inline: false,
            standardType: '',
            defaultValue: [],
            showLabel: false,
            options: [{
                    value: 'Option 1'
                },
                {
                    value: 'Option 2'
                },
                {
                    value: 'Option 3'
                }
            ],
            required: false,
            width: '',
            remote: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: '',
            disabled: false,
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'time',
        icon: 'icon-time',
        options: {
            standardType: '',
            defaultValue: '21:19:56',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            isRange: false,
            arrowControl: true,
            format: 'HH:mm:ss',
            required: false,
            width: '',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'date',
        icon: 'icon-date',
        options: {
            defaultValue: '',
            standardType: '',
            readonly: false,
            disabled: false,
            editable: true,
            clearable: true,
            placeholder: '',
            startPlaceholder: '',
            endPlaceholder: '',
            type: 'date',
            format: 'yyyy-MM-dd',
            timestamp: false,
            required: false,
            width: '',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'rate',
        icon: 'icon-pingfen1',
        options: {
            standardType: '',
            defaultValue: null,
            max: 5,
            disabled: false,
            allowHalf: false,
            required: false,
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'color',
        icon: 'icon-color',
        options: {
            standardType: '',
            defaultValue: '',
            disabled: false,
            showAlpha: false,
            required: false,
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'select',
        icon: 'icon-select',
        options: {
            standardType: '',
            defaultValue: '',
            multiple: false,
            disabled: false,
            clearable: false,
            placeholder: '',
            required: false,
            showLabel: false,
            width: '',
            options: [{
                    value: 'Option 1'
                },
                {
                    value: 'Option 2'
                }, {
                    value: 'Option 3'
                }
            ],
            remote: false,
            filterable: false,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label'
            },
            remoteFunc: '',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'switch',
        icon: 'icon-switch',
        options: {
            standardType: '',
            defaultValue: false,
            required: false,
            disabled: false,
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'slider',
        icon: 'icon-slider',
        options: {
            standardType: '',
            defaultValue: 0,
            disabled: false,
            required: false,
            min: 0,
            max: 100,
            step: 1,
            showInput: false,
            range: false,
            width: '',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'text',
        icon: 'icon-wenzishezhi-',
        options: {
            standardType: '',
            defaultValue: 'This is a text',
            customClass: '',
            isChecked: false,
            showCheck: false
        }
    }
]

export const advanceComponents = [{
        type: 'blank',
        icon: 'icon-zidingyishuju',
        options: {
            defaultType: 'String',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'imgupload',
        icon: 'icon-tupian',
        options: {
            defaultValue: [],
            size: {
                width: 100,
                height: 100,
            },
            width: '',
            tokenFunc: 'funcGetToken',
            token: '',
            domain: 'http://pfp81ptt6.bkt.clouddn.com/',
            disabled: false,
            length: 8,
            multiple: false,
            isQiniu: false,
            isDelete: false,
            min: 0,
            isEdit: false,
            action: 'https://jsonplaceholder.typicode.com/photos/',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'editor',
        icon: 'icon-fuwenbenkuang',
        options: {
            defaultValue: '',
            width: '',
            isChecked: false,
            showCheck: false
        }
    },
    {
        type: 'cascader',
        icon: 'icon-jilianxuanze',
        options: {
            defaultValue: [],
            width: '',
            placeholder: '',
            disabled: false,
            clearable: false,
            remote: true,
            remoteOptions: [],
            props: {
                value: 'value',
                label: 'label',
                children: 'children'
            },
            remoteFunc: '',
            isChecked: false,
            showCheck: false
        }
    }
]

export const layoutComponents = [{
    type: 'grid',
    icon: 'icon-grid-',
    columns: [{
            span: 12,
            list: []
        },
        {
            span: 12,
            list: []
        }
    ],
    options: {
        searchResult: '',
        gutter: 0,
        justify: 'start',
        align: 'top',
        isChecked: false,
        showCheck: false
    }
}]