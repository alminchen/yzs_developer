var superagent = require('superagent');
var cheerio = require('cheerio');
var async = require('async');

console.log('爬虫程序正在启动中。。。。。');
var url = 'http://www.shouce.ren/api/index';

superagent
    .get(url)
    .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8')
    .end(function (err, res) {
        if (err || !res) {
            console.log('抓取失败。。。。');
            return;
        };
        var $ = cheerio.load(res.text);
        var data = [];
        var host = 'www.shouce.ren';
        $('#bs-navbar-collapse .width-134').each(function (key, item) {
            var title = $(item).text();
            var address = host + $(item).attr('href');
            if (title.trim() && address.trim()) {
                data.push({
                    'title': title,
                    'address': address
                });
            }
        });
        var parallel_request_qty = 500;
        if (data.length > 0) {
            check_url_access(parallel_request_qty, data);
        }
    })

function check_url_access(parallel_request_qty, data) {
    async.mapLimit(data, parallel_request_qty, function (item, callback) {
        var addr = item.address;
        var name = item.title;
        superagent
            .get(addr)
            .set('Accept', 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8')
            .end(function (err, res) {
                if (err || !res) {
                    callback('访问URL失败:' + addr)
                } else {
                    console.log(
                        '文档名称为:' + name +
                        '，文档地址为:' + addr +
                        '，可以成功访问'
                    );
                    callback(null,null)
                }
            })
    },function(err,result){
        if(err){
            console.log(err)
        }
    })
}