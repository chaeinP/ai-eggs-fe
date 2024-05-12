export function countDday(targetDate: string) {
  // 현재 날짜 객체 생성
  var today = new Date();

  // 타겟 날짜 객체 생성
  var target = new Date(targetDate);

  // 두 날짜 간 일수 차이 계산
  var timeDiff = target.getTime() - today.getTime();
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays;
}
