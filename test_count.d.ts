// 検査実施件数
import { regionInfo } from "./regionInfo";

type test_count = regionInfo & {
  // 1	実施_年月日	必須	検査を実施した年月日を記載。	日付（YYYY-MM-DD）
  YMD: string;
  // 5	検査実施_件数	必須	検査を実施した件数を記載。	数値（整数）
  testedNum: number | string;
  // 6	備考		備考があれば記載。	文字列
  misc?: string;
};
export { test_count };
