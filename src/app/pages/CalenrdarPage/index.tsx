import React from "react";
import styled from "styled-components";
import Text from "../../components/Text";

const CalrendarPage = () => {
  const d = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const totalDays = new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  const month = d.getFullYear() + "년" + (d.getMonth() + 1) + "월 입니다.";
  console.log(totalDays);
  return (
    <CalendarContainer>
      <DayBox>
        {days.map((day, index) => (
          <Text key={`${index}_${day}`} color="#868a90">
            {day}
          </Text>
        ))}
      </DayBox>
      <DateBox>
        {/* {totalDays.map((date) => (
          <Text size={15}>date</Text>
        ))} */}
      </DateBox>
    </CalendarContainer>
  );
};
const CalendarContainer = styled.div``;
const DayBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;
const DateBox = styled.div`
  flex-direction: row;
`;

export default CalrendarPage;
