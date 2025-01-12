export interface Genel {
  dernekAdi: string;
  kurulusYili: string;
  iletisim: {
    adres: string;
    telefon: string;
    email: string;
  };
}

export interface BankaHesabi {
  bankaAdi: string;
  subeKodu: string;
  hesapNo: string;
  iban: string;
}

export interface KanBagiscisi {
  id: number;
  adSoyad: string;
  kanGrubu: string;
  telefon: string;
}

export interface YonetimKuruluUyesi {
  id: number;
  adSoyad: string;
  gorev: string;
  foto: string;
}

export interface Kurucu {
  id: number;
  adSoyad: string;
  kurulusYili: string;
  foto: string;
}

export interface OnemliTarih {
  yil: string;
  olay: string;
}

export interface About {
  bankHesaplari: BankaHesabi[];
  kanBankasi: {
    acilKanGruplari: string[];
    bagiscilar: KanBagiscisi[];
  };
  yonetimKurulu: YonetimKuruluUyesi[];
  kurucular: Kurucu[];
  tarihce: {
    baslik: string;
    icerik: string;
    onemliTarihler: OnemliTarih[];
  };
}

export interface Koy {
  ekonomi: {
    baslicaGecimKaynaklari: string[];
    urunler: string[];
  };
  egitim: {
    okullar: {
      ad: string;
      ogrenciSayisi: number;
      ogretmenSayisi: number;
    }[];
  };
  cografi: {
    rakım: number;
    iklim: string;
    yuzolcumu: string;
  };
  tarihce: {
    kurulusYili: string;
    onemliOlaylar: OnemliTarih[];
  };
  onemliYerler: {
    id: number;
    ad: string;
    aciklama: string;
    foto: string;
  }[];
  nufus: {
    toplam: number;
    erkek: number;
    kadin: number;
    yillikDegisim: string;
  };
}

export interface Duyuru {
  id: number;
  baslik: string;
  tarih: string;
  icerik: string;
  onemlilik: string;
  kategori: string;
}

export interface Etkinlik {
  id: number;
  baslik: string;
  tarih: string;
  aciklama: string;
  resimUrl: string;
  konum: string;
  katilimciSayisi: number;
}

export interface Fotograf {
  id: number;
  baslik: string;
  url: string;
  tarih: string;
}

export interface Album {
  id: number;
  baslik: string;
  aciklama: string;
  fotograflar: Fotograf[];
}

export interface Haber {
  id: number;
  baslik: string;
  tarih: string;
  icerik: string;
  foto: string;
  kategori: string;
}

export interface Proje {
  id: number;
  baslik: string;
  durum: string;
  baslangicTarihi: string;
  bitisTarihi: string;
  aciklama: string;
  butce: number;
  tamamlanmaYuzdesi: number;
}

export interface Istatistikler {
  dernek: {
    uyeSayisi: number;
    tamamlananProje: number;
    yillikEtkinlik: number;
    aktifCalismalar: number;
    toplamBagis: number;
  };
  koy: {
    nufus: number;
    haneSayisi: number;
    ogrenciSayisi: number;
    yillikGelir: number;
  };
}

export interface SearchResult {
  id: number;
  baslik: string;
  icerik: string;
  tip: 'duyuru' | 'etkinlik' | 'haber' | 'proje';
  url: string;
}

export interface DataType {
  genel: Genel;
  about: About;
  koy: Koy;
  duyurular: Duyuru[];
  etkinlikler: Etkinlik[];
  galeri: {
    albumler: Album[];
  };
  haberler: Haber[];
  projeler: Proje[];
  istatistikler: Istatistikler;
  search?: SearchResult[];
} 