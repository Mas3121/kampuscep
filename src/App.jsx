import './App.css'
import { useState } from 'react'
import Duyurular from './Duyurular'
import Sinavlar from './Sinavlar'
import AnaSayfa from './AnaSayfa'
function App() {
  const [aktifSayfa, setAktifSayfa] = useState("ana")
  const dersler = [
  { gun: "Pazartesi",
    ders: "Devreler ve Elektronik",
    baslangic: "13.30",
    bitis: "15.50",
  },
  {
    gun: "Pazartesi",
    ders: "Devreler ve Elektronik LAB",
    baslangic: "16.00",
    bitis: "17.30",
  },
  {
    gun: "Salı",
    ders: "Bilgisayar Bilimleri İçin Ayrık Matematik",
    baslangic: "08:30",
    bitis: "10:50",
  },
  {
  gun: "Salı",
  ders: "Diferansiyel Denklemler",
  baslangic: "11:00",
  bitis: "12:30"
},
{
  gun: "Çarşamba",
  ders: "Diferansiyel Denklemler",
  baslangic: "13:30",
  bitis: "15:00"
},
{
  gun: "Çarşamba",
  ders: "Theory of Computation",
  baslangic: "15:10",
  bitis: "17:30"
},
{
  gun: "Perşembe",
  ders: "Nesne Yönelimli Programlama",
  baslangic: "10:30",
  bitis: "12:30"
},
{
  gun: "Perşembe",
  ders: "Lineer Cebir",
  baslangic: "13:30",
  bitis: "15:50"
},
{
  gun: "Cuma",
  ders: "Nesne Yönelimli Programlama LAB",
  baslangic: "11:00",
  bitis: "12:30"
},
]
const sinavlar = [
{
  ders: "Devreler ve Elektronik",
  tarih: "2026-10-15",
  saat: "10.00",
  yer: "101"
},
{
  ders: "Diferansiyel Denklemler",
  tarih: "2026-10-18",
  saat: "10.00",
  yer: "105"
},
]
const duyurular = [
  {
    baslik: "Bilgisayar Mühendisliği Bölüm Duyurusu",
    tarih: "2026-10-04",
    aciklama: "Yeni duyuru yayınlandı"
  },
]
duyurular.sort((a,b) => new Date(b.tarih) - new Date(a.tarih))
const gelecekSinavlar = sinavlar.filter((sinav) => new Date(sinav.tarih) >= new Date())
gelecekSinavlar.sort((a,b) => new Date(a.tarih) - new Date(b.tarih))
    
  return (
    <div>
      <h1>KampüsCep</h1>
      <p>Üniversite hayatını tek yerde takip et.</p>
      <nav>
        <button onClick={() => setAktifSayfa("ana")}>Ana Sayfa</button>
        <button onClick={() => setAktifSayfa("dersler")}>Ders Programı</button>
        <button onClick={() => setAktifSayfa("sinavlar")}>Sınavlar</button>
        <button onClick={() => setAktifSayfa("duyurular")}>Duyurular</button>
      </nav>
      {aktifSayfa === "ana" && (
        <AnaSayfa />
      )}
      {aktifSayfa === "sinavlar" && (
        <Sinavlar sinavlar={gelecekSinavlar} />
      )}

        {aktifSayfa === "duyurular" && (
          <>
          <Duyurular duyurular={duyurular} />
</>
        )}
        {aktifSayfa === "dersler" && (
          <>
      {["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"].map((gun) => (
        <div className="gun">
          <h2>{gun}</h2>
          {dersler
          .filter((ders) => ders.gun == gun)
          .map((ders) => (
      <div>
      <p className="ders">{ders.ders}</p>
      </div>
      ))}
    </div>
  ))}
  </>
        )}
  </div>
  )
}
export default App