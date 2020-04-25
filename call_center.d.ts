// コールセンター相談件数
import { regionInfo } from "./regionInfo";

type call_center = regionInfo & {
  // 1	受付_年月日	必須	患者情報を公表した年月日を記載。	日付（YYYY-MM-DD）
  YMD: string;
  // 5	相談件数	必須	コールセンターで受け付けた相談の件数を記載。	数値（整数）
  num: number | string;
};

export { call_center };
