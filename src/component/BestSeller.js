import BestSlider from "./BestSlider";
const BestSeller = () => {
    return (
        <bestseller className="bestseller">
            <div className="container">
                <h2>코코다움 인기상품</h2>
                <p>#내 강아지를 위한 #베스트상품</p>
                <BestSlider/>
            </div>
        </bestseller>
    )
}
export default BestSeller;