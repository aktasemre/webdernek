import DonationForm from '@/components/common/DonationForm/DonationForm';

export const metadata = {
  title: 'Bağış Yap | Arslandede Köyü Derneği',
  description: 'Arslandede Köyü Derneği bağış sayfası. Ağaçlandırma, ramazan kumanyası, eğitim bursu ve cami yardımları için bağış yapabilirsiniz.',
  keywords: ['bağış', 'yardım', 'ağaçlandırma', 'kumanya', 'eğitim bursu', 'cami yardımı'],
};

export default function DonatePage() {
  return <DonationForm />;
} 