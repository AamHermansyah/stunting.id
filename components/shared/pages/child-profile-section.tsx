import React, { useEffect, useState } from 'react';
import TabsButton from '../tabs-button';
import Profile from './_components/profile';
import Chart from './_components/chart';
import Overview from './_components/overview';
import InterpretationResult from './_components/interpretation-result';

interface IProps {
  profile: string;
  diary: string;
  history: string;
}

export function ChildProfielSection({ profile, diary, history }: IProps) {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // Ambil cookies dari browser, ini hanya client-side
    const authCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('auth='))
      ?.split('=')[1];

    if (authCookie) {
      const user = JSON.parse(decodeURIComponent(authCookie));
      setUserId(user.id); // Set user ID dari cookie
    }
  }, []);

  if (!userId) {
    return <div>Loading...</div>; // Tampilkan loading jika userId belum ada
  }

  return (
    <>
      <TabsButton buku={profile} diary={diary} riwayat={history} />
      <div className="space-y-4">
        <div className="w-full grid grid-cols-12 items-start gap-4">
          <Profile userId={userId} />
          <Chart />
          <Overview userId={userId} />
        </div>
        <InterpretationResult />
      </div>
    </>
  );
}
