import { StuntingStatus } from "@/types";
import { cn } from "@/lib/utils";

type PropTypes = {
  status: StuntingStatus;
  result: string;
}

function Description({ status, result }: PropTypes) {
  let statusColor;

  switch (status) {
    case 'danger':
      statusColor = 'bg-red-500';
      break;
    case 'semi-danger':
      statusColor = 'bg-orange-400';
      break;
    default:
      statusColor = 'bg-green-500';
      break;
  }

  return (
    <div className="max-w-[900px] mx-auto">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold underline underline-offset-4 text-primary">
          Keterangan
        </h1>
        <div className="text-gray-600">
          <p className="mt-2 text-justify">
            {status === 'normal' ? 'Anak anda tergolong dalam kategori tidak mengalami stunting (normal)' : 'Anak anda tergolong dalam kategori stunting'}. Stunting adalah kondisi ketika pertumbuhan anak terhambat dan tinggi badan tidak mencapai tingkat yang sesuai dengan usianya. Kondisi ini dapat mempengaruhi kesehatan dan perkembangan balita secara keseluruhan. Penting untuk segera mengambil tindakan untuk mencegah dampak jangka panjang dari stunting ini.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-xl sm:text-2xl font-bold underline underline-offset-4 text-primary">
          Apa itu stunting?
        </h1>
        <div className="text-gray-600 space-y-3">
          <p className="mt-2 text-justify">
            Stunting adalah kondisi ketika pertumbuhan balita terhambat sehingga tinggi badan tidak sesuai dengan usianya. Hal ini biasanya terjadi pada usia anak di bawah lima tahun, yaitu masa-masa penting dalam pertumbuhan dan perkembangan fisik maupun kognitif. Stunting dapat disebabkan oleh berbagai faktor, termasuk asupan nutrisi yang kurang, infeksi berulang, dan lingkungan yang tidak sehat.
          </p>
          <div>
            <h4 className="text-lg font-bold text-gray-700">Faktor Penyebab Stunting:</h4>
            <ul className="list-decimal pl-4 sm:pl-8 text-justify">
              <li>Kurangnya asupan nutrisi, terutama protein, zat besi, dan vitamin A.</li>
              <li>Pola makan yang tidak sehat, termasuk kurangnya variasi makanan bernutrisi.</li>
              <li>Gangguan kesehatan yang berulang, seperti diare dan infeksi saluran pernapasan atas.</li>
              <li>Akses terbatas terhadap layanan kesehatan dan perawatan medis.</li>
              <li>Kondisi sanitasi dan kebersihan yang buruk.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-xl sm:text-2xl font-bold underline underline-offset-4 text-primary">
          Saran dan Tindakan Selanjutnya
        </h1>
        <div className="text-gray-600 mt-2 space-y-3 text-justify">
          <h4 className="text-lg font-bold text-gray-700">
            Apa yang Harus Dilakukan Jika Balita Terdiagnosis Stunting?
          </h4>
          <ul className="list-decimal pl-4 sm:pl-8 space-y-2">
            <li>
              <h6 className="font-bold">Konsultasi dengan Dokter atau Spesialis nutrisi:</h6>
              <p>
                Segera temui dokter atau ahli nutrisi untuk menilai kondisi kesehatan dan pertumbuhan balita secara lebih mendalam. Mereka akan memberikan penanganan dan rencana perawatan yang sesuai dengan kebutuhan anak Anda.
              </p>
            </li>
            <li>
              <h6 className="font-bold">Perhatikan Pola Makan Sehat:</h6>
              <p>
                Pastikan anak mendapatkan asupan nutrisi yang cukup dan seimbang. Berikan makanan yang kaya akan protein, karbohidrat, lemak sehat, serta vitamin dan mineral penting untuk pertumbuhan.
              </p>
            </li>
            <li>
              <h6 className="font-bold">Tingkatkan Konsumsi Sayuran dan Buah-buahan:</h6>
              <p>
                Perbanyak pemberian sayuran dan buah-buahan yang kaya akan serat dan nutrisi, serta membantu meningkatkan daya tahan tubuh balita.
              </p>
            </li>
            <li>
              <h6 className="font-bold">Ciptakan Lingkungan yang Mendukung Tumbuh Kembang: </h6>
              <p>
                Pastikan balita berada di lingkungan yang aman dan sehat, bebas dari asap rokok, polusi, dan potensi bahaya lainnya.
              </p>
            </li>
            <li>
              <h6 className="font-bold">Penuhi Kebutuhan nutrisi Selama 1000 Hari Pertama: </h6>
              <p>
                1000 hari pertama kehidupan anak (mulai dari masa kehamilan hingga dua tahun pertama kehidupan) sangat penting untuk pertumbuhan dan perkembangan anak. Pastikan balita mendapatkan nutrisi yang cukup selama periode kritis ini.
              </p>
            </li>
            <li>
              <h6 className="font-bold">Lakukan Pemeriksaan Kesehatan Berkala: </h6>
              <p>
                Rutin memeriksakan kesehatan balita ke dokter atau puskesmas untuk memantau pertumbuhan dan perkembangan anak.
              </p>
            </li>
            <li>
              <h6 className="font-bold">Ajak Bermain dan Stimulasi Perkembangan: </h6>
              <p>
                Lakukan aktivitas bermain dan stimulasi perkembangan yang sesuai dengan usia balita. Hal ini membantu meningkatkan perkembangan fisik dan kognitif anak.
              </p>
            </li>
          </ul>
          <p>
            Ingat, konsultasikan semua langkah di atas dengan tenaga medis atau ahli nutrisi agar dapat disesuaikan dengan kebutuhan khusus balita. Semakin dini tindakan diambil, semakin besar peluang untuk mengatasi stunting dan mencegah dampak jangka panjang pada kesehatan anak.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Description