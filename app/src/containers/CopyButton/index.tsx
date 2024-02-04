import { useState } from "react";
import styles from './CopyButton.module.scss';

interface Props {
    copyMessage: string
}

const CopyButton = ({copyMessage}: Props)=> {
    const [copied, setCopied] = useState(false);

    const onClick = () => {
        navigator.clipboard.writeText(copyMessage);
        setCopied(true);
    }

    return (
        <button onClick={onClick} className={styles.button}>
            {copied ? 'Copiado!' : 'Copiar'}
        </button>
    )
}

export default CopyButton;