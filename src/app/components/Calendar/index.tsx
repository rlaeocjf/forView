import moment, { Moment } from "moment";
import React, { memo, useState } from "react";
import styled from "styled-components";
import { Cell, Label, Pie, PieChart } from "recharts";
import Text from "../Text";
import { PIE_DATA_PER_MONTH } from "../../static/data/data";
import { PIE_COLORS } from "../../pages/ResultListPage";

export const Calendar = memo(({ style }: { style: any }) => {
  const pieData = PIE_DATA_PER_MONTH;
  //오늘 날짜 세팅
  const [date, setDate] = useState<moment.Moment>(() => moment());
  //   const handleDayClick = (current: moment.Moment) => setDate(current);
  //   const returnToday = () => setDate(moment());
  const jumpToMonth = (num: number) =>
    num
      ? setDate(date.clone().add(30, "day"))
      : setDate(date.clone().subtract(30, "day"));

  // 날짜가 이번달안에 포함된 날짜인지 여부
  const inMonthDate = (current: moment.Moment, today: moment.Moment) =>
    current.format("MM") === today.format("MM") ? true : false;

  const renderMonth = () => {
    // 초기값은 오늘
    const today = date;
    // startOf('month') : 이번 달의 첫번 째 날로 설정 set to the first of this month, 12:00 am
    // week() : Week of Year. 이번 년도의 몇번째 주인가? => 3월 8일이면 10이겠죠?
    const startWeek = today.clone().startOf("month").week();

    // endOf('month').week() : 이번 달의 마지막 날로 설정 한 후 그것이 이번 년도의 몇번째 주인지 체크
    // 만약 이번 해의 첫번째 주(1월 1일이 속한 주)라면 53으로 세팅, 아니라면 그대로 유지
    // 이런 작업의 이유는 마지막 주가 첫 주가 될 수 없기 때문에 당연한 것임
    const endWeek =
      today.clone().endOf("month").week() === 1
        ? 53
        : today.clone().endOf("month").week();
    console.log(startWeek);
    console.log(endWeek);

    const calendar = [];

    // 시작 주부터 마지막 주까지 +1 씩 증가시킴
    // 이제 주마다 일을 표기해야 하므로 len이 7인 arr를 생성 후 index를 기반으로 day를 표기하자
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <>
          {Array(7)
            .fill(0)
            .map((date, index) => {
              // 오늘 => 주어진 주의 시작 => n + i일 만큼 더해서 각 주의 '일'을 표기한다.
              let current = today
                .clone()
                .week(week)
                .startOf("week")
                .add(date + index, "day");

              // 오늘이 current와 같다면 우선 '선택'으로 두자
              let isSelected =
                today.format("YYYYMMDD") === current.format("YYYYMMDD")
                  ? "selected"
                  : "";
              return (
                <DateBox>
                  {inMonthDate(current, today) ? (
                    <>
                      <Text size={13}>{current.format("D")}</Text>
                      <PieChart width={50} height={45}>
                        <Pie
                          data={pieData[index]}
                          //cy={80}
                          startAngle={210}
                          endAngle={-30}
                          innerRadius={13}
                          outerRadius={20}
                          //   fill="white"
                          paddingAngle={0}
                          dataKey="value"
                          isAnimationActive={false}
                          animationDuration={300}
                          animationBegin={150}
                        >
                          <Label
                            value={Math.floor(Math.random() * 100)}
                            position="center"
                            fill="#fff"
                            fontSize={14}
                          />
                          {pieData[index].map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={PIE_COLORS[index % PIE_COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                    </>
                  ) : null}
                </DateBox>
              );
            })}
        </>
      );
    }
    return calendar;
  };
  return <DateWrapper style={style}>{renderMonth()}</DateWrapper>;
});
const DateWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  grid-row-gap: 20px;
`;
const DateBox = styled.div`
  text-align: center;
`;

export default Calendar;
