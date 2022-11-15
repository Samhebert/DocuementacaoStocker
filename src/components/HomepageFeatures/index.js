import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Ituitivo de Usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Stocker é um programa simples e facil de usar, além de ser um solução eficais
        para a gestão empresarial, é bem facil de usar, logo quase mão avera gasto com treinamentos
      </>
    ),
  },
  {
    title: 'Documentação',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Documentação simples, e objetiva em pouco tempo já tera um noção completa do sistema, 
        e suas qualidades
      </>
    ),
  },
  {
    title: 'Feito em Flutter',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Flutter por ser uma linguagem bem completa e tendo uma mior facilidade para fazer aplicações,
        mas bonitas e minimalistas 
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
