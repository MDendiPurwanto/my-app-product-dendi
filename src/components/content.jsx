const image_1 = [{
    item1: "https://www.bhphotovideo.com/images/images2500x2500/lenovo_82x70005us_15_6_ideapad_slim_3_1762582.jpg",
    title1: 'Lenovo 15.6" IdeaPad Slim 3 Notebook (Abyss Blue)',
    price1: "Rp12.000.000",
    item2: "https://www.bhphotovideo.com/images/images1500x1500/logitech_910_006928_mx_anywhere_3s_wireless_1760693.jpg",
    title2: 'Logitech MX Anywhere 3S Wireless Mouse (Black)',
    price2: "Rp1.000.000",
    item3: "https://www.bhphotovideo.com/images/images2000x2000/logitech_920_011406_mx_keys_s_wireless_1760696.jpg",
    title3: 'Logitech MX Keys S Wireless Keyboard (Black)',
    price3: "Rp2.000.000",
    item4: "https://www.bhphotovideo.com/images/images2500x2500/dji_cp_ma_00000654_01_mavic_3_pro_drone_1761807.jpg",
    title4: 'DJI Mavic 3 Pro Drone with DJI Remote Control (Silver)',
    price4: "Rp25.000.000"
}]

export default () => (
    <content>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-8 px-32">
       {image_1.map((image_1) => (
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
            <img className="p-8 rounded-t-lg" src={image_1.item1} alt="product image" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-sky-900">{image_1.title1}</h5>
                <span className="text-3xl font-bold text-sky-900">{image_1.price1}</span>
                <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
            </div>
        </div>
       
        ))}

    {image_1.map((image_1) => (
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
            <img className="p-8 rounded-t-lg" src={image_1.item2} alt="product image" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-sky-900">{image_1.title2}</h5>
                <span className="text-3xl font-bold text-sky-900">{image_1.price2}</span>
                <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
            </div>
        </div>
       
        ))}

    {image_1.map((image_1) => (
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
            <img className="p-8 rounded-t-lg" src={image_1.item3} alt="product image" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-sky-900">{image_1.title3}</h5>
                <span className="text-3xl font-bold text-sky-900">{image_1.price3}</span>
                <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
            </div>
        </div>
       
        ))}

    {image_1.map((image_1) => (
        <div className="w-full max-w-sm bg-white border border-sky-900 rounded-lg shadow">
            <img className="p-8 rounded-t-lg" src={image_1.item4} alt="product image" />
            <div className="px-5 pb-5">
                <h5 className="text-xl font-semibold tracking-tight text-sky-900">{image_1.title4}</h5>
                <span className="text-3xl font-bold text-sky-900">{image_1.price4}</span>
                <button className="bg-sky-900 text-white hover:bg-sky-950 focus:ring-4 focus:outline-none focus:ring-white-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</button>
            </div>
        </div>
       
        ))}
        </div>
    </content>
  );

