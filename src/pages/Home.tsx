import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Categories from '../components/Categories';
import NewOnSkillsZone from '../components/NewOnSkillsZone';
import ExploreCareerPaths from '../components/ExploreCareerPaths';
import WhatBringsYou from '../components/WhatBringsYou';
import RecommendedCourses from '../components/RecommendedCourses';
import JourneySteps from '../components/JourneySteps';
import Testimonials from '../components/Testimonials';
import InstructorCTA from '../components/InstructorCTA';
import ImpactStatistic from '../components/ImpactStatistic';
import ExploreTopics from '../components/ExploreTopics';
import FAQ from '../components/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Categories />
      <NewOnSkillsZone />
      <ExploreCareerPaths />
      <WhatBringsYou />
      <RecommendedCourses />
      <JourneySteps />
      <Testimonials />
      <InstructorCTA />
      <ImpactStatistic />
      <ExploreTopics />
      <FAQ />
    </>
  );
}
