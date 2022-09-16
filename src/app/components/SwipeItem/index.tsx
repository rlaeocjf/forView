import React, { memo, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useSpring, animated, interpolate } from "react-spring";
import { useGesture, vector2 } from "react-with-gesture";
import { IoTrashOutline } from "react-icons/io5";

interface ISwipeItem {
  id: number;
  children: JSX.Element;
  onSwipe?: () => void;
  onClick?: () => void;
  onBgClick?: (id: number) => void;
}
export const SwipeItem = memo(
  ({ id, children, onSwipe, onClick, onBgClick }: ISwipeItem) => {
    const getXPosition = (down: boolean, delta: vector2) => {
      //우측 스와이프 방지
      if (delta[0] > 0) {
        return 0;
      }
      if (down && Math.abs(delta[0]) < overlayWidth) {
        //if (x !== 0 && x === overlayWidth) {
        return delta[0];
      } else if (
        !down &&
        Math.abs(delta[0]) > 100 &&
        Math.abs(delta[0]) < overlayWidth
      ) {
        //return delta[0] > 0 ? overlayWidth : -overlayWidth;
        // return delta[0];
        return -110;
      }
      return 0;
    };
    const [overlayHeight, setOverlayHeight] = useState(0);
    const [overlayWidth, setOverlayWidth] = useState(0);

    const ref = useRef<HTMLDivElement>(null);

    const [bind, { delta, down }] = useGesture();
    const { x } = useSpring({
      x: getXPosition(down, delta),
      // immediate: (name) => down && name === "x"
    });
    const iconSize = x.interpolate({
      map: Math.abs,
      range: [50, 50],
      output: ["scale(0.5)", "scale(1)"],
      extrapolate: "clamp",
    });

    useEffect(() => {
      if (ref && ref.current) {
        setOverlayHeight(ref.current.clientHeight);
        setOverlayWidth(ref.current.offsetWidth);
      }
    }, [overlayHeight, overlayWidth]);

    return (
      <BackgourndIconWrapper
        {...bind()}
        style={{
          height: overlayHeight,
          // width: overlayWidth,
          width: "100%",
          // background: delta[0] > 0 ? "#08851b" : "#c71610",
          // justifyContent: delta[0] > 0 ? "flex-start" : "flex-end",
          backgroundColor: "#d66a3e",
          justifyContent: "flex-start",
        }}
      >
        <BackgroundIcon
        // style={{
        //   transform: iconSize,
        // }}
        >
          {/* {delta[0] > 0 ? <div>left</div> : <div>right</div>} */}
          <IoTrashOutline
            color="#fff"
            size={30}
            onClick={() => {
              onBgClick && onBgClick(id);
            }}
          />
        </BackgroundIcon>
        <Silder
          ref={ref}
          onClick={() => {
            interpolate([x], (x) => {
              if (Math.abs(x) === 0 && onClick) {
                onClick();
              }
            });
          }}
          style={{
            transform: interpolate([x], (x) => {
              //if (x !== 0 && x === overlayWidth) {
              if (x !== 0 && Math.abs(x) > 100) {
                onSwipe && onSwipe();
              }
              // return `translate3d(${x}px,0,0)`;
              return `translateX(${x}px)`;
            }),
          }}
        >
          {children}
        </Silder>
      </BackgourndIconWrapper>
    );
  }
);
const BackgourndIconWrapper = styled(animated.div)`
  position: relative;
  pointer-events: auto;
  transform-origin: 50% 50% 0px;
  box-sizing: border-box;
  display: flex;
`;
const BackgroundIcon = styled(animated.div)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  padding-right: 35px;
`;
const Silder = styled(animated.div)`
  background-color: #1a1b20;
  position: absolute;
  overflow: auto;
  width: 100%;
`;
export default SwipeItem;
