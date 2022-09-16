import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  IoList,
  IoSettingsOutline,
  IoAlarmOutline,
  IoBedOutline,
  IoChevronBackOutline,
  IoChevronForwardOutline,
} from "react-icons/io5";
import { TbActivity } from "react-icons/tb";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Cell, PieChart, Pie, Label } from "recharts";
import IconWrapper from "../../components/IconWrapper";
import { PIE_COLORS } from "../ResultListPage";
import Text from "../../components/Text";
import { ITEST_DATA, TEST_DATA } from "../../static/data/data";
import { Swiper, SwiperProps, SwiperSlide, useSwiper } from "swiper/react";
import TopContent from "./components/TopContent";
import SwiperCore from "swiper";
import "./styles.css";
import "swiper/css";

// 스와이퍼 관련 event

// reachBeginning	(swiper)
// Event will be fired when Swiper reach its beginning (initial position)

// reachEnd	(swiper)
// Event will be fired when Swiper reach last slide

// slideChange	(swiper)
// Event will be fired when currently active slide is changed

// swiper.slideNext(speed, runCallbacks)
// Run transition to next slide.

// speed - number - Transition duration (in ms).
// runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.
// swiper.slidePrev(speed, runCallbacks)
// Run transition to previous slide.

// speed - number - Transition duration (in ms).
// runCallbacks - boolean - Set it to false (by default it is true) and transition will not produce transition events.

function ResultDetailPage() {
  const params = useParams<{ itemId: string }>();
  const location = useLocation();
  const allData = location.state as ITEST_DATA[];

  // if (params.itemId && parseInt(params.itemId)) {
  //   const itemId = parseInt(params.itemId);
  //   console.log(allData.findIndex);
  //   const index = allData.findIndex((obj) => obj.id === itemId);
  //   console.log(index);
  // }

  const [data, setData] = useState<ITEST_DATA>();
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [
    { id, start, end, barChartdata, date, noseTime, pieChartdata, time, value },
  ] = TEST_DATA.filter((item) => {
    return params.itemId ? item.id === parseInt(params.itemId) : false;
  });
  useEffect(() => {
    setData({
      id,
      start,
      end,
      barChartdata,
      date,
      noseTime,
      pieChartdata,
      time,
      value,
    });
  }, []);

  const navigate = useNavigate();
  const HandleNextSlide = () => {
    swiper?.slideNext();
  };
  const HandlePrevSlide = () => {
    swiper?.slidePrev();
  };

  const goList = () => {
    navigate("/results");
  };

  const handleSlideChange = (swiper: SwiperCore) => {
    // console.log(swiper);
  };

  return (
    <Container>
      <Header>
        <IoList color="#2d99cd" size={35} onClick={goList} />
        <IoChevronBackOutline
          size={33}
          color="#a8a8a8"
          onClick={HandlePrevSlide}
        />
        <HeaderTitle>{data?.date}</HeaderTitle>
        <IoChevronForwardOutline
          size={33}
          color="#a8a8a8"
          onClick={HandleNextSlide}
        />
        <IoSettingsOutline color="#2d99cd" size={25} />
      </Header>
      <TopWrapper>
        {data && data.barChartdata && (
          <Swiper
            onSwiper={setSwiper}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            initialSlide={1}
          >
            <SwiperSlide>111111111</SwiperSlide>
            <SwiperSlide>
              <TopContent data={data.barChartdata} />
            </SwiperSlide>
            <SwiperSlide>222222222</SwiperSlide>
          </Swiper>
        )}
      </TopWrapper>
      <Divider>세션 통계</Divider>
      <BottomWrapper>
        <BottomLeft>
          <ItemBox>
            <IconWrapper size={50} color={"#2e333c"}>
              <IoAlarmOutline color="#fff" size={35} />
            </IconWrapper>
            <ItemBoxText>
              <Text color="#949597" size={14}>
                시작/종료
              </Text>
              <Text marginTop={3} size={19}>
                {`${data?.start} - ${data?.end}`}
              </Text>
            </ItemBoxText>
          </ItemBox>
          <ItemBox>
            <IconWrapper size={50} color={"#2e333c"}>
              <IoBedOutline color="#fff" size={35} />
            </IconWrapper>
            <ItemBoxText>
              <Text color="#949597" size={14}>
                수면 시간
              </Text>
              <Text marginTop={3} size={19}>
                {time}
              </Text>
            </ItemBoxText>
          </ItemBox>
          <ItemBox>
            <IconWrapper size={50} color={"#2e333c"}>
              <TbActivity color="#fff" size={35} />
            </IconWrapper>
            <ItemBoxText>
              <Text color="#949597" size={14}>
                코골이 시간
              </Text>
              <Text marginTop={3} size={19}>
                {noseTime}
              </Text>
            </ItemBoxText>
          </ItemBox>
        </BottomLeft>
        <BottomRight>
          <PieChart width={150} height={120}>
            <Pie
              data={data?.pieChartdata}
              cy={80}
              startAngle={210}
              endAngle={-30}
              innerRadius={40}
              outerRadius={70}
              fill="white"
              paddingAngle={5}
              dataKey="value"
              isAnimationActive={true}
              animationDuration={300}
              animationBegin={150}
            >
              <Label
                value={value}
                position="center"
                fill="#fff"
                fontSize={30}
              />
              {data?.pieChartdata.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PIE_COLORS[index % PIE_COLORS.length]}
                />
              ))}
            </Pie>
          </PieChart>
        </BottomRight>
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
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
`;
const BottomLeft = styled.div``;
const BottomRight = styled.div``;
const ItemBox = styled.div`
  display: flex;
  margin: 3px 0 12px 0;
  align-items: center;
`;
export const ItemBoxText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
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
