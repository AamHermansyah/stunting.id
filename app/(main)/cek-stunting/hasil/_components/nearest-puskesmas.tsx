import CardPuskesmas from "@/components/shared/card-puskesmas"

function NearestPuskesmas() {
  return (
    <div>
      <h4 className="text-2xl font-bold">Puskesmas Terdekat</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {[1, 2, 3, 4].map((item) => (
          <CardPuskesmas key={item} />
        ))}
      </div>
    </div>
  )
}

export default NearestPuskesmas