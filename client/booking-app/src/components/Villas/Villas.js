import styles from "./Villas.module.css";
import Villa from "./Villa/Villa";

const villasData = [
  {
    id: 1,
    title: "Villa №1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.",
    capacity: 6,
    price: 1000,
    image:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65",
  },
  {
    id: 2,
    title: "Villa №2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.",
    capacity: 4,
    price: 800,
    image:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65",
  },
  {
    id: 3,
    title: "Villa №3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.",
    capacity: 4,
    price: 800,
    image:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65",
  },
  {
    id: 4,
    title: "Villa №4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.",
    capacity: 2,
    price: 500,
    image:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65",
  },
  {
    id: 5,
    title: "Villa №5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.",
    capacity: 2,
    price: 500,
    image:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65",
  },
  {
    id: 6,
    title: "Villa №6",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet ligula a sem pulvinar molestie. Aliquam erat volutpat. Curabitur faucibus accumsan odio sed semper. Fusce molestie eget nisi eu elementum. Nam consectetur ipsum eu mollis aliquam. Sed accumsan sollicitudin eros a euismod. Maecenas pretium velit in nisi condimentum pharetra. Nullam ac est nisi. Nunc in ligula quam. Proin in aliquam lectus.",
    capacity: 2,
    price: 500,
    image:
      "https://cdn.lecollectionist.com/lc/production/uploads/photos/house-4309/2021-04-16-eaeb829ab2eebc2b7f26bff0d1505f86.jpg?q=65",
  },
];

export const Villas = () => {
  const clipPathTop = `${getRandomValue()}%`;
  const clipPathBottom = `${getRandomValue()}%`;

  function getRandomValue() {
    return Math.floor(Math.random() * 11) * 10;
  }

  return (
    <>
      <div className={styles.title}>
        <h1>Villas</h1>
      </div>
      <div
        className={styles.villas}
        style={{
          "--clip-path-top": clipPathTop,
          "--clip-path-bottom": clipPathBottom,
        }}
      >
        {villasData.map((villa) => (
          <Villa key={villa.id} villaData={villa} />
        ))}
      </div>
    </>
  );
};
