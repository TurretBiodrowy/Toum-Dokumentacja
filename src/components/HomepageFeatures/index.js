import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Co to Town Of Us: Mira?',
    description: (
      <>
          Stworzona przez grupę <a href="https://github.com/AU-Avengers">AU Avengers</a>, <b>Town Of Us: Mira</b> to modyfikacja do gry <b><a href="https://store.steampowered.com/app/945360/Among_Us/">Among Us</a></b>, 
          oparta na modzie Town Of Us:R oraz grze <a href="https://store.steampowered.com/app/2140510/Town_of_Salem_2/">Town Of Salem 2</a>, wprowadzająca nowe Role, Modyfikatory, Ustawienia, i Wiele Więcej!
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-vert--md">
        <Heading as="h2">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
