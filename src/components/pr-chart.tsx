'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Mon', PRs: 3 },
  { name: 'Tue', PRs: 7 },
  { name: 'Wed', PRs: 4 },
  { name: 'Thu', PRs: 6 },
  { name: 'Fri', PRs: 2 },
]

export function PRChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="PRs" stroke="currentColor" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
