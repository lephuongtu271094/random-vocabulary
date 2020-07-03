const Nightmare = require('nightmare')
const Fs = require('fs')
const Path = require('path')
const Axios = require('axios')

const nightmare = Nightmare({ show: true })
const listLink = [
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-dung-cu-hoc-tap-950',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-hanh-dong-945',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-hoat-dong-thuong-ngay-941',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-bien-824',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-so-dem-823',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-mua-sam-826',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-phong-ngu-937',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-tinh-ban-931',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-nha-bep-932',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-do-trang-suc-825',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-moi-truong-822',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-phong-khach-933',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-benh-vien-819',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-may-tinh-818',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-cong-viec-nha-820',
    'https://www.voca.vn/blog/tu-vung-ve-cac-cua-hang-954',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-giai-tri-821',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-du-lich-788',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-que-huong-939',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-trung-thu-940',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-dam-cuoi-944',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-san-bay-816',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-suc-khoe-815',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-rau-cu-qua-813',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-phuong-tien-giao-thong-812',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-thoi-gian-809',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-cam-xuc-808',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-tinh-cach-807',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-do-uong-806',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-cac-loai-hoa-805',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-phim-anh-804',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-bong-da-800',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-giang-sinh-802',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-do-an-801',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-the-thao-794',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-am-nhac-803',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-tinh-yeu-799',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-nha-hang---khach-san-795',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-truong-hoc-793',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-mau-sac-792',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-thoi-tiet-790',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-quan-ao-791',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-nghe-nghiep-789',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-giao-duc-938',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-gia-dinh-787',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-trai-cay-786',
    'https://www.voca.vn/blog/tu-vung-tieng-anh-ve-dong-vat-766'
]

const downloadImage = async (url, filename, folder) => {
    // const url = 'https://www.voca.vn/assets/sounds/odnnfdtxvgg2qgz7w3p9qc4bmwcvkggknksb8f9ly.mp3'

    const path = Path.resolve(__dirname, folder, filename)
    const writer = Fs.createWriteStream(path)

    const response = await Axios({
        url,
        method: 'GET',
        responseType: 'stream'
    })

    response.data.pipe(writer)

    return new Promise((resolve, reject) => {
        writer.on('finish', resolve)
        writer.on('error', reject)
    })
}

const getPath = (path) => {
    return Path.parse(path)
}

const crawlData = async (url) => {
    await nightmare.goto(url)
        .wait(5000)
        .evaluate(async () => {
            try {
                const totalItem = document.getElementsByClassName('item-cover').length
                const data = {
                    title: document.getElementsByTagName('h1')[0].innerText,
                    vocabulary: []
                }
                for (let i = 0; i < totalItem - 1; i++) {
                    data.vocabulary.push({
                        en: document.getElementsByClassName('item-text')[i].innerText,
                        pronounce: document.getElementsByClassName('item-pronounce')[i].innerText,
                        vi: document.getElementsByClassName('item-text-vi')[i].innerText,
                        image: document.getElementsByClassName('item-image')[i].src,
                        sound: document.getElementsByClassName('item-sound')[i].attributes.sound_url.value,
                        example: document.getElementsByClassName('item-example')[i].innerText
                    })
                }

                return data
            } catch (err) {
                console.log(err)
            }
        })
        .then(async (data) => {
            try {
                const { vocabulary } = data;
                await Promise.all(vocabulary.map(ele => {
                    const { image, sound } = ele;
                    let urlImage = getPath(image)
                    let urlSound = getPath(sound)
                    return (
                        downloadImage(`${urlImage.dir}/${urlImage.base}`, urlImage.base, 'images'),
                        downloadImage(`${urlSound.dir}/${urlSound.base}`, urlSound.base, 'sound')
                    )
                }))
                vocabulary.map((data, index) => {
                    const { image, sound } = data;
                    let urlImage = getPath(image)
                    let urlSound = getPath(sound)
                    data.stt = index
                    data.image = urlImage.base
                    data.sound = urlSound.base
                    return data
                })
                const pathData = getPath(url).base
                const cutPath = pathData.slice(-pathData.length, -4)
                await Fs.writeFileSync(`${__dirname}/data/${cutPath}.json`, JSON.stringify(data));
                return
            } catch (err) {
                console.log(err)
            }
        })
        .catch(err => console.log(err))
}



const runCrawl = async (level) => {
    let totalPage = listLink.length + 1
  
    if (totalPage === level) {
        nightmare.end()
        return
    }
    console.log(totalPage === level)
    console.log(listLink[level - 1])
    setTimeout(async () => {
        await crawlData(listLink[level - 1])
        await runCrawl(level + 1)
    }, 1000);
}
runCrawl(1)




