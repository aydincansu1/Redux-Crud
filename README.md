# State Yonetimi

- State: Uygulamadaki bilesenlerimizin sahip oldugu bilgi ve ozellikler

- Prop drillign: Bilesenlerin yukaridan asagiya veri tasimasi

- Context: Uygulamadaki state'i butun bilesenler tarafindan erisilebilen ve olusturdugumuz merkezden yonettigimiz state yonetim araci.

- Redux: Bilesenlerin sahip oldugu ve merkezi olarak tutulmasi gereken state'lerin yonetildigi merkezi state yonetim araci

# Neden Context yerine Redux

- Kod tekrarini onler
- Performans arttirir
- Bilesen icerisindeki karisikligi azaltir
- Hata ayiklama kolaydir
- Orta ve buyuk olcekli projelerde state'in yonetimi daha kolay hale getirir

# Reduxla ilgili bilinmesi gerekenler

1. Store: Uygulamaninn butun bilesenleri tarafidan erisilebilen ve yonetilebilen state deposudur

2. Reducer: Aksiyondan aldiigi talimatlara gore store'da tutulan stat'in nasil degisecegine karar veren fonksiyondur

3. Action: Store'daki state'i guncellemek icin reuder'a gonderdigimiz nesne(emir/ haber/ eylem)

- - Action iki degere sahip bir objedir
- - type: Actionun gorevini tanimlayan string
- - payload: Gonderilen eylemin verisi

4. Dispatch (Sevketmek): Actionun gerceklestigi reucer'a haber veren method

5. Subscribe (Abone olma): Bilesenlerin store'da tutulan veriye erisimini saglama (usecontext , useSelector)

6. Provider (Saglayici) : Store'da tutulan verileri uygulamaya saglar

# Gercek hayattan Ornek

1. Store: Okulun Binasi

2. Reducer: Okulun Yonetim Ekibi (Mudur, Mudur yard.)

3. Action: 'Orencinin sinavi gecmesi' | Yeni ogrencinin kaydinin yapilmasi

4. Dispatch: Ogrenci isleri | Ogretmen | Nobetci ogrenci

5. Subscribe: Rehberlik servisi | E-okul

6. Provider: Okul Aile Birligi | MEB

# Redux Kurulum Asamalari

- reduz ve react-redux paketlerini indir

- reducer | reeducer;lerin kurulumunu yap.

- store ;un kurulumunu yap

- stor'u projeye tanit

# APi ve Redux birlikte kullanimi

- Bir projede veriler apiden geliyorsamutlaka state'i cantex'i stor'u guncelleme islemini api istegiine bagimli hale getirmelisiniz. Aksi taktirde kullaniciya gerceklesmeyen islemleri yansitirsiniz.

## yaygin hata turler

- Bir degisikligi yapinca arayuz guncelleniyor ama sayfayi
  yenileyince degisikligi kaybediyorsaniz hata apiden kaynaklidir

- Bir degisiklik yaoinca arayuzun guncellenmesi icin sayfayi yenilemek zorunda kaliyorsanuz api basarili bir sekilde guncellenmistir
  ama veriyi stste'e store'a veya context'e aktarmada sorun vardir
