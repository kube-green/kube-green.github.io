import React from 'react';
import clsx from 'clsx';
import ReactPlayer from 'react-player';

import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image?: string;
  video?: string;
  description: JSX.Element;
};

export const FeatureList: FeatureItem[] = [
  {
    title: 'Sleep your pods',
    video: 'video/kube-green-explained-crop.mp4',
    description: (
      <>
        Suspend your pods when no-one's using them, scale down your cluster and save energy
      </>
    ),
  },
  {
    title: 'Reduce CO2 emissions',
    image: 'img/green-dashboard.png',
    description: (
      <>
        See how much you save in the Green Dashboard (coming soon)
      </>
    ),
  },
];

export function Feature({
  title, image, description, video,
}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      {image ? (
        <div className="text--center">
          <img alt={title} className={styles.featureSvg} src={image} />
        </div>
      ) : null}
      {video ? (
        <div className="text--center">
          <ReactPlayer
            className={styles.player}
            playing
            url={video}
            volume={0}
            width="100%"
          />
        </div>
      ) : null}
      <div className="text--center padding--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

Feature.defaultProps = {
  image: null,
  video: null,
};

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
