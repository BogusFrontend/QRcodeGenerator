

document.addEventListener('DOMContentLoaded', function () {
    const textInput = document.getElementById('text-input');
    const generateBtn = document.querySelector('button');
    const qrCodeContainer = document.getElementById('qrcode');
    const downloadBtn = document.querySelector('.downloadBtn');

    let qrcode;

    generateBtn.addEventListener('click', generateQRCode);
    downloadBtn.addEventListener('click', downloadQRCode);

    function generateQRCode() {
        const text = textInput.value;

        qrCodeContainer.innerHTML = '';

        qrcode = new QRCode(qrCodeContainer, {
            text: text,
            width: 200,
            height: 200
        });
    }

    function downloadQRCode() {
        if (qrcode) {
            downloadBtn.href = qrCodeContainer.querySelector('img').src;
            console.log(downloadBtn.href);
            downloadBtn.click();
        }
    }
});



