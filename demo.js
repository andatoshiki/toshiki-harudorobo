const ap = new APlayer({
    container: document.getElementById('player'),
    listFolded: false,
    listMaxHeight: 900,
    volume: 0.4,
    audio: [
        {
            name: '春泥棒ピアノ　piano ver.',
            artist: '安田俊樹',
            url: 'https://toshiki-image-host.oss-cn-hongkong.aliyuncs.com/audio/%E6%98%A5%E6%B3%A5%E6%A3%92%40%E5%AE%89%E7%94%B0%E4%BF%8A%E6%A8%B9.MP3',
            cover: 'https://toshiki-image-host.oss-cn-hongkong.aliyuncs.com/imgphoto_2022-08-18_20-36-39.jpg',
            theme: '#F4A7B9'
        }
    ]
});
