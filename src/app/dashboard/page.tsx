import { Card, CardContent } from "@/components/ui/card"
import { StatCard } from "@/components/stat-card"
import { PRChart } from "@/components/pr-chart"

export default function DashboardPage() {
  const dummyStats = [
    { label: "Total PRs", value: 42 },
    { label: "Open PRs", value: 10 },
    { label: "Merged PRs", value: 25 },
    { label: "Closed PRs", value: 7 },
    { label: "Success Rate", value: "71%" },
    { label: "Avg Merge Time", value: "2.3 days" },
  ]

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Developer Analytics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {dummyStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>

      <Card>
        <CardContent>
          <PRChart />
        </CardContent>
      </Card>
    </div>
  )
}
