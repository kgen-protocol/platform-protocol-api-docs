import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Engage Your Players with On-Chain Tournaments',
    Svg: require('@site/static/img/undraw_gaming_re_cma2.svg').default,
    description: (
      <>
        Host on-chain tournaments and incentivize your players with rewards using the lndiGG Tournament Protocol. With easy API integrations and semi-custodial wallet functionality, the lndiGG Tournament Protocol is the perfect solution for game developers looking to increase player engagement and competitiveness.
      </>
    ),
  },
  {
    title: 'Secure and Transparent Tournament System',
    Svg: require('@site/static/img/undraw_select_player_64ca.svg').default,
    description: (
      <>
        By leveraging the power of smart contracts and the blockchain, the lndiGG Tournament Protocol provides a secure and transparent tournament system. With proof of participation and reward recorded on-chain, users can be sure that their rewards are secure and the process is transparent.
      </>
    ),
  },
  {
    title: 'Customizable Reward System',
    Svg: require('@site/static/img/undraw_game_day_ucx9.svg').default,
    description: (
      <>
        The lndiGG Tournament Protocol allows game developers to customize the reward system to fit the theme and genre of their game. With leaderboard smart contracts, quests, SBTs, and NFTs, the possibilities are endless. The customizable reward system provides an exciting and immersive gameplay experience for users, increasing player engagement and retention.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
