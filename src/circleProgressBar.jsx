import React from "react";

const circleProgressBar = (props) => {
  const radius = 85;
  const dasharray = radius * Math.PI * 2;
  const dashoffset = dasharray - (dasharray * props.value) / 100;
  return (
    <div className="circleSvg">
      <svg
        width={props.circleWidth}
        height={props.circleWidth}
        viewBox={`0 0 ${props.circleWidth} ${props.circleWidth}`}
      >
        <svg viewBox="-1 5 152 199" width="400" height="415">
          <defs>
            {/* background of progression bar */}
            <linearGradient
              id="paint0_linear_222_2"
              x1="7.42636"
              y1="50.5373"
              x2="126.437"
              y2="94.5395"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FD749B" />
              <stop offset="1" stop-color="#281AC8" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_222_2"
              x1="42.7706"
              y1="50.2224"
              x2="59.3647"
              y2="-18.6748"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FD749B" />
              <stop offset="1" stop-color="#281AC8" />
            </linearGradient>
          </defs>

          <path
            opacity="0.253397"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.36384 88.618C4.36384 88.618 4.93503 85.4629 7.1812 92.8822C9.42737 100.301 34.8263 116.54 43.3284 103.389C51.8304 90.2381 63.8505 104.995 72.1538 101.048C80.457 97.1015 81.7722 91.8926 75.5832 79.3416C69.3942 66.7906 84.6183 51.4967 69.4426 41.6642C54.2669 31.8318 66.0153 34.2473 66.0153 34.2473L65.938 74.39L45.6239 92.8069L4.36384 88.618Z"
            fill="url(#paint0_linear_222_2)"
          />
          <path
            opacity="0.518059"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.5924 49.5462C64.5924 49.5462 62.8279 49.4435 66.7354 47.6932C70.643 45.9429 77.8152 30.7466 70.048 26.9222C62.2807 23.0979 69.544 15.4258 66.8254 11.0866C64.1068 6.74742 61.1685 6.37144 54.7193 10.6581C48.27 14.9448 35.828 3.4955 31.4714 12.584C27.1148 21.6725 34.5149 10.6381 34.5149 10.6381L52.6602 16.3464L64.1042 26.3673L64.5924 49.5462Z"
            fill="url(#paint1_linear_222_2)"
          />
        </svg>

        <defs>
          {/* progression bar */}
          <linearGradient id="gradient">
            <stop offset="20%" stop-color="#281AC8" />
            {/* <stop offset="50%" stop-color="#281AC8" /> */}
            <stop offset="100%" stop-color="#FD749B" />
          </linearGradient>

          {/* text inside progression bar */}
          <linearGradient id="textfill">
            <stop offset="20%" stop-color="#FC58B3" />
            <stop offset="100%" stop-color="#FEAE68" />
          </linearGradient>
        </defs>
        <circle
          cx={props.circleWidth / 2}
          cy={props.circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-background"
        />

        <circle
          cx={props.circleWidth / 2}
          cy={props.circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dasharray,
            strokeDashoffset: dashoffset
          }}
          transform={`rotate(-90 ${props.circleWidth / 2} ${
            props.circleWidth / 2
          })`}
          stroke="url(#gradient)"
        />

        <text
          fill="url(#textfill)"
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle-text"
        >
          {props.value}%
        </text>
      </svg>
    </div>
  );
};

export default circleProgressBar;
