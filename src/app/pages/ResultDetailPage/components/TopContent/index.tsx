import React from "react";
import { Bar, BarChart, Cell, ResponsiveContainer, XAxis } from "recharts";
import styled from "styled-components";
import { ItemBoxText } from "../..";
import Text from "../../../../components/Text";
interface ITopContent {
  data: { uv: number; name: string | number }[];
}
const TopContent = (props: ITopContent) => {
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

  const { data } = props;
  return (
    <TopContentContainer>
      <ResponsiveContainer height="70%" width="90%">
        <BarChart width={300} height={300} data={data} compact={true}>
          <XAxis dataKey="name" interval={10} />
          <Bar dataKey="uv" isAnimationActive={false}>
            {data.map((entry: any, index: any) => {
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
      <IndexContainer>
        <IndexBox>
          <IndexColor color={"#344f5b"} />
          <ItemBoxText>
            <Text size={13}>숙면</Text>
            <Text size={13}>0:21</Text>
          </ItemBoxText>
        </IndexBox>
        <IndexBox>
          <IndexColor color={"#4b9488"} />
          <ItemBoxText>
            <Text size={13}>저강도</Text>
            <Text size={13}>0:12</Text>
          </ItemBoxText>
        </IndexBox>
        <IndexBox>
          <IndexColor color={"#caa36e"} />
          <ItemBoxText>
            <Text size={13}>큼</Text>
            <Text size={13}>0:40</Text>
          </ItemBoxText>
        </IndexBox>
        <IndexBox>
          <IndexColor color={"#cf673c"} />
          <ItemBoxText>
            <Text size={13}>매우 큼</Text>
            <Text size={13}>0:24</Text>
          </ItemBoxText>
        </IndexBox>
      </IndexContainer>
    </TopContentContainer>
  );
};
const TopContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const IndexContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 95%;
`;
const IndexBox = styled.div`
  display: flex;
`;
const IndexColor = styled.div<{ color: string }>`
  width: 6px;
  height: 32px;
  background-color: ${({ color }) => color};
`;
export default TopContent;
