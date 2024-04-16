import styles from "./TheIsland.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

AOS.init(); // Initialize AOS




export const TheIsland = () => {

    return(
        <>
        <div className={styles.title}>
            
            <h1 data-aos="fade" data-aos-duration="1500" >Mykonos Island</h1>
        </div>

            <div className={styles.infoH}>
                <div className={styles.subInfo} >
                <h2 data-aos="fade" data-aos-duration="1500" >History</h2>
                <p data-aos="fade-right" data-aos-duration="500" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor tincidunt lectus a sollicitudin. Morbi vulputate vel diam bibendum gravida. Nulla pulvinar ultricies sem. Nam non nisl in eros scelerisque volutpat non eget nunc. Nulla massa nunc, consectetur eu faucibus a, rhoncus at dui. Morbi ut nisi lectus. Ut sed ligula sapien. Vivamus porttitor velit eu quam cursus consectetur. Phasellus eget aliquet enim, sed consequat nibh. Morbi iaculis augue vulputate tortor ultrices rutrum. Mauris quis purus viverra, blandit dui quis, euismod metus. Quisque gravida fermentum aliquet.

                Mauris a suscipit elit. Integer vehicula nulla eu nibh commodo posuere. Aenean eu metus malesuada, aliquam ex ac, dapibus lorem. Maecenas quis felis ex. Sed et lobortis lacus. In gravida tristique tellus, suscipit malesuada nunc pharetra id. Etiam a arcu vehicula, faucibus lorem a, tristique nunc. Morbi ut aliquet sem. In mollis aliquet lobortis. Vestibulum mollis ligula vitae placerat eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec gravida tellus non mollis lacinia. Proin gravida ipsum quis risus viverra viverra. In vel justo a libero mattis tempus eu ut leo.</p>
                </div>
                <img data-aos="fade-left" data-aos-duration="1500" src="https://www.mykonostownhousehotel.com/wp-content/uploads/2017/01/mykonos_towhhouse_hotel_paraportiani2.jpg" alt="Island event"/>
            </div>

            <div className={styles.infoN}>
                <img data-aos="fade-right" data-aos-duration="1500" src="https://www.oluxuryvillas.com/img/article/image/mykonos_nightlife_oluxuryvillas.jpg" alt="Island event"/>
                <div className={styles.subInfo}>
                <h2 data-aos="fade" data-aos-duration="1500" >Nightlife</h2>
                <p data-aos="fade-left" data-aos-duration="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor tincidunt lectus a sollicitudin. Morbi vulputate vel diam bibendum gravida. Nulla pulvinar ultricies sem. Nam non nisl in eros scelerisque volutpat non eget nunc. Nulla massa nunc, consectetur eu faucibus a, rhoncus at dui. Morbi ut nisi lectus. Ut sed ligula sapien. Vivamus porttitor velit eu quam cursus consectetur. Phasellus eget aliquet enim, sed consequat nibh. Morbi iaculis augue vulputate tortor ultrices rutrum. Mauris quis purus viverra, blandit dui quis, euismod metus. Quisque gravida fermentum aliquet.

                Mauris a suscipit elit. Integer vehicula nulla eu nibh commodo posuere. Aenean eu metus malesuada, aliquam ex ac, dapibus lorem. Maecenas quis felis ex. Sed et lobortis lacus. In gravida tristique tellus, suscipit malesuada nunc pharetra id. Etiam a arcu vehicula, faucibus lorem a, tristique nunc. Morbi ut aliquet sem. In mollis aliquet lobortis. Vestibulum mollis ligula vitae placerat eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec gravida tellus non mollis lacinia. Proin gravida ipsum quis risus viverra viverra. In vel justo a libero mattis tempus eu ut leo.</p>
                </div>
            </div>

            <div className={styles.infoL}>
                <div className={styles.subInfo}>
                <h2 data-aos="fade" data-aos-duration="1500">The Beach</h2>
                <p data-aos="fade-right" data-aos-duration="500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor tincidunt lectus a sollicitudin. Morbi vulputate vel diam bibendum gravida. Nulla pulvinar ultricies sem. Nam non nisl in eros scelerisque volutpat non eget nunc. Nulla massa nunc, consectetur eu faucibus a, rhoncus at dui. Morbi ut nisi lectus. Ut sed ligula sapien. Vivamus porttitor velit eu quam cursus consectetur. Phasellus eget aliquet enim, sed consequat nibh. Morbi iaculis augue vulputate tortor ultrices rutrum. Mauris quis purus viverra, blandit dui quis, euismod metus. Quisque gravida fermentum aliquet.

                Mauris a suscipit elit. Integer vehicula nulla eu nibh commodo posuere. Aenean eu metus malesuada, aliquam ex ac, dapibus lorem. Maecenas quis felis ex. Sed et lobortis lacus. In gravida tristique tellus, suscipit malesuada nunc pharetra id. Etiam a arcu vehicula, faucibus lorem a, tristique nunc. Morbi ut aliquet sem. In mollis aliquet lobortis. Vestibulum mollis ligula vitae placerat eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec gravida tellus non mollis lacinia. Proin gravida ipsum quis risus viverra viverra. In vel justo a libero mattis tempus eu ut leo.</p>
                </div>
                <img data-aos="fade-left"  data-aos-duration="1500" src="https://www.costacruises.co.uk/content/dam/costa/costa-magazine/article-images/mykonos-beaches/mykonos-spiagge2.jpg.image.1296.974.high.jpg" alt="Island event"/>
            </div>
        </>
    )
}