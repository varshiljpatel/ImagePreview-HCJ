let UFBtn = document.querySelector('#UFBtn');
let InputFile = document.querySelector('#inputFile');
let image = document.querySelector('#image');

UFBtn.addEventListener('click', async () => {
    await InputFile.click();
});

InputFile.addEventListener('change', async function () {
    console.log(InputFile.files);
    let file = InputFile.files[0];
    let fileValidate = file.type.split('/');
    if (fileValidate && fileValidate[0] === 'image' && (fileValidate[1] === 'jpeg' || fileValidate[1] === 'jpg' || fileValidate[1] === 'png')) {
        image.src = await URL.createObjectURL(file);
        image.style.display = await 'block';
    }
});