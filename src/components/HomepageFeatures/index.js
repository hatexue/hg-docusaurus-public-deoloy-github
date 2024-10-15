import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '活动策划部',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        
活动策划部是一个充满创意与活力的平台，专为热爱社交与创新的同学打造。在这里，你将与一群积极进取的伙伴一起策划和组织各种创意活动，提升沟通、组织和领导能力。通过与企业和学校的合作，你不仅能拓展人脉，还能获得行业洞见，增强职场竞争力。无论你是否有技术背景，只要有创意，活动策划部就是你施展才华的舞台。加入我们，一起创造不一样的大学生活！
      </>
    ),
  },
  {
    title: '文艺宣传部',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        
文艺宣传部是武大创协负责对外宣传的核心部门。我们通过运营微信公众号、微博等新媒体平台，以及网站维护和视觉设计等方式，推广社团的理念和活动。宣传部为成员提供实践机会，提升新媒体运营、文案撰写、视觉设计等多种技能，致力于增强社团影响力并传播正能量。
      </>
    ),
  },
  {
    title: '创新学习部',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        创新学习部是武大创协的核心部门，专注于创新研发与学习交流。我们寻找具备CAD设计、嵌入式系统开发、电路设计、数据分析等技能的同学，鼓励参与项目研究或自主开发。成员可以分享技术、参与教学活动，并与企业对接，获得实践机会和资源支持。加入我们，您将与志同道合的伙伴共同探索无限可能，提升技能并实现创意！
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
        <Heading as="h3">{title}</Heading>
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
