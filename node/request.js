const request = require('request');
const fs = require('fs');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const zzxxxc = [
    'http://www.88dushu.com/xiaoshuo/69/69252/',
]

let bookLists = [];
let bookName = '';
let m = 0;
hrefs();

function hrefs() {
    if (m < zzxxxc.length) {
        request.get({
            url: zzxxxc[m],
            encoding: null,
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
                'Cache-Control': 'max-age=0',
                'Connection': 'keep-alive',
                'Cookie': 'Hm_lvt_b962ca1dfd40d002f593299845383c36=1537930798; Hm_lpvt_b962ca1dfd40d002f593299845383c36=1537943178',
                'Host': ' www.88dus.com',
                'Upgrade-Insecure-Requests': 1,
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.81 Safari/537.36'
            }
        }, (err, res, body) => {
            if (!err && res.statusCode == 200) {
                var html = iconv.decode(body, 'gb2312').toString(); //解码gb2312
                const $ = cheerio.load(html);
                var ddsli = {};
                let result = $('.mulu').find('li');
                bookName = $('.rt h1').text();
                let key = '';
                result.each((i, elem) => {
                    let $hrefTag = $(elem).find('a') || false;
                    if ($hrefTag) {
                        $hrefTag.each((i, elem) => {
                            let bookCharInfo = {};
                            if ($(elem).text().trim() !== '插图') {
                                bookCharInfo.charName = $(elem).text().trim();
                                bookCharInfo.charUrl = zzxxxc[m] + $(elem).attr('href');
                                bookLists.push(bookCharInfo);
                            }
                        })
                    }
                });
                m++;
                txWord();
            }
        })
    } else {
        return '';
    }
}

let i = 0;

function txWord() {
    let hrefUrls = bookLists[i].charUrl;
    request.get({
        url: hrefUrls,
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36',
        },
        encoding: null
    }, (err, res, body) => {
        if (res && res.statusCode == 200) {
            const html1 = iconv.decode(body, 'gb2312').toString();
            const $ = cheerio.load(html1);
            var bokname = $('.novel h1').text() + '.'.replace(/./g, '\n');
            var contentTxt = $('.yd_text2').text().trim().replace(/\s/g, "").replace(/。/g, '。\n') + '.'.replace(/./g, '\r\n');
            fs.appendFile('./books/' + bookName + '.txt', (bokname + contentTxt), function (err) {
                if (err) {} else {
                    if (i < bookLists.length - 1) {
                        i++;
                        console.log('开始下载==>' + bokname.replace(/[\r\n]/g, ""));
                        txWord();
                    } else {
                        console.log('下载完成,进入下一本');
                        hrefs();
                    }
                }
            });
        } else {
            txWord();
        }
    })
}

function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, '').replace(/ /g, '');
}