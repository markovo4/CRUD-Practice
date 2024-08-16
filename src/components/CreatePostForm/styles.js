export const styles = {
    container: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: '8px',
        boxShadow: 24,
        p: 4,
    },
    textArea: {
        width: '400px',
        height: '100px',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        resize: 'none',
        fontSize: '16px',
        color: '#333',
        outline: 'none',
        '&:hover': {
            borderColor: '#888',
        },
        '&:focus': {
            borderColor: '#42af2a',
            boxShadow: '0 0 0 3px #42af2a',
        },
        '&:disabled': {
            backgroundColor: '#f5f5f5',
            color: '#a0a0a0',
        },
        '&::placeholder': {
            color: '#aaa',
            opacity: 1,
        },
        '&.error': {
            borderColor: '#f5222d',
        },
    },
}