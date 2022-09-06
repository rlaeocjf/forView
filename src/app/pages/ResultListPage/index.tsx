import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTrash } from "@fortawesome/free-solid-svg-icons";
import { BarChart, Bar, PieChart, Pie, Cell, Label } from "recharts";

function ResultListPage() {
  const data = [
    {
      data: "19일 (금)",
      time: "0시간 48분",
    },
    {
      data: "19일 (금)",
      time: "1시간 47분",
    },
    {
      data: "16일 (화)",
      time: "1시간 27분",
    },
    {
      data: "15일 (월)",
      time: "7시간 12분",
    },
    {
      data: "14일 (일)",
      time: "3시간 48분",
    },
    {
      data: "14일 (일)",
      time: "3시간 48분",
    },
    {
      data: "14일 (일)",
      time: "3시간 48분",
    },
    {
      data: "14일 (일)",
      time: "3시간 48분",
    },
  ];

  const barChartdata: any = [];
  for (let i = 0; i < 20; i++) {
    barChartdata.push({
      // low: Math.floor(Math.random() * 100),
      // middle: Math.floor(Math.random() * 100),
      // high: Math.floor(Math.random() * 100),
      uv: Math.floor(Math.random() * 100),
    });
  }
  const pieChartdata = [
    { name: "Group A", value: Math.floor(Math.random() * 100) },
    { name: "Group B", value: Math.floor(Math.random() * 100) },
    { name: "Group C", value: Math.floor(Math.random() * 100) },
  ];
  const PIE_COLORS = ["#458b80", "#c39e6b", "#b45a36"];

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

  return (
    <Container>
      <Header>
        <FontAwesomeIcon icon={faMicrophone} color="#2d99cd" size="2x" />
        <HeaderTitle>코골이 보고서</HeaderTitle>
        <FontAwesomeIcon icon={faTrash} color="#2d99cd" size="2x" />
      </Header>
      <ListWrapper>
        <ListHeader>
          <ListHeaderLeft>
            <Text size="20px" weight="500">
              2022년 8월
            </Text>
          </ListHeaderLeft>
          <ListHeaderRight>
            <Text size="20px" weight="500" color="#a4a6a8">
              세션 4회
            </Text>
          </ListHeaderRight>
        </ListHeader>
        <ListItem>
          {data.map(() => {
            return (
              <Item>
                <DateBox>
                  <Text>19일 (금)</Text>
                  <Text>0시간 48분</Text>
                </DateBox>
                <BarChart width={150} height={80} data={barChartdata}>
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
                <PieChart width={100} height={80}>
                  <Pie
                    data={pieChartdata}
                    cx={40}
                    cy={45}
                    startAngle={210}
                    endAngle={-30}
                    innerRadius={28}
                    outerRadius={43}
                    fill="white"
                    paddingAngle={5}
                    dataKey="value"
                    isAnimationActive={false}
                  >
                    <Label value="78" position="center" fill="#fff" />
                    {pieChartdata.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={PIE_COLORS[index % PIE_COLORS.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </Item>
            );
          })}
        </ListItem>
      </ListWrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  background-color: #1a1b20;
  width: 100%;
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
const ListWrapper = styled.div``;
const ListHeader = styled.div`
  margin-top: 25px;
  height: 45px;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252930;
`;
const ListHeaderLeft = styled.div`
  margin-left: 15px;
`;
const ListHeaderRight = styled.div`
  margin-right: 15px;
`;
const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;
const Item = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 110px;
  border-bottom: 1px solid #717274;
`;
const DateBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div<{ color?: string; weight?: string; size?: string }>`
  color: ${({ color }) => (color ? `${color}` : "#FFF")};
  font-weight: ${({ weight }) => (weight ? `${weight}` : "400")};
  font-size: ${({ size }) => (size ? `${size}` : "17px")};
`;
export default ResultListPage;
