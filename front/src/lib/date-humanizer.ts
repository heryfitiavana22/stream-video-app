import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export class DateHumanizer {
  static duration(d: InputDate) {
    const tmp = dayjs.duration(d, "seconds");
    if (tmp.hours() > 0) return tmp.format("H:m:ss");
    return tmp.format("m:ss");
  }
}

type InputDate = number;
