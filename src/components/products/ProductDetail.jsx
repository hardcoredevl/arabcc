import { Link, useParams } from "react-router-dom";
import products from "../../constant/products.json";
import "./ProductDetail.css";
import { BsBasket3Fill } from "react-icons/bs";
import { FaHeart, FaStar } from "react-icons/fa";
import CommentItem from "../comments/CommentItem";
import { GiCargoCrate } from "react-icons/gi";
import ProductItem from "./ProductItem";
import { useDispatch } from "react-redux";
import { addBasket } from "../../redux/slices/basketSlice";

import { useSelector } from "react-redux";
import ToastMessage from "../toast-message/ToastMessage";

const ProductDetail = () => {
  const { id: dataID } = useParams();
  const item = products.find((product) => product.id === parseInt(dataID));
  const dispatch = useDispatch();
  const showToast = useSelector((state) => state.basket.showToast);

  return (
    <>
      <div className="product-detail flex lg:flex-row flex-col justify-center md:items-center md:justify-center gap-5  p-3 ">
        {showToast && <ToastMessage />}
        <div className="images flex flex-col justify-center items-center">
          <img src={`/images/${item.image}`} className="w-[350px] " alt="" />
          <div className="sub-images flex justify-center items-center gap-2">
            <img
              src="/images/product-sub-image.png"
              className="rounded-md"
              alt=""
            />
            <img
              src="/images/product-sub-image.png"
              className="rounded-md"
              alt=""
            />
            <img
              src="/images/product-sub-image.png"
              className="rounded-md"
              alt=""
            />
          </div>
        </div>

        <div className="product-info flex flex-col justify-center gap-2 ms-0 md:ms-5 relative">
          <h2 className="title text-5xl">{item.name}</h2>
          <div className="stars my-2 flex">
            <FaStar className="text-orange-500" size={22} />
            <FaStar className="text-orange-500" size={22} />
            <FaStar className="text-orange-500" size={22} />
            <FaStar className="text-orange-500" size={22} />
            <FaStar size={22} />
          </div>
          <p className="text-green-500">متوفر في المخزون</p>
          <p className="description sm:w-[350px] md:w-[500px] w-[300px] my-2">
            {item.description}
          </p>

          <div className="w-full">
            <select name="" className="w-full p-2 rounded-sm border">
              <option value="select">اختيار الحجم</option>
              <option value="red">صغيرة</option>
              <option value="green">المركز</option>
              <option value="pink">كبير</option>
              <option value="pink">كبير جداً</option>
            </select>
          </div>

          <div className="p-2 h-22 md:h-14 flex flex-col md:flex-row md:justify-between items-center">
            <div className="buttons flex">
              <button
                className="hover:bg-orange-500 hover:text-white transition-colors border-orange-500 border p-2 rounded-md text-orange-500 me-5 flex justify-center items-center gap-1"
                onClick={() => dispatch(addBasket(item))}
              >
                <BsBasket3Fill />
                اشتر الآن
              </button>
              <button className="hover:bg-red-500 hover:text-white transition-colors border-red-500 border p-2 rounded-md text-red-500 flex justify-center items-center gap-1">
                <FaHeart />
                إضافة إلى المفضلة
              </button>
            </div>
            <div className="price bg-orange-500 p-2 rounded-md text-white relative md:w-1/5 w-full mt-2 md:mt-0 text-center">
              $ {item.price}
            </div>
          </div>

          <div className="bg-green-100 p-2 rounded-sm text-black flex justify-start items-center gap-2">
            <GiCargoCrate size={24} className="text-green-500" />
            <p>
              <span className="text-green-500">شحن سريع:</span> في غضون 3 أيام
              عمل سيتم تسليم طلبك
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-4xl text-orange-500">تعليقات على موقعنا</h2>
      <div className="comments flex flex-wrap justify-center">
        <CommentItem
          yorum={"المنتج جميل ولكني أنصحك بشراء مقاس أكبر من مقاس واحد"}
          tarih={"13.04.2024"}
        />
        <CommentItem
          yorum={"لقد طلبتها بالأمس واستلمتها اليوم tşk"}
          tarih={"24.05.2024"}
        />
        <CommentItem
          yorum={
            "أعتقد أنه سيكون من الجيد لو انخفضت الأسعار قليلاً، ولكن الجودة جيدة جداً"
          }
          tarih={"25.01.2024"}
        />
        <CommentItem
          yorum={
            "هناك منتجات ذات جودة عالية ولكن التنوع قليل، أعتقد أنه يجب عليك عمل المزيد من التنوع"
          }
          tarih={"09.03.2024"}
        />
      </div>

      <h2 className="text-4xl text-orange-500">تحقق أيضًا من هذه</h2>
      <div className="for-you lg:flex lg:justify-center lg:items-center w-full">
        {products.slice(0, 4).map((product) => (
          <Link
            key={product.id}
            to={`/product-detail/${product.id}`}
            className="sm:w-full md:w-1/2 lg:w-1/4 xl:w-1/4 2xl:w-1/5 w-full"
          >
            <ProductItem product={product} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductDetail;
