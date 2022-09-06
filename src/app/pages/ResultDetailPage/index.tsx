import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGear } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { XAxis, BarChart, Bar, Cell, ResponsiveContainer } from "recharts";

const barChartdata: any = [];
for (let i = 0; i < 50; i++) {
  barChartdata.push({
    uv: Math.floor(Math.random() * 100),
  });
}

function ResultDetailPage() {
  const navigate = useNavigate();
  const getBarColor = (key: number) => {
    if (key < 30) {
      return "#498f85";
    }
    if (key >= 30 && key < 60) {
      return "#c6a06c";
    }
    if (key >= 60 && key <= 100) {
      return "#d66a3e";
    }
    return "#2d99cd";
  };

  const goList = () => {
    navigate("/results");
  };
  return (
    <Container>
      <Header>
        <FontAwesomeIcon
          icon={faList}
          color="#2d99cd"
          size="2x"
          onClick={goList}
        />
        <HeaderTitle>8월 19일 금요일</HeaderTitle>
        <FontAwesomeIcon
          icon={faGear}
          color="#2d99cd"
          size="2x"
          onClick={goList}
        />
      </Header>
      <ContentWrapper>
        <Top>
          <ResponsiveContainer height="70%" width="90%">
            <BarChart
              width={300}
              height={300}
              data={barChartdata}
              compact={true}
            >
              <Bar dataKey="uv" isAnimationActive={false}>
                {barChartdata.map((entry: any, index: any) => {
                  return (
                    <Cell
                      fill={getBarColor(entry["uv"])}
                      key={`barchart-${index}`}
                    />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Top>
        <Bottom></Bottom>
      </ContentWrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: #1c2026;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;
const Header = styled.div`
  display: flex;
  border-bottom: 1px solid white;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
`;
const HeaderTitle = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  width: 200px;
  text-align: center;
`;
const ContentWrapper = styled.div`
  /* background-color: #1a1b20; */
`;
const Top = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 40vh;
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
  height: 40vh;
`;

export default ResultDetailPage;
