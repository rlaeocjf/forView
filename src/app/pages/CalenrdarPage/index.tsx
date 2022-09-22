import React from "react";
import styled from "styled-components";
import Text from "../../components/Text";
import { FixedSizeList as List } from "react-window";
import Calendar from "../../components/Calendar";

const CalendarPage = () => {
  const weeks = ["일", "월", "화", "수", "목", "금", "토1"];
  return (
    <CalendarContainer>
      <DayWrapper>
        {weeks.map((day, index) => (
          <Text key={`${index}_${day}`} color="#868a90">
            {day}
          </Text>
        ))}
      </DayWrapper>
      <List height={390} itemCount={100} width={"100%"} itemSize={390}>
        {Calendar}
      </List>
    </CalendarContainer>
  );
};
const CalendarContainer = styled.div`
  padding: 0 5px;
`;
const DayWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
`;
export default CalendarPage;
