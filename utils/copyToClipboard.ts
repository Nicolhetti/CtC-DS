export function copyToClipboard(text: string): boolean {
    try {
        const textarea = document.createElement('textarea');
        textarea.value = text;

        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);

        textarea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textarea);
        return successful;
    } catch (err) {
        console.error('Error al copiar:', err);
        return false;
    }
}
