import React from 'react'
import { BsStarFill, BsStarHalf } from "react-icons/bs";

const RealReview = () => {
  return (
    <realreview className='realreview'>
      <div className='container'>
        <h2>내돈내산 생생후기</h2>
        <p>이미 많은 분들이 코코다움과 함께하고 있어요!</p>
        <div className='review'>
          <figure>
            <img src="asset/img/review01.jpeg" alt="/" />
            <h3>다시 편안 츄르[기관지 영양제]</h3>
            <p className='name'>뭉치아부지</p>
            <p className='star'>
              <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf />
            </p>
            <p>"갱얼쥐가 잘먹고 좋아해요"</p>
          </figure>
          <figure>
            <img src="asset/img/review02.jpg" alt="/" />
            <h3>다시 편안 츄르[기관지 영양제]</h3>
            <p className='name'>뭉치아부지</p>
            <p className='star'>
              <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf />
            </p>
            <p>"갱얼쥐가 잘먹고 좋아해요"</p>
          </figure>
          <figure>
            <img src="asset/img/review03.jpeg" alt="/" />
            <h3>다시 편안 츄르[기관지 영양제]</h3>
            <p className='name'>뭉치아부지</p>
            <p className='star'>
              <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf />
            </p>
            <p>"갱얼쥐가 잘먹고 좋아해요"</p>
          </figure>
          <figure>
            <img src="asset/img/review04.jpg" alt="/" />
            <h3>다시 편안 츄르[기관지 영양제]</h3>
            <p className='name'>뭉치아부지</p>
            <p className='star'>
              <BsStarFill /><BsStarFill /><BsStarFill /><BsStarFill /><BsStarHalf />
            </p>
            <p>"갱얼쥐가 잘먹고 좋아해요"</p>
          </figure>
        </div>
      </div>
    </realreview>

  )
}

export default RealReview