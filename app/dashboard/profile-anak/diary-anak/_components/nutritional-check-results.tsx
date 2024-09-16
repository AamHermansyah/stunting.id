import PleaseFillOut from "@/components/shared/please-fill-out";
import Image from "next/image";
import React from "react";

const NutritionalCheckResult = () => {
  return (
    <div className="w-full col-span-12 xl:col-span-9 lg:col-span-8 order-3 xl:order-2 p-4 border rounded-lg lg:min-h-[500px] space-y-4">
      <span className="flex sm:flex-row font-medium lg:text-xl text-sm gap-2 items-center">Hasil Pengecekan Nutrisi :</span>
      <PleaseFillOut image="/images/Document_empty.svg" label="Formulir Nutrisi Anak Belum Terisi" des="Silahkan isi terlebih dahulu formulir nutrisi anak anda untuk mendapatkan rekomendasi dari kami"/>
     {/* <div className="space-y-2 sm:space-y-4 text-gray-500 text-sm sm:text-base text-justify">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea, exercitationem. Autem voluptatum quasi sequi illo enim, neque reiciendis, quidem nam molestias voluptate laboriosam odio, atque dolore voluptas aspernatur! Modi, quit. Voluptatibus quaerat, culpa tenetur nostrum fugit omnis debitis explicabo itaque ipsam aspernatur praesentium obcaecati!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat, culpa tenetur nostrum fugit omnis debitis explicabo itaque ipsam aspernatur praesentium obcaecati! Optio, veritatis nemo nihil totam ad unde esse quaerat, cupiditate consequuntur ipsam atque consequatur aliquid perspiciatis explicabo perferendis quidem. Commodi voluptatibus ipsum, fuga voluptates laudantium recusandae! Dolores numquam officiis possimus. Neque expedita ipsa ducimus illum nihil. Accusamus iure, temporibus modi doloribus fugiat quas, aspernatur magni ducimus nostrum libero debitis repellat, illo voluptatem dicta nesciunt voluptate placeat quod nobis!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus quaerat, culpa tenetur nostrum fugit omnis debitis explicabo itaque ipsam aspernatur praesentium obcaecati! Optio, veritatis nemo nihil totam ad unde esse quaerat, cupiditate consequuntur ipsam atque consequatur aliquid perspiciatis explicabo perferendis quidem. Commodi voluptatibus ipsum, fuga voluptates laudantium recusandae! Dolores numquam officiis possimus. Neque expedita ipsa ducimus illum nihil. Accusamus iure, temporibus modi doloribus fugiat quas, aspernatur magni ducimus nostrum libero debitis repellat, illo voluptatem dicta nesciunt voluptate placeat quod nobis!
        </p>
        
      </div> */}
    </div>
  );
};

export default NutritionalCheckResult;
