"use client";

import FormAddAnak from '@/components/shared/form-add-anak';
import { useParams } from 'next/navigation';

const AddChildrenPage = () => {
  const params = useParams();
  const parentId = Array.isArray(params.userId) ? params.userId[0] : params.userId;

  return (
    <div>
      <FormAddAnak id={parentId} />
    </div>
  );
};

export default AddChildrenPage;
