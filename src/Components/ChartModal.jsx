import Button from "react-bootstrap/Button";
import ReactApexChart from "react-apexcharts";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ChartModal.css";

const pieData = {
  series: [44, 55, 41, 17, 15],

  options: {
    chart: {
      type: "donut",
    },
    labels: ["New Delhi", "Mumbai", "Bangalore", "Pune", "Chennai"],
    responsive: [
      {
        breakpoint: 700,
        options: {
          chart: {
            width: 380,
            position: "center",
          },
          legend: {
            position: "bottom",
            horizontalAlign: "left",
            width: 120,
          },
        },
      },
    ],
  },
};

const barData = {
  series: [
    {
      data: [32, 28, 25, 12, 19],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ["New Delhi", "Mumbai", "Bangalore", "Pune", "Chennai"],
    },
  },
};

const lineData = {
  series: [
    {
      name: "High - 2023",
      data: [33, 29, 25, 32, 38],
    },
    {
      name: "Low - 2023",
      data: [9, 11, 14, 10, 18],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "line",
      dropShadow: {
        enabled: true,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#77B6EA", "#545454"],
    dataLabels: {
      enabled: true,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "In Celcius",
      align: "left",
    },

    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    markers: {
      size: 1,
    },
    xaxis: {
      categories: ["New Delhi", "Mumbai", "Bangalore", "Pune", "Chennai"],
      title: {
        text: "Cities",
      },
    },
    yaxis: {
      title: {
        text: "Temperature",
      },
      min: 5,
      max: 40,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  },
};

function ChartModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Cities Data Overview
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column align-items-cemter flex-md-row justify-content-center flex-wrap">
        <div className="pie-container mb-3">
          <h4 className="text-center">Tourist Percentage</h4>
          <div id="chart">
            <ReactApexChart
              options={pieData.options}
              series={pieData.series}
              type="donut"
            />
          </div>
        </div>
        <div className="pie-container mb-3">
          <h4 className="text-center">Population in Million</h4>
          <div id="chart">
            <ReactApexChart
              options={barData.options}
              series={barData.series}
              type="bar"
            />
          </div>
        </div>
        <div className="w-100 mb-3">
          <h4 className="text-center">Average High & Low Temperature</h4>
          <div id="chart">
            <ReactApexChart
              options={lineData.options}
              series={lineData.series}
              type="line"
              height={350}
            />
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ChartModal;
