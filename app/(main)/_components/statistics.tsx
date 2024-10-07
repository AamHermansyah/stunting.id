import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const data = [
  {
    percentColor: 'text-red-500',
    percent: '40%',
    title: 'Terkena Stunting',
    description: 'Angka ini menunjukkan bahwa masih ada sejumlah besar anak yang rentan terhadap stunting dan membutuhkan perhatian serius dalam hal pemenuhan gizi.',
  },
  {
    percentColor: 'text-primary',
    percent: '30%',
    title: 'Sehat & Bebas dari Stunting',
    description: 'Adanya upaya yang telah dilakukan dalam meningkatkan kesadaran akan pentingnya gizi yang baik serta upaya pencegahan stunting di kalangan masyarakat dan pemerintah setempat.',
  },
  {
    percentColor: 'text-gray-400',
    percent: '30%',
    title: 'Belum Terdata',
    description: 'Hal ini menunjukkan adanya kelompok anak yang mungkin belum teridentifikasi dan membutuhkan perhatian khusus.',
  },
]

const Statistics = () => {
  return (
    <section id="statistics" className="mt-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-10">
        {data.map((item, index) => (
          <Card key={index} className="pt-4">
            <CardContent>
              <h1 className={cn('text-4xl font-bold', item.percentColor)}>
                {item.percent}
              </h1>
              <h4 className="my-1 text-lg font-semibold">
                {item.title}
              </h4>
              <CardDescription>
                {item.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Statistics