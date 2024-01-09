export const formData = [
    {
        "type": "register",
        "inputs": [
            { type: 'text', name: 'firstName', label: 'Name' },
            { type: 'text', name: 'lastName', label: 'Last Name' },
            { type: 'email', name: 'email', label: 'Email' },
            { type: 'password', name: 'password', label: 'Password' },
            { type: 'password', name: 'checkPassword', label: 'Confirm Password' },
        ]
    },
    {
        "type": "login",
        "inputs": [
            { type: 'email',    name: 'email',    label: 'Email' },
            { type: 'password', name: 'password', label: 'Password' },
            { type: 'checkbox', name: 'remember', label: 'Mantener sesión iniciada' },
        ]
    }
]