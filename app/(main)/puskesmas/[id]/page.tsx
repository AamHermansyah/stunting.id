'use client'

import BackButton from '@/components/shared/back-button'
import GoogleMaps from '@/components/shared/google-maps'
import Reviews from './_components/reviews'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

function page() {
  return (
    <div>
      <BackButton />
      <div className="relative w-full h-[250px] sm:h-[300px] rounded-lg overflow-hidden">
        <img
          src="https://www.depkes.org/wp-content/uploads/2022/10/foto-outlet-puskesmas-kawalu-di-kawalu-tasikmalaya-1665542349.jpeg"
          alt="expert"
          // fill={true}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="relative -top-14 space-y-2 z-[1]">
        <div className="flex justify-between items-end">
          <div className="ml-4 sm:ml-10 relative w-28 sm:w-32 aspect-square rounded-full border-[6px] sm:border-[8px] border-white bg-gray-100 overflow-hidden">
            <img
              src="https://www.depkes.org/wp-content/uploads/2022/10/foto-puskesmas-dari-sehatnegeriku-kemkes-ri.jpg"
              alt="logo"
              // fill={true}
              className="object-cover w-full h-full"
            />
          </div>
          <Button>Mulai Konsultasi</Button>
        </div>
        <div className="pt-4 md:pt-0">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">
            UPTD Puskesmas Kawalu
          </h1>
          <span className="flex text-sm gap-2 text-gray-500">
            <IoLocationSharp fontSize={24} /> J6G7+W57, Jl. Perintis Kemerdekaan, Karsamenak, Kec. Kawalu, Kab. Tasikmalaya, Jawa Barat 46151
          </span>
        </div>
        <div className="pt-4">
          <div className="bg-gradient-to-tr from-primary to-sky-500 rounded p-4 max-w-sm">
            <div className="w-full flex items-center gap-4">
              <div className="relative w-20 aspect-square rounded-full bg-gray-100 overflow-hidden">
                <Image
                  src="/images/doctor-icon.jpg"
                  alt="logo"
                  fill={true}
                  className="object-contain"
                />
              </div>
              <div className="col-span-2">
                <span className="text-white font-bold text-sm">Terdapat</span>
                <h3 className="text-white font-bold">
                  <span className="inline-block text-4xl">01</span> Tenaga Ahli nutrisi
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4">
          <h1 className="text-xl font-semibold py-2">Deskripsi</h1>
          <div id="article-detail">
            <p>
              Salah satu puskesmas di Kota Tasikmalaya melayani pemeriksaan kesehatan, rujukan, surat kesehatan dll. Puskesmas ini melayani berbagai program puskesmas seperti periksa kesehatan (check up), pembuatan surat keterangan sehat, rawat jalan, lepas jahitan, ganti balutan, jahit luka, cabut gigi, periksan tensi, tes hamil, periksa anak, tes golongan darah, asam urat, kolesterol dan lainnya. Puskesmas juga melayani pembuatan rujukan bagi pasien BPJS ke rumah sakit untuk mendapatkan perawatan lanjutan.
            </p>
            <p>
              Pelayanan Uptd Puskesmas Kawalu juga baik dengan tenaga kesehatan yang baik, mulai dari perawat, dokter, alat kesehatan dan obatnya. Puskesmas ini dapat menjadi salah satu pilihan warga masyarakat Kota Tasikmalaya untuk memenuhi kebutuhan terkait kesehatan.
            </p>
            <p>
              Segera kunjungi puskesmas terdekat ini pada jam buka untuk informasi lebih lanjut, atau bisa juga juga mengakses puskesmas online melalui website dan telepon jika tersedia.
            </p>
            <p>
              Jam buka / jam kerja:
            </p>
            <ul>
              <li>Senin: 8:00 AM - 2:00 PM</li>
              <li>Selasa: 8:00 AM - 2:00 PM</li>
              <li>Rabu: 8:00 AM - 2:00 PM</li>
              <li>Kamis: 8:00 AM - 2:00 PM</li>
              <li>Jumat: 8:00 AM - 2:00 PM</li>
              <li>Sabtu: 8:00 AM - 2:00 PM</li>
              <li>Minggu: Tutup</li>
            </ul>
          </div>
          <div className="py-4">
            <h1 className="text-xl font-semibold py-2">Lokasi Puskesmas</h1>
            <GoogleMaps
              source="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.8320655241782!2d108.21033537463438!3d-7.372711572559746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f57988d6010f5%3A0x26189b12e1443be1!2sPuskesmas%20Kawalu!5e0!3m2!1sid!2sid!4v1701916035283!5m2!1sid!2sid"
            />
          </div>
          <Reviews />
        </div>
      </div>
    </div>
  )
}

export default page