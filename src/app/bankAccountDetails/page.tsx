'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import your component so that it remains a client component.
const BankAccountDetails = dynamic(() => import('./BankAccountDetails'), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading account details...</div>}>
      <BankAccountDetails />
    </Suspense>
  );
}
