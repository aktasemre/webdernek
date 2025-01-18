import { render, screen } from '@testing-library/react';
import VillagePage from '../page';
import koyData from '@/data/koy.data.json';

// Mock the koy.data.json
jest.mock('@/data/koy.data.json', () => ({
  konum: {
    koordinatlar: {
      maps_link: 'https://maps.app.goo.gl/Nm23fknSH1H5wLQt7',
      lat: '40.2603',
      long: '40.4736',
    },
    merkez_uzaklik: '30 km',
    komsu_yerlesimler: {
      kuzey: {
        isim: 'Yazyurdu (Çakmas) Köyü',
      },
      guney: {
        isim: 'Çakırbağ (Abusta) Köyü',
      },
      dogu: {
        isim: 'Yanıkçam (Miserek) Köyü',
      },
      bati: {
        isim: 'Karşıgeçit (Milehi) Köyü',
      },
    },
  },
}));

describe('VillagePage', () => {
  beforeEach(() => {
    render(<VillagePage />);
  });

  it('should render the location section title', () => {
    expect(screen.getByText('Konum Bilgileri')).toBeInTheDocument();
  });

  it('should render the distance to center', () => {
    expect(screen.getByText('Merkeze Uzaklık')).toBeInTheDocument();
    expect(screen.getByText('30 km')).toBeInTheDocument();
  });

  it('should render neighboring villages', () => {
    expect(screen.getByText(/Yazyurdu \(Çakmas\) Köyü/)).toBeInTheDocument();
    expect(screen.getByText(/Çakırbağ \(Abusta\) Köyü/)).toBeInTheDocument();
    expect(screen.getByText(/Yanıkçam \(Miserek\) Köyü/)).toBeInTheDocument();
    expect(screen.getByText(/Karşıgeçit \(Milehi\) Köyü/)).toBeInTheDocument();
  });

  it('should render coordinates with link', () => {
    const coordLink = screen.getByRole('link');
    expect(coordLink).toHaveAttribute('href', koyData.konum.koordinatlar.maps_link);
    expect(coordLink).toHaveAttribute('target', '_blank');
    expect(coordLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('should render the map iframe', () => {
    const iframe = screen.getByTitle('map');
    expect(iframe).toBeInTheDocument();
    expect(iframe).toHaveAttribute('loading', 'lazy');
  });
});
