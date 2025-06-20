import { Card, CardContent } from "@/components/ui/card"

interface StatCardProps {
  label: string
  value: string | number
}

export function StatCard({ label, value }: StatCardProps) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground">{label}</div>
        <div className="text-xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}
