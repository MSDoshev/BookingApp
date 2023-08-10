import { Link } from 'react-router-dom'
import styles from './Villas.module.css'
import { useEffect, useState } from 'react';

export const Villas = () => {

    const [top, setTop] = useState(getRandomValue());
    const [bottom, setBottom] = useState(getRandomValue());
  
    useEffect(() => {
      document.documentElement.style.setProperty('--clip-path-top', `${top}%`);
      document.documentElement.style.setProperty('--clip-path-bottom', `${bottom}%`);
    }, [top, bottom]);
  
    function getRandomValue() {
      return Math.floor(Math.random() * 11) * 10;
    }

    return(
        <>
            <div className={styles.title}>
                <h1>Villas</h1>
            </div>
            <div className={styles.villas}>
                
                <div className={styles.villa}>
                    <div className={styles.villaContent}> 
                        <h2>Villa №1</h2>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.</p>
                        <div className={styles.vInfo}>
                                <h3>Up to 6 people</h3>
                                <h3>Price from &euro;1000</h3>
                                <Link to="room-id" >Book Now</Link>
                            </div>
                    
                    </div>
                    
                        
                    <img src='https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65'/>
                </div>
                <div className={styles.villa2}>
                    <img src='https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65'/>
                    <div className={styles.villaContent}>
                        <h2>Villa №1</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.</p>

                        <Link to="room-id" >Book Now</Link>
                    
                    </div>
                    
                        
                </div>

                <div className={styles.villa}>
                    <div className={styles.villaContent}>
                        <h2>Villa №1</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.</p>

                        <Link to="room-id" >Book Now</Link>
                    
                    </div>
                    
                        
                    <img src='https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65'/>
                </div>

                <div className={styles.villa2}>
                    <img src='https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65'/>
                    <div className={styles.villaContent}>
                        <h2>Villa №1</h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.</p>

                        <Link to="room-id" >Book Now</Link>
                    
                    </div>
                    
                        
                </div>


            </div>
        </>
    )

}