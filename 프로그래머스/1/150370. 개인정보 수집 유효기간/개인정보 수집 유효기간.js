function solution(today, terms, privacies) {
    const map = new Map();
    
    terms.forEach(term => {
        const [type, day] = term.split(' ');
        map.set(type, day * 28);
    })
    // console.log(map)
    
        const result = privacies.reduce((total, cur, i) => {
        const [date, type] = cur.split(' ');
        const [curYear, curMonth, curDay] = date.split('.');
        const [todayYear, todayMonth, todayDay] = today.split('.');
 
        const curDays = (+curYear * 12 * 28) + (+curMonth * 28 + +curDay);
        //개인정보 수집 일자를 일로 변환
        const todayDays = (+todayYear * 12 * 28) + (+todayMonth * 28 + +todayDay);
        //오늘 날짜를 일로 변환
        // console.log(todayDays, curDays, todayDays - curDays ,map.get(type))
        if (todayDays - curDays >= map.get(type)) total.push(i + 1);
        //계산해놓은 타입의 일수를 가져와서 비교한다
        return total;
    }, []);
    
    return result
}


/*
오늘 날짜
약관 종류 : 약관에 따른 기간
날짜 : 약관 종류

약관일은 28로 고정

약관 타입 : 약관일 * 28
타입 별로 몇일인지 계산

개인 정보 수집 일자를 일로 변환
"2021.05.02"
연 일수 + 월~일 일수
(연 * 12 * 28) + (월 * 28 + 일)

오늘 날짜를 일로 변환
"2022.05.19"
(연 * 12 * 28) + (월 * 28 + 일)

*/