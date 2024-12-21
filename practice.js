// function showResults() {
//     document.getElementById('uploadSection').classList.add('hidden');
//     document.getElementById('result').style.display = 'block';
// }

function showResults() {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];

    if (file) {
        const fileType = file.type;
        const fileSize = (file.size / 1024).toFixed(2);

        if (fileType === 'image/jpeg' || fileType === 'image/png') {
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('result').style.display = 'block';

            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById('originalImage').src = e.target.result;
                document.getElementById('compressedImage').src = e.target.result;
            };
            reader.readAsDataURL(file);
        } else if (fileType === 'application/pdf' || fileType === 'application/msword' || fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            document.getElementById('uploadSection').classList.add('hidden');
            document.getElementById('documentResult').style.display = 'block';

            document.getElementById('originalSize').innerText = `${fileSize} KB`;

            const compressedSize = (fileSize * 0.5).toFixed(2);
            document.getElementById('compressedSize').innerText = `${compressedSize} KB`;
        } else {
            alert('Please upload an image (JPEG/PNG) or document (PDF/Word).');
        }
    }
}
