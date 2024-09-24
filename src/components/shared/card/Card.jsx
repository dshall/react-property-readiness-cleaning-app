import './card.css';
import CardImg from "../../../assets/property1.jpeg";

export default function CardLayout(props) {
  return (
   <div className=' mt-8 mb-8'>
    <div className='card'>
    <img src={CardImg} alt="" />
    <div className='content'>
      <span><label>Address</label>: 4043 balwynne park rd Philadelphia pa, 19131</span>
      <span><label>Unit</label>: 2</span>
      {/* <span className='block'><bold>Priority</bold>: Normal</span> */}
      <span className='label'><label>Checkout</label>: 12:00pm</span>
      <div className='badge'>
        <svg className='inline' fill='none' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
<span>2:00pm</span>
</div>
    </div>   
    </div>
   </div>
  )
}
