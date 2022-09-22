import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Text from "../../components/Text";
import { FixedSizeList as List } from "react-window";
import Calendar from "../../components/Calendar";
import { ITrend, TREND_LIST } from "../../static/data/data";

const CalendarPage = () => {
  const [trends, setTrends] = useState<ITrend[]>([]);
  useEffect(() => {
    setTrends(TREND_LIST);
  }, []);

  const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <CalendarContainer>
      <DayWrapper>
        {weeks.map((day, index) => (
          <Text key={`${index}_${day}`} color="#868a90">
            {day}
          </Text>
        ))}
      </DayWrapper>
      {trends ? (
        <List
          height={390}
          itemCount={trends.length}
          width={"100%"}
          itemSize={390}
          initialScrollOffset={390 * trends.length}
          itemData={trends}
        >
          {Calendar}
        </List>
      ) : null}
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
