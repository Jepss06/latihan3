//isi nama variabel
let  = [
	{
	  id: 0,
	  name: "Paket 1",
	  desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
	  price: 10000,
	}
	{
	  id: 1,
	  name: "Paket 2",
	  desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
	  price: 20000,
	}

	{
	  id: 2,
	  name: "Paket 3",
	  desc: "Nasi Timbel + Ayam (bakar/goreng) + Tahu & Tempe + Sambal + Teh",
	  price: 30000,
	},
  ];
  //perhatikan yang kurang
  const menuSection = document.querySelector(".menu-section);
  //maping variabel array object, panggil functionnya dan lengkapi value
  //yang dikirim ke function
  //jangan lupakan paramter yang ada didalam mapping!
  .map(() => {
	menuSection.innerHTML += ( .desc,.name, .price, .id);
  });
  //lengkapi parameter function dan perhatikan penutup stringnya!
  //tampilkan parameternya pada tag paragraf
  //perhatikan kekurangan simbol untuk menampilkan parameter id
  function iniApa() {
	return `<div class="card">
		  <button class="kategori" aria-readonly="true">Paket</button>
		  <hr class="line" />
		  <div class="container-content">
			  <div>
				  <img
					  src="./images/example-product/indomie.jpg"
					  alt=""
					  class="produk-img"`
				  />
			  </div>
			  <div class="content">
				  <p></p>
				  <p></p>
				  <p></p>
				  <div class="content2">
					  <button class="tambah" id="pesan{id}">pesan</button>
				  </div>
			  </div>
		  </div>
	  </div>
	  `;
  }
  //maping variabel array object, lalu perintahkan document untuk mengambil id pesan
  //id pesan yang dipanggil disertai dengan id pada data didalam array object!
  //jangan lupakan paramter yang ada didalam mapping!
  //setelah id didapatkan, jalankan event onclick menggunakan addeventlistener
  //lalu tampung prompt menggunakan var jumlah
  //kalikan var jumlah dengan price
  //tampung hasil perkalian kedalam localstorage
  //redirect atau arahkan halaman pada order.html
  .map(() => {

  });
