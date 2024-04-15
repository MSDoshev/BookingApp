
import React from 'react';
import styles from './VillaDetails.module.css'; 

export const VillaDetails = () => {

  return (
   <>
   <div className={styles.title}>
		<h1>Villa №1</h1>
   </div>
   <div className={styles.villaContainer}>
   		<div className={styles.picture}> 
			<img src='https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65' alt='Villa'/>
		</div>
		<div className={styles.info}> 
			<div className={styles.text}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.
			</div>
			
			<div>
				<label> 
					Guests:
					<select>

						<option value="1">1</option>

						<option value="2">2</option>

						<option value="3">3</option>

						<option value="4">4</option>

						<option value="5">5</option>

						<option value="6">6</option>

					</select>

				</label>
			</div>
		</div>
   </div>
   </>
  );
};