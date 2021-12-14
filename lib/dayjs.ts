import dayjs from "dayjs";

import ja from "dayjs/locale/ja";
//日本に言語設定
dayjs.locale(ja);

//"YYYY年MM月DD日(dd)"にフォーマットする
export const formatYYYYMMDDdd = (date: Date | string) => {
  const dateDayjs = dayjs(date);
  return dateDayjs.format("YYYY年MM月DD日 (dd)");
};
