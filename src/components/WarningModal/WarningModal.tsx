import { Warning } from '@mui/icons-material';
import {
    Button
    , Dialog
    , DialogActions
    , DialogContent
    , DialogProps
    , DialogTitle
    , Stack
    , Typography
} from '@mui/material';

type Props = {
    message: string;
    closeHandler: () => void;
} & DialogProps;

const WarningModal = ( {
    message
    , open
    , closeHandler
}: Props ) => {
    return (
        <Dialog
            open={ open }
            onClose={ closeHandler }
        >
            <DialogTitle
                component={ Stack }
                direction='row'
                gap='.5rem'
            >
                <Warning color='warning' />
                <Typography>
                    Error
                </Typography>
            </DialogTitle>
            <DialogContent>
                { message }
            </DialogContent>
            <DialogActions>
                <Button onClick={ closeHandler }>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default WarningModal;
