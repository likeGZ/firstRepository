/* let str = 'zhufengpeixunyangfanqihang';
//每一个字符串都是由零到多个字符组成的
str.length; //=>字符串长度
str[0]; //=>获取索引为零（第一个）字符
str[str.length - 1]; //=>获取最后一个字符str.length-1最后一项索引
str[100000]; //=>undefined 不存在这个索引 */
//循环输出字符串中的每一个字符
/* for (let i = 0; i < str.length; i++) {
    let char = str[i];
    console.log(char);
} */

/**
 * charAt：根据索引获取指定位置的字符
 * charCodeAt：获取指定字符的ASII码值（Unicode编码值）
 * @params
 *      n[number]   获取字符指定的索引
 * @return
 *      返回查找到的字符
 *      找不到返回的是空字符串不是undefined,或者对应的编码值
 */
/* let str = 'zhufengpeixunyangfanqihang';
console.log(str.charAt(0));//=>'z'
console.log(str[0]);//=>'z'
console.log(str.charAt(10000));//=>''
console.log(str[10000]);//=>undefined
console.log(str.charCodeAt(0));//=>122
console.log(str.charCodeAt(1000));//=>NaN
console.log(String.fromCharCode(122));//=>'z' */

/**
 * 都是为了实现字符串的截取（在原来字符中查找到自己想要的）
 *      substr(n,m)：从索引n开始截取m个字符,m不写截取到末尾（后面方法也是）
 *      substring(n,m)：从索引n开始找到索引为m处（不含m）
 *      slice：和substring一样，都是找到索引为m处,但是slice可以支持负数作为索引，其余两个方法是不可以的
 */
/* let str = 'zhufengpeixunyangfanqihang';
console.log(str.substr(3, 7)); //=>"fengpei"
console.log(str.substring(3, 7)); //=>"feng"
console.log(str.substr(3)); //=>"fengpeixunyangfanqihang" 截取到末尾
console.log(str.substring(3, 10000)); //=>"fengpeixunyangfanqihang" 截取到末尾（超过索引的只截取到末尾）
console.log(str.substring(-7, -3)); //=>'' substring不支持负数索引
console.log(str.slice(-7, -3)); //=>'ngih' slice支持负数索引 =>快捷查找：负数索引，我们可以按照str.length+负索引的方法找=>slice(26-7，26-3)=>slice(19,23) */

/**
 * 验证字符是否存在
 *      indexOf(x,y)：获取x第一次出现位置的索引，y是控制查找的起始位置索引
 *      lastIndexOf(x)：最后一次出现位置的索引
 *      =>没有这个字符，返回的结果是-1
 * 
 */
/* let str = 'zhufengpeixunyangfanqihang';
console.log(str.indexOf('n')); //=>5
console.log(str.lastIndexOf('n')); //=>24

console.log(str.indexOf('@')); //=>-1 不存在返回-1
if (str.indexOf('@') === -1) {
    //字符串中不包含@这个字符
}

console.log(str.indexOf('feng')); //=>3  验证整体第一次出现的位置，返回的索引是第一个字符所在位置的索引
console.log(str.indexOf('peiy')); //=>-1
console.log(str.indexOf('n', 7)); //=>12 查找字符串索引7及之后的字符串中，n第一次出现的位置索引

if (!str.includes('@')) {
    console.log('当前字符串不包含@');
} */

/**
 * 字符串中字母的大小写转换
 *      toUpperCase()：转大写
 *      toLowerCase()：转小写
 */
/* let str = 'zhufengpeixunyangfanqihang';
str = str.toUpperCase();//=>'ZHUFENGPEIXUNYANGFANQIHANG'
console.log(str);

str = str.toLowerCase();
console.log(str);//=>'zhufengpeixunyangfanqihang‘

//实现首字母大写
str = str.substr(0, 1).toUpperCase() + str.substr(1);
console.log(str);//=>'Zhufengpeixunyangfanqihang'
 */
/**
 * spilt([分隔符])：把字符串按照指定的分隔符拆分为数组（和数组join对应）
 * split支持传递正则表达式     
 */
//需求：把|分隔符变为,分隔符
/* let str = 'music|movie|eat|sport';
let ary = str.split('|'); //=>['music', 'movie', 'eat', 'sport']
str = ary.join(',');
console.log(str); //=>'music,movie,eat,sport' */

/**
 * replace(老字符,新字符)：实现字符串的替换（经常伴随着正则而用）
 */
/* let str = '珠峰@培训@杨帆@起航';
str = str.replace('@', '-');
console.log(str);//=>'珠峰-培训@杨帆@起航' 在不使用正则表达式的情况下，执行一次replace只能替换一次字符

str=str.replace(/@/g,'-');
console.log(str);//=>'珠峰-培训-杨帆-起航' */

/* let time = '2024-4-6 15:58:50'; */
//=>变为自己需要呈现的格式：例如：
// "2024年04月06日 15时58分50秒"
// "2024年04月06日"
// "04/06 15:58"

/**
 * 方案一：replace
 */
/* time = time.replace('-', '年').replace('-', '月').replace(' ', '日 ').replace(':', '时').replace(':', '分') + '秒';
console.log(time); */

/**
 * 方案二：获取到年月日小时分钟秒这几个值后，最后想拼成什么效果就拼成什么效果
 */

//不足十位补零
/* let addZero = val => {
    if (val.length < 2) {
        val = '0' + val;
    }
    return val;
} */

/* let addZero = val => val.length < 2 ? '0' + val : val;

//获取值的方法：基于split加上正则
let ary = time.split(/(?: |-|:)/g); //=>['2024', '4', '6', '15', '58', '50']
time = ary[0] + '年' + addZero(ary[1]) + '月' + addZero(ary[2]) + '日';
console.log(time); */
//获取值的方法：基于split一项项的拆分
/* let n = time.split(' ');//=>['2024-4-6', '15:58:50']
let m=n[0].split('-');//=>['2024', '4', '6']
let x=n[1].split(':');//=>['15', '58', '50']
console.log(x); */

//获取值的方法：基于indexOf获取指定符号索引，基于substring一点点截
/* let n = time.indexOf('-');
let m = time.lastIndexOf('-');
let x = time.indexOf(' ');
let y = time.indexOf(':');
let z = time.lastIndexOf(':');
let year = time.substring(0, n);
let month = time.substring(n + 1, m);
let day = time.substring(m + 1, x);
time = year + '年' + month + '月' + day + '日';
console.log(time); */

//================================queryURLParameters


/* let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=like#box'; */
/**
 * 结果：{
 *      lx:1,
 *      name:'zhufeng',
 *      teacher:'like',
 *      HASH:'box'
 * }
 */

//1.获取问号后面的值
/* let askIndex = url.indexOf('?');
let wellIndex = url.indexOf('#');
let askText = url.substring(askIndex + 1, wellIndex);
let wellText = url.substring(wellIndex + 1);
//askText=>'lx=1&name=zhufeng&teacher=like'
//wellText=>'box'
//2.问号后面值的详细处理
let askAry = askText.split('&');
//=>['lx=1', 'name=zhufeng', 'teacher=like']
let result = {};
askAry.forEach(item => {
    //item：当前从数组中循环的这一项

    let itemAry = item.split('=');
    let key = itemAry[0];
    let value = itemAry[1];
    result[key] = value;
})
result['HASH'] = wellText;
console.log(result); */

/**
 * queryURLParams：获取URL地址中问号传参的信息和哈希值
 *      @params
 *          url [string] 要解析的URL字符串
 *      @return
 *          [object]  包含参数和哈希值信息的对象
 * by like on 2024/04/06
 */

function queryURLParams(url) {
    //1.获取?和#后面的信息
    let askIn = url.indexOf('?'),
        wellIn = url.indexOf('#'),
        askText = '',
        wellText = '';
    //如果#不存在
    wellIn === -1 ? wellIn = url.length : null;
    //？存在
    askIn >= 0 ? askText = url.substring(askIn + 1, wellIn) : null;
    wellText = url.substring(wellIn + 1);

    //2.获取每一部分信息
    let result = {};
    wellText !== '' ? result['HASH'] = wellText : null;
    if (askText !== '') {
        let ary = askText.split('&');
        ary.forEach(item => {
            let itemAry = item.split('=');
            result[itemAry[0]] = itemAry[1];
        })
    }
    return result;

}

function queryURLParameters() {
    let result = {},
        reg1 = /([^?=&#]+)=([^?=&#]+)/g,
        reg2 = /#([^?=&#]+)/g;
    url.replace(reg1, (n, x, y) => result[x] = y);
    url.replace(reg2, (n, x) => result['HASH'] = x);
    return result;
}

let url = 'http://www.zhufengpeixun.cn/index.html?lx=1&name=zhufeng&teacher=like#box';

let paramsObj = queryURLParameters(url);
console.log(paramsObj);