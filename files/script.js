document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.prefecture-button');
    const imageContainer = document.getElementById('image-container');
    const prefectureImage = document.getElementById('prefecture-image');

    path = './046_todou/'
    const images = {
        '東京': path + 'tokyo.jpg',
        '富山': path + 'toyama.jpg',
        '石川': path + 'ishikawa.jpg',
        '長野': path + 'nagano.jpg',
        '岐阜': path + 'gihu.jpg',
        '愛知': path + 'nagoya.jpg',
        '大阪': path + 'osaka.jpg',
        '兵庫': path + 'kobe.jpg',
        // '奈良': path + 'nara.jpg',
        '高知': path + 'kochi.jpg',
        '宮崎': path + 'miyazaki.jpg',
        '鹿児島': path + 'kagoshima.jpg',
        // 他の都道府県の画像をここに追加
    };
    // 画像のパスを設定
 //   var imagePath = 'images/' + prefecture + '.jpg'; // 画像があるディレクトリへのパスを指定

//    function openNewWindow(PATH) {
        // 新しいウィンドウを開く
//        const prefecture = this.getAttribute('data-prefecture');
//        const imagePath = images[prefecture];
//        window.open(PATH, '_blank', "width=600,height=400");
//    };


    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const prefecture = this.getAttribute('data-prefecture');
            const imagePath = images[prefecture];
            if (imagePath) {
                //prefectureImage.src = imagePath;
                //imageContainer.style.display = 'block';
                window.open(imagePath, '_blank', "width=600,height=400");
                
                // window.open(imagePath, '_blank' ,style="max-width: 100%; max-height: 100vh;");
            } else {
                alert('まだない(´；ω；`)ｳｯ…');
            }
        });
    });
});