let month = prompt('Write month name ? I will say month of season')
if (month = yanvar, fevral, mart, aprel, may, iyun, iyul, avgust, sentyabr, oktyabr, dekabr) {
    console.log('xohlagan oyni yozing');
    let month1 = prompt('xohlagan oyingizni kiriting va biz qasi faslga togri keladiganini aytamiz')
    let spring;
    if (spring = mart, aprel, may) {
        console.log('ha bunaqa oy bor va bu bahor fasli');
        let summer = prompt('iyun, iyul, avgust')
    } else {
        console.log('bunday oy bahorda yoq');
    }
    let summer = iyun || iyul || avgust;
    console.log(summer);
     let autum = sentyabr || oktyabr|| noyabr;
     console.log(autum);
     let winter = dekabr || yanvar || fevral;
     console.log(winter);

} else {
console.log('bunday oy mavjud emas');
}