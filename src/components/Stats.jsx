import React from 'react';
import { stats } from '../constants';
import styles from '../style';

function Stats() {
    return (
        <section className={ `${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6` }>
            { stats.map((stat) => (
                <div key={ stat.id } className={ `flex-1 flex justify-start items-center flex-row m-3` }>
                    <h4 className='font-poppins font-semibold text-[30px] text-white leading-[43px] xs:text-[40px] xs:leading-[53px]'>{ stat.value }</h4>
                    <p className='font-poppins font-normal text-[15px] text-gradient uppercase ml-3 leading-[21px] xs:text-[20px] xs:leading-[26px]'>{ stat.title }</p>
                </div>
            ))
            }
        </section >
    );
}

export default Stats;