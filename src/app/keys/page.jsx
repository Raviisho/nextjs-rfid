import React from 'react';
import dynamic from 'next/dynamic'; // Import dynamic for dynamic imports
const DynamicKeysComponent = dynamic(() => import('@/app/keys/components/KeysComponent'), {
  ssr: false, // Set ssr to false for client-side rendering
});

export default function KeysPage() {
  return (
    <>
      <div>Keys Works</div>
      <DynamicKeysComponent />
    </>
  );
}