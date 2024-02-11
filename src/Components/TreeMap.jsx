import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ChartModal from "./ChartModal";

const TreeMap = () => {
  const [modalShow, setModalShow] = useState(false);

  const statesData = {
    series: [
      {
        data: [
          {
            x: "Rajasthan",
            temp: 35,
            y: 2000000,
            fillColor: "#FF6C00",
          },
          {
            x: "Punjab",
            y: 1500000,
            temp: 16,
            fillColor: "#73B9EE",
          },

          {
            x: "Haryana",
            temp: 21,
            y: 1000000,
            fillColor: "#86CEFA",
          },
          {
            x: "Uttar Pradesh",
            y: 2500000,
            temp: 28,
            fillColor: "#FFA859",
          },
          {
            x: "Sikkim",
            y: 400000,
            temp: 12,
            fillColor: "#3373C4",
          },

          {
            x: "Jammu and Kashmir",
            y: 900000,
            temp: 8,
            fillColor: "#003396",
          },
          {
            x: "Madhya Pradesh",
            y: 2200000,
            temp: 26,
            fillColor: "#FFBE87",
          },
          {
            x: "Tamil Nadu",
            y: 1700000,
            temp: 32,
            fillColor: "#FF8100",
          },
          {
            x: "Himachal Pradesh",
            y: 1100000,
            temp: 16,
            fillColor: "#73B9EE",
          },
          {
            x: "Assam",
            y: 700000,
            temp: 11,
            fillColor: "#1750AC",
          },
          {
            x: "Bihar",
            y: 2400000,
            temp: 27,
            fillColor: "#FFB677",
          },

          {
            x: "West Bengal",
            y: 2300000,
            temp: 24,
            fillColor: "#FFBE87",
          },
          {
            x: "Nagaland",
            y: 500000,
            temp: 11,
            fillColor: "#1750AC",
          },

          {
            x: "Karnatka",
            y: 1600000,
            temp: 32,
            fillColor: "#FF8100",
          },
          {
            x: "Uttrakhand",
            y: 1100000,
            temp: 12,
            fillColor: "#3373C4",
          },
        ],
      },
    ],
    options: {
      legend: {
        show: false,
      },
      chart: {
        height: 350,
        type: "treemap",
        events: {
          click: () => {
            setModalShow(true);
          },
        },
      },
      title: {
        text: "States Treemap",
      },

      tooltip: {
        custom: function ({ seriesIndex, dataPointIndex, w }) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          return (
            "<ul>" +
            "<li><b>Population</b>: " +
            data.y +
            "</li>" +
            "<li><b>Temprature</b>: " +
            data.temp +
            "<span><sup>o</sup>C</span>" +
            "</li>" +
            "</ul>"
          );
        },
      },

      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
        },
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={statesData.options}
        series={statesData.series}
        type="treemap"
        height={350}
      />
      <ChartModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default TreeMap;
