'use client';

import { Timeline } from 'flowbite-react';
import CalendarIcon from './calendar-icon';

const data = [
  {
    percentage: '70%',
    year: '2018',
    description: 'Pada 2018, data menunjukkan bahwa sekitar 70% anak di Kota Tasikmalaya mengalami stunting.'
  },
  {
    percentage: '80%',
    year: '2019',
    description: 'Pada 2019, data menunjukkan bahwa sekitar 80% anak di Kota Tasikmalaya mengalami stunting.'
  },
  {
    percentage: '60%',
    year: '2020',
    description: 'Pada 2020, data menunjukkan bahwa sekitar 60% anak di Kota Tasikmalaya mengalami stunting.'
  },
  {
    percentage: '50%',
    year: '2021',
    description: 'Pada 2021, data menunjukkan bahwa sekitar 50% anak di Kota Tasikmalaya mengalami stunting.'
  },
]

const VerticalTimeline = () => {
  return (
    <section id="timeline" className="mt-10">
      <div className="w-full md:grid grid-cols-2 px-0 lg:px-10 py-10">
        <div className="flex items-center mb-10 md:mb-0">
          <h1 className="text-2xl sm:text-4xl uppercase tracking-widest font-semibold text-right sm:leading-[50px]">
            Data Stunting Se-Tasikmalaya
          </h1>
        </div>
        <div className="pl-4 md:pl-10 pr-2 custom-scrollbar">
          <Timeline>
            {data.map((item, index) => (
              <Timeline.Item key={index}>
                <Timeline.Point icon={CalendarIcon} />
                <Timeline.Content>
                  <Timeline.Time>
                    {item.year}
                  </Timeline.Time>
                  <Timeline.Title>
                    {item.percentage}
                  </Timeline.Title>
                  <Timeline.Body>
                    <p>
                      {item.description}
                    </p>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            ))}
          </Timeline>
        </div>
      </div>
    </section>
  )
}

export default VerticalTimeline