import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle" style={{color: "#eef9fd"}}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/introduction">
            Get started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <KGenInfo/> 
    </Layout>
  );
}

function FooterButtons() {
  return (
    <div style={
      {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '20px'
      }
    }>
      <Link
            className="button button--secondary button--lg"
            to="/docs/category/introduction">
           Esports Protocol
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/introduction-1">
            Loyalty Protocol
          </Link>
    </div>
  );
}

function KGenInfo() {
  return (
    <div style={{ padding: '30px' , fontSize:'18px'}} className="kgen-info">
      <h1>lntroduction</h1>
      <p>
        KGeN Esports and Loyalty protocols are tools that help game developers boost player engagement and monetization. These are easy-to-integrate APIs that retrofit into the existing core loop of the game.
        Once implemented, a game can reward engaged and competitive players with a new currency called KCash, which can be redeemed for real-world rewards at the Kratos Store. These rewards include a wide array of vouchers and gift cards across the world.
        Real-world rewards are a proven mechanism of improving gamer engagement and retention over the years. It improves the player experience by introducing encashable game rewards and ensures that game developers benefit from a more engaged core audience that turns into game advocates, ultimately leading to increased player LTV.
      </p>

      <h1>KGeN Esports Protocol</h1>
      <p>
        Engage players with competitive Tournaments. Game developers can host tournaments and incentivize players with KCash rewards using the KGeN Esports Protocol. With easy API integrations and wallet functionality, the KGeN Esports Protocol is the perfect solution for game developers looking to increase player engagement and competitiveness.
      </p>

      <h1>KGeN Loyalty Protocol</h1>
      <p>
        Retain players with a customizable Reward System. The KGeN Loyalty Protocol allows game developers to tailor the reward system to align with the game's theme, genre, and user behaviour. By building on the core game mechanics like daily rewards, quests, battle passes, or other game-specific LiveOps events, the possibilities to incentivize and engage the players are endless.
      </p>
      <h1>System Overview </h1>
      <p>
      KGeN eSports and Loyalty protocols are available as self-service plug-and-play modules, allowing game developers to select the best fit for their game's success. Kratos also offers support throughout the integration process to ensure a smooth experience. (We need a CTA to apply for integration)
      </p>
      <img src="img/flow_front.png" alt="System Overview" style={{width: '100%'}}/>
      <p>If you're interested in learning more about the protocols, continue reading.</p>
      <FooterButtons/>
    </div>
  );
}




