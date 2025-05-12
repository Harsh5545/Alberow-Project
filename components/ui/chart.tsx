"use client"

import type * as React from "react"
import { Line, Bar, Pie, Doughnut, Radar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
  type ChartData,
  ArcElement,
  RadialLinearScale,
} from "chart.js"

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend,
  Filler,
)

// Common chart props
interface ChartProps {
  data: any[]
  index: string
  categories: string[]
  colors?: string[]
  valueFormatter?: (value: number) => string
  className?: string
}

// Line Chart Component
export function LineChart({
  data,
  index,
  categories,
  colors = ["#8b5cf6", "#ec4899", "#10b981", "#3b82f6", "#f97316"],
  valueFormatter = (value: number) => `${value}`,
  className,
}: ChartProps) {
  const chartData: ChartData<"line"> = {
    labels: data.map((item) => item[index]),
    datasets: categories.map((category, i) => ({
      label: category,
      data: data.map((item) => item[category]),
      borderColor: colors[i % colors.length],
      backgroundColor: `${colors[i % colors.length]}33`,
      tension: 0.3,
      fill: false,
      pointBackgroundColor: colors[i % colors.length],
      pointBorderColor: "#fff",
      pointBorderWidth: 1,
      pointRadius: 4,
      pointHoverRadius: 6,
    })),
  }

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || ""
            const value = valueFormatter(context.parsed.y)
            return `${label}: ${value}`
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [2, 4],
          color: "#e5e7eb",
        },
        ticks: {
          callback: (value) => valueFormatter(value as number),
        },
      },
    },
  }

  return <Line data={chartData} options={options} className={className} />
}

// Bar Chart Component
export function BarChart({
  data,
  index,
  categories,
  colors = ["#8b5cf6", "#ec4899", "#10b981", "#3b82f6", "#f97316"],
  valueFormatter = (value: number) => `${value}`,
  className,
}: ChartProps) {
  const chartData: ChartData<"bar"> = {
    labels: data.map((item) => item[index]),
    datasets: categories.map((category, i) => ({
      label: category,
      data: data.map((item) => item[category]),
      backgroundColor: colors[i % colors.length],
      borderRadius: 4,
      barThickness: 30,
      maxBarThickness: 40,
    })),
  }

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || ""
            const value = valueFormatter(context.parsed.y)
            return `${label}: ${value}`
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          borderDash: [2, 4],
          color: "#e5e7eb",
        },
        ticks: {
          callback: (value) => valueFormatter(value as number),
        },
      },
    },
  }

  return <Bar data={chartData} options={options} className={className} />
}

// Pie Chart Component
export function PieChart({
  data,
  index,
  categories,
  colors = ["#8b5cf6", "#ec4899", "#10b981", "#3b82f6", "#f97316"],
  valueFormatter = (value: number) => `${value}`,
  className,
}: ChartProps) {
  const chartData: ChartData<"pie"> = {
    labels: data.map((item) => item[index]),
    datasets: [
      {
        data: data.map((item) => item[categories[0]]),
        backgroundColor: colors.slice(0, data.length),
        borderWidth: 1,
        borderColor: "#fff",
      },
    ],
  }

  const options: ChartOptions<"pie"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || ""
            const value = valueFormatter(context.parsed)
            return `${label}: ${value}`
          },
        },
      },
    },
  }

  return <Pie data={chartData} options={options} className={className} />
}

// Doughnut Chart Component
export function DoughnutChart({
  data,
  index,
  categories,
  colors = ["#8b5cf6", "#ec4899", "#10b981", "#3b82f6", "#f97316"],
  valueFormatter = (value: number) => `${value}`,
  className,
}: ChartProps) {
  const chartData: ChartData<"doughnut"> = {
    labels: data.map((item) => item[index]),
    datasets: [
      {
        data: data.map((item) => item[categories[0]]),
        backgroundColor: colors.slice(0, data.length),
        borderWidth: 1,
        borderColor: "#fff",
        hoverOffset: 4,
      },
    ],
  }

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "right",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || ""
            const value = valueFormatter(context.parsed)
            return `${label}: ${value}`
          },
        },
      },
    },
  }

  return <Doughnut data={chartData} options={options} className={className} />
}

// Radar Chart Component
export function RadarChart({
  data,
  index,
  categories,
  colors = ["#8b5cf6", "#ec4899", "#10b981", "#3b82f6", "#f97316"],
  valueFormatter = (value: number) => `${value}`,
  className,
}: ChartProps) {
  const chartData: ChartData<"radar"> = {
    labels: data.map((item) => item[index]),
    datasets: categories.map((category, i) => ({
      label: category,
      data: data.map((item) => item[category]),
      backgroundColor: `${colors[i % colors.length]}33`,
      borderColor: colors[i % colors.length],
      pointBackgroundColor: colors[i % colors.length],
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: colors[i % colors.length],
    })),
  }

  const options: ChartOptions<"radar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || ""
            const value = valueFormatter(context.parsed.r)
            return `${label}: ${value}`
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        ticks: {
          callback: (value) => valueFormatter(value as number),
        },
      },
    },
  }

  return <Radar data={chartData} options={options} className={className} />
}

// Chart Tooltip Component
export function ChartTooltip({ children }: { children: React.ReactNode }) {
  return <div className="bg-white p-2 rounded-md shadow-md text-sm">{children}</div>
}

// Chart Legend Component
export function ChartLegend({
  items,
  className,
}: {
  items: { label: string; color: string }[]
  className?: string
}) {
  return (
    <div className={`flex flex-wrap gap-4 ${className}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  )
}
