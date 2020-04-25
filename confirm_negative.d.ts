// 陰性確認数
import { regionInfo } from "./regionInfo";

type confirm_negative = regionInfo & {
  // 1	完了_年月日	必須	陰性確認が完了した年月日を記載。	日付（YYYY-MM-DD）
  YMD: string;
  // 5	陰性確認_件数	必須	陰性確認が完了した件数を記載。	数値（整数）
  confirmedNum: number | string;
  // 6	備考		備考があれば記載。	文字列
  misc?: string;
};
export { confirm_negative };
