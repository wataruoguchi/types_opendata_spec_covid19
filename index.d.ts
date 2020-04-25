/**
 * Unofficial type definitions for opendata_spec_covid19.
 *
 * - About the data spec: https://www.code4japan.org/activity/stopcovid19#doc
 *
 * ...And some other documents from Japanese govt.
 * - https://cio.go.jp/node/2594
 * - https://www.soumu.go.jp/main_content/000680542.pdf
 */

import { patients } from "./patients";
import { test_people } from "./test_people";
import { test_count } from "./test_count";
import { confirm_negative } from "./confirm_negative";
import { call_center } from "./call_center";

export { patients, test_people, test_count, confirm_negative, call_center };
