import React from 'react'
import styled from './Team.module.css'
import { teams } from '../../assets/assets'

const Team = () => {
    return (
        <section className={`container ${styled.teamSection}`}>
            <div className={styled.teamHeading}>
                <h2>Meet the team</h2>
                <p>Behind every successful project is a passionate and skilled team — and ours is no exception.</p>
            </div>

            <div className={styled.teamSectionGrid}>
                {
                    teams.map((value, index) => {
                        return (
                            <>
                            <div className={styled.teamSectionCol}>
                            <div className={styled.teamSectionColLeft}>
                            <img src={value.image} alt="" />
                            </div>
                            <div className={styled.teamSectionColRight}>
                                <h3>{value.name}</h3>
                                <p>{value.designation}</p>
                            </div>
                            </div>
                            </>
                        )
                    })
                }

            </div>

        </section>
    )
}

export default Team