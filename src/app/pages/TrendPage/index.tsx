import React from "react";
import styled from "styled-components";
import { IoPlayCircleOutline, IoCalendarOutline } from "react-icons/io5";
import CalrendarPage from "../CalenrdarPage";
function TrendPage() {
  return (
    <Container>
      <Header>
        <IoPlayCircleOutline color="#2d99cd" size={33} />
        <HeaderTitle>코골이 점수</HeaderTitle>
        <IoCalendarOutline color="#2d99cd" size={30} />
      </Header>
      <CalrendarPage />
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
export default TrendPage;
