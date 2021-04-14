import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';
import { useRouter } from 'next/router';
import { getAllEvents } from '../../helpers/api-util';
import Head from 'next/head';
import { Fragment } from 'react';

const AllEventsPage = (props) => {
  const router = useRouter();
  const { events } = props;

  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;

    router.push(fullPath);
  }

  return (
    <Fragment>
      <Head>
        <title>Event List</title>
        <meta name='description' content='Find a lot of events' />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export async function getStaticProps(context) {
  const events = await getAllEvents();
  console.log({ events });

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}

export default AllEventsPage;
