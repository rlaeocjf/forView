import React from "react";
import styled from "styled-components";
import {
  IoList,
  IoSettingsOutline,
  IoAlarmOutline,
  IoBedOutline,
} from "react-icons/io5";
import { TbActivity } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, Cell, ResponsiveContainer } from "recharts";
import Text from "../../components/Text";
import { IconContext } from "react-icons/lib";
import IconWrapper from "../../components/IconWrapper";
// import { IconContext } from "react-icons";

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
        <IoList color="#2d99cd" size={30} onClick={goList} />
        <HeaderTitle>8월 19일 금요일</HeaderTitle>
        <IoSettingsOutline color="#2d99cd" size={25} />
      </Header>
      <TopWrapper>
        <ResponsiveContainer height="70%" width="90%">
          <BarChart width={300} height={300} data={barChartdata} compact={true}>
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
      </TopWrapper>
      <Divider>세션 통계</Divider>
      <BottomWrapper>
        <BottomLeft>
          <ItemBox>
            <IconWrapper size={60} color={"#2e333c"}>
              <IoAlarmOutline color="#fff" size={40} />
            </IconWrapper>
            <ItemBoxText>
              <Text color="#949597" size={14}>
                시작/종료
              </Text>
              <Text marginTop={3} size={21}>
                10:37 - 11:55
              </Text>
            </ItemBoxText>
          </ItemBox>
          <ItemBox>
            <IconWrapper size={60} color={"#2e333c"}>
              <IoBedOutline color="#fff" size={40} />
            </IconWrapper>
            <ItemBoxText>
              <Text color="#949597" size={14}>
                수면 시간
              </Text>
              <Text marginTop={3} size={21}>
                1시간 17분
              </Text>
            </ItemBoxText>
          </ItemBox>
          <ItemBox>
            <IconWrapper size={60} color={"#2e333c"}>
              <TbActivity color="#fff" size={40} />
            </IconWrapper>
            <ItemBoxText>
              <Text color="#949597" size={14}>
                코골이 시간
              </Text>
              <Text marginTop={3} size={21}>
                36분 - 55%
              </Text>
            </ItemBoxText>
          </ItemBox>
        </BottomLeft>
      </BottomWrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex: 1;
  background: linear-gradient(#1a1b20, #1c2026);
  width: 100%;
  height: 100vh;
  flex-direction: column;
  box-sizing: border-box;
`;
const Header = styled.div`
  display: flex;
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
const TopWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid #606266;
`;
const BottomWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;
const BottomLeft = styled.div``;
const ItemBox = styled.div`
  display: flex;
  margin: 5px 0 15px 0;
  align-items: center;
`;
const ItemBoxText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const Divider = styled.div`
  position: relative;
  bottom: 22px;
  width: 90%;
  height: 40px;
  border: 1px solid #606266;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #191a1f;
  text-align: center;
  line-height: 40px;
  color: #afb0b2;
  font-weight: 500;
`;
export default ResultDetailPage;
