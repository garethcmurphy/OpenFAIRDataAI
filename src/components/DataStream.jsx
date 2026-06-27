import { useState, useCallback } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import './DataStream.css'

function generateDataStream() {
  const data = []
  let cumSum = 0
  for (let i = 0; i < 100; i++) {
    cumSum += (Math.random() - 0.5) * 2
    data.push({ time: i, value: parseFloat(cumSum.toFixed(4)) })
  }
  return data
}

function DataStream() {
  const [data, setData] = useState(() => generateDataStream())

  const handleRefresh = useCallback(() => {
    setData(generateDataStream())
  }, [])

  return (
    <section className="data-stream">
      <h2 className="section-title">Data Stream Plot</h2>
      <p className="section-subtitle">
        A simulated random walk data stream updated on demand.
      </p>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="time"
            label={{ value: 'Time', position: 'insideBottomRight', offset: -5 }}
          />
          <YAxis
            label={{ value: 'Value', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#1a73e8"
            dot={false}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <button className="refresh-btn" onClick={handleRefresh}>
        Generate New Stream
      </button>
    </section>
  )
}

export default DataStream
