import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/EventList';

const HomePage = (props) => {
  return (
    <div>
      <Head>
        <title>Events</title>
        <meta name='description' content='Find a lot of events' />
      </Head>
      <EventList items={props.events} />
    </div>
  );
};

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
