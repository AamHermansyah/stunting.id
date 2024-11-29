"use client";

import FormAddAnak from '@/components/shared/form-add-anak';
import { useParams } from 'next/navigation';

const AddChildrenPage = () => {
  const params = useParams();
  const parentId = params['user.id'];

  return (
    <div>
      <FormAddAnak id={parentId as string} />
    </div>
  );
};

export default AddChildrenPage;
