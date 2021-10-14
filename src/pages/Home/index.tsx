import AssetPrice from './AssetPrice';

import styles from './index.scss';
const home = styles.home;

export default function Home() {
  return (
    <div className={home}>
      <nav>Anansi</nav>
      <main>
        <p style={{ fontSize: '30px' }}>
          Congrats! You&apos;ve created minimal!
        </p>
        <p style={{ fontSize: '15px' }}>
          Check out the generated ReadMe for instructions on how to use this
          library
        </p>
        <p style={{ fontSize: '24px' }}>
          <AssetPrice symbol="BTC" />
        </p>
      </main>
    </div>
  );
}
