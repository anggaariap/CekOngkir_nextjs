import FormRajaOngkir from '@/components/formRajaOngkir';
import { Box, Container } from 'lucide-react';

async function getCities() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/city`, {
      method: 'GET',
      headers: {
        key: process.env.NEXT_PUBLIC_API_KEY || '',
      },
    });

    const data = await res.json();

    return data.rajaongkir.results;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

export default async function Home() {
  const cities = await getCities();

  return (
    <main className="flex min-h-screen flex-col items-center p-16">
      <div className="flex flex-col gap-4 md:flex-row py-14">
        <FormRajaOngkir cities={cities} />
      </div>
      <div className='center'>
        <p>&copy; 2024 by Angga Aria Putra. All rights reserved.</p>
    </div>
    </main>
  );
}
