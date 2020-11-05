import variables from '../../Styles.scss';

export default {
    headRow: {
        style: {
            backgroundColor: 'transparent',
            minHeight: '48px'
        },
        denseStyle: {
            minHeight: '32px'
        }
    },
    headCells: {
        style: {
            fontSize: '13px',
            fontWeight: 600,
            color: variables.textMain,
        },
        activeStyle: {
            color: 'rgba(0,0,0,.87)'
        }
    },
    rows: {
        style: {
            color: variables.textMain,
            backgroundColor: 'transparent',
        }
    }
};