## Notes:

1.

initialState: {
  loading: false,
  error: false,
  token: null,
  firms: [],
  brands: [],
  products: [],
  purchases: [],
  sales: [],
}
state[payload.url]
payload.url, bir API'den gelen veriyi belirtmek için kullanılan dinamik bir anahtardır. Bu anahtar, Redux state'inde var olmayan ancak veriyi yerleştirmek için kullanılan bir isimdir.


2.

state[payload.url] = payload.data.data;
Bu satır, API'den gelen veriyi dinamik bir key olarak state içine ekliyor.
Bu yapı sayesinde, API’den farklı endpoint’lerden gelen veriler dinamik olarak state içine kaydedilebilir.
Yani state objesinde payload.url'i key olarak kullanarak, değerini payload.data.data olarak ayarlıyor.

Eğer API çağrısından şu şekilde bir payload gelirse:
{
  url: "products",
  data: {
    data: [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Mouse" }
    ]
  }
}
Bu durumda yukarıdaki satır şuna dönüşür:
state["products"] = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Mouse" }
];
Sonuç olarak Redux store şu hale gelir:
{
  loading: false,
  error: false,
  products: [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mouse" }
  ]
}

3.
Kodda şu satır var:

dispatch(stockSuccess({ url, data }));
Bu satır, Redux store'a stockSuccess action'ını gönderiyor. Ancak dikkat edersen tek bir nesne ({ url, data }) olarak gönderiyor.

Bu, stockSuccess reducer'ındaki şu satırla uyumlu çalışıyor:

stockSuccess: (state, { payload }) => { ... }
Burada payload, action tarafından gelen tek bir nesne oluyor ve { url, data } şeklinde olduğu için, payload.url ve payload.data ile erişebiliyoruz.


4.
const { deleteStockData } = useStockCall();
Yani useStockCall fonksiyonunu çağırarak, dönen nesneden deleteStockData fonksiyonunu destructure etmelisin.


5.
Lifting State Up (State’i Yukarı Taşımak), React’te birden fazla bileşenin ortak olarak kullanması gereken bir state’i, en yakın ortak üst bileşene taşıma prensibidir.

🛠 Neden Lifting State Up Gerekli?
React’te veri akışı tek yönlüdür (parent → child).
Eğer iki veya daha fazla bileşen aynı state’i kullanıyorsa, bu state onların en yakın ortak ebeveyn bileşenine taşınmalıdır.
Böylece tüm ilgili bileşenler bu state’e prop olarak erişebilir.