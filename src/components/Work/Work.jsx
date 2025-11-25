import { workItems } from '../../assets/assets'
import styled from './Work.module.css'

const Work = () => {
  return (
    <section className={`container ${styled.workSection}`}>
      <div className={styled.workHeading}>
        <h2>Our latest work</h2>
        <p>Whether you're launching a new business or looking to elevate your existing brand</p>
      </div>

      <div className={styled.workCardGrid}>
        {
          workItems.map((value, index) => {
            return(
              <div key={index} className={styled.workGridCol}>
              <img src={value.image} alt="" />
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Work